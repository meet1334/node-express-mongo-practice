require("dotenv").config();
const app = require("./src/app");
const { PORT } = require("./src/config");
const connectDB = require("./src/config/db");

const PORT = PORT|| 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
