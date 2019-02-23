const proxy = require("http-proxy-middleware");

module.exports=(app)=>{
    app.use("/api",proxy({
        target:"https://m.wconcept.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
    
}