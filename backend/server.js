const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { constrainedMemory } = require('process');
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
        Password: req.body.Password,
        Leetcode: 'https://leetcode.com/',
        Codechef: 'https://www.codechef.com/dashboard',
        Geeksforgeeks: 'https://www.geeksforgeeks.org/',
        Codeforce: 'https://codeforces.com/',
        Hackerrank: 'https://www.hackerrank.com/',
        DP: ''
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
        InterviewId: req.body.InterviewId,
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

app.get('/viewinterview/:InterviewId', async (req, res) => {
    
    const InterviewId = req.params.InterviewId;
    console.log(InterviewId);
    const interview = await InterviewModel.findOne({InterviewId: InterviewId});
    res.json(interview)
})


app.get('/profile/:StudentEmail', async (req, res) => {
    const studentEmail = req.params.StudentEmail;
    const student = await StudentModel.findOne({StudentEmail: studentEmail});
    res.json(student)
})

app.put('/adddp/:StudentEmail', async (req, res) => {
    const dp = req.body.DP;
    const updatedStudent = await StudentModel.findOneAndUpdate(
            { StudentEmail: req.params.StudentEmail },
            { $set: { DP: dp } }
        );
        res.json(updatedStudent)
});

app.put('/platform/:StudentEmail', async (req, res) => {
    const leetcode = req.body.Leetcode;
    const codechef = req.body.Codechef;
    const gfg = req.body.Geeksforgeeks;
    const codeforce = req.body.Codeforce;
    const hackerrank = req.body.Hackerrank;

    const updatedPlatform = await StudentModel.findOneAndUpdate(
            { StudentEmail: req.params.StudentEmail },
            { $set: { Leetcode: leetcode, Codechef: codechef, Geeksforgeeks: gfg, Codeforce: codeforce, Hackerrank: hackerrank } }
        );
        res.json(updatedPlatform)
});

app.get('/projects/:StudentEmail', async (req, res) => {
    const studentEmail = req.params.StudentEmail;
    const projects = await ProjectModel.find({ProjectStudentEmail: studentEmail});
    res.json(projects)
})

app.get('/interviews/:StudentEmail', async (req, res) => {
    const studentEmail = req.params.StudentEmail;
    const interviews = await InterviewModel.find({InterviewStudentId: studentEmail});
    res.json(interviews)
})


app.listen(8000, () => {
    console.log("server has started in the port 8000")
})