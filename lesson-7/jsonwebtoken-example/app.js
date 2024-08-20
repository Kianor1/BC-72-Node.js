import jwt from "jsonwebtoken";
import "dotenv/config";

const {JWT_SECRET} = process.env;

const payload = {
    id: "66c4b62f2c830146dab255fb"
};

const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "24h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const {id} = jwt.verify(token, JWT_SECRET);
    // console.log(id);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzRiNjJmMmM4MzAxNDZkYWIyNTVmYiIsImlhdCI6MTcyNDE2ODQyOSwiZXhwIjoxNzI0MjU0ODI5fQ.fuBWXX0q4XOflXww-xQsVNirdDyefKpFrVK8LOllYSO";
    jwt.verify(invalidToken, JWT_SECRET);   
}
catch(error) {
    console.log(error.message);
}