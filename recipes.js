const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js')

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

// First Config: 

const recipeSchema = new Schema({
  title: { type: String, required: true, unique: true },
  level: { type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'] },
  ingredientes: { type: Array },
  cousine: { type: String, required: true },
  dishType: { type: String, enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other'] },
  image: { type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg' },
  duration: { type: Number, min: 0  },
  creator: { type: String },
  created: { type: Date, default: Date.now }
});

let Recipe = mongoose.model('Recipe', recipeSchema);

// Recipe.create({
//   title: 'Pizza de Pepperoni',
//   level: 'Amateur Chef',
//   ingredients: 'Sauce Cheese Pepperoni',
//   cousine: 'Cook the pasta until is done',
//   dishType: 'Snack',
//   image: 'https://cdn.schwans.com/media/images/products/56720-1-1540.jpg',
//   duration: 50,
//   creator: 'Manu de Quevedo'
// }).then((rec) => { console.log('The Recipe is saved and its value is: ', rec.title) })
// .catch((err) => { console.log('An error happened:', err) });

// Recipe.insertMany(data).then((rec) => { console.log('Many saved: ', rec) }).catch((err) => { console.log('An error happened:', err) });

// Recipe.updateOne({ title: "Rigatoni alla Genovese"}, { duration: 100 })
//   .then(() => {
//     console.log('Update');
//   })
//   .catch(() => {
//     console.error('Error');
//   });

Recipe.deleteOne({ title: "Carrot Cake"})
.then(() => {
  console.log('Update');
  mongoose.connection.close();
})
.catch(() => {
  console.error('Error');
});

