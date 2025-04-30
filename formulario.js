function leer() {
	//Referencia por pseudoclase
	var nombre=document.forms["formulario"].elements[0].value; /*el primer elemento en el formulario es el nombre de usuario 
	por ende es el elemento 0*/
	//Referencia por Id
	var clave=document.getElementById("pass").value;
	//Referencia por TagName o etiqueta
	var car=document.getElementsByTagName("select")[0].value;

	document.getElementById("datos").innerHTML=
	"\<br>Nombre: "+nombre+"\<br>Password: "+clave+"\<br>Tu carrera es: "+car;
}