const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema({
    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    email:{
        type: String,
        unique: true,   
        trim: true,    
        validate: {
            validator: function (v) {
                
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: (props) => `${props.value} email is not valid`,
        },
    }
});

const App = mongoose.model('App', AppSchema);
module.exports = App;