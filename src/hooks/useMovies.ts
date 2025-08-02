import { useQuery } from '@tanstack/react-query'
import { tmdbService } from '@/lib'

export const usePopularMovies = (page: number = 1) => {
  return useQuery({
    queryKey: ['popular-movies', page],
    queryFn: () => tmdbService.getPopularMovies(page),
    staleTime: 5 * 60 * 1000, // 5 minutos
  })
}

export const useTopRatedMovies = (page: number = 1) => {
  return useQuery({
    queryKey: ['top-rated-movies', page],
    queryFn: () => tmdbService.getTopRatedMovies(page),
    staleTime: 5 * 60 * 1000,
  })
}

export const useUpcomingMovies = (page: number = 1) => {
  return useQuery({
    queryKey: ['upcoming-movies', page],
    queryFn: () => tmdbService.getUpcomingMovies(page),
    staleTime: 5 * 60 * 1000,
  })
}

export const useSearchMovies = (query: string, page: number = 1) => {
  return useQuery({
    queryKey: ['search-movies', query, page],
    queryFn: () => tmdbService.searchMovies(query, page),
    enabled: !!query, // Só executa se houver uma query
    staleTime: 2 * 60 * 1000, // 2 minutos para busca
  })
}
