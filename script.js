function register() {
  let name = document.getElementById("name").value;

  document.getElementById("msg").innerText =
    "Thank you " + name + "! You are registered.";

  return false;
}