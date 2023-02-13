import { NextFunction, Request, Response } from 'express';
import Error from '../Utils/ErrorHandler';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { status, message } = error as Error;
    res.status(status || 500).json({ message });
    next();
  }
}

export default ErrorHandler;