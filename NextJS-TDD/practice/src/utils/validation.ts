export type ValidationErrors = {
  name?: string;
  email?: string;
  password?: string;
};

export function isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

export function isValidPassword(password: string): boolean {
  return password.length >= 8;
}

export function validateSignup(
  name: string,
  email: string,
  password: string,
): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!name.trim()) {
    errors.name = "Name is required";
  }

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(email)) {
    errors.email = "Enter a valid email";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (!isValidPassword(password)) {
    errors.password = "Password must be at least 8 characters";
  }

  return errors;
}
