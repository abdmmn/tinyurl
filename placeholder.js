//--------10------POST /login
app.post('/login', (req, res) => {
  const user_id = getUserByEmail(req.body.email, users)
  // if (!req.body.email || !req.body.password || !user_id) {
  //   return res.status(400).send("Invalid Email or Password. <a href= '/register'> Return to Login Page <a>")
  // }
  // if (!bcrypt.compareSync(req.body.password, users[user_id].password)) {
  //   return res.status(400).send("Invalid credentials. <a href= '/login'> Return to Login Page <a>")
  // } else {
    req.session.user_id = user_id;
    res.redirect('/urls');
  // }
})