const express = require("express");
const dotenv = require("dotenv");
const { chats} = require("./datafolder/data")
const  cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const userRoutes = require("./routes/userRoute")
const chatRoutes = require("./routes/chatRoute")
const messageRoutes = require("./routes/messageRoute")
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();
app.use(express.json())
connectDB();
app.use(cors());
app.use(express.json());


// app.get("/",(req,res)=>{
//     res.send("Api is running")
// })

app.use("/api/user",userRoutes);
app.use("/api/chat",chatRoutes);
app.use("/api/message",messageRoutes);
app.use(notFound);
app.use(errorHandler);


const port = process.env.PORTNUMBER || 5000;

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})