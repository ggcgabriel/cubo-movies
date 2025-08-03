import { useQuery } from '@tanstack/react-query'
import { tmdbService } from '@/lib'
import type { MovieFilters } from '@/stores/searchStore'

export const useFilteredMovies = (filters: MovieFilters, page: number = 1) => {
  return useQuery({
    queryKey: ['filtered-movies', filters, page],
    queryFn: () => tmdbService.getFilteredMovies(filters, page),
    staleTime: 5 * 60 * 1000, // 5 minutos
  })
}
