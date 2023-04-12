import { App } from "./App.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";


dotenv.config({ path: "./backend/config/config.env" });

connectDB();

App.listen(process.env.PORT, () => {
  console.log(`server is running on port:${process.env.PORT}`);
});
