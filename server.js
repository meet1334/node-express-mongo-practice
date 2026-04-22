import { config } from "dotenv";
config();
import app from "./src/app";
import { PORT } from "./src/config";
import dbConnection from "./src/db/connection";

dbConnection();

app.listen(PORT || 3000, () => {
  console.log(`Server running on port ${PORT}`);
});
