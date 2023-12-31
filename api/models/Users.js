import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        default: null
    },
    isAdmin:{
        type: Boolean,
        default: true,
    },
    isDoctor:{
        type: Boolean,
        default: true,
    }
    
}, {timestamps: true})

export default mongoose.model('User', UserSchema);
