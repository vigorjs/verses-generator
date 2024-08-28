import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import Loading from "./Loading";

const GenerateRandom = () => {
    const [verses, setVerses] = useState(null);
    const [indexSurah] = useOutletContext();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        fetchLocalVerses();
    }, [location.pathname]);

    const fetchLocalVerses = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`http://localhost:3000/verse/${indexSurah}`);
            if (res.data.length === 0) {
                await fetchAndStoreVerses();
            } else {
                const data = res.data.filter((ayat) => {
                    return ayat.id == location.pathname.slice(1);
                });

                setVerses(data[0] || null);
            }
        } catch (e) {
            console.log("Error fetching local verses:", e.message);
            await fetchAndStoreVerses(true);
        } finally {
            setLoading(false);
        }
    };

    const fetchAndStoreVerses = async (useExternalOnly = false) => {
        try {
            const res = await axios.get(`https://quran.vigorjs.me/surah/${indexSurah}`);
            const verseData = res.data.data;
            verseData.id = `${verseData.number}`;

            if (!useExternalOnly) {
                try {
                    await axios.post("http://localhost:3000/verse", verseData);
                } catch (e) {
                    console.log("Error storing verses locally:", e.message);
                }
            }
            
            setVerses(verseData);
        } catch (e) {
            console.log("Error fetching and storing verses:", e.message);
        }
    };

    const randomVerse = useMemo(() => {
        if (verses && verses.verses) {
            return verses.verses[Math.floor(Math.random() * verses.verses.length)];
        }
        return null;
    }, [verses]);

    if (loading) {
        return <Loading />; 
    }

    return (
        <>
            {randomVerse && (
                <div className="grid grid-cols-3 gap-2 mt-10 px-10 verse-container z-10">
                    <div className="col-span-1 border-gray-700 border justify-center items-center flex p-4 rounded-lg shadow-lg">
                        {randomVerse.text.arab}
                    </div>
                    <div className="col-span-2 border-gray-700 border justify-center items-center flex flex-col p-4 rounded-lg shadow-lg">
                        <div className="text-xl font-bold mb-2">
                            {`${verses.name.transliteration.id} - ${verses.name.short}`}
                        </div>
                        <div className="text-sm mb-2">
                            Ayat {randomVerse.number.inSurah}
                        </div>
                        <div>
                            {randomVerse.tafsir.id.short}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GenerateRandom;
