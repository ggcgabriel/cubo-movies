import { useQuery } from '@tanstack/react-query'
import { tmdbService } from '@/lib'

export const usePopularMovies = (page: number = 1) => {
  return useQuery({
    queryKey: ['popular-movies', page],
    queryFn: () => tmdbService.getPopularMovies(page),
    staleTime: 5 * 60 * 1000,
  })
}
