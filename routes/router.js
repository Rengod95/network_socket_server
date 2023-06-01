const express = require("express");
const boardService = require("../services/BoardService");
const router = express.Router();

router.get("/board", async (req, res) => {
  const result = await boardService.searchBoardWithTitle(req.body.targetTitle);
  res.send(result);
});

router.post("/board", async (req, res) => {
  console.log(req.body);
  const result = await boardService.createBoard({
    title: req.body.title,
    content: req.body.content,
  });
  res.send({ message: "success" });
});

router.put("/board", async (req, res) => {
  const result = await boardService.modifyBoardWithTitle(
    { title: req.body.title, content: req.body.content },
    req.body.targetTitle
  );
  res.send(result);
});

router.delete("/board", async (req, res) => {
  const result = await boardService.deleteBoardWithTitle(req.body.targetTitle);
  res.send(result);
});

router.get("/board/all", async (req, res) => {
  const result = await boardService.getAllBoard();
  res.send(result);
});

module.exports = router;
