import User from '../models/userModel.js';

export const registerController = async (req, res) => {
    try {
        const { isTeacher, email, phoneNumber, password } = req.body
        // validation
        if (!isTeacher) {
            return res.status(500).send({
                success: false,
                message: 'Something went wrong, please open the app again.'
            })
        } else if (!email || !phoneNumber || !password) {
            return res.status(500).send({
                success: false,
                message: 'All fields are required'
            })
        }

        const user = await User.create({
            isTeacher,
            email,
            phoneNumber,
            password
        })
        res.status(201).send({
            success: true,
            message: 'User created successfully',
            user
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in API'
        })
    }
}