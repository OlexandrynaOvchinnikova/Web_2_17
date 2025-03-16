const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs'); // Для хешування паролів
const jwt = require('jsonwebtoken'); // Для створення токенів

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Читання існуючих даних з файлу
const getFormData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('form-data.json', 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      try {
        const parsedData = JSON.parse(data);
        resolve(parsedData);
      } catch (parseError) {
        reject(parseError);
      }
    });
  });
};

// Маршрут для логіну
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await getFormData(); // Отримуємо список користувачів із файлу

    // Шукаємо користувача з таким email
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(400).json({ message: 'Невірний емейл або пароль' });
    }

    // Перевіряємо пароль за допомогою bcrypt
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: 'Помилка при перевірці пароля' });
      }

      if (isMatch) {
        // Якщо пароль правильний, генеруємо JWT токен
        const token = jwt.sign({ email: user.email }, 'your-secret-key', { expiresIn: '1h' });
        return res.json({ message: 'Успішний вхід', token });
      } else {
        return res.status(400).json({ message: 'Невірний емейл або пароль' });
      }
    });
  } catch (err) {
    console.error('Помилка при обробці запиту', err);
    return res.status(500).json({ message: 'Помилка сервера' });
  }
});

// Маршрут для збереження нових даних (реєстрація)
app.post('/save-data', (req, res) => {
  const newData = req.body;

  // Читання існуючих даних з файлу
  fs.readFile('form-data.json', 'utf8', (err, data) => {
    if (err && err.code === 'ENOENT') {
      const formData = [newData];
      fs.writeFile('form-data.json', JSON.stringify(formData, null, 2), (err) => {
        if (err) {
          console.error('Помилка збереження файлу', err);
          return res.status(500).send('Помилка сервера');
        }
        res.send('Дані збережено у form-data.json');
      });
    } else if (err) {
      console.error('Помилка читання файлу', err);
      return res.status(500).send('Помилка сервера');
    } else {
      let existingData;
      try {
        existingData = JSON.parse(data);
      } catch (parseError) {
        console.error('Помилка парсингу файлу', parseError);
        existingData = [];
      }

      if (Array.isArray(existingData)) {
        existingData.push(newData);
      } else {
        existingData = [newData];
      }

      fs.writeFile('form-data.json', JSON.stringify(existingData, null, 2), (err) => {
        if (err) {
          console.error('Помилка збереження файлу', err);
          return res.status(500).send('Помилка сервера');
        }
        res.send('Дані збережено у form-data.json');
      });
    }
  });
});

app.listen(PORT, () => console.log(`Сервер працює на порту ${PORT}`));
