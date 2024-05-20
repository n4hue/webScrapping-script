# IP Information Lookup

This project is a simple web application that allows users to look up information about an IP address. The application uses Tailwind CSS for styling and a Node.js server with Express to handle API requests. The server fetches data from the `ip-geo-location` API on RapidAPI.

## Features

- Look up geographical and network information for a given IP address.
- Clean and responsive user interface built with Tailwind CSS.
- Secure API key management using environment variables.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js (v12.17.0 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ip-information-lookup.git
    cd ip-information-lookup
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your RapidAPI key:
    ```env
    RAPIDAPI_KEY=your-api-key-here
    ```

### Running the Server

Start the Node.js server:
```bash
node server.mjs
The server will start on http://localhost:3000.

Project Structure
```java
ip-information-lookup/
├── .env
├── package.json
├── server.mjs
└── public/
    ├── index.html
    └── main.js
```

### Usage
- Open your web browser and navigate to http://localhost:3000.
- Enter an IP address in the input field and click "Lookup".
- View the IP information displayed on the page.
  
  
### Technologies Used
- Node.js
- Express
- Tailwind CSS
- Fetch API
- RapidAPI
