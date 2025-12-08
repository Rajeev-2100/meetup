const mongoose = require('mongoose')

const meetupSchema = mongoose.Schema({
    eventTitle: {
        type: String,
        required: true,
    },
    hostedBy: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    eventDetail: {
        type: String,
        required: true,
    },
    dressCode: [{
        type: String,
        enum: ['Smart casual',"Formal", "Informal"],
        required: true,
    }],
    ageRestrictions: {
        type: Number,
        required: true,
    },
    eventTags: [{
        type: String,
        enum: ['marketing','digital','technical'],
        required: true,
    }],
    eventDate: {
        type: Date,
        required: true,
    },
    eventLocation: {
        type: String,
        required: true,
    },
    eventPrice: {
        type: Number,
        required: true,
    },
    noOfSpeaker: {
        type: Number,
        required: true,
    },
    speakerPerson: {
        type: String,
        required: true,
    },
    speakerRole: [{
        type: String,
        enum: ["Marketing Manager", "SEO Specialist", "Developer"],
        required: true,
    }],
    eventType: [{
        type: ["Offline Event", "Online Event"],
        required: true,
    }],
})

const MeetUp = mongoose.model('Meetup', meetupSchema)
module.exports = MeetUp
