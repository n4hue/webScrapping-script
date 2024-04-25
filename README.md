# IP Information Fetcher

This code snippet is a JavaScript program that fetches and logs information about an IP address using the ipinfo.io API.

## Installation

No installation is required to run this code. It can be executed directly in a JavaScript environment.

## Usage

1. Set the `ip` and `token` variables with the desired IP address and API token respectively.
2. Uncomment the `fetch` and `json` lines to make the API request and parse the response.
3. Run the `obtenerInformacionIP` function to fetch and log the IP information.

## Example

```javascript
const ip = "#";
const token = '#';
const url = `https://ipinfo.io/${ip}?token=${token}`;

async function obtenerInformacionIP() {
    try {
        const response = await fetch(`https://ipinfo.io/${ip}?token=${token}`);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw new Error('Error al obtener la información de IP');
        }
    } catch (error) {
        console.error(error);
    }
}

obtenerInformacionIP();
