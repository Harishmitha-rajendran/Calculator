clearInput = () => inp.value="";

display = (x) => inp.value+=x;

del = () =>{
    inp.value =inp.value.slice(0, -1);
}

calculate = () => {
    try{
        inp.value=eval(inp.value);
    }
    catch(e)
    {
        alert("Invalid Operation Performed!!!");
    }
}
