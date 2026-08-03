function calculateTotal(price, quantity, isMember) {
  let total = price * quantity;

  if (isMember) {
    total = total * 0.9;
  }

  return total;
}

module.exports = {
  calculateTotal,
};
