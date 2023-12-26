require("dotenv").config()

const dev = {
    app:{
        port: process.env.PORT || 8800    
    },
    url:{
        dburl: process.env.DB_URL || "mongodb://127.0.0.1:8800/backend_express_practice"
    }
}

module.exports = dev