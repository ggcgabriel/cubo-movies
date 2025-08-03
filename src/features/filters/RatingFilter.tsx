
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSearchStore } from '@/stores/searchStore'

export function RatingFilter() {
  const { filters, setRating } = useSearchStore()

  const ratingOptions = [
    { value: null, label: 'Todas as notas' },
    { value: 9, label: '9+ ⭐⭐⭐⭐⭐' },
    { value: 8, label: '8+ ⭐⭐⭐⭐' },
    { value: 7, label: '7+ ⭐⭐⭐' },
    { value: 6, label: '6+ ⭐⭐' },
    { value: 5, label: '5+ ⭐' },
  ]

  return (
    <Select
      value={filters.rating?.toString() || 'all'}
      onValueChange={(value) => setRating(value === 'all' ? null : parseInt(value))}
    >
      <SelectTrigger className="h-10 px-3 text-sm border-gray-600 text-white hover:border-purple-500 hover:text-purple-400">
        <SelectValue placeholder="Selecione a avaliação" />
      </SelectTrigger>
      <SelectContent className="bg-gray-800 border-gray-600 text-white cursor-pointer">
        {ratingOptions.map((option) => (
          <SelectItem 
            key={option.value || 'all'} 
            value={option.value?.toString() || 'all'}
            className="hover:bg-gray-700 hover:text-purple-400 cursor-pointer"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
} 