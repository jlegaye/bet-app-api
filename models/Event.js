const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Event = mongoose.Schema({
  _id: String,
  country: String,
  league: String,
  season: String,
  round: String,
  nbOfRounds: Number,
  date: Date,
  status: String,
  homeTeam: String,
  awayTeam: String,
  halfTime1Score: String,
  halfTime1HomeScore: Number,
  halfTime1AwayScore: Number,
  halfTime1Goals: Number,
  halfTime1Draw: Boolean,
  halfTime1NoGoal: Boolean,
  halfTime2HomeScore: Number,
  halfTime2AwayScore: Number,
  halfTime2Goals: Number,
  halfTime2Draw: Boolean,
  halfTime2NoGoal: Boolean,
  fullTimeScore: String,
  fullTimeHomeScore: Number,
  fullTimeAwayScore: Number,
  fullTimeGoals: Number,
  fullTimeDraw: Boolean,
  fullTimeNoGoal: Boolean,
  secondHalfBetter: Boolean,
  twoOrThreeGoals: Boolean
}, {
  _id: false
})

module.exports = mongoose.model('Event', Event, 'events');