const express = require('express');

const app = express();

const db = require('./models');

const { Member } = db;
const { Progress } = db;
const { Safety } = db;
const { Works } = db;
const { Quantities } = db;


app.use(express.json());

app.get('/api/members', async (req,res) => {
    const { team } = req.query;
    if (team) {
        const teamMembers = await Member.findAll({ where: { team } });
        res.send(teamMembers);
    } else {
        const members = await Member.findAll();
        res.send(members);
    }
});

app.get('/api/progress', async (req,res) => {
    const { date } = req.query;
    if (date) {
        const dateProgress = await Progress.findAll({ where: { date } });
        res.send(dateProgress);
    } else {
        const progress = await Progress.findAll();
        res.send(progress);
    }
});

app.get('/api/safety', async (req,res) => {
    const { date } = req.query;
    if (date) {
        const dateSafety = await Safety.findAll({ where: { date } });
        res.send(dateSafety);
    } else {
        const safety = await Safety.findAll();
        res.send(safety);
    }
});

app.get('/api/works', async (req,res) => {
    const { date } = req.query;
    if (date) {
        const dateWorks = await Works.findAll({ where: { date } });
        res.send(dateWorks);
    } else {
        const works = await Works.findAll();
        res.send(works);
    }
});

app.get('/api/quantities', async (req,res) => {
    const { date } = req.query;
    if (date) {
        const dateQuantities = await Quantities.findAll({ where: { date } });
        res.send(dateQuantities);
    } else {
        const quantities = await Quantities.findAll();
        res.send(quantities);
    }
});

app.get('/api/members/:id',async (req,res) => {
    const { id } = req.params;
    const member = await Member.findOne({ where: { id }});
    if (member) {
        res.send(member);
    } else {
        res.status(404).send({message: 'There is no such member with the id'});
    }
});

app.post('/api/members', async (req,res) => {
    const newMember = req.body;
    const member = Member.build(newMember);
    await member.save();
    res.send(member);
});

app.put('/api/members/:id', async (req, res) => {
    const { id } = req.params;
    const newInfo = req.body;
    const member = await Member.findOne({ where: { id } });
    if (member) {
        Object.keys(newInfo).forEach((prop) => {
            member[prop] = newInfo[prop];
        });
        await member.save();
        res.send(member);
    } else {
        res.status(404).send({message: 'There is no member with the id!'});
    }

});

app.delete('/api/members/:id', async (req,res) => {
    const { id } = req.params;
    const deletedCount = await Member.destroy({ where: { id } });
    if (deletedCount) {
        res.send({ message : `${deletedCount} row(s) deleted`});
    } else {
        res.status(404).send({ message: 'There is no member with the ID'});
    }
});

app.listen(3001, () => {
    console.log('Server is listening...');
});
