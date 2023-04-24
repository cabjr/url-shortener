import App from "./application";
import http from "http";

const appInstance = new App().app;
const port = process.env.PORT || 3000;

const server = http.createServer(appInstance);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
