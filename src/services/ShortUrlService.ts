import { nanoid } from "nanoid";

interface UrlMapping {
  id: string;
  longUrl: string;
}

const urlMappings: UrlMapping[] = [];

export class ShortUrlService {
  createTinyUrl(longUrl: string): string {
    const id = nanoid(8);
    urlMappings.push({ id, longUrl });
    return id;
  }

  getLongUrl(id: string): string | undefined {
    const mapping = urlMappings.find((entry) => entry.id === id);
    return mapping?.longUrl;
  }
}
