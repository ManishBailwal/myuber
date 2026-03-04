import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import generateToken from '../utils/generateToken.js'

export const signupService = async({name, email, password, role, phone}) => {

    //check if user is already registered
    const existingUser = await User.findOne({email});

    if(existingUser){
        const error = new Error("User already exists");
        error.statusCode = 400;
        throw error;
    }


    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create user

    const user = await User.create(
        {
            name,
            email,
            password: hashedPassword,
            role,
            phone
        }
    )

    const token = generateToken(user);

    return {
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role

        },
       token
    }

}

export const loginService = async ({email, password})=>{

    const user = await User.findOne({email}).select("+password");

    if(!user){

        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  const token = generateToken(user);


  return {
    user:{
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,


    },
    token,
  }

}