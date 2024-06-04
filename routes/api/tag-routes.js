const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// ** /api/tags **//

router.get("/", async (req, res) => {
  // Get all tags
  const tags = await Tag.findAll({
    include: [Product],
  });

  // Return success response
  res.status(200).json(tags);
});

router.get("/:id", async (req, res) => {
  // Find tag by id
  const tag = await Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  });

  // Return success response
  res.status(200).json(tag);
});

router.post("/", async (req, res) => {
  // Create tag
  const tag = await Tag.create(req.body);

  // Return success response
  res.status(200).json(tag);
});

router.put("/:id", async (req, res) => {
  // Update tag by id
  const tag = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  // Return success response
  res.status(200).json(tag);
});

router.delete("/:id", async (req, res) => {
  // Delete tag by id
  const tag = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });

  // Return success response
  res.status(200).json(tag);
});

module.exports = router;
