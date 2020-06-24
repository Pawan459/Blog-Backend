const Blog = require('../../databaseModels/blogSchema');

const updateBlogViews = (req, res) => {
    const blogId = req.params.id;
    
    Blog.updateOne(
        {_id: blogId}, 
        {$set: { views: req.body.views + 1}},
        (err, updatedBlog) => {
            if(err){
                console.log('Error in Updating blog',err);
                return res.status(500).json({
                    message: "Facing Error PLease Try again after some time",
                });
            }
            return res.status(200).json({
                message: "Views Updated Succesfully"
            });
        }
    )
}

module.exports = updateBlogViews;