import { tmdbApi } from './api'
import type { TMDBResponse, Movie, Genre } from './api'

export const tmdbEndpoints = {
  movies: {
    popular: '/movie/popular',
    topRated: '/movie/top_rated',
    upcoming: '/movie/upcoming',
    nowPlaying: '/movie/now_playing',
    details: (id: number) => `/movie/${id}`,
    credits: (id: number) => `/movie/${id}/credits`,
    videos: (id: number) => `/movie/${id}/videos`,
    similar: (id: number) => `/movie/${id}/similar`,
    recommendations: (id: number) => `/movie/${id}/recommendations`,
    search: '/search/movie',
  },
  genres: {
    list: '/genre/movie/list',
  },
  configuration: '/configuration',
} as const

export const tmdbService = {
  getPopularMovies: async (page: number = 1): Promise<TMDBResponse<Movie>> => {
    const response = await tmdbApi.get(tmdbEndpoints.movies.popular, {
      params: { page },
    })
    return response.data
  },

  getTopRatedMovies: async (page: number = 1): Promise<TMDBResponse<Movie>> => {
    const response = await tmdbApi.get(tmdbEndpoints.movies.topRated, {
      params: { page },
    })
    return response.data
  },

  getUpcomingMovies: async (page: number = 1): Promise<TMDBResponse<Movie>> => {
    const response = await tmdbApi.get(tmdbEndpoints.movies.upcoming, {
      params: { page },
    })
    return response.data
  },

  getNowPlayingMovies: async (
    page: number = 1
  ): Promise<TMDBResponse<Movie>> => {
    const response = await tmdbApi.get(tmdbEndpoints.movies.nowPlaying, {
      params: { page },
    })
    return response.data
  },

  getMovieDetails: async (id: number) => {
    const response = await tmdbApi.get(tmdbEndpoints.movies.details(id))
    return response.data
  },

  getMovieCredits: async (id: number) => {
    const response = await tmdbApi.get(tmdbEndpoints.movies.credits(id))
    return response.data
  },

  getMovieVideos: async (id: number) => {
    const response = await tmdbApi.get(tmdbEndpoints.movies.videos(id))
    return response.data
  },

  getSimilarMovies: async (
    id: number,
    page: number = 1
  ): Promise<TMDBResponse<Movie>> => {
    const response = await tmdbApi.get(tmdbEndpoints.movies.similar(id), {
      params: { page },
    })
    return response.data
  },

  getMovieRecommendations: async (
    id: number,
    page: number = 1
  ): Promise<TMDBResponse<Movie>> => {
    const response = await tmdbApi.get(
      tmdbEndpoints.movies.recommendations(id),
      {
        params: { page },
      }
    )
    return response.data
  },

  searchMovies: async (
    query: string,
    page: number = 1
  ): Promise<TMDBResponse<Movie>> => {
    const response = await tmdbApi.get(tmdbEndpoints.movies.search, {
      params: {
        query,
        page,
        include_adult: false,
      },
    })
    return response.data
  },

  getFilteredMovies: async (
    filters: {
      searchQuery?: string
      genre?: number | null
      year?: number | null
      rating?: number | null
      sortBy?: string
      language?: string | null
      status?: string | null
    },
    page: number = 1
  ): Promise<TMDBResponse<Movie>> => {
    interface FilterParams {
      page: number
      sort_by: string
      with_genres?: number
      primary_release_year?: number
      'vote_average.gte'?: number
      with_original_language?: string
      with_status?: string
    }

    const params: FilterParams = {
      page,
      sort_by: filters.sortBy || 'popularity.desc',
    }

    if (filters.genre) {
      params.with_genres = filters.genre
    }
    if (filters.year) {
      params.primary_release_year = filters.year
    }
    if (filters.rating) {
      params['vote_average.gte'] = filters.rating
    }
    if (filters.language) {
      params.with_original_language = filters.language.split('-')[0]
    }
    if (filters.status) {
      params.with_status = filters.status
    }

    const endpoint = filters.searchQuery
      ? tmdbEndpoints.movies.search
      : '/discover/movie'

    const requestParams = filters.searchQuery
      ? {
          query: filters.searchQuery,
          page,
          include_adult: false,
        }
      : params

    const response = await tmdbApi.get(endpoint, {
      params: requestParams,
    })
    return response.data
  },

  getGenres: async (): Promise<{ genres: Genre[] }> => {
    const response = await tmdbApi.get(tmdbEndpoints.genres.list)
    return response.data
  },

  getConfiguration: async () => {
    const response = await tmdbApi.get(tmdbEndpoints.configuration)
    return response.data
  },
}
