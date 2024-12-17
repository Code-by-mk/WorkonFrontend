const db = require("../Config/Db"); 

function signup(req, res) {
    const { Name, Email, password } = req.body;

    if (!Name || !Email || !password) {
        return res.status(400).json({ message: "all fields are required" });
    }


    const query = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";

    db.query(query, [Name, Email, password], (err, result) => {
        if (err) {
            console.error("Error inserting user:", err);
            return res.status(500).json({ message: "Database error" }); 
        }
        res.status(200).json({ message: "User registered successfully" });
    });
}


function login(req, res) {
    const query = "SELECT * FROM user";

    db.query(query, (err, result) => { 
        if (err) {
            console.error("Error in query:", err); 
            return res.status(500).json({ message: "Database error" }); 
        }

        console.log("Users:", result); 
        res.status(200).json({ users: result }); 
    });
}

    

module.exports = {
    signup,
    login
};
