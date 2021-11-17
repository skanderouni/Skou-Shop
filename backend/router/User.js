const express = require('express');
const { signup } = require('../controllers/user.controller.js');
const isAuth = require('../middleware/isAuth');
const router = express.Router();

router.post('/register', signup);
/*
const {
  validation,
  registerValidate,
  loginValidate,
} = require('../middleware/validateUser');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('testing router in here');
});

/*
@method: POST
@ path:http:localhost:6000/api/user/register
@ parameter: req.body  
public
*/
//router.post('/register', registerValidate(), validation, Register);

/*
@method: POST
@ path:http:localhost:6000/api/user/login
@ parameter: req.body  
public
*/
//router.post('/login', loginValidate(), validation, Login);

/*
@method: GET
@ path:http:localhost:6000/api/user/current
@ parameter: req.headers  
public
*/
/*
router.get('/current', isAuth, (req, res) => {
  res.send({ msg: 'authorized', user: req.user });
});
*/

// default export
module.exports = router;
