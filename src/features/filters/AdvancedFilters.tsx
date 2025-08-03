import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { X } from 'lucide-react'
import { useSearchStore } from '@/stores/searchStore'
import { GenreFilter } from './GenreFilter'
import { YearFilter } from './YearFilter'
import { RatingFilter } from './RatingFilter'
import { SortFilter } from './SortFilter'
import { LanguageFilter } from './LanguageFilter'

export function AdvancedFilters() {
  const { 
    filters, 
    clearFilters, 
    setSearchQuery, 
    setGenre, 
    setYear, 
    setRating, 
    setLanguage 
  } = useSearchStore()

  const hasActiveFilters = filters.genre || filters.year || filters.rating || filters.language || filters.searchQuery

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

  const languageMap: Record<string, string> = {
    'pt-BR': 'Português (Brasil)',
    'en-US': 'Inglês (EUA)',
    'es-ES': 'Espanhol',
    'fr-FR': 'Francês',
    'de-DE': 'Alemão',
    'it-IT': 'Italiano',
    'ja-JP': 'Japonês',
    'ko-KR': 'Coreano',
    'zh-CN': 'Chinês',
  }

  return (
    <Card className="bg-white/80 dark:bg-gray-800/30 border-gray-300 dark:border-gray-600">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-theme">Filtros</h3>
          
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="text-xs border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
            >
              Limpar Filtros
            </Button>
          )}
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-theme-secondary">
                Gênero
              </Label>
              <GenreFilter />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-theme-secondary">
                Ano
              </Label>
              <YearFilter />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-theme-secondary">
                Avaliação
              </Label>
              <RatingFilter />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-theme-secondary">
                Ordenar por
              </Label>
              <SortFilter />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-theme-secondary">
                Idioma Original
              </Label>
              <LanguageFilter />
            </div>
          </div>

          {hasActiveFilters && (
            <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
              <h4 className="text-sm font-medium text-theme-secondary mb-2">Filtros Ativos:</h4>
              <div className="flex flex-wrap gap-2">
                {filters.searchQuery && (
                  <Badge variant="secondary" className="bg-purple-600 text-white flex items-center gap-1">
                    Busca: "{filters.searchQuery}"
                    <div className="cursor-pointer">
                      <X 
                        className="w-3 h-3 ml-1 hover:bg-purple-700 rounded-full p-0.5"
                        onClick={() => setSearchQuery('')}
                      />
                    </div>
                  </Badge>
                )}
                {filters.genre && (
                  <Badge variant="secondary" className="bg-blue-600 text-white flex items-center gap-1">
                    Gênero: {genreMap[filters.genre]}
                    <div className="cursor-pointer">
                      <X 
                        className="w-3 h-3 ml-1 hover:bg-blue-700 rounded-full p-0.5"
                        onClick={() => setGenre(null)}
                      />
                    </div>
                  </Badge>
                )}
                {filters.year && (
                  <Badge variant="secondary" className="bg-green-600 text-white flex items-center gap-1">
                    Ano: {filters.year}
                    <div className="cursor-pointer">
                      <X 
                        className="w-3 h-3 ml-1 hover:bg-green-700 rounded-full p-0.5"
                        onClick={() => setYear(null)}
                      />
                    </div>
                  </Badge>
                )}
                {filters.rating && (
                  <Badge variant="secondary" className="bg-yellow-600 text-white flex items-center gap-1">
                    Rating: {filters.rating}+
                    <div className="cursor-pointer">
                      <X 
                        className="w-3 h-3 ml-1 hover:bg-yellow-700 rounded-full p-0.5"
                        onClick={() => setRating(null)}
                      />
                    </div>
                  </Badge>
                )}
                {filters.language && (
                  <Badge variant="secondary" className="bg-orange-600 text-white flex items-center gap-1">
                    Idioma: {languageMap[filters.language]}
                    <div className="cursor-pointer">
                      <X 
                        className="w-3 h-3 ml-1 hover:bg-orange-700 rounded-full p-0.5"
                        onClick={() => setLanguage(null)}
                      />
                    </div>
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 