
function verifyPassword() {
  let password = document.querySelector("#password").value;
  let repass = document.querySelector("#repass").value;

  console.log(password);
  var name = document.getElementById("passmsg");
  var name = document.getElementById("passreset");
  if (password == "") {
    passmsg.innerHTML = `<p style=" color: red; font-size:12px">please enter the password</p>`;
    return false;
  }
  if (repass == "") {
    passreset.innerHTML = `<p style=" color: red; font-size:12px">please enter the confirm password</p>`;
    return false;
  }

  if (password != repass) {
    document.querySelector(
      "#repassin"
    ).innerHTML = `<p><b>Incorrect Password</b></p>`;
    return false;
  } else if (password.length < 8 && repass.length < 8) {
    document.querySelector(
      "#repassin"
    ).innerHTML = `<p><b>Password length must be atleast 8 characters</b></p>`;
    return false;
  }
  createpassword();
}

async function createpassword() {
  let formdata = document.getElementById("myform");
  let data = new FormData(formdata);
  const param = new URLSearchParams(data);
  const dataform = await new Response(param).text();
  console.log(typeof dataform);

  let data2 = await fetch("http://localhost:3033/password", {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    body: dataform,
  });
  document.querySelector(
    "#repassin"
  ).innerHTML = `<p>Click here to <a href="/loginat"><b>LOGIN</b></a></p>`;
  console.log(await data2.json());
}