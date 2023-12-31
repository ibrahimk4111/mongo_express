require("dotenv").config()

const dev = {
    app:{
        port: process.env.PORT || 8800    
    },
    url:{
        dburl: process.env.DB_URL
    }
}

module.exports = dev