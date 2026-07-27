export function formatUsername(username) {
  if (typeof username !== "string") {
    throw new TypeError("Username must be a string");
  }
  return username.trim().toLowerCase().replace(/\s+/g, "_");
}
