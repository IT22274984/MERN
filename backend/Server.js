const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const taskRoutes = require("./routes/taskRoute");
const faqRoute = require("./routes/faqRoute");
const cors = require("cors");
// const config = require('config');

//middle ware
app.use((req, res, next) => {
  console.log("path" + req.path + "method" + req.method);
  next();
});

app.use(express.json());

app.use(cors());

//  app.get("/",(req,res)=>{
//      res.send("Hello Pilot asho");
//  });

//db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("DB connected Successfully listening to " + process.env.PORT);
    });
  })
  .catch((error) => console.log(error));

app.use("/api/tasks", taskRoutes);
app.use("/api/faq", faqRoute);

// FAQs
// const PORT = config.get('port_2') || 5000;

// app.use(cors(
//   {
//     credentials: true,
//     origin: config.get('client_url')
//   }
// ));
// app.use(express.json());
// app.use('/api', require('./router/index'));

// const start = async () => {
//   try {
//     await mongoose.connect(process.env.DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     app.listen(PORT_2, () => console.log(`Server has been started on port ${PORT_2}...`));

//   } catch (e) {
//     console.log('Server error', e.message);
//     process.exit(1);
//   }
// }

// start();
