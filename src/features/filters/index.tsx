import { SearchInput } from './SearchInput'
import { useSearchStore } from '@/stores/searchStore'

export function Filters() {
  const { searchQuery, setSearchQuery } = useSearchStore()

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        className="relative"
      />
    </div>
  )
}