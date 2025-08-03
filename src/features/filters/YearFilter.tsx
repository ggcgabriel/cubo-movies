import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSearchStore } from '@/stores/searchStore'

export function YearFilter() {
  const { filters, setYear } = useSearchStore()

  const currentYear = new Date().getFullYear()  

  const years = Array.from({ length: 125 }, (_, i) => currentYear - i)

  return (
    <Select
      value={filters.year?.toString() || 'all'}
      onValueChange={(value) => setYear(value === 'all' ? null : parseInt(value))}
    >
      <SelectTrigger className="h-10 px-3 text-sm border-gray-600 text-white hover:border-purple-500 hover:text-purple-400">
        <SelectValue placeholder="Selecione o ano" />
      </SelectTrigger>
      <SelectContent className="bg-gray-800 border-gray-600 text-white max-h-60 cursor-pointer">
        <SelectItem value="all" className="hover:bg-gray-700 hover:text-purple-400 cursor-pointer">
          Todos os anos
        </SelectItem>
        {years.map((year) => (
          <SelectItem 
            key={year} 
            value={year.toString()}
            className="hover:bg-gray-700 hover:text-purple-400 cursor-pointer"
          >
            {year}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
} 