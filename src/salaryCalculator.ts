import { Employee } from './employee';
import { Position } from './position';

export class SalaryCalculator {
  calculate(employee: Employee): number {
    let discount = 0;

    switch (employee.position) {
      case Position.DEVELOPER:
        discount = employee.baseSalary >= 3000 ? 0.2 : 0.1;
        break;
      case Position.DBA:
      case Position.TESTER:
        discount = employee.baseSalary >= 2000 ? 0.25 : 0.15;
        break;
      case Position.MANAGER:
        discount = employee.baseSalary >= 5000 ? 0.3 : 0.2;
        break;
    }

    return employee.baseSalary * (1 - discount);
  }
}
