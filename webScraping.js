const ip = "186.23.113.30";
const token = 'ad216a033d3688';
const url = `https://ipinfo.io/${ip}?token=${token}`;

// const res = await fetch(url);
// const json = await res.json();


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


