import axios from "axios";
const baseUrl = process.env.REACT_APP_SERVER_URL;

const login = async (credentials = {}) => {
    const auth = await axios.post(baseUrl + "/login", { ...credentials });

    return auth;
};

const authService = {
    login,
};

export default authService;
