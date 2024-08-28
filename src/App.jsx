import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Background} from './components/Background';
import Index from './pages/Index';
import GenerateRandom from './components/GenerateRandom';
import Calculator from './pages/Calculator';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>,
      errorElement: (
        <div>
          <h1>404 Not Found</h1>
        </div>
      ),
      children: [
        {
          path: ":idSurah",
          element: <GenerateRandom />

        },
        {
          path: "calculator",
          element: <Calculator/>
        }
      ]
    }
  ])

  return (
    <Background> 
        <RouterProvider router={router}/>
    </Background>
  )
}

export default App
