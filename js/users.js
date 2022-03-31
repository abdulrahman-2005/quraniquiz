function getUserCount() {
	return +localStorage.getItem("userCount");
}

function getUsers() {
	return JSON.parse(localStorage.getItem("users"));
}

function assignUser(username, password) {
	users = getUsers();
	userCount = getUserCount();
	userCount += 1;
	users[userCount.toString()] = {
		username: username,
		password: password,
	};
	localStorage.setItem("users", JSON.stringify(users));
	localStorage.setItem("userCount", userCount);
	users = getUsers();
	userCount = getUserCount();
}

function signUp() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	assignUser(username, password);
}

function login() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	let users = getUsers();
	for (let i in users) {
		if (users[i].username === username && users[i].password === password) {
			localStorage.setItem("user", i);
			return true;
		}
	}
	return false;
}

if (
	localStorage.getItem("users") === null ||
	localStorage.getItem("users") === undefined ||
	localStorage.getItem("users") === {}
) {
	localStorage.setItem("users", JSON.stringify({}));
	localStorage.setItem("userCount", 0);
}

if (localStorage.getItem("userCount") === "0") {
	loadSignUp();
} else {
	loadLogIN();
}
