const mongoose = require("mongoose");
 DbConnection = ()=>{
    mongoose.connect(process.env.DB_URl).then(()=>{
        console.log("Vanakam Da Mapala DB la Erunthu 😷");
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports = DbConnection;