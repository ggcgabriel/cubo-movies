import type { Video } from '@/lib'

interface MovieTrailerProps {
  videos: Video[]
}

export function MovieTrailer({ videos }: MovieTrailerProps) {
  const trailers = videos?.filter(video => 
    video.site === 'YouTube' && 
    video.type === 'Trailer'
  )

  if (!videos || videos.length === 0) {
    return (
      <div className="bg-gray-900 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Trailer</h2>
        <div className="text-gray-400 text-center py-8">
          Carregando vídeos...
        </div>
      </div>
    )
  }

  if (!trailers || trailers.length === 0) {
    return (
      <div className="bg-gray-900 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Trailer</h2>
        <div className="text-gray-400 text-center py-8">
          Nenhum trailer disponível para este filme.
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Trailer</h2>
      
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${trailers[0].key}?rel=0`}
          title={`Trailer - ${trailers[0].name}`}
          className="w-full h-full rounded-lg"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      
      {trailers.length > 1 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white mb-3">Outros vídeos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trailers.slice(1, 4).map((trailer) => (
              <div key={trailer.id} className="bg-gray-800 p-3 rounded">
                <h4 className="text-white font-medium text-sm mb-2">{trailer.name}</h4>
                <p className="text-gray-400 text-xs">{trailer.type}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 