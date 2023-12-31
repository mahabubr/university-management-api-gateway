import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentSemesterPaymentService } from './studentSemesterPayment.services';

const getMyPayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentSemesterPaymentService.getMyPayment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentSemesterPaymentController = {
  getMyPayment
};
