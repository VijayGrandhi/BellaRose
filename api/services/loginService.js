const database=require('./databaseService');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
module.exports={
    loginUser:function(username,password){
        return new Promise((resolve,reject)=>{
            console.log("username:"+username);
              database.CheckUser(username,password).then((data)=>{
                console.log(data)
                let response= data.message;
                console.log('response:'+response)
                if(response=='user does not exists '){
                    response=[{
                        token:'',
                        response:'User Does not Exists In The Database',
                        username:username,
                        }];       
                }
                else{
                     var token=this.GenerateJWT({username:username});
                    response=[{
                        token:token,
                        expiresIn: '1800s',
                        username:data.Uname,
                        }];
                }
                resolve(response);
              })    
        })
    },
    GenerateJWT:function(username){

        return jwt.sign(username,process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
    },
    authenticateToken:function(req, res, next) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
      
        if (token == null) return res.sendStatus(401)
      
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
          console.log(err)
      
          if (err) return res.sendStatus(403)
      
          req.user = user
      
          next()
        })
      }
}