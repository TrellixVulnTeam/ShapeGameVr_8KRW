const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// TShis is similar to a Sequelize model
const Score = new Schema({

  score: { type: Number, required: true },
});

// This creates our model from the above schema, using mongoose's model method
const score = mongoose.model("score", Score);

// Export the Article model
module.exports = score;
