const express = require("express");
const { findAll, findOne, create, updated, deleted } = require("../controller/user.contoller");
const router = express.Router()

router.get("/all",findAll);
router.get("/:id",findOne);
router.post("/cre",create);
router.patch("/:id",updated);
router.delete("/:id",deleted)


module.exports = router