import mongoose from 'mongoose';



const CategorySchema = new mongoose.Schema(
    { 
        categoryName: {
            type: String,
            required: true
        },
        used: {
            type: Number,
            default: 0
        },
    },
    {
        timestamps : true,
    },
);

export const Category = mongoose.model('categories', CategorySchema);