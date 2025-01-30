// User signup
app.post('/signup', async (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const sql = `INSERT INTO users (username, password, role) VALUES (?, ?, ?)`;
    db.query(sql, [username, hashedPassword, role], (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('User registered');
    });
  });