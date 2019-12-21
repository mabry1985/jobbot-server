const router = require("express").Router();
const Job = require("../models/JobBoard");

router.route("/").get((req, res) => {
  Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/react").get((req, res) => {
Job.find({ description: /React/ })
  .then(jobs => res.json([jobs, { name: "React" }]))
  .catch(err => res.status(400).json("Error " + err)); 
});

router.route("/vue").get((req, res) => {
  Job.find({ description: /Vue/ })
    .then(jobs => res.json([jobs, { name: "Vue" }]))
    .catch(err => res.status(400).json("Error " + err)); 
});

router.route("/angular").get((req, res) => {
  Job.find({ description: /Angular/ })
    .then(jobs => res.json([jobs, { name: "Angular" }]))
    .catch(err => res.status(400).json("Error " + err)); 
});

router.route("/backbone").get((req, res) => {
  Job.find({ description: /Backbone/ })
    .then(jobs => res.json([jobs, { name: "Backbone" }]))
    .catch(err => res.status(400).json("Error " + err)); 
});

router.route("/rails").get((req, res) => {
  Job.find({ description: /Rails/ })
    .then(jobs => res.json([jobs, { name: "Rails" }]))
    .catch(err => res.status(400).json("Error " + err)); 
});

router.route("/senior").get((req, res) => {
  Job.find({ isSenior: true })
    .then(jobs => res.json([jobs, { name: "Senior" }]))
    .catch(err => res.status(400).json("Error " + err)); 
});

router.route("/junior").get((req, res) => {
  Job.find({ isJunior: true })
    .then(jobs => res.json([jobs, { name: "Junior" }]))
    .catch(err => res.status(400).json("Error " + err)); 
});

router.route("/:id").get((req, res) => {
  Job.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;