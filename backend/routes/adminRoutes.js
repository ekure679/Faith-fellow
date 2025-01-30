// Admin route to add a church
app.post('/admin/add-church', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).send('Access Denied');
  
    const { name, address } = req.body;
    const sql = `INSERT INTO churches (name, address) VALUES (?, ?)`;
    db.query(sql, [name, address], (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('Church added');
    });
  });

  // Example route for data visualization (Admin)
app.get('/admin/subscription-revenue', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).send('Access Denied');
  
    const sql = `SELECT month, revenue FROM subscriptions`;
    db.query(sql, (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  });