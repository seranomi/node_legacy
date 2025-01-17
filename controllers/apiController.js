const contactModel = require("../models/contactModel");

// 데이터 조회 API Controller
const getContacts = (req, res) => {
  contactModel.getContacts((err, result) => {
    if (err) {
      console.error("데이터 조회 중 에러 발생", err);
      return res.status(500).send("내부 서버 오류");
    }
    res.json(result);
  });
};

// 데이터 삽입 API Controller
const addContact = (req, res) => {
  const contact = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    memo: req.body.memo,
  };
  contactModel.addContact(contact, (err, result) => {
    if (err) {
      console.error("데이터 삽입 중 에러 발생", err);
      return res.status(500).send("내부 서버 오류");
    }
    // res.status(201).json({
    //   messge: "문의사항이 등록 되었습니다.",
    //   contactId: result.insertId,
    // });
    res.send(
      "<script> alert('문의사항이 등록되었습니다.'); location.href='/' </script>"
    );
  });
};

// 데이터 수정 API Controller
const updateContact = (req, res) => {
  const id = req.params.id;

  contactModel.updateContactStatus(id, (err, result) => {
    if (err) {
      console.error("데이터 수정 중 에러 발생", err);
      return res.status(500).send("내부 서버 오류");
    }
    res.send(
      "<script>alert('문의사항이 업데이트되었습니다.'); location.href='/#contactList'</script>"
    );
  });
};

// 데이터 삭제 API Controller
const deleteContact = (req, res) => {
  const id = req.params.id;

  contactModel.deletContact(id, (err, result) => {
    if (err) {
      console.error("데이터 삭제 중 에러 발생", err);
      return res.status(500).send("내부 서버 오류");
    }
    res.send(
      "<script>alert('문의사항이 삭제되었습니다.'); location.href='/#contactList'</script>"
    );
  });
};

module.exports = {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
};
