import { Triangle, TriangleType } from '../src/triangle';

describe('Classificação de Triângulos', () => {
  test('Triângulo escaleno válido', () => {
    expect(Triangle.classify(3, 4, 5)).toBe(TriangleType.SCALENE);
  });

  test('Triângulo isósceles válido', () => {
    expect(Triangle.classify(5, 5, 3)).toBe(TriangleType.ISOSCELES);
  });

  test('Triângulo equilátero válido', () => {
    expect(Triangle.classify(5, 5, 5)).toBe(TriangleType.EQUILATERAL);
  });

  test('Triângulo isósceles válido (permutação 1)', () => {
    expect(Triangle.classify(5, 5, 3)).toBe(TriangleType.ISOSCELES);
  });

  test('Triângulo isósceles válido (permutação 2)', () => {
    expect(Triangle.classify(5, 3, 5)).toBe(TriangleType.ISOSCELES);
  });

  test('Triângulo isósceles válido (permutação 3)', () => {
    expect(Triangle.classify(3, 5, 5)).toBe(TriangleType.ISOSCELES);
  });

  test('Inválido: lado zero', () => {
    expect(Triangle.classify(0, 5, 5)).toBe(TriangleType.INVALID);
  });

  test('Inválido: lado negativo', () => {
    expect(Triangle.classify(-1, 5, 5)).toBe(TriangleType.INVALID);
  });

  test('Inválido: soma de dois lados igual ao terceiro (caso 1)', () => {
    expect(Triangle.classify(5, 5, 10)).toBe(TriangleType.INVALID);
  });

  test('Inválido: soma de dois lados igual ao terceiro (caso 2)', () => {
    expect(Triangle.classify(5, 10, 5)).toBe(TriangleType.INVALID);
  });

  test('Inválido: soma de dois lados igual ao terceiro (caso 3)', () => {
    expect(Triangle.classify(10, 5, 5)).toBe(TriangleType.INVALID);
  });

  test('Inválido: soma de dois lados menor que o terceiro (caso 1)', () => {
    expect(Triangle.classify(2, 3, 6)).toBe(TriangleType.INVALID);
  });

  test('Inválido: soma de dois lados menor que o terceiro (caso 2)', () => {
    expect(Triangle.classify(2, 6, 3)).toBe(TriangleType.INVALID);
  });

  test('Inválido: soma de dois lados menor que o terceiro (caso 3)', () => {
    expect(Triangle.classify(6, 2, 3)).toBe(TriangleType.INVALID);
  });

  test('Inválido: todos os lados zero', () => {
    expect(Triangle.classify(0, 0, 0)).toBe(TriangleType.INVALID);
  });
});
