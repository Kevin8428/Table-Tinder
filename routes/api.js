var express = require('express');
var router = express.Router();
var ctrlDiners = require('../controllers/accounts');
var ctrlAppointments = require('../controllers/appointments')

/* GET all appointments. */
// router.post('/appointments', function(req,res){
//
//   res.json({message: "yes"});
// });


router.get('/appointments', ctrlAppointments.appointmentList);
router.get('/appointments/:id', ctrlAppointments.appointmentFind);
router.post('/appointments', ctrlAppointments.appointmentCreate);
router.delete('/appointments/:id', ctrlAppointments.appointmentDelete);
router.put('/appointments/:id', ctrlAppointments.appointmentUpdate);
router.patch('/appointments/:id', ctrlAppointments.appointmentUpdate);

router.get('/accounts', ctrlDiners.dinerList);
router.get('/accounts/:id', ctrlDiners.dinerFind);
module.exports = router;
