const Image = require('../../databaseModels/imageSchema');
const Blog = require('../../databaseModels/blogSchema');

const createBlog = async (req, res) => {

    /*
        Make Sure to make your input field name as uploaded_file
        and form enctype = multipart/formdata
    */

    const files = req.files.uploaded_file;
    if(!files.length){
        const currImage = new Image({
          name: files.name,
          imageFile: files.data,
          imageType: files.mimetype,
        });

        await currImage.save((err, savedImage) => {
            if(err){
                console.log('Error in createBlog',err);
                return res.status(500).json({
                    message: "Facing Error in saving file"
                })
            }
            console.log('file saved successfully', savedImage);
        });


        // Creating and saving blog in 
        const currBlog = new Blog({
            image: currImage,
            tittle: req.body.tittle,
            markdown: req.body.markdown
        })

        currBlog.save((err, savedBlog)=>{
            if(err){
                console.log("Facing error in createBlog currBlog",err);
                return res.status(500).json({
                    message: "Facing error, Please Try again Later"
                });
            }
            return res.status(200).json({
                message: "Blog Created Succesfully",
                data: currBlog
            })
        })
        
    }
    else{
        return res.status(404).json({
            message: "Multiple Images are not allowed"
        })
    }
}

module.exports =  createBlog;