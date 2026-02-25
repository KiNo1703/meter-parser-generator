// Файл: nartis_102_09.config.js
// Суточный журнал показаний (Журнал 0x09)
// Модель: Нартис 102
// Производитель: Нартис
// minObjectId = 2, maxObjectId = 21
// Все показания типа UINT32
// Набор тарифов T0-T4 для всех типов энергии

const NARTIS_102_09_CONFIG = {
    modelId: 'nartis_102_09',
    name: 'Нартис 102 (суточный журнал 0x09)',
    manufacturer: 'Нартис',
    description: 'Суточный журнал 0x09. Поддерживает объекты 2-21. Все показания типа UINT32. Набор тарифов T0-T4 для всех типов энергии.',
    
    journalId: '09',
    commandCode: '0066',
    minObjectId: 2,
    maxObjectId: 21,
    bitShift: 1, // minObjectId - 1 = 2 - 1 = 1
    periodDefault: 21600, // Сутки
    
    objectGroups: [
        {
            name: '⚡ Активная энергия A+ (Потребление)',
            icon: '⚡',
            description: 'Потребление активной энергии по тарифам',
            objects: [
                { id: 2, name: 'A+ T0 (сумма)', obis: '1.0.1.8.0.255', desc: 'Активная энергия потребление суммарно', type: 'UINT32' },
                { id: 6, name: 'A+ T1', obis: '1.0.1.8.1.255', desc: 'Активная энергия потребление T1', type: 'UINT32' },
                { id: 7, name: 'A+ T2', obis: '1.0.1.8.2.255', desc: 'Активная энергия потребление T2', type: 'UINT32' },
                { id: 8, name: 'A+ T3', obis: '1.0.1.8.3.255', desc: 'Активная энергия потребление T3', type: 'UINT32' },
                { id: 9, name: 'A+ T4', obis: '1.0.1.8.4.255', desc: 'Активная энергия потребление T4', type: 'UINT32' }
            ]
        },
        {
            name: '⚡⬇️ Активная энергия A- (Отдача)',
            icon: '⚡⬇️',
            description: 'Отдача активной энергии по тарифам',
            objects: [
                { id: 3, name: 'A- T0 (сумма)', obis: '1.0.2.8.0.255', desc: 'Активная энергия отдача суммарно', type: 'UINT32' },
                { id: 10, name: 'A- T1', obis: '1.0.2.8.1.255', desc: 'Активная энергия отдача T1', type: 'UINT32' },
                { id: 11, name: 'A- T2', obis: '1.0.2.8.2.255', desc: 'Активная энергия отдача T2', type: 'UINT32' },
                { id: 12, name: 'A- T3', obis: '1.0.2.8.3.255', desc: 'Активная энергия отдача T3', type: 'UINT32' },
                { id: 13, name: 'A- T4', obis: '1.0.2.8.4.255', desc: 'Активная энергия отдача T4', type: 'UINT32' }
            ]
        },
        {
            name: '🔄+ Реактивная энергия R+ (Емкостная)',
            icon: '🔄+',
            description: 'Реактивная энергия емкостная по тарифам',
            objects: [
                { id: 4, name: 'R+ T0 (сумма)', obis: '1.0.3.8.0.255', desc: 'Реактивная энергия емкостная суммарно', type: 'UINT32' },
                { id: 14, name: 'R+ T1', obis: '1.0.3.8.1.255', desc: 'Реактивная энергия емкостная T1', type: 'UINT32' },
                { id: 15, name: 'R+ T2', obis: '1.0.3.8.2.255', desc: 'Реактивная энергия емкостная T2', type: 'UINT32' },
                { id: 16, name: 'R+ T3', obis: '1.0.3.8.3.255', desc: 'Реактивная энергия емкостная T3', type: 'UINT32' },
                { id: 17, name: 'R+ T4', obis: '1.0.3.8.4.255', desc: 'Реактивная энергия емкостная T4', type: 'UINT32' }
            ]
        },
        {
            name: '🔄- Реактивная энергия R- (Индуктивная)',
            icon: '🔄-',
            description: 'Реактивная энергия индуктивная по тарифам',
            objects: [
                { id: 5, name: 'R- T0 (сумма)', obis: '1.0.4.8.0.255', desc: 'Реактивная энергия индуктивная суммарно', type: 'UINT32' },
                { id: 18, name: 'R- T1', obis: '1.0.4.8.1.255', desc: 'Реактивная энергия индуктивная T1', type: 'UINT32' },
                { id: 19, name: 'R- T2', obis: '1.0.4.8.2.255', desc: 'Реактивная энергия индуктивная T2', type: 'UINT32' },
                { id: 20, name: 'R- T3', obis: '1.0.4.8.3.255', desc: 'Реактивная энергия индуктивная T3', type: 'UINT32' },
                { id: 21, name: 'R- T4', obis: '1.0.4.8.4.255', desc: 'Реактивная энергия индуктивная T4', type: 'UINT32' }
            ]
        }
    ],
    
    presets: {
        minimal: [2, 6, 7], // A+ T0, T1, T2
        default: [
            2, 6, 7,    // A+ T0, T1, T2
            3, 10, 11,  // A- T0, T1, T2
            4, 14, 15,  // R+ T0, T1, T2
            5, 18, 19   // R- T0, T1, T2
        ],
        all: Array.from({ length: 20 }, (_, i) => i + 2) // 2..21
    },
    
    info: {
        manufacturer: 'Нартис',
        model: '102',
        protocol: 'DLMS/COSEM',
        journal: '0x09 - Суточный журнал',
        maxTasks: 16,
        note: 'Объекты 2-21, bitShift: 1, все показания UINT32, тарифы T0-T4 для всех типов энергии'
    }
};

if (typeof window !== 'undefined') {
    window.NARTIS_102_09_CONFIG = NARTIS_102_09_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = NARTIS_102_09_CONFIG;
}