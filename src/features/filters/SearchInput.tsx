import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SearchIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { SearchInputProps } from './types'

export function SearchInput({ 
  value, 
  onChange, 
  onSubmit, 
  placeholder = "Pesquise por filmes",
  className 
}: SearchInputProps) {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (value.trim()) {
      timeoutRef.current = setTimeout(() => {
        onSubmit?.()
      }, 3000)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [value, onSubmit])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.()
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-12 backdrop-blur-sm border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 h-8"
      />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white h-6"
      >
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      </Button>
    </form>
  )
}