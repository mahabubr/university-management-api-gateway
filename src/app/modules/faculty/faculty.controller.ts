import { NextFunction, Request, Response } from 'express';
import { FacultyServices } from './faculty.services';
import sendResponse from '../../../shared/response';

const updateOneInDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyServices.updateOneInDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const FacultyController = {
  updateOneInDB
};
