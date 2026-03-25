const getHttpCat = async (statusCode) => {
    const response = await fetch('https://http.cat/100');

    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    console.log(`Content-Type: ${contentType}`);

    const imageBuffer = await response.arrayBuffer();
    console.log(`Tamaño de imagen: ${imageBuffer.byteLength} bytes`);

    return imageBuffer;
};

getHttpCat(404).catch(console.error);