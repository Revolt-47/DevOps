import express from 'express';

// const express = require('express');
const router = express.Router();

// provide todo route implementation here

router.get('/', (req, res) => {
    res.send("Hello from todos")
})

export default router;

// module.exports = router;