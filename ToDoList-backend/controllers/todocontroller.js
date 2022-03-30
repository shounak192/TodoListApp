/*jshint esversion: 6 */

const Post= require("../models/post");



exports.getpendingtodos= async(req,res) => {
    const pendingtodos= await Post.find({complete:false});

    return res.status(200).json({
        pendingtodos
    });
};






exports.addtodo= async(req,res) => {

    if(!req.body.name){
        res.status(400).json({
            error:"name is required"
        });
    }

    const todos= await Post.find({});

    if(todos.length==0) {
        maxId=0;    
    } else {
        maxId= Math.max.apply(Math, todos.map(t=> {return t.id}));
    }
    const id= maxId+1;
    const name= req.body.name;
    
    const newtodo= new Post({
        _id:id,
        name:name,
        complete:false
    });

    await newtodo.save();
    // return res.json(savedPost);
    return this.getpendingtodos(req,res);
};





exports.completetodo= async(req,res) => {
    const updated_id= req.params.id;
    await Post.findByIdAndUpdate(updated_id, {$set :{"complete":true}});
    // res.json({donetodo});
    return this.getpendingtodos(req,res);
};




exports.getcompletedtodos= async(req,res) => {
    const completedtodo= await Post.find({complete:true});

    return res.status(200).json({
        completedtodo
    });
};




exports.edittodo= async(req,res) => {
    const id= req.params.id;
    const editedtodo= await Post.findOneAndUpdate({id:id}, {$set: {name:req.body.name}});
    return res.json({editedtodo});
};



exports.deletetodo= async(req,res) => {
    const delete_id= req.params.id;
    await Post.findByIdAndDelete(delete_id).catch(err=>{res.json({"status":"id not found"})});
    // console.log(res.json({deletedtodo}));
    // const alltodos= await Post.find({});
    return this.getpendingtodos(req,res);
    
};




