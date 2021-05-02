$(document).ready(function(){

  const cats = [
    {
      name: "Fuffy",
      age: 2.5,
      color: "#964100",
      gender: "female"
    },

    {
      name: "luisito",
      age: 1.5,
      color: "#964100",
      gender: "male"
    },

    {
      name: "chubby",
      age: 2,
      color: "#964100",
      gender: "male"
    },

    {
      name: "pepino",
      age: 3,
      color: "#964100",
      gender: "female"
    }
  ];

  //--------------------
  cats.forEach((cat) => {
    $('#mailes-1 ul').append(listGenerator(cat.color, cat.name));
  })
  
  //----------------------
  const pink ="#ff00e6";
  const blue = "#0084ff";

  const newCats = cats.map((cat) => {
    let color = (cat.gender === "female") ? pink : blue;
    let opacity = cat.age / 10;
    return {
      ...cat,
      ribbon:{
        color,
        opacity
      }
    }
  })
  //---------------------------------

  const femaleCats = newCats.filter((cat) => cat.gender === "female");
  const maleCats = newCats.filter((cat) => cat.gender === "male");

  femaleCats.forEach((cat) => {
    $('#mailes-2-female ul').append(listGenerator(cat.color, cat.name, cat.ribbon.color, cat.ribbon.opacity));
  })

  maleCats.forEach((cat) => {
    $('#mailes-2-male ul').append(listGenerator(cat.color, cat.name, cat.ribbon.color, cat.ribbon.opacity));
  })
  






  function listGenerator(catColor, name, ...ribbon){
    let ribbonTag = "";
    if(ribbon.length > 0){
      ribbonTag = `<i class="fas fa-ribbon"
      style ="color:${ribbon[0]}; opacity:${ribbon[1]}"> </i> `
    }
    let html = `
      <li>
         <i class="fas fa-cat" style ="color:${catColor}"></i>
         ${ribbonTag}
         <span>${name}</span>
      </li>
    `
    return html;
  }
})

