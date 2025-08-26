
const mongo = require("mongoose")

const users = new mongo.Schema({
email:{type:String,
    required:true,
    match:[ /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ,
        "invalid email TRY ANOTHER ONE"
    ]
},
    username:{type:String,
        required:true,
        minlength:3,
    },
    password:String
})
const um = mongo.model("user",users)
 
 module.exports = um;
