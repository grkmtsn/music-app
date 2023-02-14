import UserModel from '../models/user.model.js';

const UserService = {
  getUserById: async (id: string) => {
    return await UserModel.findById(id);
  },
  getUserByEmail: async (email: string) => {
    return await UserModel.findOne({ email });
  }
};

export default UserService;
