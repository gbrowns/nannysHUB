exports.allAccess = (req, res) => {
     res.status(200).send("Public content here")
}

exports.userBoard = (req, res) => {
     res.status(200).send("User Content")
}

exports.adminBoard = (req, res) => {
     res.status(200).send("Admin Content");
}

exports.moderator = (req, res) => {
     res.status(200).send("Moderator Content");
}