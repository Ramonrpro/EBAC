document.addEventListener("DOMContentLoaded", () => {
   const profileImg = document.querySelector("#profile-img");
   const profileName = document.querySelector("#profile-name");
   const profileUsername = document.querySelector("#profile-username");
   const repositories = document.querySelector("#repositories");
   const followers = document.querySelector("#followers");
   const following = document.querySelector("#following");
   const linkbutton = document.querySelector("#linkButton");

   fetch("https://api.github.com/users/RamonRpro")
      .then((res) => {
         return res.json();
      })
      .then((json) => {
         profileImg.src = json.avatar_url;
         profileName.textContent = json.name;
         profileUsername.textContent = json.login;
         repositories.textContent = json.public_repos;
         followers.textContent = json.followers;
         following.textContent = json.following;
      });
});
