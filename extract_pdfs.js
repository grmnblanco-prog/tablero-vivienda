const fs = require('fs');
const path = require('path');
const PDFParser = require('C:\\temp_pdf_extract\\node_modules\\pdf2json');

const basePath = 'G:\\My Drive\\Contrato Minvivienda\\SI Programas Antiguos Minvivienda\\Presentación Wilson';

function extractPDF(inputFile, outputFile) {
    return new Promise((resolve, reject) => {
        const pdfParser = new PDFParser();
        pdfParser.on('pdfParser_dataError', errData => reject(errData.parserError));
        pdfParser.on('pdfParser_dataReady', pdfData => {
            // Extract raw text from all pages
            let fullText = '';
            if (pdfData && pdfData.Pages) {
                for (let p = 0; p < pdfData.Pages.length; p++) {
                    const page = pdfData.Pages[p];
                    fullText += '\n--- PAGE ' + (p + 1) + ' ---\n';
                    if (page.Texts) {
                        // Sort texts by y then x position
                        const sortedTexts = page.Texts.sort((a, b) => {
                            if (Math.abs(a.y - b.y) < 0.5) return a.x - b.x;
                            return a.y - b.y;
                        });
                        let lastY = -1;
                        for (const text of sortedTexts) {
                            if (text.R) {
                                for (const r of text.R) {
                                    let decoded;
                                    try { decoded = decodeURIComponent(r.T); } catch (e) { decoded = r.T; }
                                    if (lastY >= 0 && Math.abs(text.y - lastY) > 0.5) {
                                        fullText += '\n';
                                    } else if (lastY >= 0) {
                                        fullText += ' ';
                                    }
                                    fullText += decoded;
                                    lastY = text.y;
                                }
                            }
                        }
                    }
                }
            }
            fs.writeFileSync(outputFile, fullText, 'utf8');
            console.log('Extracted: ' + inputFile + ' -> ' + fullText.length + ' chars, ' + (pdfData.Pages ? pdfData.Pages.length : 0) + ' pages');
            resolve();
        });
        pdfParser.loadPDF(path.join(basePath, inputFile));
    });
}

async function main() {
    await extractPDF(
        'Seguimiento de Problemáticas en Proyectos de Vivienda.pdf',
        path.join(basePath, 'pdf_problematicas.txt')
    );
    await extractPDF(
        'Situación y Cierre de Proyectos de Vivienda por Programa y Bolsa.pdf',
        path.join(basePath, 'pdf_cifras_cierre.txt')
    );
}

main().catch(console.error);
