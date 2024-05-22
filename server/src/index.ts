import express from 'express';
import cors from 'cors';
import "dotenv/config"
import { connectDB } from './database/connection';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
connectDB();

app.use("/api/v1/user",userRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});