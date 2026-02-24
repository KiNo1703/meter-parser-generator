/**
 * ==================== УТИЛИТЫ РАБОТЫ С МАСКАМИ ====================
 * 
 * Функции для декодирования битовых масок и маппинга объектов
 * Объединяет функционалы генератора команд и парсера показаний
 */

/**
 * Декодирует маску в массив ID объектов
 * @param {string} maskHex - Маска в hex формате (например: '0180300601CE')
 * @param {object} modelConfig - Конфигурация модели (для bitShift, minObjectId, maxObjectId)
 * @returns {array} Массив ID объектов, которые включены в маску
 */
function decodeMask(maskHex, modelConfig) {
    if (!maskHex || !modelConfig) return [];
    
    // Преобразуем hex в BigInt
    const maskBigInt = BigInt('0x' + maskHex);
    const selectedObjects = [];
    
    const minObj = modelConfig.minObjectId || 3;
    const maxObj = modelConfig.maxObjectId || 24;
    const bitShift = modelConfig.bitShift || 2;
    
    for (let objId = minObj; objId <= maxObj; objId++) {
        const bitPosition = objId - bitShift;
        if (bitPosition >= 0 && bitPosition < 64) {
            const bitValue = BigInt(1) << BigInt(bitPosition);
            if ((maskBigInt & bitValue) !== BigInt(0)) {
                selectedObjects.push(objId);
            }
        }
    }
    
    return selectedObjects.sort((a, b) => a - b);
}

/**
 * Получает информацию об объекте из конфигурации
 * @param {number} objId - ID объекта
 * @param {object} modelConfig - Конфигурация модели
 * @returns {object} Информация об объекте {id, name, obis, group, icon}
 */
function getObjectInfo(objId, modelConfig) {
    if (!modelConfig || !modelConfig.objectGroups) return null;
    
    for (let group of modelConfig.objectGroups) {
        if (!group.objects) continue;
        
        for (let obj of group.objects) {
            if (obj.id === objId) {
                return {
                    id: obj.id,
                    name: obj.name,
                    obis: obj.obis,
                    desc: obj.desc,
                    group: group.name,
                    icon: group.icon
                };
            }
        }
    }
    
    return null;
}

/**
 * Маппит индексы данных на названия объектов
 * @param {array} objectIds - Массив ID объектов из маски
 * @param {object} modelConfig - Конфигурация модели
 * @returns {array} Массив объектов {index, id, name, icon, obis}
 */
function mapDataIndicesToObjects(objectIds, modelConfig) {
    const result = [];
    
    objectIds.forEach((objId, index) => {
        const info = getObjectInfo(objId, modelConfig);
        if (info) {
            result.push({
                index: index + 1,           // Позиция в данных (1-based)
                objectId: objId,            // ID объекта
                name: info.name,            // Название (A+ T0, A- T1 и т.д.)
                icon: info.icon,            // Иконка группы
                obis: info.obis,           // OBIS код
                group: info.group,         // Группа
                desc: info.desc            // Описание
            });
        }
    });
    
    return result;
}

/**
 * Создаёт HTML для таблицы с названиями объектов
 * @param {array} dataMapping - Результат mapDataIndicesToObjects
 * @param {array} values - Парсённые значения
 * @returns {string} HTML таблица
 */
function generateObjectMappingTable(dataMapping, values) {
    let html = `
        <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); border-left: 4px solid #1976d2; border-radius: 8px; padding: 15px; margin: 15px 0; box-shadow: 0 2px 8px rgba(25,118,210,0.1);">
            <h3 style="color: #0d47a1; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;">
                <span>🎯 Маппинг объектов:</span>
                <span style="background: rgba(25,118,210,0.2); padding: 2px 8px; border-radius: 20px; font-size: 12px;">${dataMapping.length} объектов</span>
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: #1976d2; color: white;">
                        <th style="padding: 10px; text-align: left; font-size: 13px;">Позиция</th>
                        <th style="padding: 10px; text-align: left; font-size: 13px;">Объект ID</th>
                        <th style="padding: 10px; text-align: left; font-size: 13px;">🏷️ Название</th>
                        <th style="padding: 10px; text-align: left; font-size: 13px;">📊 Группа</th>
                        <th style="padding: 10px; text-align: left; font-size: 13px;">OBIS</th>
                        <th style="padding: 10px; text-align: right; font-size: 13px;">Значение</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    dataMapping.forEach((mapping, idx) => {
        const value = values[idx];
        let valueDisplay = '';
        
        if (value && typeof value.value === 'number') {
            // Форматируем значение в кВт
            const kw = value.value / 1000;
            valueDisplay = `<strong style="color: #0d47a1; font-size: 16px;">${kw.toLocaleString('ru-RU')} кВт</strong>`;
        } else if (value) {
            valueDisplay = `<span style="color: #666;">${value.value}</span>`;
        }
        
        const bgColor = idx % 2 === 0 ? '#f5f5f5' : 'white';
        html += `
            <tr style="background: ${bgColor}; border-bottom: 1px solid #e3f2fd;">
                <td style="padding: 10px; color: #666; font-weight: 600;">${mapping.index}</td>
                <td style="padding: 10px; color: #0066cc; font-weight: 700;">${mapping.objectId}</td>
                <td style="padding: 10px; color: #0d47a1; font-weight: 700;">${mapping.icon} ${mapping.name}</td>
                <td style="padding: 10px; color: #666; font-size: 12px;">${mapping.group}</td>
                <td style="padding: 10px; color: #999; font-family: monospace; font-size: 12px;">${mapping.obis}</td>
                <td style="padding: 10px; text-align: right;">${valueDisplay}</td>
            </tr>
        `;
    });
    
    html += `
                </tbody>
            </table>
        </div>
    `;
    
    return html;
}

/**
 * Определяет модель по маске и конфигурациям
 * @param {string} maskHex - Маска в hex формате
 * @param {array} configs - Массив всех конфиگураций模型
 * @returns {object} Найденная конфигурация или null
 */
function findModelByMask(maskHex, configs) {
    if (!maskHex || !configs) return null;
    
    const maskBigInt = BigInt('0x' + maskHex);
    
    // Проверяем каждую конфигурацию
    for (let config of configs) {
        let isMatch = false;
        
        // Проверяем, что все биты маски соответствуют объектам этой модели
        const minObj = config.minObjectId || 3;
        const maxObj = config.maxObjectId || 24;
        const bitShift = config.bitShift || 2;
        
        let hasValidBit = false;
        let isOutOfRange = false;
        
        for (let bit = 0; bit < 64; bit++) {
            const bitValue = BigInt(1) << BigInt(bit);
            if ((maskBigInt & bitValue) !== BigInt(0)) {
                hasValidBit = true;
                
                // Обратный расчет: bit = objId - bitShift
                const objId = bit + bitShift;
                if (objId < minObj || objId > maxObj) {
                    isOutOfRange = true;
                    break;
                }
            }
        }
        
        // Модель подходит если маска имеет биты И все биты в диапазоне объектов модели
        if (hasValidBit && !isOutOfRange) {
            return config;
        }
    }
    
    return null;
}

/**
 * Форматирует значение для отображения
 * @param {number} value - Значение в Ватах
 * @returns {object} {text: '14.5 кВт', className: 'value-large'}
 */
function formatMeasuredValue(value) {
    if (typeof value !== 'number') return { text: String(value), className: 'value-number' };
    
    const kw = value / 1000;
    const formatted = kw.toLocaleString('ru-RU');
    
    if (kw > 1e6) {
        return { text: formatted + ' кВт', className: 'value-xlarge' };
    } else if (kw > 1e3) {
        return { text: formatted + ' кВт', className: 'value-large' };
    } else {
        return { text: formatted + ' кВт', className: 'value-number' };
    }
}

/**
 * Создаёт сводку по объектам
 * @param {array} dataMapping - Маппинг объектов
 * @param {array} values - Парсённые значения
 * @returns {string} HTML сводка
 */
function generateSummaryByObjectType(dataMapping, values) {
    // Группируем по типам: А+, А-, R+, R-
    const groups = {
        'A+': { values: [], name: 'Активная энергия (потребление)', color: '#4caf50' },
        'A-': { values: [], name: 'Активная энергия (отдача)', color: '#ff9800' },
        'R+': { values: [], name: 'Реактивная емкостная', color: '#2196f3' },
        'R-': { values: [], name: 'Реактивная индуктивная', color: '#f44336' }
    };
    
    dataMapping.forEach((mapping, idx) => {
        const type = mapping.name.substring(0, 2); // A+, A-, R+, R-
        if (groups[type]) {
            const value = values[idx];
            if (value && typeof value.value === 'number') {
                groups[type].values.push({
                    name: mapping.name,
                    value: value.value / 1000
                });
            }
        }
    });
    
    let html = '<div style="display: flex; flex-direction: column; gap: 15px; margin: 20px 0;">';
    
    for (let type in groups) {
        const group = groups[type];
        if (group.values.length === 0) continue;
        
        let total = 0;
        let content = '';
        
        group.values.forEach(item => {
            total += item.value;
            content += `
                <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(0,0,0,0.1);">
                    <span style="color: #666;">${item.name}:</span>
                    <strong style="color: ${group.color};">${item.value.toLocaleString('ru-RU')} кВт</strong>
                </div>
            `;
        });
        
        html += `
            <div style="background: ${group.color}15; border-left: 4px solid ${group.color}; padding: 15px; border-radius: 8px;">
                <h4 style="color: ${group.color}; margin: 0 0 10px 0;">${type} - ${group.name}</h4>
                ${content}
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// ==================== ЭКСПОРТ ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        decodeMask,
        getObjectInfo,
        mapDataIndicesToObjects,
        generateObjectMappingTable,
        findModelByMask,
        formatMeasuredValue,
        generateSummaryByObjectType
    };
}
