const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const PORT = 8000;
require('./db.cjs')

app.use(bodyParser.json());
app.use(cors());

const authRoutes = require('./routes/auth.cjs'); 
app.use('/api', authRoutes);

app.get('/', (req, res)=>{
  res.json({message:'THE API IS WORKING'});
})

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`);
})


