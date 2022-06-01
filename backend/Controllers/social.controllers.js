// all social related code stays here

/**
 * expect user id
 * check if auth legal
 * return TBD
 */
const getProfile = (req, res, next) => {
  res.json({hello: "world"});

  res.send("Your Social Profile");
};

/**
 * expect user id and friend id
 * check if auth legal
 * return TBD
 */
const newFriend = (req, res, next) => {
  const uid= req.body.uid;
  const nickname = req.body.nickname;
  const level = req.body.level;
  const title = req.body.title;
  const total_focus_time = req.body.total_focus_time;
  const weekly_focus_time = req.body.weekly_focus_time;

  console.log('Got body:', req.body);

  /*
  connection.query('INSERT INTO user SET uid = ?, nickname = ?, evel = ?, phone = ?, title = ?', total_focus_time = ?', weekly_focus_time = ?, 
  [uid, nickname, level, title, total_focus_time, weekly_focus_time], (err, rows) => {
    if (!err) {
      res.render('add-user', { alert: 'User added successfully as a follower.' });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
  */

  res.status(201).json(req.body);
    
  // res.send("New Friend!");
};

/**
 * expect user id and target id
 * check if auth legal
 * return TBD
 */
const removeFriend = (req, res, next) => {
  res.send("No Longer Friend :(");
};

module.exports = {
  getProfile,
  newFriend,
  removeFriend,
};
