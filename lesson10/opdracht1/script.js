function setCookie() {
    alert(`schijf de username [${document.forms.cookieForm.userName.value}] en laatste bezoek [${new Date().toLocaleString()}] in een cookie op`);
}

function getCookie() {
    // bij openen van de website toon je het laatste bezoek en de username
}


let users = [];
let username = "mark";
let lastvisit = new Date().toLocaleString();
let visitcount = 0;
let user = {username: username, lastvisit: lastvisit, visitcount: visitcount};
users.push(user);
let users_json=(JSON.stringify(users)); // dit is data die kan worden opgeslagen als een cookie
console.log(users_json);
// teruglezen naar een object kan ook:
let users_object = JSON.parse(users_json);
console.log(users_object);

