import { useQuery } from '@tanstack/react-query'
import { tmdbService } from '@/lib'

export const useMovieDetails = (movieId: number) => {
  return useQuery({
    queryKey: ['movie-details', movieId],
    queryFn: () => tmdbService.getMovieDetails(movieId),
    enabled: !!movieId,
    staleTime: 10 * 60 * 1000, // 10 minutos
  })
}

export const useMovieCredits = (movieId: number) => {
  return useQuery({
    queryKey: ['movie-credits', movieId],
    queryFn: () => tmdbService.getMovieCredits(movieId),
    enabled: !!movieId,
    staleTime: 10 * 60 * 1000, // 10 minutos
  })
}

export const useMovieVideos = (movieId: number) => {
  return useQuery({
    queryKey: ['movie-videos', movieId],
    queryFn: () => tmdbService.getMovieVideos(movieId),
    enabled: !!movieId,
    staleTime: 10 * 60 * 1000, // 10 minutos
  })
}

export const useSimilarMovies = (movieId: number) => {
  return useQuery({
    queryKey: ['similar-movies', movieId],
    queryFn: () => tmdbService.getSimilarMovies(movieId),
    enabled: !!movieId,
    staleTime: 5 * 60 * 1000, // 5 minutos
  })
}
