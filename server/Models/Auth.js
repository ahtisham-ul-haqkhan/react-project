import express from "express"
import mongoose  from "mongoose";

const AuthSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
    }
});

export default mongoose.model("Auth", AuthSchema);