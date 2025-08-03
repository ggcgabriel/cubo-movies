import { Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSearchStore } from '@/stores/searchStore'

export function FilterButton() {
  const { isFiltersVisible, toggleFilters } = useSearchStore()

  return (
    <Button
      onClick={toggleFilters}
      variant="outline"
      size="icon"
      className={`h-10 w-10 transition-colors ${
        isFiltersVisible
          ? 'bg-purple-600 border-purple-500 text-white hover:bg-purple-700'
          : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white'
      }`}
    >
      <Filter className="h-4 w-4" />
    </Button>
  )
} 