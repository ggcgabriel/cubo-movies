import { formatDate, formatRuntime, formatCurrency, formatVotes } from '@/utils'
import type { Movie } from '@/lib'

interface MovieInfoProps {
  movie: Movie
}

export function MovieInfo({ movie }: MovieInfoProps) {
  const profit = (movie.revenue || 0) - (movie.budget || 0)

  return (
    <div className="bg-gray-900 rounded-lg p-6 space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">
            {movie.popularity.toFixed(0)}
          </div>
          <div className="text-sm text-gray-400">POPULARIDADE</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">
            {formatVotes(movie.vote_count)}
          </div>
          <div className="text-sm text-gray-400">VOTOS</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">
            ⭐ {movie.vote_average.toFixed(1)}
          </div>
          <div className="text-sm text-gray-400">RATING</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">
            {Math.round((movie.vote_average / 10) * 100)}%
          </div>
          <div className="text-sm text-gray-400">APROVAÇÃO</div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Sinopse</h2>
        <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-3 rounded">
          <div className="text-sm text-gray-400">LANÇAMENTO</div>
          <div className="text-white font-medium">{formatDate(movie.release_date)}</div>
        </div>
        
        <div className="bg-gray-800 p-3 rounded">
          <div className="text-sm text-gray-400">DURAÇÃO</div>
          <div className="text-white font-medium">{movie.runtime ? formatRuntime(movie.runtime) : 'N/A'}</div>
        </div>
        
        <div className="bg-gray-800 p-3 rounded">
          <div className="text-sm text-gray-400">SITUAÇÃO</div>
          <div className="text-white font-medium">{movie.status}</div>
        </div>
        
        <div className="bg-gray-800 p-3 rounded">
          <div className="text-sm text-gray-400">IDIOMA</div>
          <div className="text-white font-medium">{movie.original_language?.toUpperCase() || 'N/A'}</div>
        </div>
        
        <div className="bg-gray-800 p-3 rounded">
          <div className="text-sm text-gray-400">ORÇAMENTO</div>
          <div className="text-white font-medium">{movie.budget ? formatCurrency(movie.budget) : 'N/A'}</div>
        </div>
        
        <div className="bg-gray-800 p-3 rounded">
          <div className="text-sm text-gray-400">RECEITA</div>
          <div className="text-white font-medium">{movie.revenue ? formatCurrency(movie.revenue) : 'N/A'}</div>
        </div>
        
        <div className="bg-gray-800 p-3 rounded">
          <div className="text-sm text-gray-400">LUCRO</div>
          <div className="text-white font-medium">{formatCurrency(profit)}</div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-3">Gêneros</h2>
        <div className="flex flex-wrap gap-2">
          {movie.genres?.map((genre: { id: number; name: string }) => (
            <span
              key={genre.id}
              className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full"
            >
              {genre.name.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}