const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs");

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};




// (6) WHERE DOES THIS GO?
function generateRandomString() {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter <= 5) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

 


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
  // let longURL = req.body.longURL;
  const templateVars = { id: req.params.id, longURL: urlDatabase[req.params.id] };
  res.render("urls_show", templateVars);
});

// (5) POST
app.post("/urls", (req, res) => {
  let longURL = req.body.longURL; // Log the POST request body to the console
  let shortURL = generateRandomString();
  urlDatabase[shortURL] = longURL
  res.redirect("/urls")
});


// --7-- below code to redirect /u/:id to longURL
app.get("/u/:id", (req, res) => {
  console.log(req.params)
  const longURL = urlDatabase[req.params.id];
  if (longURL){
    res.redirect(longURL);
  }
  
});

// ---8--- delete url
app.post("/urls/:shortURL/delete", (req, res) => {
  const shortURL = req.params.shortURL;
  //  if (users[req.session.user_id] && (req.session.user_id === urlDatabase[shortURL].userID)) 
   {delete urlDatabase[shortURL]
    res.redirect('/urls');
  // } else {
  //   res.status(401).send('Only authorized user is allowed to delete')
  }
})

//---9---Get a update request from url-show page to update existing longUrl in the index page
app.post('/urls/:id', (req, res) => {
  const shortURL = req.params.id;
  console.log('req.body value', req.body.updatedURL)
  // if (users[req.session.user_id] && (req.session.user_id === urlDatabase[shortURL].userID)) {
  urlDatabase[shortURL] = req.body.updatedURL; 
  res.redirect('/urls'); 
  // } else {
  //   res.status(401).send('Only authorized user allowed to edit')
  // }
});

// THIS ALWAYS GOES AT THE END BECAUSE THIS CODE STARTS THE APP
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

