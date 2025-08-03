import axios from 'axios'

const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

tmdbApi.interceptors.request.use(
  config => {
    config.params = {
      ...config.params,
      api_key: TMDB_API_KEY,
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

tmdbApi.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('API Key inválida ou expirada')
          break
        case 404:
          console.error('Recurso não encontrado')
          break
        case 429:
          console.error('Limite de requisições excedido')
          break
        default:
          console.error('Erro na API:', error.response.data)
      }
    } else if (error.request) {
      console.error('Erro de conexão:', error.request)
    } else {
      console.error('Erro:', error.message)
    }

    return Promise.reject(error)
  }
)

export interface TMDBResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export interface Movie {
  id: number
  title: string
  original_title: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  vote_average: number
  vote_count: number
  popularity: number
  genre_ids: number[]
  adult: boolean
  video: boolean
  tagline?: string
  runtime?: number
  status?: string
  original_language?: string
  budget?: number
  revenue?: number
  genres?: Genre[]
}

export interface Genre {
  id: number
  name: string
}

export interface Cast {
  id: number
  name: string
  character: string
  profile_path: string | null
}

export interface Video {
  id: string
  name: string
  type: string
  key: string
  site: string
}
