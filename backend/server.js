import app from "./app.js";
import cloudinary from "cloudinary"
import dbConnection from "./database/dbConnection.js";

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
})

// dbConnection()
//     .then(() => {
//         app.on("error",(error) => {
//             console.log("ERROR: ",error);
//             throw error
//         })

//         app.listen(process.env.PORT || 8000, () => {
//             console.log(`Server is running at port ${process.env.PORT}`);
//         })
//     })
//     .catch((err) => {
//         console.log("momgo db connection failed !!",err);
//     })