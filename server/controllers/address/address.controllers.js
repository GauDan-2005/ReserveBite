const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
        address_id,
      } = req.body;
      await Address.findByIdAndUpdate(
        { _id: address_id },
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
    } catch (err) {}
  },
};

module.exports = addressController;
