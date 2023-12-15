// edit user's name
var profileName = document.querySelector('#name');

function editName() {
    profileName.innerText = 'New Name'
}

// remove the user request and decrease the number of requests
var requestNum = document.querySelector('.notification-1');
function editConnections(element) {
    element.remove();
    requestNum.innerText--;
}

// increase the number of connections
var connectNum = document.querySelector('.notification-2');
function addConnections() {
    connectNum.innerText++;
}

// EXTRA
function signOut(element) {
    element.innerText = 'Sign In'
}