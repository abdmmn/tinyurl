const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs");

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};




// (6) WHERE DOES THIS GO?
function generateRandomString() {}

 


// (4) body-parser library will convert the request body from a Buffer into string
// below code for creating POST request. A middleware is needed because Post doesnt work the same as Gete request:
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
}); 

//(1) res.render below to pass all URL data from express_server to urls_index in views:
app.get("/urls", (req, res) => {
  const templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});

// (3)res.render below to GET urls_new form template to the browser for user to access it:
app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});

// (2) res.render below for new page to pass the single URL data from express_server to urls_show in views:
app.get("/urls/:id", (req, res) => {
  const templateVars = { id: req.params.id, longURL: /* What goes here? */ href="#"};
  res.render("urls_show", templateVars);
});

// (5) POST
app.post("/urls", (req, res) => {
  console.log(req.body); // Log the POST request body to the console
  res.send("Ok"); // Respond with 'Ok' (we will replace this)
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

