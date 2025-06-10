
async function init() {
    try {
        const response = await fetch('/usuarios');
        if (!response.ok) {
            throw new Error(`¡Error HTTP! estado: ${response.status}`);
        }
        const data = await response.json(); // Asumiendo que la respuesta es JSON
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error; // Vuelve a lanzar el error para un manejo posterior si es necesario
    }
}
