
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
    password:{
        type:String,
        required:true,
        minlength:5,
        match:[/^(?=.*[A-Z])(?=.*\d)(?=.*\W)/,
            "password must contain atleast 1uppercase,1special letter and 1number PLZ"

        ]
    }
})
const um = mongo.model("user",users)
 
 module.exports = um;
