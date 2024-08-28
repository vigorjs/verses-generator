import { useEffect, useState } from 'react';
import { useTheme } from '../components/Background';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ShuffleIcon } from 'lucide-react';

const Index = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();
  const [verses, setVerses] = useState(null);
  const navigate = useNavigate();
  const [indexSurah, setIndexSurah] = useState("");
  const location = useLocation();

  useEffect(() => {
    console.log("kerender use effect index");
    fetchAndUpdateVerses();
  }, []);

  const fetchAndUpdateVerses = async () => {
    try {
      // Cek data lokal
      const localRes = await axios.get("http://localhost:3000/surah");
      
      if (localRes.data.length === 0) {
        // Jika data lokal kosong, ambil dari API eksternal dan simpan ke lokal
        const apiRes = await axios.get("https://quran.vigorjs.me/surah");
        await axios.post("http://localhost:3000/surah", apiRes.data.data);
        setVerses(apiRes.data.data);
      } else {
        // Jika data lokal ada, set state dengan data lokal
        setVerses(localRes.data);
      }
    } catch (e) {
      console.log("error fetching and updating verses:", e.message);
    }
  };

  const randomSurah = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * 114) + 1;
    } while (randomIndex === indexSurah);
    
    setIndexSurah(randomIndex);
    return navigate(`${randomIndex}`);
  };
  
  return (
    <div style={{ background: colors.background, color: colors.text }} className='h-screen'>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} colors={colors}/>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='container z-10'>
          <div className="flex flex-col items-center justify-center p-5 gap-7">
              <h1 className='text-8xl font-bold hero-text'> {location.pathname == '/calculator' ? 'Calculator' : `Random Verses Generator`} </h1>
              {location.pathname != '/calculator' &&
              <>
                <p className={`text-base hero-text2`}>Get a Random Qur&apos;an Verse, Simply click the button to see another inspiring verse!.</p>
                <Button onClick={() => randomSurah()} className={`text-xl font-semibold w-[200px] mt-6 gap-2 cms-button`}>Generate <ShuffleIcon /></Button>
              </>
              }
          </div>
        </div>
        <Outlet context={[indexSurah, verses]} />
      </div>
    </div>
  );
}

export default Index;
