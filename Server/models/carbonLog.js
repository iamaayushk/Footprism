const mongoose = require('mongoose');

const CarbonCalculationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Make sure you have a User model
    required: true
  },
  travel:{
    type:Number,
    required:true,
  },
  electricity: {
    type:Number,
    required:true,
  },
  shopping: {
    type:Number,
    required:true,
  },
  diet: {
    type:String,
    enum: ['veg', 'mixed', 'nonveg'],
    required:true,
  },
  trash: {
    type:Number,
    required:true,
  },
  carbonFootprint:{
     type:Number,
    required:true,
  },
   date: {
    type: Date,
    default: () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // strip time
      return today;
    }
  }
});

module.exports = mongoose.model('CarbonCalculation', CarbonCalculationSchema);
