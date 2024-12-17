const express=require('express');
const router=require("./Router/AuthRouter")


const app=express();
PORT=8000;

app.use(express.json());

app.use("/register",router)
app.use("/login",router)



app.listen(PORT, ()=> console.log(`Server started at ${PORT}`));


