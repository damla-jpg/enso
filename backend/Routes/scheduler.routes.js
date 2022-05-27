const express = require("express");

const schedulerControllers = require("../Controllers/scheduler.controllers");

const router = express.Router();

// event management
// payload with event json and jwt payload
router.post("/event", schedulerControllers.schedulerNewEvent);
router.delete("/event", schedulerControllers.schedulerRemoveEvent);
router.put("/event", schedulerControllers.schedulerUpdateEvent);

module.exports = router;
