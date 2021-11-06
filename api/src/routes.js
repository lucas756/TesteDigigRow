import express, { Router } from 'express';

import FormController from './app/controllers/FormController';


var app = express();
const routes = new Router();


routes.get('/inputs', FormController.store);

export default routes;
