import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "PORTFOLIO"
    }).then(() => {
        console.log("Connected to database");
    }).catch((error) => {
        console.log(`Some error occured while connecting database: ${error}`);
    })
}

// const dbConnection = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/portfolio`)
//         console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("mongodb conection error ", error);
//         process.exit(1)
//     }
// }

export default dbConnection