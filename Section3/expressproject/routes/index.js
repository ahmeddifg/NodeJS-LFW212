const {Router} = require("express");
const router = Router();

const content=`
<html>
<head>
  <style>
   body { background: #333; margin: 1.25rem }
   a { color: yellow; font-size: 2rem; font-family: sans-serif }
  </style>
</head>
<body>
  <a href='/hello'>Hello</a>
</body>
</html>
`;

router.get("/",(req,res)=>{
   res.statusCode=200; 
   res.send(content);
});

module.exports= router;