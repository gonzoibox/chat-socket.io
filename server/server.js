const express = require('express');
const app = express();

app.listen(7777, '0.0.0.0', () => {
    console.log('Server started on 7777');
});

