const Joi =require("joi"); // it returns the class joi
const express = require ("express");


const app= express();
app.use(express.json());
let customers =[
    {id:"1" , product:"a"},
    {id:"2" , product:"b"},
    {id:"3" , product:"c"},
    {id:"4" , product:"d"},

]
app.get('/customer',(req,res)=>{
  res.send(customers);
})
app.post('/customer',(req,res)=>{

    const schema ={
        product: Joi.string().min(3).required()
    };
    const result=Joi.validate(req.body,schema);// it returns an object
    console.log(result);
    let product= req.body.product;

    let customer={
        id:customers.length+1,
        product:product
    }
    customers.push(customer);
    res.send(customer);
})
app.put('/customer/:id',(req,res)=>{
    let product =req.body.product;
    customers.find((e)=>{
        if(e.id==+ req.params.id)
        {
            e.product=product;
            res.send(e);
        }
        res.status(404).send("not found");
    })
})
app.delete('/customer/:id',(req,res)=>{
    let index=customers.findIndex((el) =>{
        if(el.id== req.params.id){
            return true;
        }
    })
    if(index< 0)
    {
        res.status(404).send('not found');
    }
    let customer =customers[index];
    customers.splice(index,1);
    res.send(customer);
})
app.listen(3000,()=>{
    console.log("Listening to the port 3000");
})
