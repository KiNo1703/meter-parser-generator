// Файл: mercury_234_238_v67_11.config.js
// Суточный журнал показаний (Журнал 0x11)
// Модель: Меркурий 234/238 V67
// minObjectId = 2, maxObjectId = 9
// Все показания типа UINT32

const MERCURY_234_238_V67_11_CONFIG = {
    modelId: 'mercury_234_238_v67_11',
    name: 'Меркурий 234/238 V67 (суточный журнал 0x11)',
    manufacturer: 'Меркурий',
    description: 'Суточный журнал 0x11. Поддерживает объекты 2-9. Все показания типа UINT32.',
    
    journalId: '11',
    commandCode: '0066',
    minObjectId: 2,
    maxObjectId: 9,
    bitShift: 1, // Меркурий: сдвиг = 1
    periodDefault: 21600, // Сутки
    
    objectGroups: [
        {
            name: '⚡ Активная энергия A+ (Потребление)',
            icon: '⚡',
            description: 'Потребление активной энергии по тарифам (все UINT32)',
            objects: [
                { id: 2, name: 'A+ T0 (сумма)', obis: '1.0.1.8.0.255', desc: 'Активная энергия потребление суммарно', type: 'UINT32' },
                { id: 3, name: 'A+ T1', obis: '1.0.1.8.1.255', desc: 'Активная энергия потребление T1', type: 'UINT32' },
                { id: 4, name: 'A+ T2', obis: '1.0.1.8.2.255', desc: 'Активная энергия потребление T2', type: 'UINT32' },
                { id: 5, name: 'A+ T3', obis: '1.0.1.8.3.255', desc: 'Активная энергия потребление T3', type: 'UINT32' },
                { id: 6, name: 'A+ T4', obis: '1.0.1.8.4.255', desc: 'Активная энергия потребление T4', type: 'UINT32' }
            ]
        },
        {
            name: '⚡⬇️ Активная энергия A- (Отдача)',
            icon: '⚡⬇️',
            description: 'Отдача активной энергии (UINT32)',
            objects: [
                { id: 7, name: 'A- T0 (сумма)', obis: '1.0.2.8.0.255', desc: 'Активная энергия отдача суммарно', type: 'UINT32' }
            ]
        },
        {
            name: '🔄+ Реактивная энергия R+ (Емкостная)',
            icon: '🔄+',
            description: 'Реактивная энергия емкостная (UINT32)',
            objects: [
                { id: 8, name: 'R+ T0 (сумма)', obis: '1.0.3.8.0.255', desc: 'Реактивная энергия емкостная суммарно', type: 'UINT32' }
            ]
        },
        {
            name: '🔄- Реактивная энергия R- (Индуктивная)',
            icon: '🔄-',
            description: 'Реактивная энергия индуктивная (UINT32)',
            objects: [
                { id: 9, name: 'R- T0 (сумма)', obis: '1.0.4.8.0.255', desc: 'Реактивная энергия индуктивная суммарно', type: 'UINT32' }
            ]
        }
    ],
    
    presets: {
        minimal: [2, 3, 4], // A+ T0, T1, T2
        default: [
            2, 3, 4, // A+ T0, T1, T2
            7,       // A- T0
            8,       // R+ T0
            9        // R- T0
        ],
        all: Array.from({ length: 8 }, (_, i) => i + 2) // 2..9
    },
    
    info: {
        manufacturer: 'Меркурий',
        model: '234/238 V67',
        protocol: 'DLMS/COSEM',
        journal: '0x11 - Суточный журнал',
        maxTasks: 16,
        note: 'Объекты 2-9, bitShift: 1, все показания UINT32'
    }
};

if (typeof window !== 'undefined') {
    window.MERCURY_234_238_V67_11_CONFIG = MERCURY_234_238_V67_11_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = MERCURY_234_238_V67_11_CONFIG;
}