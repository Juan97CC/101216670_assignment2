const express = require('express');

var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/',(req, res) =>{
    res.render("employee/addOrEdit.hbs", {
        viewTitle: "Insert Employee"
    })
});

function insertRecord(req,res){
    var employee = new Employee();
    employee.firstname = req.body.firstname;
    employee.lastname = req.body.lastname;
    employee.emailid = req.body.emailid;
    employee.save((err, doc) => {
        if(!err)
            res.redirect('employee/list');
        else{
            console.log("Error inserting into DB " + err);
        }
    });
    
}

router.get('/list', (req, res)=>{
 
    Employee.find((err, docs) => {
        if(!err){
            res.render("employee/list",{
                list: docs
            });
        }
        else{
            console.log('Error retrieveing employee list :' +err);
        }
    }).lean();
});

function update(req, res){
    Employee.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc)=>{
        if(!err){
            res.redirect('employee/list');
        }
        else(console.log("error while updating " + err))
    }).lean();
}

router.post('/',(req, res) =>{
    if(req.body._id == '')
        insertRecord(req, res);
    else
        update(req, res);
});


router.get('/:id', (req, res) =>{
    Employee.findById(req.params.id, (err, doc) => {
        if(!err){
            res.render('employee/addOrEdit', {
                viewTitle:"Edit Employee",
                employee: doc
            })
        }
    }).lean();
});



router.get('/delete/:id', (req, res) =>{
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.redirect('/employee/list');
        }
        else{
            console.log("Error deleting " + err)
        }
    })
})

router.delete('/delete/:id', (req, res) =>{
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.redirect('/employee/list');
        }
        else{
            console.log("Error deleting " + err)
        }
    })
})


module.exports = router;