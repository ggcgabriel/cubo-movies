export const getImageUrl = (
  path: string | null,
  size: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original' = 'w500'
) => {
  if (!path) return null
  return `https://image.tmdb.org/t/p/${size}${path}`
}

export const getPosterUrl = (
  path: string | null,
  size: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original' = 'w500'
) => {
  return getImageUrl(path, size)
}

export const getBackdropUrl = (
  path: string | null,
  size: 'w300' | 'w780' | 'w1280' | 'original' = 'w1280'
) => {
  if (!path) return null
  return `https://image.tmdb.org/t/p/${size}${path}`
}

export const formatDate = (dateString: string) => {
  return new Date(dateString).getFullYear()
}

export const formatVotes = (votes: number) => {
  if (votes >= 1000000) return `${(votes / 1000000).toFixed(1)}M`
  if (votes >= 1000) return `${(votes / 1000).toFixed(1)}K`
  return votes.toString()
}

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}h ${mins}m`
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Função para mapear IDs de gênero para nomes
export const getGenreNames = (genreIds: number[]) => {
  const genreMap: Record<number, string> = {
    28: 'Ação',
    12: 'Aventura',
    16: 'Animação',
    35: 'Comédia',
    80: 'Crime',
    99: 'Documentário',
    18: 'Drama',
    10751: 'Família',
    14: 'Fantasia',
    36: 'História',
    27: 'Terror',
    10402: 'Música',
    9648: 'Mistério',
    10749: 'Romance',
    878: 'Ficção Científica',
    10770: 'Cinema TV',
    53: 'Suspense',
    10752: 'Guerra',
    37: 'Faroeste',
  }

  return genreIds
    .slice(0, 2)
    .map(id => genreMap[id])
    .filter(Boolean)
    .join(' • ')
}
