// #1
let firstForm = document.querySelector(".first-form");
let weather = {
  temperature: "",
  humidity: "",
  windSpeed: "",
  boolean: function (value) {
    if (value < 0) {
      return true;
    } else {
      return false;
    }
  },
};
console.log(weather.boolean(-1));
firstForm.addEventListener("submit", (e) => {
  e.preventDefault();
  weather.temperature = e.target.elements.text.value;
  let numb = weather.boolean(weather.temperature);
  if (numb === true) {
    alert("температура нижче 0 градусів Цельсія");
  } else {
    alert("температура вижче 0 градусів Цельсія");
  }
});
// #2
let user = {
  name: prompt("name:"),
  email: prompt("email:"),
  password: prompt("password:"),

  login: function () {
    let cheakEmail = prompt("email для входу:");
    let cheakPassword = prompt("пароль для входу:");

    if (cheakEmail === user.email && cheakPassword === user.password) {
      alert("все супер");
    } else {
      alert("неправильно");
    }
  },
};

user.login();
// #3
let thirdForm = document.querySelector(".third-form");
let thirdResult = document.querySelector(".third-result");
let movie = {
  title: "title",
  director: "director",
  year: "year",
  rating: "rating",
  returnColor: function (value) {
    if (value > 8) {
      return true;
    } else {
      return false;
    }
  },
};
thirdForm.addEventListener("submit", (e) => {
  e.preventDefault();
  movie.rating = e.target.elements.text.value;
  let numb = movie.returnColor(movie.rating);
  thirdResult.innerHTML = `
  <li>${movie.title}</li>
   <li>${movie.director}</li>
    <li>${movie.year}</li>
     <li>${movie.rating}</li>
  `;
  if (numb === true) {
    thirdResult.style.color = "green";
  } else {
    thirdResult.style.color = "red";
  }
});
