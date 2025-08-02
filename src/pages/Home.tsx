import background from '@/assets/cinema-background.png'
import { Filters } from '@/features/filters'
import { Movies } from '@/features/movies'

export default function Home() {
  return (
    <div className="relative px-4 py-10 bg-cover bg-center bg-no-repeat h-full" style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="absolute inset-0 bg-black/70"></div>
      
      <Filters />
      <Movies />
    </div>
  )
}