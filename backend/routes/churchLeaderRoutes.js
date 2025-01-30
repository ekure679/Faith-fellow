// Example route for Church Leader to add members
app.post('/church-leader/add-member', authenticateToken, (req, res) => {
    if (req.user.role !== 'church_leader') return res.status(403).send('Access Denied');
  
    const { name, email, churchId } = req.body;
    const sql = `INSERT INTO members (name, email, church_id) VALUES (?, ?, ?)`;
    db.query(sql, [name, email, churchId], (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('Member added');
    });
  });