///start
//requiring joi
const joi = require("joi")

const validation =  data=>{
const schema = joi.object({
    email:joi.string
    .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/ )
    .required(true),
    username:joi.string
    .min(3)
    .required(true),
password : joi.string()
.min(5)
.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*\W)/)
.required()
.unknown(true)
})

return schema.validate(data)

}
module.exports.validation=validation