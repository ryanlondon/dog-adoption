require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.listen(process.env.APP_PORT, () => {
	console.info(`Listening on ${process.env.APP_HOST}:${process.env.APP_PORT}`);
});
