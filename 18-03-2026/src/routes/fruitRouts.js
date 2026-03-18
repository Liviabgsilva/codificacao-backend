import expresss from 'express';
import {fruitservice} from '../services/fruit.service.js';
const route = expresss.Router();

route.get("/", (req,res) => {
    const dado = fruitservice.getAll()
    res.json(dado)

})

export default route;

//BD> services> routes> server.js> front-end