// <!-- SignUp Logic part -->

document
  .getElementById("signupform")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let uemail = document.getElementById("uemail").value.trim();
    let upass = document.getElementById("upass").value;
    let ucpass = document.getElementById("ucpass").value;

    if (upass !== ucpass) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    let users = [];
    if (localStorage.getItem("users")) {
      try {
        users = JSON.parse(localStorage.getItem("users"));
      } catch (e) {
        users = [];
      }
    }

    // Check duplicate email
    if (users.some((user) => user.email === uemail)) {
      alert("This Email is already registered!");
      return;
    }

    // Add new user
    users.push({
      name: username,
      email: uemail,
      password: upass,
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign-Up Successful!");
    window.location.href = "SignIn.html";
  });
