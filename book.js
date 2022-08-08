var Books = 
[
    {title: "Dom Casmurro", genders: ["Romance", "Psicological"], author: "Machado de Assis", price: 80.5, image: ""},
    {title: "Memórias Póstumas", genders: ["Romance", "Psicological"], author: "Machado de Assis", price: 90.5, image: ""},
    {title: "Fausto", genders: ["Poetry", "Classical"], author: "Johann Wolfgang von Goethe", price: 125.25, image: ""},
    {title: "A Divina Comédia", genders: ["Poetry", "Classical"], author: "Dante Alighieri", price: 125.25, image: ""}
];

Books.forEach(book=>{
    console.log(book.title);
});
