// app.js

const data = {
    featuredRecipe: {
        name: "Featured Recipe",
        ingredients: ["Ingredient 1", "Ingredient 2"],
        steps: ["Step 1", "Step 2"]
      },
    
    category1: {
      name: "Category 1", 
      recipes: [
        {
          name: "Recipe 1", 
          ingredients: ["Ingredient 1", "Ingredient 2"],
          steps: ["Step 1", "Step 2"]
        },
        {
          name: "Recipe 2",
          ingredients: ["Ingredient 1", "Ingredient 2"],
          steps: ["Step 1", "Step 2"]
        }
      ]
    },
  
    category2: {
      name: "Category 2", 
      recipes: [
        {
          name: "Recipe 3",
          ingredients: ["Ingredient 1", "Ingredient 2"],
          steps: ["Step 1", "Step 2"]  
        },
        {
          name: "Recipe 4",
          ingredients: ["Ingredient 1", "Ingredient 2"],
          steps: ["Step 1", "Step 2"]
        }
      ]
    }
  };
  
  export default function handler(req, res) {
    res.status(200).json(data)
  }