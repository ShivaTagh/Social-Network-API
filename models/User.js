const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    thoughts: {
      type: Schema.Types.ObjectID,
      ref: 'thought',
    },
    friends: {
        type: Schema.Types.ObjectID,
        ref: 'user',
      },
    email: {
      type: String,
      required: true,
      unique: true,
      default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('student', userSchema);

module.exports = User;
