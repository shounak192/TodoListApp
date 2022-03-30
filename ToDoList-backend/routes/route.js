const router= require("express").Router();
const todocontroller= require("../controllers/todocontroller");

router.get("/", todocontroller.getpendingtodos);
router.post('/addtodo', todocontroller.addtodo);
router.put('/completetodo/:id', todocontroller.completetodo);
router.get('/getcompletedtodos', todocontroller.getcompletedtodos);
router.patch('/edittodo/:id', todocontroller.edittodo);
router.delete('/deletetodo/:id', todocontroller.deletetodo);

module.exports= router;
