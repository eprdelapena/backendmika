import express from "express"; // 1. import express
import router from "./routes/routes"; // Import your routes
import instanceConnection from "./config/database";

instanceConnection.connectDB();
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded bodies

const port = process.env.PORT || 3000; // Specify a port
app.use("/", router); // Use your router for handling requests

app.listen(port, () => console.log(`Server is running on port ${port}`)); // Start the server

process.on("SIGINT", instanceConnection.disconnectDB); // Ctrl + C