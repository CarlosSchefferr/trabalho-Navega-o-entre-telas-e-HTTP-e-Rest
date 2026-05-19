# Navegação entre telas e HTTP/REST com React Native

Projeto desenvolvido com Expo para demonstrar:

- Navegação entre telas com React Navigation (Stack)
- Uso de botões para `navigate` e `goBack`
- Consumo de API REST com `fetch`
- Renderização de dados com `FlatList`

## Estrutura

```text
.
├── App.js
└── src
    ├── screens
    │   ├── HomeScreen.js
    │   ├── DetailsScreen.js
    │   └── MoviesScreen.js
    └── services
        └── moviesApi.js
```

## Funcionalidades

1. **HomeScreen**
   - Exibe a tela inicial
   - Botão para navegar para detalhes

2. **DetailsScreen**
   - Botão para voltar para a Home
   - Botão para navegar para a tela de filmes

3. **MoviesScreen**
   - Busca filmes em `https://reactnative.dev/movies.json`
   - Mostra loading durante a requisição
   - Lista títulos e ano de lançamento
   - Exibe mensagem de erro em caso de falha

## Requisitos

- Node.js LTS
- npm
- Expo CLI via `npx`

## Como executar

```bash
npm install
npm run start
```

Atalhos úteis com Expo:

- `a`: abrir Android
- `w`: abrir Web
- `i`: abrir iOS (macOS)

## Dependências principais

- `expo`
- `react`
- `react-native`
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `react-native-screens`
- `react-native-safe-area-context`
