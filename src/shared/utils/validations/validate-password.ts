const validatePassword = (password: string) => (value: string) => password === value
  || 'Passwords did not match';

export default validatePassword;
