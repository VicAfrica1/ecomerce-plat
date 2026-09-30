import mongoose from 'mongoose';
import User from './src/models/user.model.js';
import bcrypt from 'bcryptjs';
await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce');
const hash = await bcrypt.hash('vickyfrosh070460', 10);
await User.findOneAndUpdate({ email: 'onwuyivictor26@gmail.com' }, { $set: { name: 'Admin', email: 'onwuyivictor26@gmail.com', passwordHash: hash, role: 'admin', avatar: null } }, { upsert: true, new: true });
console.log('Admin created/updated');
await mongoose.disconnect();
