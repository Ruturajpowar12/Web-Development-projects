const input = document.querySelector("input");
const view = document.querySelector("#viewprofile");

const img = document.querySelector("img");
const name = document.getElementById("name");
const follower = document.getElementById("follower");
const following = document.getElementById("following");
const repo = document.getElementById("repo");

const box2 = document.querySelector(".box2");

async function getData(user) {
  try {
    const response = await fetch(`https://api.github.com/users/${user}`);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();
    updateUi(data);
  } catch (err) {
    alert(err.message);
  }
}

function updateUi(data) {
  box2.style.display = "flex";
  img.src = data.avatar_url;
  name.innerText = data.login;
  follower.innerText = data.followers;
  following.innerText = data.following;
  repo.innerText = data.public_repos;
}

view.addEventListener("click", () => {
  const username = input.value.trim();

  if (username === "") {
    alert("Please enter username!");
    return;
  }

  getData(username);
  input.value = "";
});
