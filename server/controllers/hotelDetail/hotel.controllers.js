const Hotel = require("../../db/models/hotel");
const Address = require("../../db/models/address");

const hotelControllers = {
  createHotel: async (req, res) => {
    try {
      const { name, description, time, tags, address, img, overall_cuisine } =
        req.body;

      const newAddress = new Address({
        label: name,
        address_line: address.address_line,
        city: address.city,
        state: address.state,
        country: address.country,
        pin_code: address.pin_code,
        is_primary_address: address.is_primary_address,
      });
      const savedAddress = await newAddress.save();

      const newHotel = new Hotel({
        name: name,
        description: description,
        time: time,
        tags: tags,
        address: savedAddress._id,
        img: img,
        overall_cuisine: overall_cuisine,
      });

      await newHotel.save();
      res.json({ newHotel, msg: "New Hotel saved successfully." });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  getHotel: async (req, res) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      if (!hotel) return res.status(404).json({ msg: "Hotel not found." });
      res.json(hotel);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  getHotels: async (req, res) => {
    const { type } = req.query;

    switch (type) {
      case "all":
        try {
          const hotels = await Hotel.find();
          res.json(hotels);
        } catch (err) {
          res.status(400).json({ msg: err.message });
        }

        break;

      case "search":
        try {
          const { query } = req.query;
          const hotels = await Hotel.find({
            $or: [
              { name: { $regex: query, $options: "i" } },
              { description: { $regex: query, $options: "i" } },
            ],
          });
          res.json(hotels);
        } catch (err) {
          res.status(400).json({ msg: err.message });
        }
        break;

      case "filter":
        break;

      case "near_by":
        break;

      case "featured":
        try {
          const featuredHotels = await Hotel.find({ tags: "featured" });
          res.json(featuredHotels);
          break;
        } catch (err) {
          res.status(400).json({ msg: err.message });
        }
        break;

      case "recommended":
        break;

      default:
        break;
    }
  },
  editHotel: async (req, res) => {
    try {
      const {
        name,
        description,
        time,
        tags,
        address,
        ratings,
        overall_rating,
        img,
        overall_cuisine,
        menu,
        offer,
      } = req.body;

      await Address.findByIdAndUpdate(
        { _id: address._id },
        {
          label: address.label,
          address_line: address.address_line,
          city: address.city,
          state: address.state,
          country: address.country,
          pin_code: address.pin_code,
          is_primary_address: address.is_primary_address,
        }
      );

      await Hotel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          name: name,
          description: description,
          time: time,
          tags: tags,
          address: address,
          ratings: ratings,
          overall_rating: overall_rating,
          img: img,
          overall_cuisine: overall_cuisine,
          menu: menu,
          offer: offer,
        }
      );
      res.json({ msg: "Hotel data changed successfully." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteHotel: async (req, res) => {
    try {
      await Hotel.findByIdAndDelete({ _id: req.params.id });
      res.json({ msg: "Hotel deleted successfully." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = hotelControllers;
