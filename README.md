# Exercícios práticos de TDD (TypeScript + Jest)

## Requisitos
- Node.js 18+ (recomendado)
- npm

## Instalação
1. Na raiz do projeto, instale as dependências:
```powershell
npm install
```

## Build
Gera os arquivos compilados TypeScript em `dist/`:
```powershell
npm run build
```

## Testes
Executa toda a suíte de testes com Jest:
```powershell
npm test
```

Para rodar somente um arquivo de teste:
```powershell
npm test -- tests/triangle.test.ts
```

## Estrutura
- `src/` — código-fonte (triângulo, pessoa/email/DAO, funcionários/salários)
- `tests/` — testes unitários cobrindo os requisitos
