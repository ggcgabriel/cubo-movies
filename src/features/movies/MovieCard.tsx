import { getPosterUrl, getGenreNames } from '@/utils'
import { Star, ThumbsUp } from 'lucide-react'
import type { MovieCardProps } from './types'

export function MovieCard({ 
  movie, 
  onClick, 
  className = ''
}: MovieCardProps) {
  const handleClick = () => {
    onClick?.()
  }

  const formatRating = (rating: number) => {
    return rating.toFixed(1)
  }

  const formatVoteCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  return (
    <div 
      className={`relative group overflow-hidden rounded-lg cursor-pointer h-full ${className}`}
      onClick={handleClick}
    >
      <img 
        src={getPosterUrl(movie.poster_path, 'w500') || 'https://placehold.co/500x750'} 
        alt={movie.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.src = 'https://placehold.co/500x750'
        }}
      />
      
      <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm font-semibold flex items-center gap-1">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        {formatRating(movie.vote_average)}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
        <h3 className="text-white font-semibold text-lg line-clamp-2">
          {movie.title}
        </h3>
      </div>
      
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-white text-center p-4">
          <div className="text-xl font-semibold mb-3 line-clamp-2">
            {movie.title}
          </div>
          <div className="text-sm text-gray-300 mb-3">
            {getGenreNames(movie.genre_ids)}
          </div>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{formatRating(movie.vote_average)}</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4 text-green-400" />
              <span>{formatVoteCount(movie.vote_count)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
