async function get() {
    let obj
    const data = await fetch("http://localhost:8000/auth/28")
    obj = await data.json()
    alert(obj.username)
}

async function submitForm(e) {
    e.preventDefault();

    let myform = document.getElementById("loginForm");

    let formData = new FormData(myform);

    await fetch('http://localhost:8000/auth/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formData)
    }).then(res => document.getElementById("root").innerHTML(res));
}

let myform = document.getElementById("loginForm");
myform.addEventListener("submit", submitForm);
