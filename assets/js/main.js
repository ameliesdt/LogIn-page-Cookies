const USERS = [ 
    { name: "supercode", secret: "no_one_will_know" },
    { name: "music_fan_1990", secret: "WeAreTheChampi0ns" },
    { name: "admin", secret: "1234" },
];

const modal = document.querySelector('#modal');
const welcomeUsername = document.querySelector("#welcomeUsername");

// ===LOGIN===
document.querySelector('#submit').addEventListener ('click', (event) => {
    event.preventDefault();
    // console.log('klik')
    let username = document.querySelector('#username').value.toLowerCase();
    let password = document.querySelector('#password').value;
    // console.log(username + password);

    let checkIndex = (userObject) => {
        return userObject.name == username;
    };

    let loginIndex = USERS.findIndex(checkIndex)
    
    if (loginIndex >= 0) {
        if (username == USERS[loginIndex].name && 
            password == USERS[loginIndex].secret) {
            modal.style.display = "none";
            document.cookie = `username=${username}; Max-Age=1000000000; path=/`;
            welcomeUsername.innerText = document.cookie.replace("username=", "")

        } else if (username == USERS[loginIndex].name && 
            password !== USERS[loginIndex].secret) {
            document.querySelector('#password').style.color = "red";
         }
        } else {
          document.querySelector('#username').style.color = "red";
        }
})

// ===LOGOUT====

document.querySelector('#logOut').addEventListener ('click', () => {
    document.cookie = `username=; Max-Age=-1; path=/`;
    location.reload();
})

// ==========Checken, ob Cookie gesetzt ist==========
if (document.cookie !== "") {
    modal.style.display = "none";
    welcomeUsername.innerText = document.cookie.replace("username=", "");
}