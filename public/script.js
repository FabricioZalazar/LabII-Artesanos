
async function buscarPorId() {
    const id = document.getElementById('inputId').value;
    try {
        const response = await fetch('/usuarios/buscarXId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        });

        if (!response.ok) {
            const errorMsg = await response.text();
            console.log(errorMsg)
        } else {
            const data = await response.json();
            console.log(data)
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

async function buscarPorNombre() {
    const nombre = document.getElementById('inputNombre').value;
    try {
        const response = await fetch('/usuarios/buscarXNombre', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre })
        });

        if (!response.ok) {
            const errorMsg = await response.text();
            console.log(errorMsg)
        } else {
            const data = await response.json();
            data.forEach(usuario => {
                 console.log(usuario.nombre);
            });
        }

    } catch (error) {
        console.error('Error:', error);
    }
}
