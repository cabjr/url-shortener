import express, { Application } from "express";
import { ShortUrlController } from "./controllers/ShortUrlController";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";


class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeControllers();
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(YAML.load(path.join(__dirname, "/swagger.yaml"))));
  }

  private initializeControllers(): void {
    const UrlController = new ShortUrlController();
    this.app.use("/", UrlController.router);
  }
}

export default App;
