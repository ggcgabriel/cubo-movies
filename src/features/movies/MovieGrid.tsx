import { useNavigate } from 'react-router-dom'
import { MovieCard } from './MovieCard'
import { Pagination } from '@/features/pagination/Pagination'
import type { MovieGridProps } from './types'

export function MovieGrid({ 
  movies, 
  isLoading = false, 
  className = '',
  currentPage = 1,
  totalPages = 1,
  onPageChange
}: MovieGridProps) {
  const navigate = useNavigate()

  const handleMovieClick = (movieId: number) => {
    navigate(`/movie/${movieId}`)
  }

  if (isLoading) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ${className}`}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4 animate-pulse">
            <div className="w-full h-64 bg-gray-700 rounded mb-3" />
            <div className="h-4 bg-gray-700 rounded mb-2" />
            <div className="h-3 bg-gray-700 rounded w-1/2" />
          </div>
        ))}
      </div>
    )
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg">Nenhum filme encontrado</div>
        <div className="text-gray-500 text-sm mt-2">Tente ajustar sua busca</div>
      </div>
    )
  }

  return (
    <div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ${className}`}>
        {movies.map((movie) => (
          <div key={movie.id} className="h-96">
            <MovieCard 
              movie={movie}
              onClick={() => handleMovieClick(movie.id)}
            />
          </div>
        ))}
      </div>
      
      {onPageChange && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  )
} 