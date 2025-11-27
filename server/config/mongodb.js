import mongoose from 'mongoose'
async function connectDB() {
    mongoose.connection.on('connected',()=>{
        console.log('database connectd');
        
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`)
}
export default connectDB