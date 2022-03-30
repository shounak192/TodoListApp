const app= require("express")();
const Mongoose= require("mongoose");
const bodyParser= require("body-parser");
const cors = require('cors');
app.use(cors());

const dotEnv=require('dotenv');
dotEnv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true })
    );

const routing= require("./routes/route");

Mongoose.connect(process.env.DATABASE_URL)
.then(()=>{console.log("connected to mongodb")})
.catch(err=>{console.log(err)});

app.use("/",routing );
const port= process.env.PORT || 3000;
app.listen(port,()=> {console.log(`server is running on port: ${port}`)});

