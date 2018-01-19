const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema], //Subdocument
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }, //establish link between User and Survey
  dateSent: Date, //Can use to check
  lastResponded: Date //if Survey is still active
});

mongoose.model('surveys', surveySchema);
