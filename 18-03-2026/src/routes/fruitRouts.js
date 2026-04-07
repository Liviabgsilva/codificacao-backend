import expresss from 'express';
import {corservice} from '../services/cor.service.js';
const route = expresss.Router();

route.get("/", (req,res) => {
    const dado = corservice.getAll()
    res.json(dado)

})

export default route;

//BD> services> routes> server.js> front-end