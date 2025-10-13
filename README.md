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

## O que foi implementado
- Exercício 1 (Triângulo): classificação em Escaleno, Isósceles, Equilátero e Inválido; validação da desigualdade triangular e lados positivos. Casos de teste incluem permutações, zeros, negativos, soma igual e menor que o terceiro lado.
- Exercício 2 (TDD – PersonDAO.isValidToInclude): validações de nome (duas partes, apenas letras), idade [1,200], pelo menos um e-mail e formato de e-mail "____@____.___". Retorna lista de erros.
- Exercício 3 (TDD – Calculadora de Salário): regras por cargo (DESENVOLVEDOR, DBA, TESTADOR, GERENTE) com descontos conforme faixas informadas.

## Observações
- Todo o código e os textos de testes estão em português.
- Comentários desnecessários foram removidos.
