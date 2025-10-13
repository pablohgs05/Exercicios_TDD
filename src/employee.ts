import { Position } from './position';

export class Employee {
  constructor(
    public name: string,
    public email: string,
    public baseSalary: number,
    public position: Position
  ) {}
}
