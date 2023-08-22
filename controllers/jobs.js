const getAllJobs = async (req,res) =>{
    res.send('get all jobs')
}

const getSingleJob = async (req,res) =>{
    res.send('get single job')
}

const createJob = async(req,res) =>{
    res.send('create job')
}

const updateJob = async(req,res) =>{
    res.send('edit job')
}

const deleteJob = async(req,res) =>{
    res.send('delete job')
}

module.exports = {
    getAllJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob
}