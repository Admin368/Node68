const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
   res.send("I would like to say");
   res.send("I would like to say");
})

app.listen(port, () => {
   console.log(`App is running at port: ${port}`);
})