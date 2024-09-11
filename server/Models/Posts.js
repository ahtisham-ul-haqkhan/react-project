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
    }
});

// Export the model
export default mongoose.model("Post", postSchema);
