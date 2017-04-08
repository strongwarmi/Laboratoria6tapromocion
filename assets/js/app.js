window.addEventListener('load',function(){
var coders= [    {name:"Fiorella Quispe", url:"1.png"},{name:"Lourdes Vilchez", url:"2.png"},{name:"Leydi Maldonado", url:"3.png"},
                        {name:"Miriam Mendoza", url:"5.png"},{name:"Elizabeth Condori", url:"6.png"},{name:"Arantza Burga", url:"7.png"},
                        {name:"Grecia Rayme", url:"8.png"},{name:"Janine Vega", url:"9.png"},{name:"Rosario Felix", url:"10.png"},
                        {name:"Jenny Velasquez", url:"12.png"},{name:"Nadia Cuadros", url:"13.png"},{name:"Michell More", url:"14.png"},
                        {name:"Marilu Llamoca", url:"15.png"},{name:"Mariel Garcia", url:"16.png"},{name:"Fiorella Cisneros", url:"17.png"},
                        {name:"Geraldine Chauca", url:"18.png"},{name:"Yelitza Choque", url:"19.png"},{name:"Stephanie Hiyagon", url:"20.png"},
                        {name:"Rocio Emma Tapia", url:"21.png"},{name:"Danna Franco", url:"22.png"},{name:"Flor Retamozo", url:"23.png"},
                        {name:"Nathaly Pacheco", url:"24.png"},{name:"Erika Vidal", url:"25.png"},{name:"Katherine Ortega", url:"26.png"},
                        {name:"Brilly Majuan", url:"27.png"},{name:"Flor de cantuta Tello", url:"28.png"},{name:"Leslie Avendaño", url:"29.png"},
                        {name:"Cindy Mendoza", url:"30.png"},{name:"Annia Flores", url:"31.png"},{name:"Betzi Loayza", url:"32.png"},
                        {name:"Aida Sulca", url:"33.png"},{name:"Mimi Gutierrez", url:"34.png"},{name:"Nakarid Jave", url:"35.png"},
                        {name:"Angie Condor", url:"36.png"},{name:"Maia Rojas", url:"37.png"},{name:"Ariana Cabana", url:"38.png"},
                        {name:"Flor Condori", url:"39.png"},{name:"Mitchell Rodriguez", url:"40.png"},{name:"Naomi Villanueva", url:"41.png"},
                        {name:"Mary Catillo", url:"42.png"},{name:"Miriam Peralta", url:"43.png"},{name:"Karin Alejo", url:"44.png"},
                        {name:"Liliana Peña", url:"45.png"},{name:"Ruth Salvador", url:"46.png"},{name:"Wendy Reyes", url:"48.png"},
                        {name:"Maria Grecia", url:"50.png"},{name:"Ana Durand", url:"51.png"},{name:"Glisse Jorge", url:"52.png"},
                        {name:"Neiza Nuñez", url:"53.png"},{name:"Sandra Solorzano", url:"54.png"}];

var listado = document.getElementById("ListaCoders");
function CreaListado(){
  coders.forEach(function(alumna){
    var directorio = "assets/img/6LimaPeru/" + alumna.url;
    //var file = alumna.NameFile+alumna.TypeFile;
    //  console.log(directorio);
    //  console.log(file);
  //  if (directorio == seleccionado) {
      var cajita = document.createElement('div');
      cajita.className= "ContenedorFoto";
      var img = document.createElement('img');
      img.className="fotografia";
      img.setAttribute("src",directorio);
      var overlay = document.createElement('div');
      overlay.className="overlay";

      var nombre = document.createElement('span');
      nombre.className="nombre";
      var msj = document.createTextNode(alumna.name);
      nombre.appendChild(msj);
      overlay.appendChild(nombre);
      cajita.appendChild(img);
      cajita.appendChild(overlay);
      listado.appendChild(cajita);
    //}
  });
}
CreaListado();
});
