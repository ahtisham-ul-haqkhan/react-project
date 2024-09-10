import Post from "../Models/Posts";

export const postView = async (req,res) => {

    try {
        const createPost = new Post (req.body);
        await createPost.save();

    } catch (error) {
        return res.status(500).json({ error});
    }
}