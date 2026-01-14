document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});

document.getElementById("readSession").addEventListener("click", function () {
  const infoS = sessionStorage.getItem("info");
  alert("A informação salva no Session Storage é: " + infoS);
});

document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("text", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const localSaved = localStorage.getItem("text");
  alert("A informação salva no Local Storage é: " + localSaved);
});

document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2022, 9, 9) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "text=" + input.value + ";";
  const expiration = "expires=" + new Date(2022, 8, 9) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});
