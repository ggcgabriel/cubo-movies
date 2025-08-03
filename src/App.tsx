
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import NavBar from './components/NavBar'
import { Footer } from './components/Footer'
import background from '@/assets/cinema-background.png'

export default function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <NavBar />
      <div className="flex-1 bg-cover bg-center bg-no-repeat relative" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0 bg-black opacity-70" />

        <div className="relative z-10 h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}
