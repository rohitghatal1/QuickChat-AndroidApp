const errorHandler = (err: any, req: any, res: any, next: any) => {
    if (err) {
      if (err.message) {
        if (err.message.includes("dation failed:")) {
          err.message = err.message.split(":")[2]?.trim();
        }
  
        res.status(400).json({
          status: "failed",
          message: err.message,
        });
      } else {
        res.status(400).json({
          status: "failed",
          message: err,
        });
      }
  
      console.log(err);
    } else {
      next();
    }
  };
  
  export default errorHandler;