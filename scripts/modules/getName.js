const spanName = document.getElementById('user-div');

export function getName(){
    let userName = document.getElementById('inputName').value;
    localStorage.setItem('user', userName);
}

export function putUser() {
    let userText = document.createElement('h2');
    userText.className = 'user-welcome';
    userText.innerHTML = 'Hola ' + localStorage.getItem('user') + ' !';
    
    spanName.appendChild(userText);
}