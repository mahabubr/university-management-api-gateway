import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterServices } from './academicSemester.services';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterServices.insertIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterServices.getAllFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterServices.getSingleFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterServices.updateOneIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterServices.deleteByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneIntoDB,
  deleteByIdFromDB
};
