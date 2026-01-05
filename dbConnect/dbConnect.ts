import mongoose from 'mongoose'


export async function connect() {
    try {

        const dbConnection = await mongoose.connect(process.env.MONGO_URL!)

        dbConnection.connection.on("connected", () => {
            console.log("Database Connection successful");
            
        })

        dbConnection.connection.on("error", () => {
            console.error("Database connection Initialed but Failed")
        })

        
        
    } catch (error) {
        console.error("Database Connection Failed", error)
    }
}