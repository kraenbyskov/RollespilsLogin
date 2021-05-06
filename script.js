import CreateElement from './components/CreateElement.js';
const Root = document.getElementById('Root');
const loginButton = document.getElementById("LoginButton")


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const loginFunction = () => {
    const UserName = document.getElementById("UserName").value
    const Password = document.getElementById("Password").value

    var raw = JSON.stringify({
      "email": UserName,
      "password": Password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://rollespilsapi.herokuapp.com/user/login", requestOptions)
      .then(response => response.json())
      .then(result => localStorage.setItem("Token", result.token))
      .catch(error => console.log('error', error));


    if(localStorage.getItem("Token")) {
        const title = CreateElement({
            elmt:"p",
            content:"Du er nu logget ind"
        })
        Root.appendChild(title)
    }
}


  loginButton.addEventListener("click", loginFunction );