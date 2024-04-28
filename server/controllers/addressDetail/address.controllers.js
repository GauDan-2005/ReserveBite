const Address = require("../../db/models/address");

const addressController = {
  createAddress: async (req, res) => {
    try {
      const {
        label,
        address_line,
        city,
        state,
        country,
        pin_code,
        is_primary_address,
      } = req.body;
      const user_id = req.user.id;

      const newAddress = new Address({
        label: label,
        address_line: address_line,
        city: city,
        state: state,
        country: country,
        pin_code: pin_code,
        is_primary_address: is_primary_address,
        user_id: user_id,
      });
      await newAddress.save();
      res.json({ newAddress, msg: "New Address saved successfully." });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  findAddressesByUser: async (req, res) => {
    try {
      const userAddresses = await Address.find({ user_id: req.user.id });
      res.json(userAddresses);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  findAddressByHotel: async (req, res) => {
    try {
      const hotelAddress = await Address.find({ hotel_id: req.body.hotel_id });
      res.json(hotelAddress);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  editAddress: async (req, res) => {
    try {
      const {
        label,
        address_line,
        city,
        state,
        country,
        pin_code,
        is_primary_address,
      } = req.body;
      await Address.findByIdAndUpdate(
        { _id: req.params.id },
        {
          label: label,
          address_line: address_line,
          city: city,
          state: state,
          country: country,
          pin_code: pin_code,
          is_primary_address: is_primary_address,
        }
      );
      res.json({ msg: "Address changed successfully." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteAddress: async (req, res) => {
    try {
      await Address.findByIdAndDelete({ _id: req.params.id });
      res.json({ msg: "Address deleted successfully." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = addressController;
