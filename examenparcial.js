function multiplicar(){
    var n1=document.getElementById("auto").value;
    var n2=document.getElementById("horas").value;
    var res=parseInt(n1)*parseInt(n2);
    document.getElementById("resultado").innerHTML=res;
}