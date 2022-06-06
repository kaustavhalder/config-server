exports.getHealthRoute = async (req, res) => {
    res.json({
        "status" : "UP",
        "message" : "Server is up and running"
    })
}