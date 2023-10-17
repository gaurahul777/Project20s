const mongoose = require('mongoose');

const url = `mongodb+srv://gaurahul777:gaurahul777@cluster0.w35q4x2.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Database"))
  .catch((e) => console.log("Error", e));
