//  SignIn Logic Part in js.
document.getElementById("signinform").addEventListener("submit", (event) => {
  event.preventDefault();
  let uemail = document.getElementById("uemail").value.trim();
  let upass = document.getElementById("upass").value;
  console.log(uemail, upass);

  let users = [];
  try {
    users = JSON.parse(localStorage.getItem("users"));
  } catch (e) {
    users = [];
  }

  let user_mt = users.find((u) => u.email === uemail && u.password === upass);

  if (!uemail || !upass) {
    alert("Please enter email and password!");
    return;
  }

  if (user_mt) {
    alert("Sign In Successful! Welcome " + user_mt.name);
    window.location.href = "index.html";
  } else {
    alert("Invalid Email or Password!");
  }
});

// Password reset logic in js .

// Open Popup
document.getElementById("forgotLink").addEventListener("click", function () {
  document.getElementById("resetPopup").style.display = "flex";
});

// Close Popup
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("resetPopup").style.display = "none";
});

document.getElementById("resetBtn").addEventListener("click", function () {
  let email = document.getElementById("resetEmail").value.trim();
  let newPass = document.getElementById("newPass").value.trim();

  if (!email || !newPass) {
    alert("Please fill all fields!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let userIndex = users.findIndex((u) => u.email === email);

  if (userIndex === -1) {
    alert("Email not found!");
    return;
  }

  users[userIndex].password = newPass;

  localStorage.setItem("users", JSON.stringify(users));

  alert("Password Reset Successfully!");

  document.getElementById("resetPopup").style.display = "none";
});
