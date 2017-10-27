import recipes from '../model/recipe';

class Recipe {

  static getRecipe(req, res) {
    return res.json({
      recipes
    });
  }
  
  static createRecipes(req, res) {
    recipes.push({
      id: recipes.length + 1,
      title: req.body.title,
	  details: req.body.details,
      ingredients: req.body.ingredients,
      upvotes: 0,
      downvotes: 0,
      favorited: 0,
      views: 0,
    });
    return res.json({
      message: 'success',
      error: false
    });
  }
  
  static updateRecipes(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
       recipes[i].title = req.body.title;
        recipes[i].details = req.body.details;
        recipes[i].ingredients = req.body.ingredients;
        return res.json({
          recipes,
          message: 'success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
      error: true
    });
  }

  static removeRecipes(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        recipes.splice(i, 1);
        return res.json({
          message: 'success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
      error: true
    });
  }
 
  static retrieveRecipes(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        return res.json({
          recipes: recipes[i],
          message: 'success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
      error: true
    });
  }
    static addReview(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        console.log(recipes);
        recipes[i].reviews.push(req.body.reviews);
        return res.json({
          recipes,
          message: 'success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
      error: true
    });
  }
}

export default Recipe;
