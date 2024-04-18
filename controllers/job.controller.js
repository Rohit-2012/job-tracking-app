import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "pineapple", position: "front-end" },
  { id: nanoid(), company: "foogle", position: "back-end" },
];

export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(201).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: `No job with  the id ${id}` });
  }

  res.status(200).json(job);
};

export const updateJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: "Please provide company and position" });
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  job.company = company;
  job.position = position;

  res.status(200).json({ msg: "job modified", job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;
  res.status(200).json({ msg: "job deleted" });
};
