// this file contains scheduler function code

/**
 * event format (both db and json)
 * id
 * title
 * start_date
 * end_date
 * type
 * priority
 * details
 */

/**
 * expect event json in payload
 * check if event legal
 * return TBD
 */
const schedulerNewEvent = (req, res, next) => {
  res.send('new event!')
};

/**
 * expect event json in payload and event ID
 * check if event legal
 * return TBD
 */
const schedulerUpdateEvent = (req, res, next) => {
  res.send('event updated')
};

/**
 * expect event is
 * check if event legal
 * return TBD
 */
const schedulerRemoveEvent = (req, res, next) => {
  res.send('event deleted!');
};


module.exports = {
    schedulerNewEvent,
    schedulerUpdateEvent,
    schedulerRemoveEvent
}