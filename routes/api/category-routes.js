const router = require("express").Router();
const { Category, Product } = require("../../models");

// ** /api/categories **//

router.get("/", async (req, res) => {
  // Find all Categories
  const categories = await Category.findAll({
    include: [Product],
  });

  // Return success response
  res.status(200).json(categories);
});

router.get("/:id", async (req, res) => {
  // Find specific category by id
  const category = await Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  });

  // Return success response
  res.status(200).json(category);
});

router.post("/", async (req, res) => {
  // Create a new category
  const category = await Category.create(req.body);

  // Return success response
  res.status(200).json(category);
});

router.put("/:id", async (req, res) => {
  // Update a category by id
  const category = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  // Return success response
  res.status(200).json(category);
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  const category = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });

  // Return success response
  res.status(200).json(category);
});

module.exports = router;
