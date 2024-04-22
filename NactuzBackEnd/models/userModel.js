import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    isTeacher: {
        type: Boolean,
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email already in use'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'phone number is required'],
        unique: [true, 'phone number already in use']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minLength: [8, 'password must be at least 8 characters']
    }
}, { timestamps: true })
const User = mongoose.model('User', userSchema);

export default User;

