import { applyMiddleware } from 'redux';
import { logger } from './logger';

export const middlewares = applyMiddleware(logger);
