const express = require('express');
const router = express.Router();

const {
  getUser,
  getUsers,
  newUser,
  removeUser,
  updateUser
} = require('../services/users');

/* GET users listing. */
router.get('/', function (req, res) {
  res.json({
    success: true,
    users: [{ age: 24, name: 'Diego' }]
  })
});

router.get('/:id', (req, res) => {
  const user = req.params.id;

  getUser(user)
    .then((user) => {
      res.json({
        success: true,
        user
      })
    })
    .catch(e => {
      res.json({
        success: false,
        message: 'Erro ocorrido ' + e
      })
    })
})

router.post('/', (req, res) => {
  const user = {
    name: req.body.name,
    age: req.body.age
  }

  res.json({
    success: true
  })
})

router.put('/:id', (req, res) => {
  const user = {
    _id: req.params.id,
    name: req.body.name,
    age: req.body.age
  }

  updateUser(user._id, user)
    .then((userUpdated) => {
      res.json({
        success: true,
        data: userUpdated
      })
    })
    .catch(e => {
      res.json({
        success: false,
        message: 'Erro ocorrido ' + e
      })
    })
})

router.delete('/:id', (req, res) => {
  const user = req.params.id;

  removeUser(user)
    .then((data) => {
      res.json({
        success: true,
        data
      })
    })
    .catch(e => {
      res.json({
        success: false,
        message: 'Erro ocorrido ' + e
      })
    })
})

module.exports = router;
