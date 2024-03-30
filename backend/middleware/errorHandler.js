const errorHandler = (error, req, res, next) => {
console.log(error)
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).send({ message: messages.join(",") });
    } else if (error.message) {
      console.log(error.message)
      return res.status(400).send({ message: error.message });
    }
  
    return res.status(500).send({ message: "Internal Server Error" });
  };
  
  module.exports = errorHandler;