const express = require("express");
const env = require("dotenv");
const app = express();
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Routes
// const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')
// const categoryRoute = require('./routes/category')
// const productRoute = require('./routes/product')

//Environment varibale
env.config();

//Mongose connection method
//mongodb+srv://root:<password>@cluster0.g6n3w.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.g6n3w.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }
).then(()=>{
    console.log('MongoDB SuccessFully Connected!!')
});

app.use(express.json());
//usage of routes in actually

// app.use('/api',userRoutes)
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
// app.use('/api',categoryRoute);
// app.use('/api',productRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
