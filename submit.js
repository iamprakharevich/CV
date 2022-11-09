"use strict"

const form = document.getElementById('contact-form'),
username = document.getElementById('name'),
email = document.getElementById('email'),
msg = document.getElementById('message')

form.onsubmit = async (e) =>{
  e.preventDefault();
  let formData = new FormData(form)
  let response = await fetch('sendmail.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formData
  }, true)
  if (response.ok){
    let result = await response.json()
    alert(result.message)
    formPreview.innerHTML = ''
    form.reset()
  } else {alert("Error! This form does not work for the security of saving the author's data.")}
}