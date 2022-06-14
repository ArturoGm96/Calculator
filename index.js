const display = (valor) =>{
    document.getElementById("screen").value += valor
}

const igual = () =>{
    if(document.getElementById("screen").value===""){
        document.getElementById("screen").value="0"
    }else{
        document.getElementById("screen").value=eval(document.getElementById("screen").value);
    }
    
}

const cancel = () => {
    document.getElementById("screen").value = "";
}