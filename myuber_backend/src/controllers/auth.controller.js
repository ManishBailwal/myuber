import { signupService , loginService} from "../services/auth.service.js";

export const signup = async (req, res, next)=>{

    try{

        const result = await signupService(req.body);

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            data: result,
        })

    }catch (err){
        next(err)
    }

}

export const login = async (req, res, next)=>{
    try{

        const result = await loginService(req.body)

        res.status(200).json({
            success: true,
            message: "Login Successful",
            data: result,
        })

    }catch(err){
        next(err)
    }
}