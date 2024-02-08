const Food = require("../db/models/food");

const foodControl = {
  createFood: async (req, res) => {
    try {
      const { name, description, price, category, img_url } = req.body;
      const hotel_id = req.body;
      const newFood = new Food({
        name: name,
        description: description,
        price: price,
        category: category,
        quantity: 0,
        img_url: img_url,
        hotel_id: hotel_id,
      });
      await Food.save(newFood);
      res.json({ newFood, msg: "Successfully created new Food item." });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  getFood: async (req, res) => {
    try {
      const foodItem = await Food.findById({ _id: req.food.id });
      res.json(foodItem);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  getFoods: async (req, res) => {
    try {
      const foodList = await Food.find({ hotel_id: req.hotel.id });
      res.json(foodList);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  updateFood: async (req, res) => {},
};

module.exports = foodControl;
