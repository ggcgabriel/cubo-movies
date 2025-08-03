import { create } from 'zustand'

export interface MovieFilters {
  searchQuery: string
  genre: number | null
  year: number | null
  rating: number | null
  sortBy:
    | 'popularity.desc'
    | 'vote_average.desc'
    | 'release_date.desc'
    | 'title.asc'
  language: string | null
  status: string | null
}

interface SearchState {
  filters: MovieFilters
  isFiltersVisible: boolean
  setSearchQuery: (query: string) => void
  setGenre: (genre: number | null) => void
  setYear: (year: number | null) => void
  setRating: (rating: number | null) => void
  setSortBy: (sortBy: MovieFilters['sortBy']) => void
  setLanguage: (language: string | null) => void
  setStatus: (status: string | null) => void
  toggleFilters: () => void
  clearFilters: () => void
  clearSearch: () => void
}

const initialFilters: MovieFilters = {
  searchQuery: '',
  genre: null,
  year: null,
  rating: null,
  sortBy: 'popularity.desc',
  language: null,
  status: null,
}

export const useSearchStore = create<SearchState>(set => ({
  filters: initialFilters,
  isFiltersVisible: false,

  setSearchQuery: (query: string) =>
    set(state => ({
      filters: { ...state.filters, searchQuery: query },
    })),

  setGenre: (genre: number | null) =>
    set(state => ({
      filters: { ...state.filters, genre },
    })),

  setYear: (year: number | null) =>
    set(state => ({
      filters: { ...state.filters, year },
    })),

  setRating: (rating: number | null) =>
    set(state => ({
      filters: { ...state.filters, rating },
    })),

  setSortBy: (sortBy: MovieFilters['sortBy']) =>
    set(state => ({
      filters: { ...state.filters, sortBy },
    })),

  setLanguage: (language: string | null) =>
    set(state => ({
      filters: { ...state.filters, language },
    })),

  setStatus: (status: string | null) =>
    set(state => ({
      filters: { ...state.filters, status },
    })),

  toggleFilters: () =>
    set(state => ({
      isFiltersVisible: !state.isFiltersVisible,
    })),

  clearFilters: () => set({ filters: initialFilters }),
  clearSearch: () =>
    set(state => ({
      filters: { ...state.filters, searchQuery: '' },
    })),
}))
