const person = {
  name: "John",
  age: 20,
  address: "Rama 2",
};

const updateAddress = (obj, newAddress) => {
  return { ...obj, address: newAddress };
};

const personWithNewAddress = updateAddress(person, "Rama 9");

console.log(personWithNewAddress);
