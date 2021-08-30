const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const SALT_WORK_FACTOR = 10
// const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favorites: {type: String, required: false}
});

module.exports = mongoose.model('User', userSchema);
