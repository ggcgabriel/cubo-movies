import { SearchInput } from './SearchInput'
import { FilterButton } from './FilterButton'
import { AdvancedFilters } from './AdvancedFilters'
import { useSearchStore } from '@/stores/searchStore'

export function Filters() {
  const { filters, setSearchQuery, isFiltersVisible } = useSearchStore()

  return (
    <div className="space-y-6 mb-8">
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-center relative">
        <div className="w-full sm:w-80">
          <SearchInput
            value={filters.searchQuery}
            onChange={setSearchQuery}
            className="relative"
          />
        </div>
        <FilterButton />
      </div>

      {isFiltersVisible && <AdvancedFilters />}
    </div>
  )
}