const { query } = require('express')
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bellaarose'
  })
module.exports={
    CheckUser:function(username,password){
         return new Promise((resolve,reject)=>{
            // connection.connect();
               let query="select * from Users where Uname='"+username+"' AND securityKey='"+password+"'"
               console.log(query);
               connection.query(query,(err,rows,fields)=>{
                   if(err){
                       reject(err.message)
                   }
                   else{
                       if(rows.length==0){
                           resolve({message:'user does not exists '});
                       }
                       else{
                           resolve(rows[0]);
                       }
                   }
               })
        });
    },

}