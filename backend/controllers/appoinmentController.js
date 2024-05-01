const Appoinment = require('../models/appoinment');


//Create and save new appoinment
exports.create = (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    const { appoinmentno, fullname, email, doctorname, date,time,location, condition } = req.body;

    // new appoinment
    const appoinment = new Appoinment({
        appoinmentno,
        fullname,
        email,
        doctorname,
        date,
        time,
        location,
        condition
    })
    // save appoinment in the database
    appoinment
        .save()
        .then(() => {
            res.status(201).send({message : "Appoinment Registered Successfully"})
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Some error occurred while registering the appoinment"
            });
        });
}

// //Retrieve and return all appoinment
// exports.findOne = (req,res) => {
//     Appoinment.find().populate('fullname', 'name')
//             .then(appoinment => {
//                 res.send(appoinment)
//             })
//             .catch(err => {
//                 res.status(500).send({ message : err.message || "Error Occurred while retrieving appoinment information" })
//             })
// }

//Retrieve and return all appoinment
exports.findAll = (req,res) => {
    Appoinment.find()
            .then(appoinment => {
                res.send(appoinment)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retrieving appoinment information" })
            })
}

//Retrieve and return a single appoinment
exports.findOne = (req,res) => {
    if(req.params.id){
        const id = req.params.id;

        Appoinment.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Appoinment not found with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving appoinment with id " + id})
            })
    }
}

//Update a appoinment by appoinment id
exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Appoinment.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot update appoinment with ${id}. Maybe appoinment not found!`})
            }else{
                res.status(201).send({message : "Appoinment details updated successfully"})
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error occurred while updating appoinment information"})
        })
}

//Delete a appoinment by appoinment id
exports.delete = (req,res) => {
    const id = req.params.id;

    Appoinment.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message : `Cannot delete appoinment with ${id}. Maybe id is incorrect`})
            }
            else{
                res.status(201).send({message : "Appoinment details deleted successfully"})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({message : `Error deleting appoinment with id = ${id}`});
        })
}