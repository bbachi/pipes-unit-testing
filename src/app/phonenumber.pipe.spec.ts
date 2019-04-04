import { PhonenumberPipe } from './phonenumber.pipe';

describe('PhonenumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PhonenumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display in phone format', () => {
      const phoneNumber = '3333333333';

      const pipe = new PhonenumberPipe();

      const result = pipe.transform(phoneNumber);

      expect(result).toBe('(333) 333 3333');
  });
});
