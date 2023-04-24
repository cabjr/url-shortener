# Short URL Service

A simple backend application that creates short URLs based on long URLs provided by the user. The service is built using TypeScript, Node.js, and Express.

## Features

- Create short URLs based on long URLs
- Redirect to the long URL when accessing the short URL
- API documentation with Swagger UI

## Project Structure

short-url/
│
├── src/
│ ├── tests/
│ │ └── services/
│ │ │ └── ShortUrlService.test.ts
│ ├── controllers/
│ │ └── ShortUrlController.ts
│ │ └── services/
│ │ │ └── ShortUrlService.ts
│ ├── application.ts
│ └── server.ts
├── package.json
└── tsconfig.json


## Getting Started

### Prerequisites

- Node.js (v14 or newer)

### Installation

1. Clone the repository


2. Install the dependencies:

cd short-url
npm install


### Running the Application

To start the development server, run:

npm run dev

The server will start on port 3000. You can access the API documentation at [http://localhost:3000/docs](http://localhost:3000/docs).

### Running Tests

To run the unit tests, use the following command:

npm jest


## API Endpoints

- **POST** `/short-url` - Create a short URL from the provided long URL
- **GET** `/{id}` - Redirect to the long URL associated with the provided tiny URL ID

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
