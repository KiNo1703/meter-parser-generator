// ==================== КОНФИГУРАЦИЯ НЕВА 414 ====================
const NEVA_414_v2_CONFIG = {
    modelId: 'neva-414_v2',
    name: 'Нева 414_v2',
    manufacturer: 'Нева',
    description: 'Суточный журнал 0x09 (Обис-код 1.0.98.2.0.255). ',
    
    // Параметры команды
    journalId: '09',
    commandCode: '0066',
    minObjectId: 3,
    maxObjectId: 23,
    bitShift: 2,
    periodDefault: 21600,    
    
    // Группировка объектов (из вашего Excel файла)
    objectGroups: [
        {
            name: '⚡ Активная энергия A+ (Потребление)',
            icon: '⚡',
            description: 'Потребление активной энергии по тарифам',
            objects: [
                { id: 3, name: 'A+ T0', obis: '1.0.1.8.0.255', desc: 'Сумма по всем тарифам', type: 'UINT32' },
                { id: 4, name: 'A+ T1', obis: '1.0.1.8.1.255', desc: 'Тариф 1', type: 'UINT32' },
                { id: 5, name: 'A+ T2', obis: '1.0.1.8.2.255', desc: 'Тариф 2', type: 'UINT32' },
                { id: 6, name: 'A+ T3', obis: '1.0.1.8.3.255', desc: 'Тариф 3', type: 'UINT32' },
                { id: 7, name: 'A+ T4', obis: '1.0.1.8.4.255', desc: 'Тариф 4', type: 'UINT32' }
            ]
        },
        {
            name: '⚡⬇️ Активная энергия A- (Отдача)',
            icon: '⚡⬇️',
            description: 'Отдача активной энергии в сеть',
            objects: [
                { id: 8, name: 'A- T0', obis: '1.0.2.8.0.255', desc: 'Сумма по всем тарифам', type: 'UINT32' },
                { id: 9, name: 'A- T1', obis: '1.0.2.8.1.255', desc: 'Тариф 1', type: 'UINT32' },
                { id: 10, name: 'A- T2', obis: '1.0.2.8.2.255', desc: 'Тариф 2', type: 'UINT32' },
                { id: 11, name: 'A- T3', obis: '1.0.2.8.3.255', desc: 'Тариф 3', type: 'UINT32' },
                { id: 12, name: 'A- T4', obis: '1.0.2.8.4.255', desc: 'Тариф 4', type: 'UINT32' }
            ]
        },
        {
            name: '🔄+ Реактивная энергия R+ (Емкостная)',
            icon: '🔄+',
            description: 'Емкостная реактивная энергия',
            objects: [
                { id: 13, name: 'R+ T0', obis: '1.0.3.8.0.255', desc: 'Сумма по всем тарифам', type: 'UINT32' },
                { id: 14, name: 'R+ T1', obis: '1.0.3.8.1.255', desc: 'Тариф 1', type: 'UINT32' },
                { id: 15, name: 'R+ T2', obis: '1.0.3.8.2.255', desc: 'Тариф 2', type: 'UINT32' },
                { id: 16, name: 'R+ T3', obis: '1.0.3.8.3.255', desc: 'Тариф 3', type: 'UINT32' },
                { id: 17, name: 'R+ T4', obis: '1.0.3.8.4.255', desc: 'Тариф 4', type: 'UINT32' }
            ]
        },
        {
            name: '🔄- Реактивная энергия R- (Индуктивная)',
            icon: '🔄-',
            description: 'Индуктивная реактивная энергия',
            objects: [
                { id: 18, name: 'R- T0', obis: '1.0.4.8.0.255', desc: 'Сумма по всем тарифам', type: 'UINT32' },
                { id: 19, name: 'R- T1', obis: '1.0.4.8.1.255', desc: 'Тариф 1', type: 'UINT32' },
                { id: 20, name: 'R- T2', obis: '1.0.4.8.2.255', desc: 'Тариф 2', type: 'UINT32' },
                { id: 21, name: 'R- T3', obis: '1.0.4.8.3.255', desc: 'Тариф 3', type: 'UINT32' },
                { id: 22, name: 'R- T4', obis: '1.0.4.8.4.255', desc: 'Тариф 4', type: 'UINT32' }
            ]
        },
        {
            name: '📋 Дополнительные параметры',
            icon: '📋',
            description: 'Служебные параметры',
            objects: [
                { id: 23, name: 'Статус качества сети', obis: '0.0.96.5.1.255', desc: 'Качество напряжения', type: 'BITSTRING' }
            ]
        }
    ],
    
    // Пресеты для быстрого выбора
    presets: {
    minimal: [3, 4, 5],
    default: [                                  // ✅ ДЕФОЛТНЫЙ ПЛАНИРОВЩИК
        3, 4, 5,     // A+ T0, T1, T2
        8, 9, 10,    // A- T0, T1, T2
        13, 14, 15,  // R+ T0, T1, T2
        18, 19, 20   // R- T0, T1, T2
    ],
        reactive: [13,14,15,16,17, 18,19,20,21,22], // Вся реактивная (R+ и R-)
        all: [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23] // 3-23
    },
    
    // Вспомогательная информация
    info: {
        manufacturer: 'Нева',
        model: '414',
        protocol: 'DLMS/COSEM',
        journal: '0x09 - Суточный журнал',
        maxTasks: 16,
        note: 'Объекты 3-23, битовая позиция = объект - 2'
    }
};

// Для обратной совместимости
if (typeof window !== 'undefined') {
    window.NEVA_414_CONFIG = NEVA_414_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = NEVA_414_CONFIG;
}