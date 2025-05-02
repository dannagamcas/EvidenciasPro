function leer() {
	//Referencia por pseudoclase
	var nombre=document.forms["formulario"].elements[0].value; /*el primer elemento en el formulario es el nombre de usuario 
	por ende es el elemento 0*/
	//Referencia por Id
	var clave=document.getElementById("pass").value;
	//Referencia por TagName o etiqueta
	var car=document.getElementsByTagName("select")[0].value;
	//Referencia por Name
	var gen=document.getElementsByName("genero");
	var i,g; //Se pueden declarar o no, pero lo correcto es que si
	for(i=0;i<gen.length;i++){
		if (gen[i].checked){
			g=gen[i].value;
		}
	}
	//Referencia por Id
	var p=document.getElementById("privacidad").checked;


	document.getElementById("datos").innerHTML=
	"\<br>Nombre: "+nombre+
	"\<br>Password: "+clave+
	"\<br>Tu carrera es: "+car+
	"\<br>Genero: "+g+
	"\<br>Aceptó el acuerdo: "+p;

}