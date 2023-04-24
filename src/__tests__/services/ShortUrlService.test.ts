import { ShortUrlService } from "../../services/ShortUrlService";

describe("ShortUrlService", () => {
  let shortUrlService: ShortUrlService;

  beforeEach(() => {
    shortUrlService = new ShortUrlService();
  });

  it("should create a shortened URL", () => {
    const longUrl = "https://www.example.com";
    const tinyUrlId = shortUrlService.createTinyUrl(longUrl);

    expect(tinyUrlId).toBeDefined();
    expect(tinyUrlId.length).toBeGreaterThanOrEqual(8);
  });

  it("should get the long URL for a given tiny URL ID", () => {
    const longUrl = "https://www.example.com";
    const tinyUrlId = shortUrlService.createTinyUrl(longUrl);
    const foundLongUrl = shortUrlService.getLongUrl(tinyUrlId);

    expect(foundLongUrl).toBe(longUrl);
  });

  it("should return undefined for an invalid tiny URL ID", () => {
    const invalidTinyUrlId = "invalid-id";
    const foundLongUrl = shortUrlService.getLongUrl(invalidTinyUrlId);

    expect(foundLongUrl).toBeUndefined();
  });
});
