const { addUser } = require("../services/user.addUser");


exports.signup = async function(req, res) {
    const { email, password } = req.body;
    
    const result = await addUser(email, password);
    if(result.success) {
        console.log(result.message);
        res.status(201).json({ message: result.message });
    } else {
        console.log(result.message);
        res.status(500).json({ error: result.error });
    }
}