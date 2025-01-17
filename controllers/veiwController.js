const contactModel = require("../models/contactModel");

const getIndexViewPage = (req, res) => {
  contactModel.getContacts((err, result) => {
    if (err) {
      console.error("데이터 조회 중 에러 발생", err);
      return res.status(500).send("내부 서버 오류");
    }
    res.json(result);
  });
  res.render("index");
};

module.exports = {
  getIndexViewPage,
};
