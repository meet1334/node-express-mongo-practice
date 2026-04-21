require("dotenv").config();
const app = require("./src/app");
const { PORT } = require("./src/config");
const dbConnection = require("./src/config/db");

const PORT = PORT|| 3000;

dbConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
