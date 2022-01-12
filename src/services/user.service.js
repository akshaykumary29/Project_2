import User from '../models/user.model';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

// register user
export const registerUser = async (req,res) => {
  let findUser = await User.find({ email:req.email });
  let length = findUser.data;
  if(!length){

    const hashedPassword = await bcrypt.hash(req.password, 8)
    let newUser = new User({
        firstName: req.firstName,
        lastName: req.lastName,
        email: req.email,
        password: hashedPassword
    })
    return await newUser.save()
  } 
};

// login user
export const loginUser = async (req, res) => {
  let findUser = await User.findOne({ email: req.email });
  console.log(`user details ${findUser}`);

  if (findUser) {
    let matchPassword = await bcrypt.compare(
      req.password,
      findUser.password
    );

    if (matchPassword) {
      const payload = { id: findUser._id, email: findUser.email };
      const token = jwt.sign( payload, process.env.ACCESS_TOKEN_SECRET );
      return new Promise((resolve, reject) => {
        resolve({
            userId: findUser._id,
            firstName: findUser.firstName,
            lastName: findUser.lastName,
            email: findUser.email,
            createdAt: findUser.createdAt,
            success: true,
            token: token
          })
      });
    } else {
      return new Promise((resolve, reject) => {
        resolve({
          name: "Error",
          message: "Invalid password"
        });
      });
    }
  }
}


//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//create new user
export const newUser = async (body) => {
  const data = await User.create(body);
  return data;
};

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};
