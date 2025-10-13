import { Employee } from '../src/employee';
import { Position } from '../src/position';
import { SalaryCalculator } from '../src/salaryCalculator';

describe('Calculadora de Salários', () => {
  let calculator: SalaryCalculator;

  beforeEach(() => {
    calculator = new SalaryCalculator();
  });

  test('Desenvolvedor com salário >= 3000 tem desconto de 20%', () => {
    const employee = new Employee('John', 'john@example.com', 4000, Position.DEVELOPER);
    const netSalary = calculator.calculate(employee);
    expect(netSalary).toBe(3200);
  });

  test('Desenvolvedor com salário < 3000 tem desconto de 10%', () => {
    const employee = new Employee('John', 'john@example.com', 2500, Position.DEVELOPER);
    const netSalary = calculator.calculate(employee);
    expect(netSalary).toBe(2250);
  });

  test('DBA com salário >= 2000 tem desconto de 25%', () => {
    const employee = new Employee('Jane', 'jane@example.com', 3000, Position.DBA);
    const netSalary = calculator.calculate(employee);
    expect(netSalary).toBe(2250);
  });

  test('DBA com salário < 2000 tem desconto de 15%', () => {
    const employee = new Employee('Jane', 'jane@example.com', 1500, Position.DBA);
    const netSalary = calculator.calculate(employee);
    expect(netSalary).toBe(1275);
  });

  test('Testador com salário >= 2000 tem desconto de 25%', () => {
    const employee = new Employee('Bob', 'bob@example.com', 2500, Position.TESTER);
    const netSalary = calculator.calculate(employee);
    expect(netSalary).toBe(1875);
  });

  test('Testador com salário < 2000 tem desconto de 15%', () => {
    const employee = new Employee('Bob', 'bob@example.com', 1800, Position.TESTER);
    const netSalary = calculator.calculate(employee);
    expect(netSalary).toBe(1530);
  });

  test('Gerente com salário >= 5000 tem desconto de 30%', () => {
    const employee = new Employee('Alice', 'alice@example.com', 6000, Position.MANAGER);
    const netSalary = calculator.calculate(employee);
    expect(netSalary).toBe(4200);
  });

  test('Gerente com salário < 5000 tem desconto de 20%', () => {
    const employee = new Employee('Alice', 'alice@example.com', 4500, Position.MANAGER);
    const netSalary = calculator.calculate(employee);
    expect(netSalary).toBe(3600);
  });
});
