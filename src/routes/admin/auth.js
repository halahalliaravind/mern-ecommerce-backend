const express = require("express");
const { signup, signin, signout } = require("../../controller/admin/auth");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../../validator/auth");
const { requireSignin } = require("../../common-middleware");
const router = express.Router();
//backend request for signin
router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);

//backend request for signup
router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);

//backend request for signout
router.post("/admin/signout", signout);

module.exports = router;
