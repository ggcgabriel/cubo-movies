import { useState, useEffect } from 'react'
import { useSearchStore } from '@/stores/searchStore'
import { usePopularMovies, useSearchMovies } from './useMovies'

export const useSearchData = () => {
  const { searchQuery } = useSearchStore()
  const [currentPage, setCurrentPage] = useState(1)

  const {
    data: popularMovies,
    isLoading: isLoadingPopular,
    error: popularError,
  } = usePopularMovies(currentPage)
  const {
    data: searchResults,
    isLoading: isSearching,
    error: searchError,
  } = useSearchMovies(searchQuery, currentPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  const movies = searchQuery ? searchResults : popularMovies
  const isLoading = searchQuery ? isSearching : isLoadingPopular
  const error = searchQuery ? searchError : popularError
  const title = searchQuery ? `Resultados para: "${searchQuery}"` : 'Filmes'

  const totalPages = movies?.total_pages || 1

  return {
    movies,
    isLoading,
    error,
    title,
    currentPage,
    totalPages,
    onPageChange: setCurrentPage,
  }
}
