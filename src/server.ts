import { config } from "dotenv";
config();
import app from "./app";
import { PORT } from "./config";
import dbConnection from "./db/connection";

dbConnection();

app.listen(PORT || 3000, () => {
  console.log(`Server running on port ${PORT}`);
});
