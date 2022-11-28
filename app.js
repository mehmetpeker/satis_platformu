const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) =>{
    const response = {
        name : "Mehmet",
        surname : "Peker"
    }
    res.send(response)
});

app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatıldı`);
});
