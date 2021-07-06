const app = require('./src/app');

APP_PORT = 3000;

app.listen(APP_PORT, () => console.log(`App running on ${APP_PORT}`));