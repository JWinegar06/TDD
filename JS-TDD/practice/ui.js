import { add } from "./src/calculator.js";
import { isValidPassword } from "./src/password.js";
import { calculateCartTotal } from "./src/shopping.js";
import { formatUsername } from "./src/username.js";
import { registerUsername } from "./src/register.js";

/*
 * Helper used to display success and error messages.
 */
function displayMessage(element, message, type = "") {
  element.textContent = message;
  element.className = "result";

  if (type) {
    element.classList.add(type);
  }
}

/*
 * Example 1: Calculator
 */
const firstNumberInput = document.querySelector("#first-number");

const secondNumberInput = document.querySelector("#second-number");

const addButton = document.querySelector("#add-button");

const calculatorResult = document.querySelector("#calculator-result");

addButton.addEventListener("click", () => {
  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  if (firstNumberInput.value === "" || secondNumberInput.value === "") {
    displayMessage(calculatorResult, "Enter both numbers.", "error");

    return;
  }

  const result = add(firstNumber, secondNumber);

  displayMessage(calculatorResult, `Result: ${result}`, "success");
});

/*
 * Example 2: Password Validator
 */
const passwordInput = document.querySelector("#password");

const passwordButton = document.querySelector("#password-button");

const passwordResult = document.querySelector("#password-result");

passwordButton.addEventListener("click", () => {
  const password = passwordInput.value;
  const isValid = isValidPassword(password);

  if (isValid) {
    displayMessage(
      passwordResult,
      "The password meets all requirements.",
      "success",
    );
  } else {
    displayMessage(
      passwordResult,
      "The password does not meet all requirements.",
      "error",
    );
  }
});

/*
 * Example 3: Shopping Cart
 */
const cart = [];

const itemNameInput = document.querySelector("#item-name");

const itemPriceInput = document.querySelector("#item-price");

const itemQuantityInput = document.querySelector("#item-quantity");

const addItemButton = document.querySelector("#add-item-button");

const cartItems = document.querySelector("#cart-items");

const cartTotal = document.querySelector("#cart-total");

const cartMessage = document.querySelector("#cart-message");

function renderCart() {
  cartItems.replaceChildren();

  for (const item of cart) {
    const listItem = document.createElement("li");

    const itemTotal = item.price * item.quantity;

    listItem.textContent =
      `${item.name}: ${item.quantity} × ` +
      `$${item.price.toFixed(2)} = ` +
      `$${itemTotal.toFixed(2)}`;

    cartItems.append(listItem);
  }

  const total = calculateCartTotal(cart);

  cartTotal.textContent = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

addItemButton.addEventListener("click", () => {
  const name = itemNameInput.value.trim();
  const price = Number(itemPriceInput.value);
  const quantity = Number(itemQuantityInput.value);

  if (!name) {
    displayMessage(cartMessage, "Enter an item name.", "error");

    return;
  }

  if (itemPriceInput.value === "" || !Number.isFinite(price) || price < 0) {
    displayMessage(cartMessage, "Enter a valid price.", "error");

    return;
  }

  if (!Number.isInteger(quantity) || quantity < 1) {
    displayMessage(
      cartMessage,
      "Quantity must be a whole number of at least 1.",
      "error",
    );

    return;
  }

  cart.push({
    name,
    price,
    quantity,
  });

  renderCart();

  displayMessage(cartMessage, `${name} was added to the cart.`, "success");

  itemNameInput.value = "";
  itemPriceInput.value = "";
  itemQuantityInput.value = "1";
});

/*
 * Example 4: Username Formatter
 */
const usernameInput = document.querySelector("#username");

const formatButton = document.querySelector("#format-button");

const usernameResult = document.querySelector("#username-result");

formatButton.addEventListener("click", () => {
  try {
    const formattedUsername = formatUsername(usernameInput.value);

    if (!formattedUsername) {
      displayMessage(usernameResult, "Enter a username.", "error");

      return;
    }

    displayMessage(
      usernameResult,
      `Formatted username: ${formattedUsername}`,
      "success",
    );
  } catch (error) {
    displayMessage(usernameResult, error.message, "error");
  }
});

/*
 * Example 5: Username Registration
 *
 * This in-memory repository behaves like a small fake database.
 * The data is cleared whenever the browser page is refreshed.
 */
const storedUsers = new Map();
let nextUserId = 1;

const usernameRepository = {
  async exists(username) {
    return storedUsers.has(username);
  },

  async save(username) {
    const user = {
      id: nextUserId,
      username,
    };

    nextUserId += 1;
    storedUsers.set(username, user);

    return user;
  },
};

const registrationInput = document.querySelector("#registration-username");

const registerButton = document.querySelector("#register-button");

const registrationResult = document.querySelector("#registration-result");

const registeredUsers = document.querySelector("#registered-users");

function renderRegisteredUsers() {
  registeredUsers.replaceChildren();

  for (const user of storedUsers.values()) {
    const listItem = document.createElement("li");

    listItem.textContent = `User #${user.id}: ${user.username}`;

    registeredUsers.append(listItem);
  }
}

registerButton.addEventListener("click", async () => {
  try {
    const user = await registerUsername(
      registrationInput.value,
      usernameRepository,
    );

    displayMessage(
      registrationResult,
      `Registered ${user.username} successfully.`,
      "success",
    );

    registrationInput.value = "";
    renderRegisteredUsers();
  } catch (error) {
    displayMessage(registrationResult, error.message, "error");
  }
});
