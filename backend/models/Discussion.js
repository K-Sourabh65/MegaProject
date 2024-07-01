const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

const DiscussionForumSchema = new mongoose.Schema({
  forumId: {
    type: String,
    required: true,
  },
  messages: [MessageSchema]
}, {
  collection: "DiscussionForum"
});

module.exports = mongoose.model("DiscussionForum", DiscussionForumSchema);
