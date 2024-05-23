const jwt = require("jsonwebtoken");
const sessionIdToUserMap = new Map();
const secret = "vishal$123@$";

// function setUser(id , user) {
//     sessionIdToUserMap.set(id , user);
// }

function setUser(user){
    return jwt.sign({
    _id: user._id,
    email: user.email,


    }, secret);
}

function getUser(token) {
    //return sessionIdToUserMap.get(id)
if(!token) return null;
      try {
        return jwt.verify(token , secret);
        
     }catch(error){
        return null;
      }
 
}

module.exports = {
    setUser,
    getUser,

};