const { getUser } = require("../service/auth");

function checkForAuthentication(req , res , next) {
      
  const tokenCookie= req.cookies?.token;
    req.user = null;

  if(!tokenCookie)
    return next();

  const token = tokenCookie;

  const user = getUser(token);

  req.user = user;
  return next();

}

function restrictTo(roles = []){
      return function(req , res, next){
        if(!req.user)  return res.redirect("/login");
        

        if(!roles.includes(req.user.role)) return res.end("UnAuthorized");

        return next();
      };
}



// async function restrictToLoggedinUserOnly(req, res, next) {
//   const userUid = req.headers["authorization"];
//   console.log(req.headers);
//   if (!userUid) return res.redirect("/login");
       
//   const token = userUid.startsWith("Bearer ") ? userUid.split("Bearer ")[1] : null;
//   if (!token) return res.redirect("/login");

//   const user = await getUser(token);
  
//   if (!user) return res.redirect("/login");

//   req.user = user;
//   next();
// }

// async function checkAuth(req, res, next) {
//   const userUid = req.headers["authorization"];

  
//   if (!userUid) {
//     req.user = null;
//     return next();
//   }

//   const token = userUid.startsWith("Bearer ") ? userUid.split("Bearer ")[1] : null;
//   if (!token) {
//     req.user = null;
//     return next();
//   }

//   const user = await getUser(token);
//   req.user = user;
//   next();
// }

module.exports = {
  // restrictToLoggedinUserOnly,
  // checkAuth,
  checkForAuthentication,
  restrictTo,
};
