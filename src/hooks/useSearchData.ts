import { useState, useEffect } from 'react'
import { useSearchStore } from '@/stores/searchStore'
import { usePopularMovies } from './useMovies'
import { useFilteredMovies } from './useFilteredMovies'

export const useSearchData = () => {
  const { filters } = useSearchStore()
  const [currentPage, setCurrentPage] = useState(1)

  const {
    data: popularMovies,
    isLoading: isLoadingPopular,
    error: popularError,
  } = usePopularMovies(currentPage)

  const {
    data: filteredMovies,
    isLoading: isLoadingFiltered,
    error: filteredError,
  } = useFilteredMovies(filters, currentPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [filters])

  const hasActiveFilters =
    filters.searchQuery ||
    filters.genre ||
    filters.year ||
    filters.rating ||
    filters.language ||
    filters.status

  const movies = hasActiveFilters ? filteredMovies : popularMovies
  const isLoading = hasActiveFilters ? isLoadingFiltered : isLoadingPopular
  const error = hasActiveFilters ? filteredError : popularError

  const getTitle = () => {
    if (filters.searchQuery) {
      return `Resultados para: "${filters.searchQuery}"`
    }
    if (hasActiveFilters) {
      const activeFilters = []
      if (filters.genre) activeFilters.push('Gênero')
      if (filters.year) activeFilters.push(`Ano ${filters.year}`)
      if (filters.rating) activeFilters.push(`Rating ${filters.rating}+`)
      if (filters.language) activeFilters.push('Idioma')
      if (filters.status) activeFilters.push('Status')
      return `Filtros: ${activeFilters.join(', ')}`
    }
    return 'Filmes Populares'
  }

  const title = getTitle()
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
