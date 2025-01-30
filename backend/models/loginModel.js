// User login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    const sql = `SELECT * FROM users WHERE username = ?`;
    db.query(sql, [username], async (err, results) => {
      if (err) return res.status(500).send(err);
      if (results.length === 0) return res.status(404).send('User not found');
  
      const user = results[0];
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(403).send('Invalid credentials');
  
      const token = jwt.sign({ id: user.id, role: user.role }, 'SECRET_KEY');
      res.json({ token });
    });
  });