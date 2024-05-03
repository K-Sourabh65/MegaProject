const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
require('./models/Student')
require('./models/Project')
require('./models/Contest')
require('./models/Interview')

const mongoString = `mongodb+srv://kit:kit123@cluster0.dynplw8.mongodb.net/kit?retryWrites=true&w=majority`


mongoose.connect(mongoString, {
    useNewUrlParser: true,
})
.then(() => console.log('database connected succesfully'));

app.use(cors({origin: '*'}));
app.use(express.json());

const StudentModel = mongoose.model('Student');
const ProjectModel = mongoose.model('Project');
const ContestModel = mongoose.model('Contest');
const InterviewModel = mongoose.model('Interview');

app.get('/login/:StudentEmail&:Password', async (req, res) => {
    let StudentList = await StudentModel.find({StudentEmail: `${req.params.StudentEmail}`});

    StudentList[0].Password === req.params.Password ? res.json(StudentList) : res.json(400)
})


app.post('/register', async (req, res) => {
    await StudentModel.create({
        StudentName: req.body.StudentName,
        StudentEmail: req.body.StudentEmail,
        Password: req.body.Password
    })
})

// PROJECTS

app.get('/projects', async (req, res) => {
    let ProjectList = await ProjectModel.find()
    res.json(ProjectList)
})


app.post('/addproject', async (req, res) => {
    await ProjectModel.create({
        ProjectName: req.body.ProjectName,
        ProjectDetail: req.body.ProjectDetail,
        ProjectLink: req.body.ProjectLink,
        ProjectImage: req.body.ProjectImage,
        ProjectStudentEmail: req.body.ProjectStudentEmail,
    })
})

app.delete('/deleteproject/:ProjectName', async (req, res) => {
    await ProjectModel.findOneAndDelete({ProjectName: `${req.params.ProjectName}`})
})

app.put('/updateproject/:ProjectName', async (req, res) => {
    await ProjectModel.findOneAndUpdate({ProjectName: req.params.ProjectName},{
        ProjectName: req.body.ProjectName,
        ProjectDetail: req.body.ProjectDetail,
        ProjectLink: req.body.ProjectLink,
        ProjectImage: req.body.ProjectImage,
        ProjectStudentEmail: req.body.ProjectStudentEmail,
    })
})

// CONTEST

app.get('/contests', async (req, res) => {
    let ContestList = await ContestModel.find()
    res.json(ContestList)
})

app.post('/addcontest', async (req, res) => {
    await ContestModel.create({
        Platform: req.body.Platform,
        ContestName: req.body.ContestName,
        ContestLink: req.body.ContestLink,
        ContestDate: req.body.ContestDate,
        ContestTime: req.body.ContestTime,
        Status: req.body.Status,
    })
})

app.put('/updatecontest/:ContestName', async (req, res) => {
    const ContestName = req.body.ContestName;
    const Status = req.body.Status;

    const updatedContest = await ContestModel.findOneAndUpdate(
            { ContestName: req.params.ContestName },
            { $set: { Status: Status } }
        );

        if (!updatedContest) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        // Send updated employee as response
        res.json(updatedContest)
});


//Interview


app.get('/interviews', async (req, res) => {
    let InterviewList = await InterviewModel.find()
    res.json(InterviewList)
})


app.post('/addinterview', async (req, res) => {
    await InterviewModel.create({
        CompanyName: req.body.CompanyName,
        Role: req.body.Role,
        Location: req.body.Location,
        Salary: req.body.Salary,
        Round: req.body.Round,
        Date: req.body.Date,
        CompanyImage: req.body.CompanyImage,
        InterviewDetail: req.body.InterviewDetail,
        InterviewStudentId: req.body.InterviewStudentId,
        Verdict: req.body.Verdict,
    })
})

app.delete('/deleteinterview/:InterviewId', async (req, res) => {
    await InterviewModel.findOneAndDelete({InterviewId: `${req.params.InterviewId}`})
})

app.listen(8000, () => {
    console.log("server has started in the port 8000")
})