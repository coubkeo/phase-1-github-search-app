const form = document.getElementById("github-form");
const search = document.getElementById("search");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("https://api.github.com/search/users")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
    });
});
