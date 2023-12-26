require("dotenv").config()

const config = {
    app:{
        port: process.env.PORT || 8800    
    },
    url:{
        dburl: process.env.DB_URL || "mongodb://127.0.0.1:27017/backend_express_practice"
    }
}

module.exports = config