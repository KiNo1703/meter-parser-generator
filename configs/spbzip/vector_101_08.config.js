// Файл: vector_101_08.config.js
// Суточный журнал показаний (Журнал 0x08)
// Модель: Вектор 101
// Производитель: СПБ ЗИП
// minObjectId = 2, maxObjectId = 14
// Все показания энергии типа UINT32, статус качества UINT8

const VECTOR_101_08_CONFIG = {
    modelId: 'vector_101_08',
    name: 'Вектор 101 (суточный журнал 0x08)',
    manufacturer: 'СПБ ЗИП',
    description: 'Суточный журнал 0x08. Поддерживает объекты 2-14. Все показания энергии типа UINT32, статус качества UINT8.',
    
    journalId: '08',
    commandCode: '0066',
    minObjectId: 2,
    maxObjectId: 14,
    bitShift: 1, // minObjectId - 1 = 2 - 1 = 1
    periodDefault: 21600, // Сутки
    
    objectGroups: [
        {
            name: '⚡ Активная энергия A+ (Потребление)',
            icon: '⚡',
            description: 'Потребление активной энергии по тарифам',
            objects: [
                { id: 2, name: 'A+ T1', obis: '1.0.1.8.1.255', desc: 'Активная энергия потребление T1', type: 'UINT32' },
                { id: 3, name: 'A+ T2', obis: '1.0.1.8.2.255', desc: 'Активная энергия потребление T2', type: 'UINT32' },
                { id: 4, name: 'A+ T3', obis: '1.0.1.8.3.255', desc: 'Активная энергия потребление T3', type: 'UINT32' },
                { id: 5, name: 'A+ T4', obis: '1.0.1.8.4.255', desc: 'Активная энергия потребление T4', type: 'UINT32' },
                { id: 6, name: 'A+ T0 (сумма)', obis: '1.0.1.8.0.255', desc: 'Активная энергия потребление суммарно', type: 'UINT32' }
            ]
        },
        {
            name: '⚡⬇️ Активная энергия A- (Отдача)',
            icon: '⚡⬇️',
            description: 'Отдача активной энергии по тарифам',
            objects: [
                { id: 7, name: 'A- T0 (сумма)', obis: '1.0.2.8.0.255', desc: 'Активная энергия отдача суммарно', type: 'UINT32' },
                { id: 11, name: 'A- T1', obis: '1.0.2.8.1.255', desc: 'Активная энергия отдача T1', type: 'UINT32' },
                { id: 12, name: 'A- T2', obis: '1.0.2.8.2.255', desc: 'Активная энергия отдача T2', type: 'UINT32' },
                { id: 13, name: 'A- T3', obis: '1.0.2.8.3.255', desc: 'Активная энергия отдача T3', type: 'UINT32' },
                { id: 14, name: 'A- T4', obis: '1.0.2.8.4.255', desc: 'Активная энергия отдача T4', type: 'UINT32' }
            ]
        },
        {
            name: '🔄+ Реактивная энергия R+ (Емкостная)',
            icon: '🔄+',
            description: 'Реактивная энергия емкостная',
            objects: [
                { id: 8, name: 'R+ T0 (сумма)', obis: '1.0.3.8.0.255', desc: 'Реактивная энергия емкостная суммарно', type: 'UINT32' }
            ]
        },
        {
            name: '🔄- Реактивная энергия R- (Индуктивная)',
            icon: '🔄-',
            description: 'Реактивная энергия индуктивная',
            objects: [
                { id: 9, name: 'R- T0 (сумма)', obis: '1.0.4.8.0.255', desc: 'Реактивная энергия индуктивная суммарно', type: 'UINT32' }
            ]
        },
        {
            name: '📋 Качество сети',
            icon: '📋',
            description: 'Параметры качества электроэнергии',
            objects: [
                { id: 10, name: 'Статус качества сети', obis: '0.0.96.5.1.255', desc: 'Флаг качества сети', type: 'UINT8' }
            ]
        }
    ],
    
    presets: {
        minimal: [6, 2, 3], // A+ T0, T1, T2
        default: [
            6, 2, 3,    // A+ T0, T1, T2
            7, 11, 12,  // A- T0, T1, T2
            8,          // R+ T0
            9           // R- T0
        ],
        all: Array.from({ length: 13 }, (_, i) => i + 2) // 2..14
    },
    
    info: {
        manufacturer: 'СПБ ЗИП',
        model: 'Вектор 101',
        protocol: 'DLMS/COSEM',
        journal: '0x08 - Суточный журнал',
        maxTasks: 16,
        note: 'Объекты 2-14, bitShift: 1, энергия UINT32, статус UINT8'
    }
};

if (typeof window !== 'undefined') {
    window.VECTOR_101_08_CONFIG = VECTOR_101_08_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = VECTOR_101_08_CONFIG;
}