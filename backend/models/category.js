import mongoose from 'mongoose';

const url = "mongodb+srv://trongkami:Trongvip123!@cluster0.zee12.mongodb.net/web_enterprise?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true
}
await mongoose.connect(url,connectionParams)

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