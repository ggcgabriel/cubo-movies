import { useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function NavBar() {
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  
  return (
    <header className="box-border mx-auto w-full border-b border-gray-700 dark:border-gray-700 light:border-gray-300">
      <div className="flex items-center justify-between p-4 px-6 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2" onClick={() => navigate('/')}>
          <Logo className="w-30 cursor-pointer" isDark={theme === 'dark'} />
          <span className="text-sm font-bold text-gray-900 text-theme">Movies</span>
        </div>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleTheme}
          className="border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {theme === 'dark' ? (
            <SunIcon className="w-4 h-4 text-gray-900 text-theme" />
          ) : (
            <MoonIcon className="w-4 h-4 text-gray-900 text-theme" />
          )}
        </Button>
      </div>
    </header>
  )
}