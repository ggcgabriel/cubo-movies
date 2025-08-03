import { useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useState } from 'react'

export default function NavBar() {
  const [isDark, setIsDark] = useState(true)
  const navigate = useNavigate()
  return (
    <header className="box-border mx-auto w-full border-b border-gray-700">
      <div className="flex items-center justify-between p-4 px-6 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2" onClick={() => navigate('/')}>
          <Logo className="w-30 cursor-pointer" isDark={isDark} />
          <span className="text-sm font-bold" style={{ color: isDark ? 'white' : 'black' }}>Movies</span>
        </div>
        <Button className="bg-purple-500 text-white" variant="outline" size="icon" onClick={() => setIsDark(!isDark)}>
          {isDark ? (
            <MoonIcon className="w-3 h-3" />
          ) : (
            <SunIcon className="w-3 h-3" />
          )}
        </Button>
      </div>
    </header>
  )
}