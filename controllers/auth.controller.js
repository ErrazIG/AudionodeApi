import authService from "../services/auth.service.js";
import { generateJwt } from "../utils/jwt.utils.js";

const authController = {

    register: async (req, res) => {
        const data = req.body;

        const member = await authService.register(data);


        res.status(201)
            .json(member);
    },

    login: async (req, res) => {
        const data = req.body;

        const member = await authService.login(data.username, data.password);

        if (!member) {
            res.status(400)
                .json({
                    errorMessage: 'Invalid username or email'
                });
            return;
        }

        console.log(member);
        const token = await generateJwt(member);

        res.status(200)
            .json({ token });

    },
};
export default authController;