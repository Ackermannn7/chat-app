import e from 'express';
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToDB from './db/connectToDB.js';

const app = e();
const PORT = process.env.PORT || 5000;

configDotenv();
app.use(e.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  connectToDB();
  console.log(`Server running on port ${PORT}`);
});
