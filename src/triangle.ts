export enum TriangleType {
  SCALENE = 'Escaleno',
  ISOSCELES = 'Isósceles',
  EQUILATERAL = 'Equilátero',
  INVALID = 'Inválido'
}

export class Triangle {
  static classify(side1: number, side2: number, side3: number): TriangleType {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      return TriangleType.INVALID;
    }
    if (
      side1 + side2 <= side3 ||
      side1 + side3 <= side2 ||
      side2 + side3 <= side1
    ) {
      return TriangleType.INVALID;
    }
    if (side1 === side2 && side2 === side3) {
      return TriangleType.EQUILATERAL;
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return TriangleType.ISOSCELES;
    } else {
      return TriangleType.SCALENE;
    }
  }
}
