import { Person } from '../src/person';
import { Email } from '../src/email';
import { PersonDAO } from '../src/personDAO';

describe('Validação de PersonDAO', () => {
  let personDAO: PersonDAO;

  beforeEach(() => {
    personDAO = new PersonDAO();
  });

  test('Pessoa válida não deve possuir erros', () => {
    const person = new Person(1, 'John Doe', 30);
    person.addEmail(new Email(1, 'john@example.com'));

    const errors = personDAO.isValidToInclude(person);
    expect(errors).toHaveLength(0);
  });

  test('Nome deve possuir ao menos duas partes', () => {
    const person = new Person(1, 'John', 30);
    person.addEmail(new Email(1, 'john@example.com'));

    const errors = personDAO.isValidToInclude(person);
    expect(errors).toContain('O nome deve conter pelo menos duas partes');
  });

  test('Nome deve conter apenas letras', () => {
    const person = new Person(1, 'John Doe123', 30);
    person.addEmail(new Email(1, 'john@example.com'));

    const errors = personDAO.isValidToInclude(person);
    expect(errors).toContain('O nome deve conter apenas letras');
  });

  test('Idade deve estar no intervalo [1, 200]', () => {
    const personUnderAge = new Person(1, 'John Doe', 0);
    personUnderAge.addEmail(new Email(1, 'john@example.com'));

    const errorsUnderAge = personDAO.isValidToInclude(personUnderAge);
    expect(errorsUnderAge).toContain('A idade deve estar entre 1 e 200');

    const personOverAge = new Person(2, 'Jane Doe', 201);
    personOverAge.addEmail(new Email(2, 'jane@example.com'));

    const errorsOverAge = personDAO.isValidToInclude(personOverAge);
    expect(errorsOverAge).toContain('A idade deve estar entre 1 e 200');
  });

  test('Pessoa deve possuir ao menos um e-mail', () => {
    const person = new Person(1, 'John Doe', 30);

    const errors = personDAO.isValidToInclude(person);
    expect(errors).toContain('A pessoa deve ter pelo menos um e-mail associado');
  });

  test('Formato de e-mail deve ser válido', () => {
    const person = new Person(1, 'John Doe', 30);
    person.addEmail(new Email(1, 'invalid-email'));

    const errors = personDAO.isValidToInclude(person);
    expect(errors).toContain('E-mail inválido: invalid-email');
  });
});
