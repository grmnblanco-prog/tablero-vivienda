const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

const basePath = 'G:\\My Drive\\Contrato Minvivienda\\SI Programas Antiguos Minvivienda\\Presentación Wilson';

const files = [
    {
        input: 'Seguimiento de Problemáticas en Proyectos de Vivienda.pdf',
        output: 'pdf_problematicas.txt'
    },
    {
        input: 'Situación y Cierre de Proyectos de Vivienda por Programa y Bolsa.pdf',
        output: 'pdf_cifras_cierre.txt'
    }
];

async function main() {
    for (const file of files) {
        try {
            const pdfBuffer = fs.readFileSync(path.join(basePath, file.input));
            const data = await pdfParse(pdfBuffer);
            const outputPath = path.join(basePath, file.output);
            fs.writeFileSync(outputPath, data.text, 'utf8');
            console.log('Extracted ' + file.input + ': ' + data.numpages + ' pages, ' + data.text.length + ' chars');
        } catch (err) {
            console.error('Error with ' + file.input + ':', err.message);
        }
    }
}

main();
