const Booking = require("../../db/models/booking");

const bookingControllers = {
  createBooking: async (req, res) => {
    try {
      const {
        booking_date_time,
        guests,
        status,
        table_number,
        orders,
        offers,
        hotel_id,
      } = req.body;
      const user_id = req.user.id;
      const newBooking = new Booking({
        booking_date_time: booking_date_time,
        guests: guests,
        status: status,
        table_number: table_number,
        orders: orders,
        offers: offers,
        hotel_id: hotel_id,
        user_id: user_id,
      });
      await newBooking.save();
      res.json({ newBooking, msg: "New Booking done successfully." });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  getBookingDetail: async (req, res) => {
    try {
      const bookingDetail = await Booking.find({ _id: req.params.id });
      res.json(bookingDetail);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  getBookingsByUser: async (req, res) => {
    try {
      const bookingsByUser = await Booking.find({ user_id: req.user.id });
      res.json(bookingsByUser);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  getBookingsByHotel: async (req, res) => {
    try {
      const bookingsByHotel = await Booking.find({ hotel_id: req.hotel.id });
      res.json(bookingsByHotel);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  editBooking: async (req, res) => {
    try {
      const {
        booking_date_time,
        guests,
        status,
        table_number,
        orders,
        offers,
        hotel_id,
      } = req.body;
      await Booking.findByIdAndUpdate(
        { _id: req.params.id },
        {
          booking_date_time: booking_date_time,
          guests: guests,
          status: status,
          table_number: table_number,
          orders: orders,
          offers: offers,
          hotel_id: hotel_id,
          user_id: user_id,
        }
      );
      res.json({ msg: "Booking changed successfully." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteBooking: async (req, res) => {
    try {
      await Booking.findByIdAndDelete({ _id: req.params.id });
      res.json({ msg: "Booking deleted successfully." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = bookingControllers;
