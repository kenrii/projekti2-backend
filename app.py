from flask import Flask, jsonify

app = Flask(__name__)

recipe_data = [
    {
        "name": "Category 1", 
        "recipes": [
            {
                "name": "Recipe 1",
                "ingredients": ["Ingredient 1", "Ingredient 2"], 
                "steps": ["Step 1", "Step 2"]
            },
            {
                "name": "Recipe 2",
                "ingredients": ["Ingredient 1", "Ingredient 2"],
                "steps": ["Step 1", "Step 2"]  
            }
        ]
    },
    {
        "name": "Category 2",
        "recipes": [
            {
                "name": "Recipe 3",
                "ingredients": ["Ingredient 1", "Ingredient 2"],
                "steps": ["Step 1", "Step 2"]
            },
            {
                "name": "Recipe 4", 
                "ingredients": ["Ingredient 1", "Ingredient 2"],
                "steps": ["Step 1", "Step 2"]
            }
        ]
    }
]

@app.route('/', methods=['GET'])
def get_data():
    return jsonify(recipe_data)


if __name__ == '__main__':
    app.run()