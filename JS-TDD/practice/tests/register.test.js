import { beforeEach, describe, expect, test, vi } from "vitest";
import {
  normalizeUsername,
  registerUsername,
} from "../src/register.js";

describe("normalizeUsername", () => {
  test("trims, lowercases, and replaces spaces", () => {
    expect(normalizeUsername(" Nyx Rosfield ")).toBe("nyx_rosfield");
  });

  test("throws an error when the username is not a string", () => {
    expect(() => normalizeUsername(null)).toThrow("Username must be a string");
  });
});

describe("registerUsername", () => {
  let usernameRepository;
  beforeEach(() => {
    usernameRepository = { exists: vi.fn(), save: vi.fn() };
  });

  test("registers an available username", async () => {
    usernameRepository.exists.mockResolvedValue(false);
    usernameRepository.save.mockResolvedValue({ id: 1, username: "nyx" });
    const result = await registerUsername("Nyx", usernameRepository);
    expect(usernameRepository.exists).toHaveBeenCalledWith("nyx");
    expect(usernameRepository.save).toHaveBeenCalledWith("nyx");
    expect(result).toEqual({ id: 1, username: "nyx" });
  });

  test("rejects a username that is already registered", async () => {
    usernameRepository.exists.mockResolvedValue(true);
    await expect(registerUsername("Nyx", usernameRepository)).rejects.toThrow(
      "Username is already registered",
    );
    expect(usernameRepository.save).not.toHaveBeenCalled();
  });

  test("rejects a username shorter than three characters", async () => {
    await expect(registerUsername("Al", usernameRepository)).rejects.toThrow(
      "Username must contain at least three characters",
    );
    expect(usernameRepository.exists).not.toHaveBeenCalled();
    expect(usernameRepository.save).not.toHaveBeenCalled();
  });

  test("normalizes the username before checking the repository", async () => {
    usernameRepository.exists.mockResolvedValue(false);
    usernameRepository.save.mockResolvedValue({
      id: 2,
      username: "nyx_rosfield",
    });
    await registerUsername(" Nyx Rosfield ", usernameRepository);
    expect(usernameRepository.exists).toHaveBeenCalledWith("nyx_rosfield");
    expect(usernameRepository.save).toHaveBeenCalledWith("nyx_rosfield");
  });

  test("checks whether the username exists only once", async () => {
    usernameRepository.exists.mockResolvedValue(false);
    usernameRepository.save.mockResolvedValue({ id: 3, username: "clive" });
    await registerUsername("Clive", usernameRepository);
    expect(usernameRepository.exists).toHaveBeenCalledTimes(1);
  });

  test("does not save when the repository check fails", async () => {
    usernameRepository.exists.mockRejectedValue(
      new Error("Database unavailable"),
    );
    await expect(registerUsername("Nyx", usernameRepository)).rejects.toThrow(
      "Database unavailable",
    );
    expect(usernameRepository.save).not.toHaveBeenCalled();
  });
});
