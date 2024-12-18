const fs = require('fs');
const https = require('https');
const path = require('path');

// Fungsi untuk download file menggunakan Promise
function downloadFile(url, outputPath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(outputPath);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(`Failed to download file. Status Code: ${response.statusCode}`);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve('File Dimas downloaded successfully!');
            });
        }).on('error', (err) => {
            fs.unlink(outputPath, () => {});
            reject(`Error: ${err.message}`);
        });
    });
}

// Fungsi utama menggunakan Async/Await
async function main() {
    const url = 'https://example.com/file.zip'; // Ganti dengan URL file yang ingin di-download
    const outputPath = path.join(__dirname, 'downloaded-file.zip');

    try {
        console.log('Starting download...');
        const result = await downloadFile(url, outputPath);
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
