const users = require('../users/userDb');
const posts = require('../posts/postDb');

// validate user by id
function validateUserId() {
  return (req, res, next) => {
    users.findById(req.params.id)
      .then(user => {
        if (user) {
          req.user = user
          res.status(200).json(user)
        } else {
          res.status(400).json({
            message: 'Invalid user id'
          })
        }
      })
      .catch(error => {
        res.status(500).json({
          message: 'Error retrieving user'
        })
      })
  }
}

// validate user
function validateUser() {
  return (req, res, next) => {
    if (!req.body.name) {
      return res.status(400).json({
        message: 'Missing required name field'
      })
    }
    next()
  }
}

// validate post
function validatePost() {
  return (req, res, next) => {

  }
}


module.exports = {
  validateUserId,
  validateUser,
  validatePost,
}