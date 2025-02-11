import cookieParser from 'cookie-parser';
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';
import messageRoutes from './routes/message.route.js'
import cors from "cors"
import { app, server } from './lib/socket.js';
dotenv.config();
import parth from "path";
const PORT = process.env.PORT;
const __dirname =path.resolve();
// Add cookie-parser middleware to parse cookies
app.use(cookieParser());

// Middleware to parse JSON
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// Use auth routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
if(process.env.NODE_ENV==="production"){
  app.use(express.static(patj.join(__dirname,"../frontend/dist")))
app.get(("*",(req,res)=>{
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
}))
}
server.listen(PORT, () => {
  console.log('Server is running on port:' + PORT);
  connectDB();
});
