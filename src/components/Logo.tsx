import logo from '@/assets/logo.svg'

interface LogoProps {
  className?: string
  isDark?: boolean
}

export default function Logo({ className = '', isDark = false }: LogoProps) {
  return (
    <img 
      src={logo} 
      alt="logo" 
      className={className}
      style={{ filter: isDark ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)' }}
    />
  )
} 