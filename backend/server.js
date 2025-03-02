const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());

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
