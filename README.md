# 🎬 Cubo Movies

Uma aplicação web moderna para explorar filmes, construída com React, TypeScript e integração com a API do TMDB.

## ✨ Funcionalidades

- 🎯 **Busca de filmes** - Pesquise por qualquer filme
- 📱 **Design responsivo** - Funciona em desktop e mobile
- 🎨 **Interface moderna** - Design dark com Tailwind CSS
- ⚡ **Performance otimizada** - Cache inteligente com React Query
- 📄 **Paginação** - Navegue por páginas de resultados
- 🎬 **Detalhes completos** - Informações detalhadas de cada filme
- 🔄 **Debounce na busca** - Busca automática após 3 segundos

## 🛠️ Tecnologias Utilizadas

### **Frontend**

- **React 19** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilização
- **Lucide React** - Ícones

### **Gerenciamento de Estado**

- **React Query (TanStack Query)** - Cache e sincronização de dados
- **Zustand** - Gerenciamento de estado global

### **HTTP Client**

- **Axios** - Cliente HTTP para requisições

### **Roteamento**

- **React Router** - Navegação entre páginas

### **UI Components**

- **Radix UI** - Componentes acessíveis
- **Class Variance Authority** - Variantes de componentes

## 🚀 Como executar o projeto

### **Pré-requisitos**

- Node.js 18+
- pnpm (recomendado) ou npm

### **1. Clone o repositório**

```bash
git clone <url-do-repositorio>
cd cubo-movies
```

### **2. Instale as dependências**

```bash
pnpm install
# ou
npm install
```

### **3. Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_TMDB_API_KEY=sua_api_key_aqui
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

**Como obter a API Key do TMDB:**

1. Acesse [themoviedb.org](https://www.themoviedb.org)
2. Crie uma conta
3. Vá em Settings > API
4. Solicite uma API Key
5. Copie a chave para o arquivo `.env`

### **4. Execute o projeto**

```bash
pnpm dev
# ou
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                    # Componentes base (Radix UI)
│   └── MovieDetails/          # Componentes específicos de detalhes
├── features/
│   ├── filters/              # Funcionalidade de filtros/busca
│   ├── movies/               # Listagem e cards de filmes
│   └── pagination/           # Componente de paginação
├── hooks/
│   ├── useMovies.ts          # Hooks para busca de filmes
│   ├── useMovieDetails.ts    # Hooks para detalhes do filme
│   └── useSearchData.ts      # Hook para dados de busca
├── lib/
│   ├── api.ts                # Cliente Axios configurado
│   ├── tmdb.ts               # Serviços da API TMDB
│   └── index.ts              # Exportações
├── pages/
│   ├── Home.tsx              # Página inicial
│   └── MovieDetails.tsx      # Página de detalhes do filme
├── stores/
│   └── searchStore.ts        # Store Zustand para busca
├── utils/
│   └── index.ts              # Funções utilitárias
└── assets/                   # Imagens e recursos estáticos
```

## 🎯 Principais Funcionalidades

### **Busca Inteligente**

- Debounce de 3 segundos
- Cache automático com React Query
- Estados de loading e erro

### **Página de Detalhes**

- Layout em 3 colunas
- Informações completas do filme
- Métricas e metadados
- Gêneros e sinopse

### **Paginação**

- Navegação entre páginas
- Loading states
- Estados vazios

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview

# Linting
pnpm lint
```

## 🌟 Características Técnicas

### **Performance**

- Lazy loading de imagens
- Cache inteligente com React Query
- Bundle otimizado com Vite

### **Acessibilidade**

- Componentes Radix UI
- Navegação por teclado
- Semântica HTML adequada

### **Responsividade**

- Mobile-first design
- Breakpoints otimizados
- Grid responsivo

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- [TMDB](https://www.themoviedb.org/) - API de filmes
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [React Query](https://tanstack.com/query) - Cache e sincronização
- [Zustand](https://zustand-demo.pmnd.rs/) - Gerenciamento de estado

---

Desenvolvido com ❤️ usando React e TypeScript
