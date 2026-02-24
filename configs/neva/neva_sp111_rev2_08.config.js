// Файл: neva_sp111_rev2_08.config.js
// Суточный журнал показаний (Журнал 0x08)
// Модель: Нева СП 111 rev2
// minObjectId = 3, maxObjectId = 22
// Все показания типа UINT32
// Полный набор тарифов T0-T4 для всех типов энергии

const NEVA_SP111_REV2_08_CONFIG = {
    modelId: 'neva_sp111_rev2_08',
    name: 'Нева СП 111 rev2 (суточный журнал 0x08)',
    manufacturer: 'Нева',
    description: 'Суточный журнал 0x08. Поддерживает объекты 3-22. Все показания типа UINT32. Полный набор тарифов T0-T4 для всех типов энергии.',
    
    journalId: '08',
    commandCode: '0066',
    minObjectId: 3,
    maxObjectId: 22,
    bitShift: 2, // Нева: minObjectId - 1 = 3 - 1 = 2
    periodDefault: 21600, // Сутки
    
    objectGroups: [
        {
            name: '⚡ Активная энергия A+ (Потребление)',
            icon: '⚡',
            description: 'Потребление активной энергии по тарифам (все UINT32)',
            objects: [
                { id: 3, name: 'A+ T0 (сумма)', obis: '1.0.1.8.0.255', desc: 'Активная энергия потребление суммарно', type: 'UINT32' },
                { id: 4, name: 'A+ T1', obis: '1.0.1.8.1.255', desc: 'Активная энергия потребление T1', type: 'UINT32' },
                { id: 5, name: 'A+ T2', obis: '1.0.1.8.2.255', desc: 'Активная энергия потребление T2', type: 'UINT32' },
                { id: 6, name: 'A+ T3', obis: '1.0.1.8.3.255', desc: 'Активная энергия потребление T3', type: 'UINT32' },
                { id: 7, name: 'A+ T4', obis: '1.0.1.8.4.255', desc: 'Активная энергия потребление T4', type: 'UINT32' }
            ]
        },
        {
            name: '⚡⬇️ Активная энергия A- (Отдача)',
            icon: '⚡⬇️',
            description: 'Отдача активной энергии по тарифам (все UINT32)',
            objects: [
                { id: 8, name: 'A- T0 (сумма)', obis: '1.0.2.8.0.255', desc: 'Активная энергия отдача суммарно', type: 'UINT32' },
                { id: 9, name: 'A- T1', obis: '1.0.2.8.1.255', desc: 'Активная энергия отдача T1', type: 'UINT32' },
                { id: 10, name: 'A- T2', obis: '1.0.2.8.2.255', desc: 'Активная энергия отдача T2', type: 'UINT32' },
                { id: 11, name: 'A- T3', obis: '1.0.2.8.3.255', desc: 'Активная энергия отдача T3', type: 'UINT32' },
                { id: 12, name: 'A- T4', obis: '1.0.2.8.4.255', desc: 'Активная энергия отдача T4', type: 'UINT32' }
            ]
        },
        {
            name: '🔄+ Реактивная энергия R+ (Емкостная)',
            icon: '🔄+',
            description: 'Реактивная энергия емкостная по тарифам (все UINT32)',
            objects: [
                { id: 13, name: 'R+ T0 (сумма)', obis: '1.0.3.8.0.255', desc: 'Реактивная энергия емкостная суммарно', type: 'UINT32' },
                { id: 14, name: 'R+ T1', obis: '1.0.3.8.1.255', desc: 'Реактивная энергия емкостная T1', type: 'UINT32' },
                { id: 15, name: 'R+ T2', obis: '1.0.3.8.2.255', desc: 'Реактивная энергия емкостная T2', type: 'UINT32' },
                { id: 16, name: 'R+ T3', obis: '1.0.3.8.3.255', desc: 'Реактивная энергия емкостная T3', type: 'UINT32' },
                { id: 17, name: 'R+ T4', obis: '1.0.3.8.4.255', desc: 'Реактивная энергия емкостная T4', type: 'UINT32' }
            ]
        },
        {
            name: '🔄- Реактивная энергия R- (Индуктивная)',
            icon: '🔄-',
            description: 'Реактивная энергия индуктивная по тарифам (все UINT32)',
            objects: [
                { id: 18, name: 'R- T0 (сумма)', obis: '1.0.4.8.0.255', desc: 'Реактивная энергия индуктивная суммарно', type: 'UINT32' },
                { id: 19, name: 'R- T1', obis: '1.0.4.8.1.255', desc: 'Реактивная энергия индуктивная T1', type: 'UINT32' },
                { id: 20, name: 'R- T2', obis: '1.0.4.8.2.255', desc: 'Реактивная энергия индуктивная T2', type: 'UINT32' },
                { id: 21, name: 'R- T3', obis: '1.0.4.8.3.255', desc: 'Реактивная энергия индуктивная T3', type: 'UINT32' },
                { id: 22, name: 'R- T4', obis: '1.0.4.8.4.255', desc: 'Реактивная энергия индуктивная T4', type: 'UINT32' }
            ]
        }
    ],
    
    presets: {
        minimal: [3, 4, 5], // A+ T0, T1, T2
        default: [
            3, 4, 5,    // A+ T0, T1, T2
            8, 9, 10,   // A- T0, T1, T2
            13, 14, 15, // R+ T0, T1, T2
            18, 19, 20  // R- T0, T1, T2
        ],
        all: Array.from({ length: 20 }, (_, i) => i + 3) // 3..22
    },
    
    info: {
        manufacturer: 'Нева',
        model: 'СП 111 rev2',
        protocol: 'DLMS/COSEM',
        journal: '0x08 - Суточный журнал',
        maxTasks: 16,
        note: 'Объекты 3-22, bitShift: 2, все показания UINT32, тарифы T0-T4 для всех типов энергии'
    }
};

if (typeof window !== 'undefined') {
    window.NEVA_SP111_REV2_08_CONFIG = NEVA_SP111_REV2_08_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = NEVA_SP111_REV2_08_CONFIG;
}