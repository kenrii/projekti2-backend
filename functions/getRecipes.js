exports.handler = async (event, context) => {
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
          },
          {
            name: "Recipe 3",
            ingredients: ["Ingredient 1", "Ingredient 2"],
            steps: ["Step 1", "Step 2"]
          }
        ]
      },
      category2: {
        name: "Category 2", 
        recipes: [
          {
            name: "Recipe 4",
            ingredients: ["Ingredient 1", "Ingredient 2"],
            steps: ["Step 1", "Step 2"] 
          },
          {
            name: "Recipe 5",
            ingredients: ["Ingredient 1", "Ingredient 2"],
            steps: ["Step 1", "Step 2"]
          },
          {
            name: "Recipe 6",
            ingredients: ["Ingredient 1", "Ingredient 2"],
            steps: ["Step 1", "Step 2"]
          }
        ]
      },
      category3: {
        name: "Category 3", 
        recipes: [
          {
            name: "Recipe 7",
            ingredients: ["Ingredient 1", "Ingredient 2"],
            steps: ["Step 1", "Step 2"] 
          },
          {
            name: "Recipe 8",
            ingredients: ["Ingredient 1", "Ingredient 2"],
            steps: ["Step 1", "Step 2"]
          },
          {
            name: "Recipe 9",
            ingredients: ["Ingredient 1", "Ingredient 2"],
            steps: ["Step 1", "Step 2"]
          }
        ]
      }
    };
   
    return {        headers: {
          "Access-Control-Allow-Origin": "*"
        },
      statusCode: 200,
      body: JSON.stringify(data),
    };
};
