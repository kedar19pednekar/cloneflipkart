import mongoose from 'mongoose';

const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerceweb.5kf5z.mongodb.net/PROJECT0?retryWrites=true&w=majority`;

    try{
    await mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false});
    console.log('Database Connected Successfully');
    }catch(error){
        console.log('Error:',error.message);
    }
} 
export default Connection;


