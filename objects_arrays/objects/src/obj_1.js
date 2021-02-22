const user = {
  name: "John",
};

user.age = prompt("Введите возраст");

const admin = { ...user };

admin.role = "admin";

const { name, age, role } = admin;
console.log(name, age, role);
