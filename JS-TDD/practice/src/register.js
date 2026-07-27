export function normalizeUsername(username) {
  if (typeof username !== "string") {
    throw new TypeError("Username must be a string");
  }
  return username.trim().toLowerCase().replace(/\s+/g, "_");
}

export async function registerUsername(username, usernameRepository) {
  const normalizedUsername = normalizeUsername(username);
  if (normalizedUsername.length < 3) {
    throw new Error("Username must contain at least three characters");
  }
  const usernameExists = await usernameRepository.exists(normalizedUsername);
  if (usernameExists) {
    throw new Error("Username is already registered");
  }
  return usernameRepository.save(normalizedUsername);
}
