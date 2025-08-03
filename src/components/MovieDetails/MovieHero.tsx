import { getPosterUrl, getBackdropUrl, formatDate, formatRuntime, formatCurrency, formatVotes } from '@/utils'
import type { Movie } from '@/lib'

interface MovieHeroProps {
  movie: Movie
}

export function MovieHero({ movie }: MovieHeroProps) {
  const profit = (movie.revenue || 0) - (movie.budget || 0)

  return (
          <div className="space-y-6">
        <div className="hidden lg:block relative overflow-hidden rounded-lg">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getBackdropUrl(movie.backdrop_path, 'w1280')})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
          </div>

          <div className="relative flex items-start p-6 md:p-8">
          <div className="grid grid-cols-3 gap-6 md:gap-8 w-full">
            <div className="flex justify-start">
              <img
                src={getPosterUrl(movie.poster_path, 'w500') || 'https://placehold.co/500x750'}
                alt={movie.title}
                className="w-80 h-auto rounded-lg shadow-2xl"
              />
            </div>

            <div className="text-white space-y-6">
              <div>
                <h1 className="text-5xl font-bold mb-2 text-yellow-400">
                  {movie.title}
                </h1>
                
                {movie.original_title !== movie.title && (
                  <p className="text-xl text-gray-300 mb-2">
                    Título original: {movie.original_title}
                  </p>
                )}
                
                {movie.tagline && (
                  <p className="text-xl text-white mb-4 italic">
                    "{movie.tagline}"
                  </p>
                )}
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Sinopse</h2>
                <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
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

            <div className="text-white space-y-6">
              <div className="grid grid-cols-2 gap-4">
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

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-3 rounded">
                  <div className="text-sm text-gray-400">LANÇAMENTO</div>
                  <div className="text-white font-medium">{formatDate(movie.release_date)}</div>
                </div>
                
                <div className="bg-gray-800/50 p-3 rounded">
                  <div className="text-sm text-gray-400">DURAÇÃO</div>
                  <div className="text-white font-medium">{movie.runtime ? formatRuntime(movie.runtime) : 'N/A'}</div>
                </div>
                
                <div className="bg-gray-800/50 p-3 rounded">
                  <div className="text-sm text-gray-400">SITUAÇÃO</div>
                  <div className="text-white font-medium">{movie.status || 'N/A'}</div>
                </div>
                
                <div className="bg-gray-800/50 p-3 rounded">
                  <div className="text-sm text-gray-400">IDIOMA</div>
                  <div className="text-white font-medium">{movie.original_language?.toUpperCase() || 'N/A'}</div>
                </div>
                
                <div className="bg-gray-800/50 p-3 rounded">
                  <div className="text-sm text-gray-400">ORÇAMENTO</div>
                  <div className="text-white font-medium">{movie.budget ? formatCurrency(movie.budget) : 'N/A'}</div>
                </div>
                
                <div className="bg-gray-800/50 p-3 rounded">
                  <div className="text-sm text-gray-400">RECEITA</div>
                  <div className="text-white font-medium">{movie.revenue ? formatCurrency(movie.revenue) : 'N/A'}</div>
                </div>
                
                <div className="bg-gray-800/50 p-3 rounded">
                  <div className="text-sm text-gray-400">LUCRO</div>
                  <div className="text-white font-medium">{formatCurrency(profit)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden space-y-6">
        <div className="flex justify-center">
          <img
            src={getPosterUrl(movie.poster_path, 'w500') || 'https://placehold.co/500x750'}
            alt={movie.title}
            className="w-64 md:w-80 h-auto rounded-lg shadow-2xl"
          />
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-400">
              {movie.title}
            </h1>
            
            {movie.original_title !== movie.title && (
              <p className="text-lg text-gray-300 mb-2">
                Título original: {movie.original_title}
              </p>
            )}
            
            {movie.tagline && (
              <p className="text-lg text-white mb-4 italic">
                "{movie.tagline}"
              </p>
            )}
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-3">Sinopse</h2>
            <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
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

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Estatísticas</h2>
            <div className="grid grid-cols-2 gap-4">
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
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Detalhes</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-400">LANÇAMENTO</div>
                <div className="text-white font-medium">{formatDate(movie.release_date)}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-400">DURAÇÃO</div>
                <div className="text-white font-medium">{movie.runtime ? formatRuntime(movie.runtime) : 'N/A'}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-400">SITUAÇÃO</div>
                <div className="text-white font-medium">{movie.status || 'N/A'}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-400">IDIOMA</div>
                <div className="text-white font-medium">{movie.original_language?.toUpperCase() || 'N/A'}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-400">ORÇAMENTO</div>
                <div className="text-white font-medium">{movie.budget ? formatCurrency(movie.budget) : 'N/A'}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-400">RECEITA</div>
                <div className="text-white font-medium">{movie.revenue ? formatCurrency(movie.revenue) : 'N/A'}</div>
              </div>
              
              <div className="col-span-2">
                <div className="text-sm text-gray-400">LUCRO</div>
                <div className="text-white font-medium">{formatCurrency(profit)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}