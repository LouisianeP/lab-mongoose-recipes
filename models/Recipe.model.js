const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    level: {
        type: String,
        enum: ['Easy Peasy','Amateur Chef','UltraPro Chef']
    },
    ingredients: {
        type: [String]
    },
    cuisine: {
        type: String,
        required: true
    },
    dishType: {
        type: String,
        enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other']
    },
    image: {
        type: String,
        default: "https://images.media-allrecipes.com/images/75131.jpg"
    },
    duration: {
        type: Number,
        minimum : 0
    },
    creator: {
        type: String,
    },
    created: {
        type: Date,
        default : Date.now
    },
  

});


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;


mongoose.connect('mongodb://localhost/lab-mongoose-recipes', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: false
})
   .then(() => {
       console.log('successfully connected');
   })
   .catch(err => {
       console.log('an error occurred: ', err);
   })


// Recipe.create({
//     title: 'poires Belle-Hélène',
//     level: 'Easy Peasy',
//     cuisine: 'french',
//     dishType: 'dessert',
//     duration: 60,
//     creator: 'Corentine'
// })
//     .then(recipe => {
//         console.log('this recipe was created: ', recipe);
//     })
//     .catch(err => {
//         console.log(err);
// })


const recipes = require('./data.json');
console.log(recipes)


