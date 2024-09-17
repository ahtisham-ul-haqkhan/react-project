import Post from "../Models/Posts.js";
import Auth from "../Models/Auth.js";

export const postView = async (req, res) => {
    try {
        const createPost = new Post(req.body);

        
        if(!createPost){
            return res.status(404).json({msg: "Post data not found"});
        }
        const createData = await createPost.save();

        res.status(201).json({
            message: "Post created successfully",
            data: createData
        });
    } catch (error) {
        res.status(500).json({ error: error.message || error
        });
    }
};


export const allPostView = async (req, res) => {
    try {
        const viewPost = await Post.find();
    res.status(200).json(viewPost);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


export const onePostView = async (req, res) => {
    try {
        const id = req.params.id;
        const exitsPost = await Post.findById(id).populate('auth_id');
        if(!exitsPost){
            return res.status(404).json({msg: "Post not found"});
        }

        res.status(200).json(exitsPost);
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


export const postDelete = async (req,res) => {
    try {
        const id = req.params.id;
        const postDelete = await Post.findById(id);
        await Post.findByIdAndDelete(id);

        res.status(200).json({msg: 'Post delete succesfully'});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const postUpdate = async (req,res) => {
    try {
        const id = req.params.id;
    const existePost = await findById(id);

    if(!existePost) {
        return res.status(404).json({ msg: 'Post not exits'});
    }

    const updateData = await  Post.findByIdAndUpdate(id, req.body, {new: true});
    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
}