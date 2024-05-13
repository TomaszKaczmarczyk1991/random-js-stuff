// longhand
let name;
  if(inputName) {
    name = inputName;
  } else {
    name = "Guest";
  }


// shorthand
const name = inputName || "Guest";