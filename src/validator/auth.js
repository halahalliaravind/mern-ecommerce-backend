const { check, validationResult } = require("express-validator");

exports.validateSignupRequest = [
  check("firstName").notEmpty().withMessage("First Name is Required"),
  check("lastName").notEmpty().withMessage("Last Name is Required"),
  check("email").isEmail().withMessage("Valid Emial is Required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 charcter long"),
];

exports.validateSigninRequest = [
    check("email").isEmail().withMessage("Valid Emial is Required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 charcter long"),
  ];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
