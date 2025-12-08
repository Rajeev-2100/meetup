const express = require("express");
const app = express();
const cors = require('cors')

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const Meetup = require("./model/meetup.model");
const { initializeDatabase } = require("./db/db.connect");

initializeDatabase();

async function createMeetupData(newMeetup) {
  try {
    const meetup = new Meetup(newMeetup);
    const savedMeetup = meetup.save();
    return savedMeetup;
  } catch (error) {
    throw error;
  }
}

app.post("/", async (req, res) => {
  try {
    const meetup = createMeetupData(req.body);
    if (meetup) {
      res
        .status(201)
        .json({ message: "Meetup Data upload successfully", data: meetup });
    }
    res.json({ error: "Failed to meetup data" });
    console.error(error.message);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the meetup Data" });
  }
});

async function getAllMeetupData() {
  try {
    const meetup = await Meetup.find();
    return meetup;
  } catch (error) {
    throw error;
  }
}

app.get("/meetup", async (req, res) => {
  try {
    const meetup = await getAllMeetupData();
    res.json(meetup);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the meetup Data" });
  }
});

async function getMeetupDataByTitle(meetupTitle) {
  try {
    const meetup = await Meetup.findOne({ eventTitle: meetupTitle });
    return meetup;
  } catch (error) {
    throw error;
  }
}

app.get("/meetup/:meetupTitle", async (req, res) => {
  try {
    const meetup = await getMeetupDataByTitle(req.params.meetupTitle);
    res.status(201).json({ message: "Meetup Data upload successfully", data: meetup });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the meetup Data" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server is running on this", PORT);
});
