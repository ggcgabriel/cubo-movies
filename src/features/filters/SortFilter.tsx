import { Flame, Star, Calendar, Type } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSearchStore } from '@/stores/searchStore'

export function SortFilter() {
  const { filters, setSortBy } = useSearchStore()

  const sortOptions = [
    { value: 'popularity.desc', label: 'Popularidade', icon: Flame },
    { value: 'vote_average.desc', label: 'Melhor Avaliados', icon: Star },
    { value: 'release_date.desc', label: 'Mais Recentes', icon: Calendar },
    { value: 'title.asc', label: 'Título A-Z', icon: Type },
  ]

  return (
    <Select
      value={filters.sortBy}
      onValueChange={(value) => setSortBy(value as 'popularity.desc' | 'vote_average.desc' | 'release_date.desc' | 'title.asc')}
    >
      <SelectTrigger className="h-10 px-3 text-sm border-gray-600 text-white hover:border-purple-500 hover:text-purple-400">
        <SelectValue placeholder="Selecione a ordenação" />
      </SelectTrigger>
      <SelectContent className="bg-gray-800 border-gray-600 text-white cursor-pointer">
        {sortOptions.map((option) => {
          const IconComponent = option.icon
          return (
            <SelectItem 
              key={option.value} 
              value={option.value}
              className="hover:bg-gray-700 hover:text-purple-400 cursor-pointer"
            >
              <span className="flex items-center">
                <IconComponent className="mr-2 h-4 w-4" />
                {option.label}
              </span>
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
} 