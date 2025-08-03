import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSearchStore } from '@/stores/searchStore'

export function LanguageFilter() {
  const { filters, setLanguage } = useSearchStore()

  const languageOptions = [
    { value: null, label: 'Todos os idiomas' },
    { value: 'pt-BR', label: 'Português (Brasil)' },
    { value: 'en-US', label: 'Inglês (EUA)' },
    { value: 'es-ES', label: 'Espanhol' },
    { value: 'fr-FR', label: 'Francês' },
    { value: 'de-DE', label: 'Alemão' },
    { value: 'it-IT', label: 'Italiano' },
    { value: 'ja-JP', label: 'Japonês' },
    { value: 'ko-KR', label: 'Coreano' },
    { value: 'zh-CN', label: 'Chinês' },
  ]

  return (
    <Select
      value={filters.language || 'all'}
      onValueChange={(value) => setLanguage(value === 'all' ? null : value)}
    >
      <SelectTrigger className="h-10 px-3 text-sm border-gray-600 text-white hover:border-purple-500 hover:text-purple-400">
        <SelectValue placeholder="Selecione o idioma" />
      </SelectTrigger>
      <SelectContent className="bg-gray-800 border-gray-600 text-white">
        {languageOptions.map((option) => (
          <SelectItem 
            key={option.value || 'all'} 
            value={option.value || 'all'}
            className="hover:bg-gray-700 hover:text-purple-400 cursor-pointer"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
} 