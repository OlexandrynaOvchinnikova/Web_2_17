const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Для парсингу JSON-запитів

// Логіка для логіну
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Зчитуємо файл users.json
  fs.readFile(path.join(__dirname, 'users.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Помилка на сервері' });
    }

    const users = JSON.parse(data); // Парсимо JSON дані з файлу
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      // Якщо користувач знайдений, генеруємо токен (або використовуємо фіксований для тесту)
      const token = 'fake-jwt-token';  // Для тесту використовуйте простий фіксований токен
      return res.status(200).json({ token }); // Відправляємо токен
    } else {
      return res.status(401).json({ message: 'Невірні дані для входу' }); // Невірний логін/пароль
    }
  });
});

// Стартуємо сервер
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
