const User = require("../model/userModel");



module.exports.addLiskedMovies = async (res, req, next) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const moviesAlreadyLiked = likedMovies.find(({ id }) => {
        id = data.id;
      });
      if (!moviesAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      } else {
        return res.json({ msg: "Movie alrdy like" });
      }
    } else {
      await User.create({ email, likedMovies: [data] });
    }
    return res.json({ msg: "Movie add successfully" });
  } catch (err) {
    next(err);
  }
};
