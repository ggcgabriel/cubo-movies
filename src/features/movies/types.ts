import type { Movie } from '@/lib'

export interface MovieCardProps {
  movie: Movie
  onClick?: () => void
  className?: string
}

export interface MovieGridProps {
  movies: Movie[]
  isLoading?: boolean
  className?: string
  currentPage?: number
  totalPages?: number
  onPageChange?: (page: number) => void
}
