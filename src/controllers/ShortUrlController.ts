import { Request, Response, Router } from "express";
import { ShortUrlService } from "../services/ShortUrlService";

export class ShortUrlController {
  public router: Router;
  private tinyUrlService: ShortUrlService;

  constructor() {
    this.router = Router();
    this.tinyUrlService = new ShortUrlService();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/short-url", this.createTinyUrl.bind(this));
    this.router.get("/:id", this.redirectToLongUrl.bind(this));
  }

  private createTinyUrl(req: Request, res: Response): void {
    const longUrl = req.body.longUrl;

    if (!longUrl) {
      res.status(400).json({ message: "Long URL is required" });
      return;
    }

    const id = this.tinyUrlService.createTinyUrl(longUrl);
    const shortUrl = `${req.protocol}://${req.get("host")}/${id}`;

    res.status(201).json({ shortUrl });
  }

  private redirectToLongUrl(req: Request, res: Response): void {
    const id = req.params.id;
    const longUrl = this.tinyUrlService.getLongUrl(id);

    if (!longUrl) {
      res.status(404).json({ message: "Tiny URL not found" });
      return;
    }

    res.redirect(longUrl);
  }
}
