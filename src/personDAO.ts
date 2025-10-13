import { Person } from './person';

export class PersonDAO {
  save(p: Person): void {
    console.log(`Saving person ${p.name}`);
  }

  isValidToInclude(p: Person): string[] {
    const errors: string[] = [];

    const nameParts = p.name.trim().split(/\s+/);
    if (nameParts.length < 2) {
      errors.push('O nome deve conter pelo menos duas partes');
    }
    
    if (!/^[a-zA-Z\s]+$/.test(p.name)) {
      errors.push('O nome deve conter apenas letras');
    }
    if (p.age < 1 || p.age > 200) {
      errors.push('A idade deve estar entre 1 e 200');
    }
    const emails = p.getEmails();
    if (emails.length === 0) {
      errors.push('A pessoa deve ter pelo menos um e-mail associado');
    }
    emails.forEach(email => {
      const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
      if (!emailPattern.test(email.name)) {
        errors.push(`E-mail inválido: ${email.name}`);
      }
    });

    return errors;
  }
}
