const app = require('./src/app');

APP_PORT = 3000;

app.post('/cats', (req, res) => {
    res.status(201).json(req.body);
});

app.listen(APP_PORT, () => console.log(`App running on ${APP_PORT}`));