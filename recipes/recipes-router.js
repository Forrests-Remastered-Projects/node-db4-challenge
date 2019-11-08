const router = require("express").Router();
const Recipes = require("./recipes-model");

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to get Recipe", error: "sorry!" });
    });
});

router.get("/:id/ingredients", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to get Recipe Ingredients",
        error: "sorry!"
      });
    });
});

module.exports = router;
