import { Filters } from '@/features/filters'
import { Movies } from '@/features/movies'

export default function Home() {
  return (
    <div className="relative px-4 py-10 h-full">
      <Filters />
      <Movies />
    </div>
  )
}