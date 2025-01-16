import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://it21831690:20001102@cluster0.m6kqu.mongodb.net/food-del').then(()=>console.log('DB connected'));
};