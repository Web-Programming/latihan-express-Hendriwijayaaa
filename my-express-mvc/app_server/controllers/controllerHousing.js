const index = (req, res, next) => {
    Mahasiswa.find({}, { __v: 0 })
      .then((mhs) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: mhs
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

module.exports = { index}