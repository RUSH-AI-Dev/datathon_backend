const express = require("express");
const router = express.Router();
const Budget = require("./models/Budget");
const Sequelize = require("sequelize");
const formidable = require("formidable");
const path = require("path")
const fs = require("fs-extra");
const constants = require("./constant");


router.get("/Budget", async (req, res) => {
  const result = await Budget.findAll({ order: Sequelize.literal("id DESC") });
  res.json(result);
});


router.post("/Budget", (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (error, fields, files) => {
      let result = await Budget.create(fields);
      res.json({
        result: constants.kResultOk,
        message: JSON.stringify(result)
      });
    });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
  }
});

router.put("/Budget", (req, res)=>{
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (error, fields, files) => {
      let result = await Budget.update(fields, {where : {id: fields.id}});
      result = await uploadImage(files, fields);
      res.json({
        result: constants.kResultOk,
        message: JSON.stringify(result)
      });
    });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
  }
})

router.delete("/Budget/id/:id", async (req, res)=>{
  try{
    const {id} = req.params
    let result = await Budget.findOne({where: {id}})
    await fs.remove(__dirname + "/uploaded/images/" + result.image)
    result = await Budget.destroy({ where: { id: id } });
    res.json({ result: constants.kResultOk, message: JSON.stringify(result) });
  }catch(err){
    console.log(err)
    res.json({ result: constants.kResultNok, message: JSON.stringify(err) });
  }
})


router.get("/Budget/id/:id", async (req, res)=>{
  try{
      let result = await Budget.findOne({where:{id: req.params.id}})
      if (result){
          res.json(result)
      }else{
          res.json({});
      }
  }catch(error){
      res.json({});
  }
})

module.exports = router;
