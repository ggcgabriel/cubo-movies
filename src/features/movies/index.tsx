import { useSearchData } from '@/hooks/useSearchData'
import { MovieGrid } from './MovieGrid'

export function Movies() {
  const { movies, isLoading, error, title, currentPage, totalPages, onPageChange } = useSearchData()

  return (
    <div className="relative max-w-7xl mx-auto">
      <h2 className="text-white text-xl font-bold mb-6">{title}</h2>
      
      {error && (
        <div className="text-red-400 mb-4">Erro ao carregar filmes: {error.message}</div>
      )}
      
      <MovieGrid 
        movies={movies?.results || []}
        isLoading={isLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  )
}