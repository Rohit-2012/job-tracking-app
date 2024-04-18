import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (error, req, res, next) => {
  console.log(error);
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
  const msg = error.message || 'something went  wrong, try again later'
    res.status(statusCode).json({ msg})
}
  
export default errorHandlerMiddleware