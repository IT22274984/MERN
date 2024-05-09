const Router = require('express').Router;
const router = new Router();
const Faq = require('../models/Faq');

router.get('/', async (req, res, next) => {
  try {
    const faqs = await Faq.find();
    res.json(faqs);
  } catch (e) {
    next(e);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { summary, info } = req.body;
    const faq = await Faq.create({ summary, info });
    return res.json(faq);
  } catch (e) {
    next(e);
  }
})

router.delete('/', async (req, res, next) => {
  try {
    const { id } = req.body;
    const faq = await Faq.findByIdAndDelete(id);
    return res.json(faq);
  } catch (e) {
    next(e);
  }
})

router.put('/', async (req, res, next) => {
  try {
    const { id, summary, info } = req.body;
    const faq = await Faq.findByIdAndUpdate(id, { summary, info });
    return res.json(faq);
  } catch (e) {
    next(e);
  }
})


module.exports = router;