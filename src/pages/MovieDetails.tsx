import { useParams } from 'react-router-dom'
import { useMovieDetails } from '@/hooks/useMovieDetails'
import { MovieHero } from '@/components/MovieDetails/MovieHero'

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>()
  const movieId = id ? parseInt(id) : 0

  const { 
    data: movie, 
    isLoading: isLoadingMovie, 
    error: movieError 
  } = useMovieDetails(movieId)

 
  if (isLoadingMovie) {
    return (
      <div className="container mx-auto p-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  if (movieError) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-red-400 text-center">
          <h1 className="text-2xl font-bold mb-2">Erro ao carregar filme</h1>
          <p>Não foi possível carregar os detalhes do filme.</p>
        </div>
      </div>
    )
  }

  if (!movie) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-gray-400 text-center">
          <h1 className="text-2xl font-bold mb-2">Filme não encontrado</h1>
          <p>O filme solicitado não foi encontrado.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <MovieHero movie={movie} />
    </div>
  )
}