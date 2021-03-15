const express = require('express');

const PORT = 9999;
const app = express();

require('./config/mnogoose')();
require('./config/express')(app);

require('./routes/note.routes')(app);
require('./routes/auth.routes')(app);

app.listen(PORT, console.log(`Server is listeing on ${PORT}...`));