const { Router } = require("express");
const router = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/new", (req, res) => {
  const reqBody = req.body;
  messages.push({
    text: reqBody.messageText,
    user: reqBody.userName,
    added: new Date(),
  });
  res.redirect("/");
});

router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

module.exports = router;
