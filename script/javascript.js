$(document).ready(function(){

  const cats = [
    {
      name: "Fuffy",
      age: 2.5,
      color: "red",
      gender: "female"
    },

    {
      name: "luis",
      age: 1.5,
      color: "red",
      gender: "male"
    },

    {
      name: "chubby",
      age: 2,
      color: "blue",
      gender: "male"
    },

    {
      name: "pepino",
      age: 3,
      color: "red",
      gender: "female"
    }
  ];

  cats.forEach((cat) => {
    console.log(cat);
  })
  
})