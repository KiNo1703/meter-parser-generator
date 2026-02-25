// Файл: energomera_208v6_18.config.js
// Суточный журнал показаний (Журнал 0x18)
// Модель: Энергомера 208V6
// minObjectId = 2, maxObjectId = 14

const ENERGOMERA_208V6_18_CONFIG = {
    modelId: 'energomera_208v6_18',
    name: 'Энергомера 208V6 (суточный журнал 0x18)',
    manufacturer: 'Энергомера',
    description: 'Суточный журнал 0x18. Поддерживает объекты 2-14.',
    
    journalId: '18',
    commandCode: '0066',
    minObjectId: 2,
    maxObjectId: 14,
    bitShift: 1, // Для Энергомеры обычно minObjectId - 1 = 2 - 1 = 1
    periodDefault: 21600, // 6 часов
    
    objectGroups: [
        {
            name: '⚡ Активная энергия A+ (Потребление)',
            icon: '⚡',
            description: 'Потребление активной энергии по тарифам',
            objects: [
                { id: 2, name: 'A+ T0 (сумма)', obis: '1.0.1.8.0.255', desc: 'Активная энергия потребление суммарно', type: 'FLOAT32' },
                { id: 3, name: 'A+ T1', obis: '1.0.1.8.1.255', desc: 'Активная энергия потребление T1', type: 'UINT32' },
                { id: 4, name: 'A+ T2', obis: '1.0.1.8.2.255', desc: 'Активная энергия потребление T2', type: 'UINT32' },
                { id: 5, name: 'A+ T3', obis: '1.0.1.8.3.255', desc: 'Активная энергия потребление T3', type: 'UINT32' },
                { id: 6, name: 'A+ Аварийный тариф', obis: '1.0.1.8.128.255', desc: 'Активная энергия по аварийному тарифу', type: 'UINT32' },
                { id: 10, name: 'A+ T4', obis: '1.0.1.8.4.255', desc: 'Активная энергия потребление T4', type: 'UINT32' },
                { id: 11, name: 'A+ T5', obis: '1.0.1.8.5.255', desc: 'Активная энергия потребление T5', type: 'UINT32' },
                { id: 12, name: 'A+ T6', obis: '1.0.1.8.6.255', desc: 'Активная энергия потребление T6', type: 'UINT32' },
                { id: 13, name: 'A+ T7', obis: '1.0.1.8.7.255', desc: 'Активная энергия потребление T7', type: 'UINT32' },
                { id: 14, name: 'A+ T8', obis: '1.0.1.8.8.255', desc: 'Активная энергия потребление T8', type: 'UINT32' }
            ]
        },
        {
            name: '⚡⬇️ Активная энергия A- (Отдача)',
            icon: '⚡⬇️',
            description: 'Отдача активной энергии',
            objects: [
                { id: 9, name: 'A- T0 (сумма)', obis: '1.0.2.8.0.255', desc: 'Активная энергия отдача суммарно', type: 'UINT32' }
            ]
        },
        {
            name: '🔄+ Реактивная энергия R+ (Емкостная)',
            icon: '🔄+',
            description: 'Реактивная энергия емкостная',
            objects: [
                { id: 7, name: 'R+ T0 (сумма)', obis: '1.0.3.8.0.255', desc: 'Реактивная энергия емкостная суммарно', type: 'UINT32' }
            ]
        },
        {
            name: '🔄- Реактивная энергия R- (Индуктивная)',
            icon: '🔄-',
            description: 'Реактивная энергия индуктивная',
            objects: [
                { id: 8, name: 'R- T0 (сумма)', obis: '1.0.4.8.0.255', desc: 'Реактивная энергия индуктивная суммарно', type: 'UINT32' }
            ]
        }
    ],
    
    presets: {
        minimal: [2, 3, 4], // A+ T0, T1, T2
        default: [
            2, 3, 4,    // A+ T0, T1, T2
            9,          // A- T0
            7,          // R+ T0
            8           // R- T0
        ],
        all: Array.from({ length: 13 }, (_, i) => i + 2) // 2..14
    },
    
    info: {
        manufacturer: 'Энергомера',
        model: '208V6',
        protocol: 'DLMS/COSEM',
        journal: '0x18 - Суточный журнал',
        maxTasks: 16,
        note: 'Объекты 2-14, bitShift: 1, A+T0 тип FLOAT32'
    }
};

if (typeof window !== 'undefined') {
    window.ENERGOMERA_208V6_18_CONFIG = ENERGOMERA_208V6_18_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ENERGOMERA_208V6_18_CONFIG;
}