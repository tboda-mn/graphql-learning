import mongoose from "mongoose";
import { ENUM } from "sequelize";

//mongo connection
const mongoDBUrl = 'mongodb://127.0.0.1:27017/thanuj';
mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to mongo db')
    console.error('Error connecting to MongoDB:', error.message);
  });//dbconnection

const widgetSchema = new mongoose.Schema({
        name:{
            type:String
        },
        description:{
            type:String
        },
        price:{
            type:Number
        },
        soldout:{
            type:String
        },
        stores:{
            type:Array
        },
        inventory:{
            type:String
        }
});

const Widgets = mongoose.model('widgets',widgetSchema);//passing model and schema

export { Widgets };