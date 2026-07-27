export function isValidPassword(password) {
  if (typeof password !== "string") {
    return false;
  }
  
  const hasMinimumLength = password.length >= 8;
  const hasUppercaseLetter = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return hasMinimumLength && hasUppercaseLetter && hasNumber;
}
