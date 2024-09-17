import mongoose from "mongoose";

// Define the schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,  // Corrected "require" to "required"
    },
    description: {
        type: String,
        required: true,  // Corrected "require" to "required"
    },
    auth_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth',
        required: true,
    }
});

// Export the model
export default mongoose.model("Post", postSchema);
