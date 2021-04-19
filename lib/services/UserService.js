const User = require('../models/User');
const { exchangeCodeForToken, getUserProfile } = require('../utils/github');

module.exports = class UserService {
  static async create(code) {
    const token = await exchangeCodeForToken(code);

    const profile = await getUserProfile(token);

    const user = await User.findByUserName(profile.userName);
    if (!user) {
      return User.insert(profile);
    } else {
      return User.updateUserPic(profile.userName, profile.photoUrl);
    }
  }
};
