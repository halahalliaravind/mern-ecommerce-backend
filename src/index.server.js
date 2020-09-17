const express = require("express");
const env = require("dotenv");
const path = require("path");
const app = express();
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cors = require("cors");

//Routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const initialDataRoutes = require("./routes/admin/initialData");

//Environment varibale
env.config();

//Mongose connection method
//mongodb+srv://root:<password>@cluster0.g6n3w.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.g6n3w.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("MongoDB SuccessFully Connected!!");
  });

app.use(express.json());
//Handling cors issue
app.use(cors());
// expose some API endpoints to browser
app.use("/public", express.static(path.join(__dirname, "uploads")));

//usage of routes in actually
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", initialDataRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
