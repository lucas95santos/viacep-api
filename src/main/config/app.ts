import express, { Express, Router } from 'express';
import cors from 'cors';

export class App {
  private _httpServer: Express;
  private static _instance: App;

  private constructor(routes: Router) {
    this._httpServer = express();
    this.applyMiddlewares();
    this.applyRoutes(routes);
  }

  private applyMiddlewares() {
    this._httpServer.use(cors());
    this._httpServer.use(express.json());
  }

  private applyRoutes(routes: Router) {
    this._httpServer.use(routes);
  }

  static getInstance(routes: Router) {
    if (!App._instance) {
      App._instance = new App(routes);
    }

    return App._instance._httpServer;
  }
}
