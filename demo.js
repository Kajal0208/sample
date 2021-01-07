const express= require("express");

const app =express();
app.use(express.json());
let students=[
    {id:"1",name:"a"},
    {id:"2",name:"b"},
    {id:"3",name:"c"},
    {id:"4",name:"d"},
]

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.get('/students',(req,res)=>{
    res.send(students);
})

app.post('/students',(req,res)=>{
    let name= req.body.name;
    let student={
        id:students.length+1,
        name:name
    }
    students.push(student);
    res.send(student);
})

app.put('/students/:id',(req,res)=>{
    let name= req.body.name;
    students.find((e)=>{
        if(e.id==+req.params.id)
        {
            e.name=name;
            res.send(e);
        }
    })
    res.status("not found").send();
})

app.delete('/students/:id',(req,res)=>{
    let index=students.findIndex((el) =>{
        if(el.id== req.params.id){
            return true;
        }
    })
    if(index< 0)
    {
        res.status(404).send('not found');
    }
    let student =students[index];
    students.splice(index,1);
    res.send(student);
})
app.listen(3000,()=>{
    console.log("listening to the port"); 
})