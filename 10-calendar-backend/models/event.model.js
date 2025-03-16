const { Schema, model } = require('mongoose')

const EventSchema = new Schema({

  title: {
    type: String,
    required: true,
  },

  notes: {
    type: String,
  },

  start: {
    type: Date,
    required: true,
  },

  end: {
    type: Date,
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }

})

EventSchema.method('toJSON', function() {
  const { _id, __v, ...restEvent } = this.toObject()
  restEvent.id = _id
  return restEvent
})

const Event = model('Event', EventSchema )

module.exports = {
  Event
}