const { Schema, Types } = require('mongoose');
const Reaction = require ('./Reaction');
const thoughtSchema = new Schema(
  {
    assignmentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    username: {
      type: String,
      required: true,
    },
    reactions:[Reaction],
    }, 
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtSchemaSchema;
