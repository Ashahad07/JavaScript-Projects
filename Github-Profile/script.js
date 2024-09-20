const input = document.querySelector("#search");
const submitBtn = document.querySelector("#subt");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const username = input.value;
  console.log(username);

  const api = `https://api.github.com/users/${username}`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", api);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      console.log(data);
      createUserCard(data)
      
    }
  };
});

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
    <div>
      <img
        src="${user.avatar_url}"
        alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <p class='bio'>${user.login}</p>
      <ul>
        <li>${user.followers} <span>followers</span></li>
        <li>${user.following} <span>following</span></li>
        <li>${user.public_repos} <span>repos</span></li>
      </ul>

      <div id="repos">
      </div>
    </div>
  </div>
    
    `;
    main.innerHTML = cardHTML;
}
