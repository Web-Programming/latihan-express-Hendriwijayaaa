const App = require("../models/App")

const insert = (req, res, next) => {
    const App = new Apply({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
    });
  
    App
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: false,
                message: "error"
            };
            res.status(400).json(responseMessage);
        });
};
module.exports= {insert}