const selectDropDown = document.getElementById("wisdom-select");
const responseBox = document.querySelector(".response");
const input = document.querySelector(".input-container");
const form = document.querySelector("form");
const inputText = document.querySelector("input");

selectDropDown.addEventListener("change", (e) => {
  responseBox.style.display = "block";
  input.style.display = "none";
  console.log(typeof e.target.value);

  if (e.target.value === "fortune") {
    axios.get("http://localhost:4000/api/fortune").then((res) => {
      responseBox.textContent = res.data;
    });
  }
  if (e.target.value === "daily-inspiration") {
    axios.get("http://localhost:4000/api/daily-inspiration").then((res) => {
      responseBox.textContent = res.data;
    });
  }
  if (e.target.value === "words-of-advice") {
    responseBox.style.display = "none";
    input.style.display = "block";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value } = inputText;
  console.log(value);

  axios
    .post("http://localhost:4000/api/words-of-advice", { value })
    .then((res) => {
      console.log(res.data);
    });
});
