// Portfolio Data
const portfolioData = {
    global: {
        totalViviendas: 4500,
        projects: {
            terminados: [
                { name: 'Villa del Sol', loc: 'Cali', viv: 450, avance: 100, status: 'Certificado' },
                { name: 'Altos de Manzanares', loc: 'Santa Marta', viv: 320, avance: 100, status: 'Certificado' },
                { name: 'Pinares de Oriente', loc: 'Villavicencio', viv: 600, avance: 100, status: 'Certificado' }
            ],
            ejecucion: [
                { name: 'Urbanización El Recuerdo', loc: 'Montería', viv: 150, avance: 45, status: 'En Obra' },
                { name: 'Sauces II (Plan Rescate)', loc: 'Mocoa', viv: 200, avance: 27, status: 'Intervenido' }
            ],
            critico: [
                { name: 'Las Gardenias', loc: 'Barranquilla', viv: 4080, avance: 98, status: 'Falla Estructural' },
                { name: 'Santa Elena', loc: 'Cali', viv: 500, avance: 85, status: 'Invasión / Litigio' }
            ]
        }
    },
    globalCategories: [
        {
            id: 'seg-60',
            label: 'Segmento del 60%: Terminados y Certificados',
            summary: 'Proyectos que han cumplido satisfactoriamente con la ejecución física y el cierre técnico.',
            content: `
                <div style="color: var(--text-main); line-height: 1.6;">
                    <p style="margin-bottom: 1rem;">Este segmento representa la base consolidada del portafolio institucional, con proyectos que han superado todas las fases constructivas y se encuentran en etapa de escrituración o liquidación final.</p>
                    <ul style="list-style: disc; padding-left: 1.5rem; gap: 0.5rem; display: flex; flex-direction: column;">
                        <li><b>PVG Fase I:</b> 103,669 viviendas legalizadas. Representa el éxito del modelo de vivienda gratuita masiva.</li>
                        <li><b>VIPA:</b> 66,650 unidades terminadas. Foco actual en la liquidación de los patrimonios autónomos con fiduciarias.</li>
                        <li><b>Saneamiento Técnico:</b> Proyectos que ya cuentan con servicios públicos definitivos y actas de habitabilidad.</li>
                    </ul>
                </div>
            `,
            color: 'var(--accent)'
        },
        {
            id: 'seg-15',
            label: '1. Segmento del 15% En Ejecución y Plan Rescate',
            summary: 'Estos proyectos presentan avances físicos, pero requieren gestión técnica o financiera adicional para su culminación.',
            content: `
                <div style="color: var(--text-main); line-height: 1.6;">
                    <ul style="list-style: disc; padding-left: 1.5rem; gap: 0.8rem; display: flex; flex-direction: column;">
                        <li><b>Mocoa - Sauces II (Putumayo):</b> Presenta un 27% de avance. Se encuentra en proceso de reactivación tras la contratación de ENTerritorio para la gerencia de 252 nuevas unidades.</li>
                        <li><b>Santa Elena - Torres 56-57 y 59-60 (Cali):</b> 80 unidades sin iniciar por actualización de norma NSR. Se encuentran en etapa de pre-construcción con el contratista Tayka Colombia.</li>
                        <li><b>Divino Niño II (Gamarra, Cesar):</b> 86 viviendas vinculadas al Plan Rescate. Están 100% construidas y en proceso de certificación de habitabilidad para su entrega en 2025.</li>
                        <li><b>Ciudadela La Perla (Campoalegre, Huila):</b> 150 viviendas al 100% de ejecución, pero en fase de entrega y sorteo de nomenclatura (Plan Rescate).</li>
                        <li><b>Villa Yady (Sabanalarga, Atlántico):</b> Presenta un 98.31% de avance. La obra está suspendida por falta de recursos de la Gobernación para obras complementarias como la EBAR y muros de estabilización.</li>
                        <li><b>Pereira y Dosquebradas (Risaralda):</b> Proyecto de Atención de Desastres con 0% de avance; actualmente con anexo técnico aprobado para iniciar estudios y diseños.</li>
                    </ul>
                </div>
            `,
            color: 'var(--warning)'
        },
        {
            id: 'seg-25',
            label: '2. Segmento del 25% Riesgo Crítico, Jurídico o Invasión',
            summary: 'Este grupo concentra los mayores desafíos institucionales, donde la estrategia se enfoca en el saneamiento legal y la recuperación de activos.',
            content: `
                <div style="color: var(--text-main); line-height: 1.6;">
                    <ul style="list-style: disc; padding-left: 1.5rem; gap: 0.8rem; display: flex; flex-direction: column;">
                        <li><b>Santa Elena - Sectores A and B (Cali):</b> 80 unidades con invasión activa (74 hogares en torres P-P1 and 47-48). Se requiere la intervención de ZAR Abogados para procesos reivindicatorios.</li>
                        <li><b>Macroproyecto San José - UE-4 and UE-5 (Manizales):</b> Zona en siniestro con un avance del 25% (paralizado). Se encuentra en disputa de garantías con Seguros del Estado tras la liquidación del contrato.</li>
                        <li><b>Urbanización El Porvenir (Villagarzón, Putumayo):</b> Presenta un 55.89% de avance and está invadido por la comunidad, con pólizas vencidas and declaratoria de incumplimiento en febrero de 2024.</li>
                        <li><b>Urbanización 20 de Octubre (San Marcos, Sucre):</b> Proyecto con 0% de avance por inviabilidad jurídica (falsa tradición del lote). Se instruyó su terminación anticipada en agosto de 2023.</li>
                        <li><b>Manguaré Fase II (Leticia, Amazonas):</b> Caso crítico de abandono con solo el 3.45% de avance. Declarado en incumplimiento en enero de 2024.</li>
                        <li><b>Villa Lina (Chitagá, Norte de Santander):</b> Proyecto al 52% de avance con una demanda activa contra la aseguradora en el Juzgado 8vo Administrativo de Cúcuta.</li>
                        <li><b>Rosas (Cauca) and Villarrica (Tolima):</b> Proyectos de desastres declarados inviables por falta de suelo seguro. Se encuentran en etapa de liquidación and reintegro de recursos ($5.850 millones en el caso de Rosas).</li>
                        <li><b>17 Proyectos de PVG II en Incumplimiento:</b> Suman 2,501 unidades afectadas por inflación and paros. Ejemplos incluyen:
                            <ul style="list-style: circle; padding-left: 1.5rem; margin-top: 0.5rem; gap: 0.3rem; display: flex; flex-direction: column;">
                                <li>Villa Nelly (Arenal, Bolívar): 26.26% de avance and declaratoria de incumplimiento.</li>
                                <li>Mirador de Bello Horizonte (Marmato, Caldas): 20.96% de avance e insolvencia del constructor.</li>
                                <li>Valle de Canaan II (Viterbo, Caldas): 32.78% de avance con incumplimiento instruido en enero de 2024.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            `,
            color: 'var(--danger)'
        }
    ],
    programs: [
        {
            id: 'pvgi',
            name: 'PVG Fase I',
            viviendas: 103669,
            vivTotales: 104009,
            vivCertificadas: 103669,
            valorCOP: "$0.12T",
            avance: 99.67,
            riesgo: 'Residual',
            esquema: 'Fiducia / Gratuita',
            projects: [
                { name: 'Villa Lina', loc: 'Chitagá, N.S.', viv: 140, avance: 52, status: 'Demanda Jurídica', cat: 'Crítico' },
                { name: 'Villa San Juan', loc: 'Guachucal, Nariño', viv: 200, avance: 85, status: 'Liquidación Anticipada', cat: 'Crítico' },
                { name: 'Las Gardenias', loc: 'Barranquilla', viv: 4080, avance: 98, status: 'Falla Estructural', cat: 'Crítico' },
                { name: 'Urbanización El Recuerdo', loc: 'Montería', viv: 154, avance: 100, status: 'Terminado', cat: 'Terminados' }
            ],
            details: {
                stats: [
                    { label: 'Terminados', value: 99.6, color: '#10b981', count: 295 },
                    { label: 'En Ejecución', value: 0.1, color: '#f59e0b', count: 1 },
                    { label: 'Crítico', value: 0.3, color: '#ef4444', count: 2 }
                ],
                highlightTitle: 'Análisis de Riesgo Estratégico',
                highlightText: `El riesgo estratégico del programa se concentra en apenas el <b>0,33%</b> de las soluciones habitacionales (340 viviendas), distribuidas en dos proyectos específicos:
                <ul style="margin-top:0.8rem; display:flex; flex-direction:column; gap:0.6rem">
                    <li><b>Villa Lina (Chitagá):</b> Declarado en incumplimiento en 2016. Existe demanda activa contra la aseguradora en el Juzgado 8vo Administrativo de Cúcuta.</li>
                    <li><b>Villa San Juan (Guachucal):</b> Retrasos por pandemia and necesidad de obras de mitigación geotécnica. Instrucción de terminación anticipada en agosto 2025.</li>
                </ul>
                <p style="margin-top:0.8rem"><b>Sección Crítica:</b> Las Gardenias (Barranquilla) con 4,080 viv. presenta fallas estructurales graves and requerimientos pendientes de subestación eléctrica.</p>`
            }
        },
        {
            id: 'pvgii',
            name: 'PVG Fase II',
            viviendas: 23400,
            vivTotales: 27311,
            vivCertificadas: 23400,
            valorCOP: "$0.05T",
            avance: 95.87,
            riesgo: 'Incumplimiento',
            esquema: 'Fiducia / Gratuita',
            projects: [
                { name: 'Manguaré Fase II', loc: 'Leticia', viv: 150, avance: 3, status: 'Abandono', cat: 'Crítico' },
                { name: 'El Porvenir', loc: 'Villagarzón', viv: 200, avance: 55, status: 'Invasión', cat: 'Crítico' },
                { name: '20 de Octubre', loc: 'San Marcos', viv: 80, avance: 0, status: 'Inviable Jurídico', cat: 'Crítico' },
                { name: 'Villa Nelly', loc: 'Arenal', viv: 120, avance: 26, status: 'Incumplimiento', cat: 'Incumplimiento' }
            ],
            details: {
                stats: [
                    { label: 'Terminados', value: 87, color: '#10b981', count: 160 },
                    { label: 'Incumplimiento', value: 9, color: '#ef4444', count: 17 },
                    { label: 'En Ejecución', value: 4, color: '#f59e0b', count: 9 }
                ],
                highlightTitle: 'Análisis de Riesgo Estratégico',
                highlightText: `Foco crítico en el abandono de obra e invasiones que impiden el cierre del programa:
                <ul style="margin-top:0.8rem; display:flex; flex-direction:column; gap:0.6rem">
                    <li><b>Manguaré II (Leticia):</b> Obra abandonada con solo 3.45% de avance. Incumplimiento instruido en enero 2024; posible recontratación o liquidación.</li>
                    <li><b>El Porvenir (Villagarzón):</b> Proyecto al 55.89% invadido por la comunidad. Pólizas vencidas and declaratoria de incumplimiento en febrero 2024.</li>
                    <li><b>20 de Octubre (San Marcos):</b> 0% de avance por falsa tradición del lote. Terminación anticipada instruida por inviabilidad jurídica.</li>
                </ul>
                <p style="margin-top:0.8rem">Se gestionan 17 proyectos adicionales afectados por inflación and paros (2,501 unidades).</p>`
            }
        },
        {
            id: 'vipa',
            name: 'VIPA',
            viviendas: 66650,
            vivTotales: 66802,
            vivCertificadas: 66650,
            valorCOP: "$1.77T",
            avance: 99.72,
            riesgo: 'Mínimo',
            esquema: 'Cofinanciación',
            projects: [
                { name: 'Balcones del Palaa', loc: 'Riohacha', viv: 120, avance: 95, status: 'Pendiente Cierre', cat: 'Cierre Admin' },
                { name: 'Residencial VIPA 1', loc: 'Bucaramanga', viv: 450, avance: 100, status: 'Certificado', cat: 'Terminados' }
            ],
            details: {
                stats: [
                    { label: 'Terminados', value: 99.7, color: '#10b981', count: 152 },
                    { label: 'Cierre Admin', value: 0.3, color: '#3b82f6', count: 3 }
                ],
                highlightTitle: 'Análisis de Riesgo Estratégico',
                highlightText: `Programa en etapa final de liquidación de patrimonios autónomos con riesgo operativo mínimo:
                <ul style="margin-top:0.8rem; display:flex; flex-direction:column; gap:0.6rem">
                    <li><b>Balcones del Palaa (Riohacha):</b> Posible incumplimiento por falta de recibo de redes de servicios and certificación de bomberos.</li>
                    <li><b>Bolsa General:</b> 152 proyectos certificados. Retorno de saldos al Tesoro Nacional en curso.</li>
                </ul>`
            }
        },
        {
            id: 'macro',
            name: 'Macroproyectos',
            viviendas: 15200,
            vivTotales: 18500,
            vivCertificadas: 15200,
            valorCOP: "$0.45T",
            avance: 82.0,
            riesgo: 'Complejo',
            esquema: 'Interés Nacional (MIN)',
            projects: [
                { name: 'Santa Elena Sectores A/B', loc: 'Cali', viv: 500, avance: 85, status: 'Invasión/Litigio', cat: 'Crítico (Invasión)' },
                { name: 'San José UE-4/5', loc: 'Manizales', viv: 230, avance: 25, status: 'Siniestrado', cat: 'Crítico (Invasión)' },
                { name: 'San Antonio', loc: 'Buenaventura', viv: 140, avance: 90, status: 'Pendiente Legalización', cat: 'Crítico (Invasión)' }
            ],
            details: {
                stats: [
                    { label: 'Terminados', value: 82, color: '#10b981', count: 12 },
                    { label: 'Crítico (Invasión)', value: 18, color: '#ef4444', count: 3 }
                ],
                highlightTitle: 'Análisis de Riesgo Estratégico',
                highlightText: `Alta complejidad social and jurídica por ocupaciones ilegales and siniestralidad contractual:
                <ul style="margin-top:0.8rem; display:flex; flex-direction:column; gap:0.6rem">
                    <li><b>Santa Elena (Cali):</b> Ocupación de 80 hogares en sectores A/B. Requiere saneamiento jurídica and desalojos para ejecutar obras remanentes.</li>
                    <li><b>San José (Manizales):</b> Siniestro por incumplimiento (25% avance). Disputa de garantías con Seguros del Estado por $7.897 millones.</li>
                    <li><b>San Antonio (Buenaventura):</b> Pendiente legalización de vivienda invadida and actualización cartográfica.</li>
                </ul>`
            }
        },
        {
            id: 'desastres',
            name: 'Desastres (Plan Rescate)',
            viviendas: 1840,
            vivTotales: 3500,
            vivCertificadas: 1840,
            valorCOP: "$0.08T",
            avance: 27.0,
            riesgo: 'Crítico',
            esquema: 'Plan Rescate / UNGRD',
            projects: [
                { name: 'Sauces II', loc: 'Mocoa', viv: 252, avance: 27, status: 'Intervenido', cat: 'En Ejecución' },
                { name: 'Rosas', loc: 'Cauca', viv: 150, avance: 0, status: 'Inviable Suelo', cat: 'Sin Iniciativa' },
                { name: 'Villarrica', loc: 'Tolima', viv: 100, avance: 0, status: 'Inviable Suelo', cat: 'Sin Iniciativa' },
                { name: 'Villa Yady', loc: 'Sabanalarga', viv: 154, avance: 98, status: 'Obra Suspendida', cat: 'En Ejecución' }
            ],
            details: {
                stats: [
                    { label: 'Terminados', value: 27, color: '#10b981', count: 3 },
                    { label: 'En Ejecución', value: 45, color: '#f59e0b', count: 4 },
                    { label: 'Sin Iniciativa', value: 28, color: '#64748b', count: 2 }
                ],
                highlightTitle: 'Análisis de Riesgo Estratégico',
                highlightText: `Inviabilidad por riesgo natural and fallas en la gestión institucional de convenios:
                <ul style="margin-top:0.8rem; display:flex; flex-direction:column; gap:0.6rem">
                    <li><b>Sauces II (Mocoa):</b> Reactivación crítica bajo gerencia de ENTerritorio ante bloqueos administrativos previos.</li>
                    <li><b>Rosas and Villarrica:</b> Proyectos inviables por falta de suelo seguro. Se inicia reintegro de $5.850 millones al Tesoro Nacional.</li>
                    <li><b>Villa Yady (Sabanalarga):</b> Suspensión por falta de $950M de la Gobernación para obras complementarias.</li>
                </ul>`
            }
        },
        {
            id: 'bolsas',
            name: 'Bolsas Anteriores',
            viviendas: 23275,
            vivTotales: 389338,
            vivCertificadas: 366063,
            valorCOP: "$0.02T",
            avance: 85.0,
            riesgo: 'Legalización',
            esquema: 'Subsidio Directo',
            projects: [
                { name: 'Ciudadela San Antonio', loc: 'Villavicencio', viv: 500, avance: 55, status: 'Obsolescencia RETIE', cat: 'Sin Legalizar' },
                { name: 'Bolsa Rural Histórica', loc: 'Nacional', viv: 5000, avance: 80, status: 'Depuración Documental', cat: 'Sin Legalizar' }
            ],
            details: {
                stats: [
                    { label: 'Legalizados', value: 85, color: '#10b981', count: 366063 },
                    { label: 'Sin Legalizar', value: 15, color: '#ef4444', count: 23275 }
                ],
                highlightTitle: 'Análisis de Riesgo Estratégico',
                highlightText: `Gran volumen de subsidios antiguos con barreras técnicas insalvables bajo la normativa actual:
                <ul style="margin-top:0.8rem; display:flex; flex-direction:column; gap:0.6rem">
                    <li><b>Ciudadela San Antonio:</b> 500 expedientes sin legalizar por obsolescencia técnica (Norma RETIE).</li>
                    <li><b>Bolsa Histórica:</b> 23,275 subsidios requieren depuración masiva por pérdida de poder adquisitivo and caducidad.</li>
                </ul>`
            }
        }
    ],
    projects_strategic: [
        // CRÍTICO
        {
            id: 'santa-elena', name: 'Santa Elena', full: 'Santa Elena (Cali)', sub: 'Macroproyectos', cat: 'Crítico', x: 12, y: 88,
            lat: 3.4516, lng: -76.5320,
            prob: 'Invasión y riesgo estructural en sectores A y B (torres P-P1 y 47-48).',
            status: 'Crítico / Invasión',
            act: 'Instrucción a ZAR Abogados para procesos reivindicatorios. Articulación con Alcaldía para caracterización.',
            jur: 'Contratación de ZAR Abogados para procesos reivindicatorios.',
            tech: 'Actualización NSR-10 y ajuste de presupuestos por IPC.',
            fin: 'Suspensión de CAPEX hasta logar saneamiento.',
            soc: 'Caracterización de hogares ocupantes con Secretaría de Vivienda.'
        },
        {
            id: 'manguare-ii', name: 'Manguaré II', full: 'Manguaré II (Leticia)', sub: 'PVG Fase II', cat: 'Crítico', x: 28, y: 85,
            lat: -4.2153, lng: -69.9406,
            prob: 'Abandono total de obra con avance del 3.45%.',
            status: 'Incumplimiento / Sin Obra',
            act: 'Declaratoria de incumplimiento en enero 2024. Siniestro de pólizas en curso ante aseguradora.',
            jur: 'Iniciación de siniestro de pólizas por abandono.',
            tech: 'Peritaje técnico de estructuras existentes.',
            fin: 'Recuperación de saldos no ejecutados.',
            soc: 'Reporte de afectación a familias indígenas del Amazonas.'
        },
        {
            id: 'octubre-20', name: '20 de Octubre', full: '20 de Octubre (Sucre)', sub: 'PVG Fase II', cat: 'Crítico', x: 15, y: 72,
            lat: 8.6593, lng: -75.1325,
            prob: 'Inviabilidad jurídica absoluta por falsa tradición del lote.',
            status: 'Inviable Jurídico',
            act: 'Instrucción de terminación anticipada emitida en agosto 2023. Expediente en liquidación.',
            jur: 'Liquidación por imposibilidad de saneamiento predial.',
            tech: 'Evaluación de nulidad técnica del proyecto.',
            fin: 'Reintegro de recursos al patrimonio autónomo.',
            soc: 'Notificación de inviabilidad a la comunidad beneficiaria.'
        },
        {
            id: 'porvenir', name: 'El Porvenir', full: 'El Porvenir (Putumayo)', sub: 'PVG Fase II', cat: 'Crítico', x: 35, y: 68,
            lat: 0.4851, lng: -76.6111,
            prob: 'Proyecto al 55.89% invadido por la comunidad.',
            status: 'Invasión / Incumplimiento',
            act: 'Declaratoria de incumplimiento en febrero 2024. Pólizas vencidas pendientes de renovación.',
            jur: 'Demanda por incumplimiento contractual.',
            tech: 'Estabilización de áreas comunes ocupadas.',
            fin: 'Gestión de reclamo ante Seguros del Estado.',
            soc: 'Mediación social para recuperación de control del sitio.'
        },
        {
            id: 'villa-lina', name: 'Villa Lina', full: 'Villa Lina (Chitagá)', sub: 'PVG Fase I', cat: 'Crítico', x: 22, y: 60,
            lat: 7.1328, lng: -72.6631,
            prob: 'Demanda activa contra aseguradora por incumplimiento desde 2016.',
            status: 'Litigio Prolongado',
            act: 'Seguimiento procesal en el Juzgado 8vo Administrativo de Cúcuta.',
            jur: 'Apoderamiento ante la jurisdicción contenciosa.',
            tech: 'Validación de habitabilidad para determinar saldos.',
            fin: 'Expectativa de recaudo por sentencia judicial.',
            soc: 'N/A: El proyecto no tiene presencia institucional activa.'
        },
        {
            id: 'sauces-ii', name: 'Sauces II', full: 'Sauces II (Mocoa)', sub: 'Desastres', cat: 'Crítico', x: 42, y: 55,
            lat: 1.1478, lng: -76.6465,
            prob: 'Complejidad institucional y bloqueos recurrentes (27% avance).',
            status: 'En Obra / Intervenido',
            act: 'Contratación de ENTerritorio para gerencia de 252 nuevas viviendas.',
            jur: 'Ajuste de convenio interadministrativo con UNGRD.',
            tech: 'Reinicio de cimentaciones bajo nuevos diseños.',
            fin: 'Aseguramiento de recursos Plan Rescate.',
            soc: 'Veeduría ciudadana activa de damnificados.'
        },

        // COMPLEJO
        {
            id: 'san-jose', name: 'San José', full: 'Macro. San José (Manizales)', sub: 'Macroproyectos', cat: 'Complejo', x: 65, y: 88,
            lat: 5.0689, lng: -75.5174,
            prob: 'Zona en siniestro tras liquidación unilateral del contrato.',
            status: 'Siniestrado',
            act: 'Disputa de garantías por $7.897 millones con Seguros del Estado.',
            jur: 'Cobro ejecutivo de pólizas de cumplimiento.',
            tech: 'Redefinición de UE-4 y UE-5 (viabilidad técnica).',
            fin: 'Recuperación de activos vía ejecución de seguros.',
            soc: 'Atención a familias desplazadas por riesgo volcánico.'
        },
        {
            id: 'gardenias', name: 'Gardenias', full: 'Las Gardenias (BQ)', sub: 'PVG Fase I', cat: 'Complejo', x: 82, y: 82,
            lat: 10.9639, lng: -74.7964,
            prob: 'Fallas estructurales y subestación eléctrica pendiente.',
            status: 'Postventa Crítica',
            act: 'Mesas técnicas con Electricaribe (Air-e) y peritajes estructurales.',
            jur: 'Exigencia de estabilidad de obra al constructor.',
            tech: 'Refuerzo estructural en bloques afectados.',
            fin: 'Reserva para obras complementarias de urbanismo.',
            soc: 'Convivencia social en esquema masivo.'
        },
        {
            id: 'pvg-17', name: 'PVG II (17)', full: 'PVG II (17 Proyectos)', sub: 'PVG Fase II', cat: 'Complejo', x: 72, y: 75,
            lat: 6.2442, lng: -75.5812,
            prob: 'Incumplimiento masivo por inflación y paros regionales.',
            status: 'Incumplimiento Instruido',
            act: 'Instrucción de ejecución de pólizas masiva. Fecha límite Julio 2025.',
            jur: 'Resolución masiva de vínculos contractuales.',
            tech: 'Actualización cartográfica y técnica de los 17 hitos.',
            fin: 'Depuración de patrimonios autónomos.',
            soc: 'Información a alcaldes sobre cambio de contratista.'
        },
        {
            id: 'balcones-palaa', name: 'Balcones Palaa', full: 'Balcones de Palaa (Riohacha)', sub: 'VIPA', cat: 'Complejo', x: 88, y: 62,
            lat: 11.5444, lng: -72.9069,
            prob: 'Pendiente recibo de servicios públicos y bomberos.',
            status: 'Cierre Técnico Pendiente',
            act: 'Trámites de certificación final para dar habitabilidad definitiva.',
            jur: 'Saneamiento de áreas de cesión municipal.',
            tech: 'Adecuación redes contra incendio (Bomberos).',
            fin: 'Liquidación de subsidios asignados.',
            soc: 'Entrega de títulos a familias beneficiarias.'
        },

        // INDETERMINADO
        {
            id: 'san-antonio-meta', name: 'San Antonio (V)', full: 'San Antonio (Villavicencio)', sub: 'Bolsas Ant.', cat: 'Indeterminado', x: 18, y: 45,
            lat: 4.1420, lng: -73.6266,
            prob: 'Obsolescencia técnica RETIE y pérdida documental.',
            status: 'Sin Legalizar',
            act: 'Reconstrucción de 500 expedientes de titulación del año 2006.',
            jur: 'Saneamiento predial histórico.',
            tech: 'Actualización eléctrica bajo norma RETIE.',
            fin: 'Baja de pasivos institucionales antiguos.',
            soc: 'Regularización de tenencia de 10 años.'
        },
        {
            id: 'rosas', name: 'Rosas', full: 'Rosas (Cauca)', sub: 'Desastres', cat: 'Indeterminado', x: 38, y: 38,
            lat: 2.2611, lng: -76.7411,
            prob: 'Inexistencia de predio urbano viable por riesgo natural.',
            status: 'Inviable Suelo',
            act: 'Declaratoria de inviabilidad técnica firmada. Inicio de reintegro.',
            jur: 'Liquidación de convenios interadministrativos.',
            tech: 'Estudios de remoción en masa (negativos).',
            fin: 'Reintegro de $5.850 millones al Tesoro.',
            soc: 'Notificación a damnificados derrumbe Panamericana.'
        },
        {
            id: 'villarrica', name: 'Villarrica', full: 'Villarrica (Tolima)', sub: 'Desastres', cat: 'Indeterminado', x: 22, y: 25,
            lat: 3.8294, lng: -74.5911,
            prob: 'Proyecto proyectado inviable por falta de suelo seguro.',
            status: 'Inviable Suelo',
            act: 'Trámite de liquidación bilateral adelantado.',
            jur: 'Extinción de obligaciones contractuales.',
            tech: 'Concepto de riesgo geológico insalvable.',
            fin: 'Retorno de rendimientos financieros.',
            soc: 'Gestión de expectativa institucional.'
        },

        // OPERATIVO
        {
            id: 'villa-yady', name: 'Villa Yady', full: 'Villa Yady (Atlántico)', sub: 'Desastres', cat: 'Operativo', x: 62, y: 48,
            lat: 10.6322, lng: -74.9211,
            prob: 'Avance 98%. Falta aporte de Gobernación para EBAR.',
            status: 'Obra Suspendida',
            act: 'Gestión ante Gobernación para recursos complementarios ($950M).',
            jur: 'Certificación de finalización para firma de actas.',
            tech: 'Construcción de muros de estabilización.',
            fin: 'Cierre financiero compartido.',
            soc: 'Articulación con municipio de Sabanalarga.'
        },
        {
            id: 'vipa-paz', name: 'VIPA (Paz)', full: 'VIPA (Bolsa de Paz)', sub: 'VIPA', cat: 'Operativo', x: 85, y: 42,
            lat: 4.6097, lng: -74.0817,
            prob: 'Trámites administrativos de postventa y saldos.',
            status: 'Cierre Operativo',
            act: 'Liquidación masiva de patrimonios autónomos fiduciarios.',
            jur: 'Cierre de fideicomisos administrativos.',
            tech: 'Recibo definitivo de servicios públicos.',
            fin: 'Devolución de saldos de subsidios no usados.',
            soc: 'Atención de requerimientos de habitabilidad.'
        },
        {
            id: 'pvg-i-residual', name: 'PVG I (Res)', full: 'PVG I (Residual)', sub: 'PVG Fase I', cat: 'Operativo', x: 70, y: 22,
            lat: 7.8891, lng: -72.5078,
            prob: 'Saneamiento técnico y financiero final de remanentes.',
            status: 'Legalización Final',
            act: 'Carga de certificaciones en el SI-Vivienda (Fábrica de Cierres).',
            jur: 'Escrituración de remanentes.',
            tech: 'Verificación actas habitabilidad.',
            fin: 'Envío a archivo para liquidación final.',
            soc: 'Formalización de propiedad.'
        },
        {
            id: 'san-antonio-viva', name: 'San Antonio (B)', full: 'San Antonio (Buenaventura)', sub: 'Macroproyectos', cat: 'Operativo', x: 92, y: 15,
            lat: 3.8828, lng: -77.0312,
            prob: 'Pendiente legalización de subsidios y títulos remanentes.',
            status: 'Cierre Documental',
            act: 'Mesas de trabajo con el Viceministerio para titulación.',
            jur: 'Legalización extraordinaria predios invadidos.',
            tech: 'Actualización cartográfica del asentamiento.',
            fin: 'Saneamiento de cuentas bancarias del proyecto.',
            soc: 'Intervención integral en zona portuaria.'
        },
        {
            id: 'afn-nina', name: 'AFN - La Niña', full: 'AFN - La Niña (Bolsas Ant)', sub: 'Bolsas Ant.', cat: 'Operativo', x: 78, y: 10,
            lat: 10.4631, lng: -73.2532,
            prob: 'Fideicomisos en liquidación administrativa histórica.',
            status: 'Liquidación Masiva',
            act: 'Instrucción de liquidación final para febrero 2026.',
            jur: 'Resolución de pasivos de convenios antiguos.',
            tech: 'Cierre de bitácora técnica histórica.',
            fin: 'Cruce de cuentas con fiduciarias.',
            soc: 'N/A: Proyecto administrativo.'
        }
    ],
    inviables: [
        {
            name: 'Rosas (Cauca)',
            valor: '$5.850.000.000',
            causa: 'Inexistencia de predio viable tras desastre natural (remoción en masa).',
            estado: 'Trámite de retorno de recursos ante la ANDJE y liquidación de convenio.',
            accion: 'No invertir más CAPEX. Ejecutar liquidación bilateral para cierre documental definitivo.'
        },
        {
            name: 'Villarrica (Tolima)',
            valor: '$4.200.000.000',
            causa: 'Riesgo geológico insalvable detectado en estudios de detalle.',
            estado: 'Proceso de reintegro de saldos fiduciarios al Tesoro Nacional.',
            accion: 'Finalizar vínculo contractual y liberar recursos para otros programas.'
        },
        {
            name: '20 de Octubre (Sucre)',
            valor: '$1.200.000.000',
            causa: 'Inviabilidad jurídica por falsa tradición del lote (vicios de titulación).',
            estado: 'Terminación anticipada instruida por el Comité de Seguimiento.',
            accion: 'Trasladar expediente a la oficina jurídica para cierre cobro coactivo si aplica.'
        },
        {
            name: 'Macro. San José - UE4/5',
            valor: '$7.897.000.000',
            causa: 'Siniestro contractual por incumplimiento del constructor original.',
            estado: 'Litigio activo con Seguros del Estado por ejecución de pólizas.',
            accion: 'Priorizar el cobro ejecutivo de garantías y rediseñar estrategia de reasentamiento.'
        }
    ]
};

// State handling
let activeReport = 'global';
let activeProgram = portfolioData.programs[0].id;

function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    // Clear existing map if any (though initMap is only called twice with delay)
    if (window.dashboardMap) {
        window.dashboardMap.remove();
    }

    const map = L.map('map').setView([4.5709, -74.2973], 5);
    window.dashboardMap = map;

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    portfolioData.projects_strategic.forEach(p => {
        if (p.lat && p.lng) {
            const marker = L.marker([p.lat, p.lng]).addTo(map);

            // Create the Roadmap card HTML for the popup with improved inline styles
            const popupContent = `
                <div class="roadmap-card ${p.cat}" style="min-width: 320px; padding: 15px; margin: 0; background: white; border-radius: 12px; display: flex; flex-direction: column; gap: 10px; border-left: 10px solid ${p.cat === 'Crítico' ? '#ef4444' : (p.cat === 'Complejo' ? '#f59e0b' : (p.cat === 'Operativo' ? '#10b981' : '#64748b'))}; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                    <div class="roadmap-header" style="display: flex; flex-direction: column; gap: 5px;">
                        <div class="roadmap-badge" style="font-size: 0.7rem; background: ${p.cat === 'Crítico' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(15, 23, 42, 0.05)'}; color: ${p.cat === 'Crítico' ? '#ef4444' : '#0f172a'}; padding: 2px 8px; border-radius: 10px; width: fit-content; font-weight: 800;">${p.cat.toUpperCase()}</div>
                        <div class="roadmap-title" style="font-size: 1.1rem; font-weight: 800; color: #0f172a; line-height: 1.2;">${p.full}</div>
                        <div class="roadmap-sub" style="font-size: 0.8rem; color: #64748b; font-weight: 600;">${p.sub}</div>
                    </div>
                    <div class="roadmap-fronts" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 5px;">
                        <div class="roadmap-front jur-front" style="padding: 8px; border-top: 3px solid #3b82f6; background: rgba(59, 130, 246, 0.03); border-radius: 4px;">
                            <div class="front-label" style="font-size: 0.7rem; font-weight: 800; color: #3b82f6; margin-bottom: 4px;">⚖️ JURÍDICO</div>
                            <div class="front-content" style="font-size: 0.7rem; line-height: 1.3; color: #334155;">${p.jur}</div>
                        </div>
                        <div class="roadmap-front tech-front" style="padding: 8px; border-top: 3px solid #8b5cf6; background: rgba(139, 92, 246, 0.03); border-radius: 4px;">
                            <div class="front-label" style="font-size: 0.7rem; font-weight: 800; color: #8b5cf6; margin-bottom: 4px;">🏗️ TÉCNICO</div>
                            <div class="front-content" style="font-size: 0.7rem; line-height: 1.3; color: #334155;">${p.tech}</div>
                        </div>
                        <div class="roadmap-front fin-front" style="padding: 8px; border-top: 3px solid #10b981; background: rgba(16, 185, 129, 0.03); border-radius: 4px;">
                            <div class="front-label" style="font-size: 0.7rem; font-weight: 800; color: #10b981; margin-bottom: 4px;">💰 FINAN.</div>
                            <div class="front-content" style="font-size: 0.7rem; line-height: 1.3; color: #334155;">${p.fin}</div>
                        </div>
                        <div class="roadmap-front soc-front" style="padding: 8px; border-top: 3px solid #f59e0b; background: rgba(245, 158, 11, 0.03); border-radius: 4px;">
                            <div class="front-label" style="font-size: 0.7rem; font-weight: 800; color: #f59e0b; margin-bottom: 4px;">🤝 SOCIAL</div>
                            <div class="front-content" style="font-size: 0.7rem; line-height: 1.3; color: #334155;">${p.soc}</div>
                        </div>
                    </div>
                </div>
            `;

            marker.bindPopup(popupContent, {
                maxWidth: 400,
                className: 'map-roadmap-popup'
            });
        }
    });
}

function switchReport(reportId) {
    document.querySelector(`section#${activeReport}`).classList.remove('active');
    document.querySelector(`.nav-item[data-id="${activeReport}"]`).classList.remove('active');
    activeReport = reportId;
    document.querySelector(`section#${reportId}`).classList.add('active');
    document.querySelector(`.nav-item[data-id="${reportId}"]`).classList.add('active');
    if (reportId === 'geografia') setTimeout(initMap, 200);
}

// Modal Logic
function openModal(title, mode) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const table = document.getElementById('modalProjectTable');
    const diagnostic = document.getElementById('modalDiagnosticView');

    modalTitle.innerText = title;

    if (mode === 'table') {
        table.style.display = 'table';
        diagnostic.style.display = 'none';
    } else {
        table.style.display = 'none';
        diagnostic.style.display = 'block';
    }

    modal.style.display = 'flex';
}

function showGlobalProjectList(cat) {
    const tbody = document.getElementById('modalTableBody');
    const titles = {
        terminados: 'Proyectos Terminados / Certificados (60%)',
        ejecucion: 'Proyectos en Ejecución / Plan Rescate (15%)',
        critico: 'Focos Críticos / Jurídicos / Invasión (25%)'
    };

    openModal(titles[cat], 'table');
    tbody.innerHTML = portfolioData.global.projects[cat].map(p => `
        <tr>
            <td><b>${p.name}</b></td>
            <td>${p.loc}</td>
            <td>${p.viv}</td>
            <td>${p.avance}%</td>
            <td><span class="badge ${p.avance === 100 ? 'badge-green' : (p.avance < 30 ? 'badge-red' : 'badge-yellow')}">${p.status}</span></td>
        </tr>
    `).join('');
}

function showHeatmapDetail(itemId) {
    const diagnostic = document.getElementById('modalDiagnosticView');
    const item = portfolioData.projects_strategic.find(p => p.id === itemId);

    if (!item) return;

    openModal(`Diagnóstico: ${item.full}`, 'diagnostic');

    diagnostic.innerHTML = `
        <div class="diagnostic-container">
            <div class="diag-header">
                <h2>${item.full} <span class="badge ${item.cat === 'Crítico' ? 'badge-red' : 'badge-yellow'}" style="margin-left:10px">${item.cat}</span></h2>
                <p style="color: var(--text-dim); font-size: 0.9rem; margin-top: 5px;">Programa: ${item.sub}</p>
            </div>
            
            <div class="diag-section">
                <span class="diag-label">Problemática Central</span>
                <div class="diag-box danger-border">
                    <p class="diag-value">${item.prob}</p>
                </div>
            </div>

            <div class="diag-section">
                <span class="diag-label">Últimas Actuaciones Adelantadas</span>
                <div class="act-box" style="background:rgba(59, 130, 246, 0.05); padding:1rem; border-radius:0.5rem; border-left:4px solid var(--primary); font-size:0.95rem">
                    <p>${item.act}</p>
                </div>
            </div>

            <div class="diag-section" style="margin-top:1.5rem">
                <span class="diag-label">Estado Actual</span>
                <div class="diag-box info-border" style="background:#f8fafc; padding:1rem; border-radius:0.5rem; text-align:center">
                    <p class="diag-value" style="color: var(--primary); font-weight: 800; font-size:1.1rem; margin:0">${item.status}</p>
                </div>
            </div>
        </div>
    `;
}

function showProgramProjectList(programId, category) {
    const tbody = document.getElementById('modalTableBody');
    const program = portfolioData.programs.find(p => p.id === programId);

    openModal(`${program.name} - Listado: ${category}`, 'table');

    const filteredProjects = program.projects.filter(p => p.cat === category);

    if (filteredProjects.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:2rem; color:var(--text-dim)">No hay proyectos registrados bajo esta categoría para este programa.</td></tr>`;
        return;
    }

    tbody.innerHTML = filteredProjects.map(p => `
        <tr>
            <td><b>${p.name}</b></td>
            <td>${p.loc}</td>
            <td>${p.viv}</td>
            <td>${p.avance}%</td>
            <td><span class="badge ${p.avance === 100 ? 'badge-green' : (p.avance < 30 ? 'badge-red' : 'badge-yellow')}">${p.status}</span></td>
        </tr>
    `).join('');
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Event Listeners
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => switchReport(item.dataset.id));
});

window.onclick = (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) closeModal();
};

window.onload = () => {
    populateGlobalCategories();
    populateProgramCards();
    selectProgram(activeProgram);
    renderHeatmap();
    renderRoadmaps();
    renderInviables();
};

function renderInviables() {
    const container = document.getElementById('inviables-container');
    if (!container) return;

    container.innerHTML = portfolioData.inviables.map(inv => `
        <div class="card inviable-card" style="border-left: 5px solid var(--danger); position: relative; overflow: hidden;">
            <div style="position: absolute; top:0; right: 0; background: var(--danger); color: white; padding: 0.5rem 1rem; border-bottom-left-radius: 0.5rem; font-weight: 800; font-size: 0.8rem;">
                INVIABLE
            </div>
            <div class="card-title" style="color: var(--danger); font-size: 1.25rem;">REINTEGRO ESTIMADO: ${inv.valor}</div>
            <h3 style="margin: 1rem 0 0.5rem 0; color: var(--primary);">${inv.name}</h3>
            <p style="margin-bottom: 1rem; line-height: 1.5;">
                <b style="color: #475569;">Causa:</b> ${inv.causa}<br>
                <b style="color: #475569;">Estado del Proceso:</b> ${inv.estado}
            </p>
            <div class="insight-box" style="background: rgba(239, 68, 68, 0.05); margin-top: 0;">
                <div class="insight-icon" style="background: var(--danger);">🚫</div>
                <div class="insight-text">
                    <strong>Acción Recomendada:</strong> ${inv.accion}
                </div>
            </div>
        </div>
    `).join('');
}

function populateGlobalCategories() {
    const list = document.getElementById('global-categories-list');
    if (!list) return;

    list.innerHTML = portfolioData.globalCategories.map(c => `
        <div class="program-item" id="global-${c.id}">
            <div class="program-header" onclick="this.parentElement.classList.toggle('expanded')" style="grid-template-columns: 1fr auto;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <span class="dot" style="background:${c.color}; width: 14px; height: 14px;"></span>
                    <div style="font-weight:700; font-size:1.1rem">${c.label}</div>
                </div>
                <div class="arrow">▼</div>
            </div>
            <div class="program-content" style="background: rgba(15, 23, 42, 0.02); padding: 0;">
                <div style="padding: 2rem;">
                    <p style="font-weight: 600; font-size: 1rem; color: var(--text-main); margin-bottom: 1.5rem; border-left: 4px solid ${c.color}; padding-left: 1rem;">
                        ${c.summary}
                    </p>
                    ${c.content}
                </div>
            </div>
        </div>
    `).join('');
}

function populateProgramCards() {
    const container = document.getElementById('program-cards');
    if (!container) return;

    container.innerHTML = portfolioData.programs.map(p => `
        <div class="card program-nav-card ${p.id === activeProgram ? 'active' : ''}" onclick="selectProgram('${p.id}')">
            <div class="card-title" style="justify-content:center; font-size:0.8rem; text-align:center">${p.name}</div>
            <div class="stat-value" style="color:var(--accent); font-size:1.5rem; text-align:center; margin:0.3rem 0">${p.avance}%</div>
            <div style="font-size:0.65rem; color:var(--text-dim); line-height:1.4">
                <b>Viv:</b> ${p.vivCertificadas.toLocaleString()} / ${p.vivTotales.toLocaleString()}<br>
                <b>Valor:</b> ${p.valorCOP}<br>
                <b>Esquema:</b> ${p.esquema}
            </div>
        </div>
    `).join('');
}

function selectProgram(id) {
    activeProgram = id;
    populateProgramCards();
    const container = document.getElementById('program-panorama-list');
    const program = portfolioData.programs.find(p => p.id === id);
    container.innerHTML = renderUnifiedSheet(program);
}

function renderUnifiedSheet(p) {
    return `
        <div class="unified-sheet" style="display:block">
            <div class="sheet-header">
                <h2>${p.name}</h2>
                <div class="sheet-summary-box">
                    <div class="main-val">Avance General: ${p.avance}%</div>
                    <div class="sub-val">Viviendas Totales: ${p.vivTotales.toLocaleString()} | Certificadas: ${p.vivCertificadas.toLocaleString()}</div>
                </div>
            </div>
            <div class="sheet-body">
                <div class="chart-section" style="flex:1">
                    <h3>Estado de Proyectos</h3>
                    <div class="bar-chart-container" style="height: 250px">
                        ${p.details.stats.map(s => `
                            <div class="bar-item" onclick="showProgramProjectList('${p.id}', '${s.label}')">
                                <span class="bar-pct" style="color:${s.color}">${s.value}%</span>
                                <div class="bar-fill" style="height:${Math.max(s.value, 15)}%; background:${s.color}"></div>
                                <span class="bar-label">${s.label}<br>(${s.count})</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="projects-section" style="flex:1.2">
                    <div class="project-highlight-card" style="height:100%">
                        <div class="ph-header" style="background:var(--primary)">Análisis de Riesgo Estratégico</div>
                        <div class="ph-body" style="font-size: 0.95rem; color: #1e293b; line-height:1.6">
                            ${p.details.highlightText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderHeatmap() {
    const container = document.getElementById('heatmap-items-container');
    if (!container) return;

    container.innerHTML = portfolioData.projects_strategic.map(p => `
        <button class="heatmap-btn" 
                 style="left: ${p.x}%; top: ${100 - p.y}%;" 
                 onclick="showHeatmapDetail('${p.id}')">
            ${p.name}
        </button>
    `).join('');
}

function renderRoadmaps() {
    const container = document.getElementById('roadmap-cards-container');
    const searchVal = document.getElementById('roadmapSearch')?.value.toLowerCase() || "";
    const catFilter = document.getElementById('categoryFilter')?.value || "all";

    if (!container) return;

    const filtered = portfolioData.projects_strategic.filter(r => {
        const matchesSearch = r.full.toLowerCase().includes(searchVal) ||
            r.sub.toLowerCase().includes(searchVal) ||
            r.prob.toLowerCase().includes(searchVal);
        const matchesCat = catFilter === 'all' || r.cat === catFilter;
        return matchesSearch && matchesCat;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 3rem; color: var(--text-dim); font-size: 1.2rem;">No se encontraron hojas de ruta con los filtros seleccionados.</div>`;
        return;
    }

    container.innerHTML = filtered.map(r => `
        <div class="roadmap-card ${r.cat}">
            <div class="roadmap-header">
                <div class="roadmap-badge">${r.cat}</div>
                <div class="roadmap-title">${r.full}</div>
                <div class="roadmap-sub">${r.sub}</div>
                <div style="margin-top: 1rem; font-size: 0.85rem; color: #64748b;">
                    <b>Problemática:</b> ${r.prob}
                </div>
            </div>
            <div class="roadmap-fronts">
                <div class="roadmap-front jur-front">
                    <div class="front-label">⚖️ Jurídico</div>
                    <div class="front-content">${r.jur}</div>
                </div>
                <div class="roadmap-front tech-front">
                    <div class="front-label">🏗️ Técnico</div>
                    <div class="front-content">${r.tech}</div>
                </div>
                <div class="roadmap-front fin-front">
                    <div class="front-label">💰 Financiero</div>
                    <div class="front-content">${r.fin}</div>
                </div>
                <div class="roadmap-front soc-front">
                    <div class="front-label">🤝 Social</div>
                    <div class="front-content">${r.soc}</div>
                </div>
            </div>
        </div>
    `).join('');
}

function filterRoadmaps() {
    renderRoadmaps();
}
