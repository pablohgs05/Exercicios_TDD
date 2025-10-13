import { Email } from './email';

export class Person {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    private emails: Email[] = []
  ) {}

  addEmail(email: Email): void {
    this.emails.push(email);
  }

  getEmails(): Email[] {
    return [...this.emails];
  }
}
