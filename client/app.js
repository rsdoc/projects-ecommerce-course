const axios = require('axios');

const inputEL = document.getElementById('inputEmail');
const passEL = document.getElementById('inputPassword');

document.getElementById('Login-form').addEventListener('submit', (evt) => {
  evt.preventDefault();
  // ValidateUser(inputEL.value, passEL.value);
  GetProfile();
});

function ValidateUser(email, password) {
  axios
    .post(
      'http://localhost:4000/user/validate',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'token': 'qaxfffffgg',
        },
      }
    )
    .then(function (response) {
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// private call
function GetProfile() {
  axios
    .get('http://localhost:4000/user/profile', {
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token' + 'abbcccc'),
      },
    })
    .then(function (response) {
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
    })
    .catch(function (error) {
      console.log(error);
    });
}
