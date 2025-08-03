import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSearchStore } from '@/stores/searchStore'

export function GenreFilter() {
  const { filters, setGenre } = useSearchStore()

  const genreMap: Record<number, string> = {
    28: 'Ação',
    12: 'Aventura',
    16: 'Animação',
    35: 'Comédia',
    80: 'Crime',
    99: 'Documentário',
    18: 'Drama',
    10751: 'Família',
    14: 'Fantasia',
    36: 'História',
    27: 'Terror',
    10402: 'Música',
    9648: 'Mistério',
    10749: 'Romance',
    878: 'Ficção Científica',
    10770: 'Cinema TV',
    53: 'Suspense',
    10752: 'Guerra',
    37: 'Faroeste',
  }

  return (
    <Select
      value={filters.genre?.toString() || 'all'}
      onValueChange={(value) => setGenre(value === 'all' ? null : parseInt(value))}
    >
      <SelectTrigger className="h-10 px-3 text-sm border-gray-600 text-white hover:border-purple-500 hover:text-purple-400">
        <SelectValue placeholder="Selecione o gênero" />
      </SelectTrigger>
      <SelectContent className="bg-gray-800 border-gray-600 text-white cursor-pointer">
        <SelectItem value="all" className="hover:bg-gray-700 hover:text-purple-400 cursor-pointer">
          Todos os gêneros
        </SelectItem>
        {Object.entries(genreMap).map(([id, name]) => (
          <SelectItem 
            key={id} 
            value={id}
            className="hover:bg-gray-700 hover:text-purple-400 cursor-pointer"
          >
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
} 