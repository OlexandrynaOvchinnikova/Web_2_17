const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

const filePath = path.join(__dirname, '../backend/form-data.json');


app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Помилка читання файлу:', err.message);
      return res.status(500).json({ message: 'Помилка на сервері (не вдалося прочитати файл)' });
    }

    try {
      const users = JSON.parse(data);
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        return res.status(200).json({ token: 'fake-jwt-token' });
      } else {
        return res.status(401).json({ message: 'Невірні дані для входу' });
      }
    } catch (parseError) {
      console.error('Помилка парсингу JSON:', parseError.message);
      return res.status(500).json({ message: 'Помилка на сервері (невалідний JSON)' });
    }
  });
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
