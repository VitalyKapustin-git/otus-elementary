let user = {
	name: 'John',
}

user.age = prompt('Введите возраст');

let admin = Object.assign({}, user);

admin.role = 'admin';

let {name, age, role} = admin;
console.log(name, age, role);