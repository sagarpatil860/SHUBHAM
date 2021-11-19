
function sagar(){let shubham=new Promise(function fetcherfunc(resolve,reject) {
    try {
       let response=fetch('https://jsonplaceholder.typicode.com/todos/1');
      
       resolve(response);
        
    } catch (error) {
       console.log(error.message);
       reject(error.message);
    }
    
});
return shubham;
}
async function callingfunc(){
    try{
    let val=await sagar();
    let data= await val.json();
    await console.log(data);
}
catch(er){console.log(er)}}

callingfunc();




    


