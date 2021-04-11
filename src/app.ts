import express from 'express';
import morgan = require('morgan');

// Create Express server
const app = express();
const httpLogFormat =
  ':remote-addr - :req[username] [:date[clf]]' +
  '":method :url HTTP/:http-version" :status :res[content-length] ' +
  '":referrer" ":user-agent" (:response-time ms) :req[header]';

app.use(
  morgan(httpLogFormat, {
    stream: {
      write: (message: any) => console.log(message),
    },
  })
);

app.set('port', process.env.PORT || 3000);

app.get('/ping', (req, res, next) => res.status(200).send());

export default app;
