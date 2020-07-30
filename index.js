var database = firebase.database();
var datos = database.ref('datos/');
datos.once('value',function(snapshot){
    var info = snapshot.val()

    console.log('a '+info)
    $(".apellido").text("Apellido:"+info.apellido)
    $(".mail").text("Mail:"+info.mail)
    $(".formacion").text("Formacion:"+info.formacion)
    $(".nombre").text("Nombre:"+info.nombre)  
    $(".telefono").text("Telefono:"+info.telefono)  
});