import UserService from "../services/user-service.js";

const userService = new UserService();

export const singup = async (req, res) => {

    try {
        const response = await userService.singup({
            email : req.body.email,
            password : req.body.password,
            name : req.body.name
        });

        return res.status(201).json({
            success : true,
            message : 'Successfully created a new user',
            data : response,
            err : {}
        });
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : 'something went wrong',
            data : {},
            err : error
        });
    }
    
}

export const login = async (req, res) => {
    try {
        const token = await userService.signin(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: token,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}