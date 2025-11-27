import jwt from 'jsonwebtoken'

const userauth = async (req, res, next) => {
  const token  = req.headers.token;

  if (!token) {
    return res.json({
      success: false,
      message: "Not authorized, Login Again"
    });
  }

  try {
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokendecode) {
      req.body.userid = tokendecode.id;   
      return next();               
    }

    return res.json({
      success: false,
      message: "Not Authorized"
    });

  } catch (error) {
    console.log(error.message);
    return res.json({
      success: false,
      message: error.message
    });
  }
};

export default userauth;