const express = require("express");
const path = require('path')
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/style', (req, res) => {
  res.sendFile(path.join(__dirname, '../style.css'))
})



//show a random fortune when fortune button is pushed
app.get('/api/fortunes', function (req, res) { 
  const fortunes = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Dont count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
  ]
  //randonly select the fortune to display
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  res.status(200).send(randomFortune);
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
