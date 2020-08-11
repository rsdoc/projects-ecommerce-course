const axios = require('axios');

const root = document.getElementById('app-root');

const getUsersData = () => {
  return axios.get('http://localhost:4000/users');
};

getUsersData()
  .then(function (response) {
    const users = response.data.users[0];

    const domObj = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${users.first_name}</h5>
      <p class="card-text">${users.email}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `;

    root.innerHTML = domObj;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
