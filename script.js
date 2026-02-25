// ==================== РЕЕСТР МОДЕЛЕЙ ====================
const MODELS = {
    // Энергомера
    'energomera-208': ENERGOMERA_208_CONFIG,
    'energomera_208v6_18': ENERGOMERA_208V6_18_CONFIG,
   'energomera_210_03': ENERGOMERA_210_03_CONFIG,
    'energomera-207': ENERGOMERA_207_CONFIG,
    'energomera-307': ENERGOMERA_307_CONFIG,
    'energomera-308': ENERGOMERA_308_CONFIG,
    'energomera_308v6_1c': ENERGOMERA_308V6_1C_CONFIG,
    'energomera_310_07': ENERGOMERA_310_07_CONFIG,
    
    
    // Меркурий
    'mercury-150': MERCURY_150_CONFIG,
    'mercury-204-208-19': MERCURY_204_208_19_CONFIG,
    'mercury_208_204X': MERCURY_208_204X_CONFIG,
    'mercury_234_238x_09': MERCURY_234_238X_09_CONFIG,
    'mercury_204_208x_v156_157_08': MERCURY_204_208X_V156_157_08_CONFIG,
    'mercury_234_238x_v156_157_09': MERCURY_234_238X_V156_157_09_CONFIG,
    'mercury_204_208_v67_12': MERCURY_204_208_V67_12_CONFIG,
    'mercury_208_v69_10': MERCURY_208_V69_10_CONFIG,
    'mercury_234_238_v67_11': MERCURY_234_238_V67_11_CONFIG,
     'mercury_204_v69_0f': MERCURY_204_V69_0F_CONFIG,
    
    // Нева
    'neva-414_v2': NEVA_414_v2_CONFIG,
    'neva_sp111_09': NEVA_SP111_09_CONFIG,
    'neva_mt115_04': NEVA_MT115_04_CONFIG,
    'neva_sp311_09': NEVA_SP311_09_CONFIG,
    'neva_st221_04': NEVA_ST221_04_CONFIG,
    'neva_st413_0a': NEVA_ST413_0A_CONFIG,
    'neva_sp111_rev2_08': NEVA_SP111_REV2_08_CONFIG,

// Зип
    'vector_101_08': VECTOR_101_08_CONFIG,

// Нартис
   'nartis_100_08': NARTIS_100_08_CONFIG,
   'nartis_102_09': NARTIS_102_09_CONFIG,

};

// ==================== МОДЕЛИ ПО ПРОИЗВОДИТЕЛЯМ ====================
const MODELS_BY_MANUFACTURER = {
    'energomera': [
        { id: 'energomera-208', name: 'Энергомера CE208V10', journal: '0x1E', desc: 'Суточный журнал' },
        { id: 'energomera_210_03', name: 'Энергомера 210', journal: '0x03', desc: 'Суточный журнал'},
        { id: 'energomera-207', name: 'Энергомера CE207V10', journal: '0x1E', desc: 'Суточный журнал' },
        { id: 'energomera-307', name: 'Энергомера CE307V10', journal: '0x15', desc: 'Суточный журнал' },
        { id: 'energomera-308', name: 'Энергомера CE308V10', journal: '0x15', desc: 'Суточный журнал' },
        { id: 'energomera_308v6_1c', name: 'Энергомера 308V6', journal: '0x1C', desc: 'Суточный журнал'},
        { id: 'energomera_208v6_18', name: 'Энергомера 208V6', journal: '0x18', desc: 'Суточный журнал' },
        { id: 'energomera_310_07', name: 'Энергомера 310', journal: '0x07', desc: 'Суточный журнал ' }
    ],
    'mercury': [
        { id: 'mercury-150', name: 'Меркурий 150', journal: '0x08', desc: 'Суточный журнал' },
        { id: 'mercury-204-208-19', name: 'Меркурий 204/208X v19', journal: '0x08', desc: 'Суточный журнал' },
        { id: 'mercury_208_204X', name: 'Меркурий 204Х/208Х', journal: '0x08', desc: 'Суточный журнал' },
        { id: 'mercury_234_238x_09', name: 'Меркурий 234/238X', journal: '0x09', desc: 'Суточный журнал' },
        { id: 'mercury_204_208x_v156_157_08', name: 'Меркурий 204Х v1.56/208X v1.57', journal: '0x08', desc: 'Суточный журнал' },
        { id: 'mercury_234_238x_v156_157_09', name: 'Меркурий 234Х v1.56/238X v1.57', journal: '0x09', desc: 'Суточный журнал' },
        { id: 'mercury_204_208_v67_12', name: 'Меркурий 204/208 V67/V68', journal: '0x12', desc: 'Суточный журнал' },
        { id: 'mercury_208_v69_10', name: 'Меркурий 208 V69', journal: '0x10', desc: 'Суточный журнал' },
        { id: 'mercury_234_238_v67_11', name: 'Меркурий 234/238 V67/V68', journal: '0x11', desc: 'Суточный журнал' },
        { id: 'mercury_204_v69_0f', name: 'Меркурий 238/234/204 V69', journal: '0x0F', desc: 'Суточный журнал' }
          
    ],
    'neva': [
        { id: 'neva-414_v2', name: 'Нева 414_V2', journal: '0x09', desc: 'Суточный журнал' },
        { id: 'neva_st413_0a', name: 'Нева СТ 413/414', journal: '0x0A', desc: 'Суточный журнал' },
        { id: 'neva_sp311_09', name: 'Нева СП-311', journal: '0x09', desc: 'Суточный журнал' },
        { id: 'neva_st221_04', name: 'Нева СТ 221', journal: '0x04', desc: 'Суточный журнал' },
        { id: 'neva_sp111_09', name: 'Нева СП 111', journal: '0x09', desc: 'Суточный журнал' },
        { id: 'neva_sp111_rev2_08', name: 'Нева СП 111 rev2', journal: '0x08', desc: 'Суточный журнал' },
        { id: 'neva_mt115_04', name: 'Нева МТ-115', journal: '0x04', desc: 'Суточный журнал' }
    ],
     'spbzip': [
        { id: 'vector_101_08', name: 'Вектор 101', journal: '0x08', desc: 'Суточный журнал' }
    ],
    
     'nartis': [
        { id: 'nartis_100_08', name: 'Нартис 100/300', journal: '0x08', desc: 'Суточный журнал' },
        { id: 'nartis_102_09', name: 'Нартис 100/300 (Сплит)', journal: '0x09', desc: 'Суточный журнал ' }
    ]
};

// ==================== СОСТОЯНИЕ ПРИЛОЖЕНИЯ ====================
let currentModel = MODELS['energomera-208'];
let currentCommand = '';
// список доступных моделей в текущем селекте
let modelOptions = []; // {text, id}

// helper для показа/скрытия кастомного списка
function updateDropdown(filter) {
    const dropdown = document.getElementById('modelDropdown');
    if (!dropdown) return;
    dropdown.innerHTML = '';
    const lower = filter.toLowerCase();
    modelOptions.forEach(opt => {
        if (!filter || opt.text.toLowerCase().includes(lower)) {
            const item = document.createElement('div');
            item.className = 'dropdown-item';
            item.textContent = opt.text;
            item.dataset.id = opt.id;
            dropdown.appendChild(item);
        }
    });
    if (dropdown.children.length > 0) {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function hideDropdown() {
    const dropdown = document.getElementById('modelDropdown');
    if (dropdown) dropdown.style.display = 'none';
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Генератор загружен');
    
    // сбрасываем сохранённую модель, чтобы при каждой загрузке всегда был дефолт
    localStorage.removeItem('lastSelectedModelId');
    localStorage.removeItem('lastSelectedManufacturer');
    
    let initialManufacturer = 'energomera';
    let initialModelId = 'energomera-208';
    // (раньше здесь был код для восстановле́ния модели из localStorage, теперь проигнорирован)
    
    // Заполняем модели для производителя
    updateModelSelect(initialManufacturer);
    
    // Устанавливаем сохраненную модель
    if (MODELS[initialModelId]) {
        currentModel = MODELS[initialModelId];
    }
    
    // Загружаем конфигурацию
    loadModelConfig(currentModel);

    // Отобразим название текущей модели в поле ввода
    const modelSearchInput = document.getElementById('modelSearch');
    if (modelSearchInput && currentModel) {
        // журнал может храниться в нескольких местах, берём первый найденный
        const journal = currentModel.journal || currentModel.journalId || currentModel.info?.journal || '';
        modelSearchInput.value = journal ? `${currentModel.name} (${journal})` : currentModel.name;
    }
    
    // (удалён устаревший код, теперь выбор происходит из списка подсказок datalist)
    
    // Селектор производителя
    const manufacturerSelect = document.getElementById('manufacturerSelect');
    if (manufacturerSelect) {
        manufacturerSelect.addEventListener('change', function() {
            updateModelSelect(this.value);
            document.getElementById('modelSearch').value = '';
        });
    }
    
    // Поиск/выбор модели через собственный выпадающий список
    const modelSearch = document.getElementById('modelSearch');
    const dropdown = document.getElementById('modelDropdown');
    if (modelSearch) {
        // показываем варианты при фокусе
        modelSearch.addEventListener('focus', () => updateDropdown(modelSearch.value));
        // фильтруем при каждом вводе
        modelSearch.addEventListener('input', function() {
            updateDropdown(this.value);
        });
    }
    if (dropdown) {
        dropdown.addEventListener('click', function(e) {
            if (e.target.classList.contains('dropdown-item')) {
                const id = e.target.dataset.id;
                if (id) {
                    switchModel(id);
                    // сохранять не нужно — модель сбрасывается при перезагрузке
                    //localStorage.setItem('lastSelectedModelId', id);
                    //const manu = document.getElementById('manufacturerSelect');
                    //if (manu) localStorage.setItem('lastSelectedManufacturer', manu.value);
                    modelSearch.value = e.target.textContent;
                    hideDropdown();
                }
            }
        });
    }

    // закрываем список при клике вне
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#modelSearch') && !e.target.closest('#modelDropdown')) {
            hideDropdown();
        }
    });
    
    // КНОПКА ГЕНЕРАЦИИ
    const generateBtn = document.getElementById('generateBtn');
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            updateCommand();
            showStatus('⚡ Команда сгенерирована и готова к отправке на 201 порт', 'success');
        });
    }
    
    // Обновление отображения периода
    const periodInput = document.getElementById('period');
    if (periodInput) {
        periodInput.addEventListener('input', updatePeriodDisplay);
        updatePeriodDisplay();
    }
    
    // Обновляем счетчик при изменении чекбоксов
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('object-checkbox')) {
            updateSelectedCount();
        }
    });
    
    // ВКЛАДКИ
    const tabGenerator = document.getElementById('tabGenerator');
    const tabParser = document.getElementById('tabParser');
    const generatorPanel = document.getElementById('generatorPanel');
    const parserPanel = document.getElementById('parserPanel');
    
    if (tabGenerator && tabParser) {
        tabGenerator.addEventListener('click', function() {
            tabGenerator.classList.add('active');
            tabParser.classList.remove('active');
            generatorPanel.style.display = 'block';
            parserPanel.style.display = 'none';
            showStatus('✅ Режим генератора команд', 'info');
        });
        
        tabParser.addEventListener('click', function() {
            tabParser.classList.add('active');
            tabGenerator.classList.remove('active');
            generatorPanel.style.display = 'none';
            parserPanel.style.display = 'block';
            showStatus('🔍 Режим парсера ответов', 'info');
            clearParserResult();
        });
    }
    
    // Парсер
    const parseBtn = document.getElementById('parseResponseBtn');
    if (parseBtn) {
        parseBtn.addEventListener('click', parseResponse);
    }
    
    const clearParserBtn = document.getElementById('clearParserBtn');
    if (clearParserBtn) {
        clearParserBtn.addEventListener('click', clearParser);
    }
    
    // Тема
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// ==================== ОБНОВЛЕНИЕ ОТОБРАЖЕНИЯ ПЕРИОДА ====================
function updatePeriodDisplay() {
    const periodInput = document.getElementById('period');
    const periodDisplay = document.getElementById('periodDisplay');
    
    if (periodInput && periodDisplay) {
        const seconds = parseInt(periodInput.value) || 0;
        const minutes = seconds / 60;
        const hours = seconds / 3600;
        
        let displayText = `${seconds} сек`;
        
        if (seconds >= 60) {
            displayText += ` = ${minutes.toFixed(1)} мин`;
        }
        if (seconds >= 3600) {
            displayText += ` = ${hours.toFixed(1)} ч`;
        }
        
        periodDisplay.textContent = displayText;
    }
}

// ==================== ОБНОВЛЕНИЕ СПИСКА МОДЕЛЕЙ ====================
function updateModelSelect(manufacturer) {
    const models = MODELS_BY_MANUFACTURER[manufacturer] || MODELS_BY_MANUFACTURER['energomera'];
    modelOptions = [];
    models.forEach(model => {
        if (MODELS[model.id]) {
            const text = `${model.name} (${model.journal})`;
            modelOptions.push({text, id: model.id});
        }
    });

    // Сброс поля и скрываем выпадающий список: пользователь сам откроет при необходимости
    const modelSearch = document.getElementById('modelSearch');
    if (modelSearch) {
        modelSearch.value = '';
    }
    hideDropdown();
}

// функция фильтрации больше не нужна при использовании datalist

// ==================== ПЕРЕКЛЮЧЕНИЕ МОДЕЛИ ====================
function switchModel(modelId) {
    if (!MODELS[modelId]) {
        console.error('Модель не найдена:', modelId);
        showStatus(`❌ Модель ${modelId} не найдена в реестре`, 'error');
        return;
    }
    
    currentModel = MODELS[modelId];
    
    const modelTitle = document.getElementById('modelTitle');
    if (modelTitle) modelTitle.innerHTML = `🏭 ${currentModel.name}`;
    
    const journalBadge = document.getElementById('journalBadge');
    if (journalBadge) journalBadge.textContent = `Журнал 0x${currentModel.journalId}`;
    
    const modelInfo = document.getElementById('modelInfo');
    if (modelInfo) modelInfo.textContent = currentModel.description;
    
    const journalLabel = document.getElementById('journalLabel');
    if (journalLabel) journalLabel.textContent = currentModel.journalId;
    
    rebuildObjectGroups('objectsContainer');
    
    const periodInput = document.getElementById('period');
    if (periodInput) periodInput.value = currentModel.periodDefault;
    
    clearAll();
    
    // Сохраняем выбранную модель в localStorage
    //localStorage.setItem('lastSelectedModelId', modelId);  // больше не используем
    const manufacturerSelect = document.getElementById('manufacturerSelect');
    if (manufacturerSelect) {
        localStorage.setItem('lastSelectedManufacturer', manufacturerSelect.value);
    }
    
    showStatus(`✅ Переключено на ${currentModel.name}`, 'success');
}

// ==================== ПЕРЕСТРОЙКА ГРУПП ОБЪЕКТОВ ====================
function rebuildObjectGroups(containerId = 'objectsContainer') {
    const objectsContainer = document.getElementById(containerId);
    if (!objectsContainer) return;
    
    objectsContainer.innerHTML = '';
    
    if (!currentModel.objectGroups || !Array.isArray(currentModel.objectGroups)) {
        console.error('objectGroups не найдены в конфигурации');
        return;
    }
    
    currentModel.objectGroups.forEach((group, index) => {
        const groupId = `${containerId}-group-${currentModel.modelId}-${index}`;
        
        const groupDiv = document.createElement('div');
        groupDiv.className = 'object-group';
        
        const header = document.createElement('div');
        header.className = 'group-header';
        header.setAttribute('onclick', `toggleGroup('${groupId}')`);
        header.innerHTML = `
            <span class="group-icon">${group.icon || '📦'}</span>
            <span class="group-title">${group.name}</span>
            ${group.description ? `<span style="font-size: 11px; color: var(--light-text); margin-left: 5px;">${group.description}</span>` : ''}
            <span class="group-toggle">▼</span>
        `;
        
        const content = document.createElement('div');
        content.id = groupId;
        content.className = 'group-content';
        
        if (group.objects && Array.isArray(group.objects)) {
            group.objects.sort((a, b) => a.id - b.id).forEach(obj => {
                const label = document.createElement('label');
                label.className = 'object-item';
                label.innerHTML = `
                    <input type="checkbox" class="object-checkbox" data-source="${containerId}" value="${obj.id}">
                    <span class="obj-num">${obj.id}</span>
                    <span style="flex: 1;">${obj.name}</span>
                    <span class="obis">${obj.obis || ''}</span>
                `;
                content.appendChild(label);
            });
        }
        
        groupDiv.appendChild(header);
        groupDiv.appendChild(content);
        objectsContainer.appendChild(groupDiv);
    });
    
    if (containerId === 'objectsContainer') {
        rebuildPresetButtons();
    }
}

// ==================== ПЕРЕСТРОЙКА КНОПОК ПРЕСЕТОВ ====================
function rebuildPresetButtons() {
    const presetsContainer = document.getElementById('presetButtonsContainer');
    if (!presetsContainer) return;
    
    presetsContainer.innerHTML = '';
    
    if (!currentModel.presets) return;
    
    const presetMap = {
        'minimal': { name: 'Короткий', desc: 'T0,T1,T2' },
        'default': { name: 'Дефолтный', desc: '12 объектов планировщика' },
        'reactive': { name: 'Вся реактивная', desc: 'R+ и R-' },
        'all': { name: 'Все объекты', desc: 'Полный набор' }
    };
    
    Object.keys(presetMap).forEach(presetId => {
        if (currentModel.presets[presetId]) {
            const btn = document.createElement('button');
            btn.className = 'preset-btn-small';
            btn.setAttribute('onclick', `selectPreset('${presetId}')`);
            btn.innerHTML = `${presetMap[presetId].name} <span style="font-size: 10px; opacity: 0.9;">${presetMap[presetId].desc}</span>`;
            presetsContainer.appendChild(btn);
        }
    });
    
    const clearBtn = document.createElement('button');
    clearBtn.className = 'preset-btn-small clear';
    clearBtn.setAttribute('onclick', 'clearAll()');
    clearBtn.innerHTML = '🧹 Сброс';
    presetsContainer.appendChild(clearBtn);
}

// ==================== ОБНОВЛЕНИЕ СЧЕТЧИКА ====================
function updateSelectedCount() {
    const count = document.querySelectorAll('#objectsContainer .object-checkbox:checked').length;
    const selectedCount = document.getElementById('selectedCount');
    if (selectedCount) {
        selectedCount.textContent = `${count} объектов`;
    }
}

// ==================== ГЕНЕРАЦИЯ КОМАНДЫ ====================
function updateCommand() {
    try {
        const selectedObjects = [];
        document.querySelectorAll('#objectsContainer .object-checkbox:checked').forEach(cb => {
            selectedObjects.push(parseInt(cb.value));
        });
        
        let taskId = parseInt(document.getElementById('taskId')?.value);
        if (isNaN(taskId) || taskId < 0 || taskId > 255) {
            taskId = 1;
        }
        
        const period = parseInt(document.getElementById('period')?.value) || currentModel.periodDefault;
        const delay = parseInt(document.getElementById('delay')?.value) || 0;
        
        // ✅ ИСПРАВЛЕНО: Используем BigInt для 64-битных масок
        let mask = 0n;
        selectedObjects.forEach(objId => {
            if (objId >= currentModel.minObjectId && objId <= currentModel.maxObjectId) {
                const bitPosition = objId - currentModel.bitShift;
                if (bitPosition >= 0) {
                    mask |= (1n << BigInt(bitPosition));
                }
            }
        });
        
        const taskHex = taskId.toString(16).padStart(2, '0').toUpperCase();
        const periodHex = period.toString(16).padStart(8, '0').toUpperCase();
        const delayHex = delay.toString(16).padStart(4, '0').toUpperCase();
        const journalPadded = currentModel.journalId.padStart(4, '0').toUpperCase();
        
        // ✅ Определяем разрядность маски по журналу
        let maskHex;
        if (currentModel.journalId === '15' && currentModel.maxObjectId > 31) {
            maskHex = mask.toString(16).padStart(16, '0').toUpperCase(); // 64 бита
        } else {
            maskHex = mask.toString(16).padStart(12, '0').toUpperCase(); // 48 бит
        }
        
        const command = `F002${taskHex}${periodHex}${delayHex}0066${journalPadded}${maskHex}`;
        
        currentCommand = command;
        const commandOutput = document.getElementById('commandOutput');
        if (commandOutput) {
            commandOutput.textContent = command;
        }
        
        updateSelectedCount();
        showStatus(`⚡ Команда сгенерирована для ${currentModel.name}`, 'success');
        
    } catch (error) {
        console.error('Ошибка генерации:', error);
        showStatus('❌ Ошибка генерации команды', 'error');
    }
}

// ==================== ГЕНЕРАЦИЯ КОМАНДЫ ИЗ ПАРСЕРА ====================
function generateFromParser() {
    try {
        const selectedObjects = [];
        document.querySelectorAll('#parserObjectsContainer .object-checkbox:checked').forEach(cb => {
            selectedObjects.push(parseInt(cb.value));
        });
        
        let taskId = parseInt(document.getElementById('parserTaskId')?.value);
        if (isNaN(taskId) || taskId < 0 || taskId > 255) {
            taskId = 1;
        }
        
        const period = parseInt(document.getElementById('parserPeriod')?.value) || currentModel.periodDefault;
        const delay = parseInt(document.getElementById('parserDelay')?.value) || 0;
        
        // ✅ ИСПРАВЛЕНО: Используем BigInt
        let mask = 0n;
        selectedObjects.forEach(objId => {
            if (objId >= currentModel.minObjectId && objId <= currentModel.maxObjectId) {
                const bitPosition = objId - currentModel.bitShift;
                if (bitPosition >= 0) {
                    mask |= (1n << BigInt(bitPosition));
                }
            }
        });
        
        const taskHex = taskId.toString(16).padStart(2, '0').toUpperCase();
        const periodHex = period.toString(16).padStart(8, '0').toUpperCase();
        const delayHex = delay.toString(16).padStart(4, '0').toUpperCase();
        const journalPadded = currentModel.journalId.padStart(4, '0').toUpperCase();
        
        // ✅ Определяем разрядность маски
        let maskHex;
        if (currentModel.journalId === '15' && currentModel.maxObjectId > 31) {
            maskHex = mask.toString(16).padStart(16, '0').toUpperCase();
        } else {
            maskHex = mask.toString(16).padStart(12, '0').toUpperCase();
        }
        
        const command = `F002${taskHex}${periodHex}${delayHex}0066${journalPadded}${maskHex}`;
        
        const resultDiv = document.createElement('div');
        resultDiv.style.cssText = 'margin-top: 15px; padding: 12px; background: var(--card-bg); border: 1px solid var(--border); border-radius: 6px;';
        
        const flexDiv = document.createElement('div');
        flexDiv.style.cssText = 'display: flex; justify-content: space-between; align-items: center;';
        
        const codeEl = document.createElement('code');
        codeEl.style.cssText = 'font-family: monospace; font-size: 16px; color: var(--success); word-break: break-all;';
        codeEl.textContent = command;
        
        const copyBtn = document.createElement('button');
        copyBtn.style.cssText = 'background: var(--primary); color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; margin-left: 10px;';
        copyBtn.textContent = '📋 Копировать';
        
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(command).then(() => {
                showStatus('📋 Команда скопирована в буфер обмена', 'success');
            }).catch(err => {
                console.error('Ошибка копирования:', err);
                showStatus('❌ Не удалось скопировать команду', 'error');
            });
        });
        
        flexDiv.appendChild(codeEl);
        flexDiv.appendChild(copyBtn);
        resultDiv.appendChild(flexDiv);
        
        const portInfo = document.createElement('div');
        portInfo.style.cssText = 'margin-top: 8px; font-size: 12px; color: var(--light-text);';
        portInfo.innerHTML = '⚡ Команда для отправки на 201 порт';
        resultDiv.appendChild(portInfo);
        
        const parserResultCommand = document.getElementById('parserResultCommand');
        parserResultCommand.innerHTML = '';
        parserResultCommand.appendChild(resultDiv);
        
        showStatus('✅ Команда сгенерирована из парсера', 'success');
        
    } catch (error) {
        console.error('Ошибка генерации из парсера:', error);
        showStatus('❌ Ошибка генерации команды', 'error');
    }
}

// ==================== ПРЕСЕТЫ ====================
function selectPreset(presetName) {
    if (currentModel.presets && currentModel.presets[presetName]) {
        document.querySelectorAll('#objectsContainer .object-checkbox').forEach(cb => {
            cb.checked = false;
        });
        
        const presetObjects = currentModel.presets[presetName];
        console.log(`Применяем пресет "${presetName}":`, presetObjects); // Отладка
        
        presetObjects.forEach(objId => {
            const checkbox = document.querySelector(`#objectsContainer .object-checkbox[value="${objId}"]`);
            if (checkbox) {
                checkbox.checked = true;
            } else {
                console.warn(`Чекбокс для объекта ${objId} не найден`);
            }
        });
        
        updateSelectedCount();
        showStatus(`🎯 Пресет "${presetName}" применен`, 'info');
    } else {
        console.error(`Пресет "${presetName}" не найден в конфигурации`);
        showStatus(`❌ Пресет "${presetName}" не найден`, 'error');
    }
}

function clearAll() {
    document.querySelectorAll('#objectsContainer .object-checkbox').forEach(cb => {
        cb.checked = false;
    });
    updateSelectedCount();
    showStatus('🧹 Все объекты сброшены', 'info');
}

function toggleGroup(groupId) {
    const group = document.getElementById(groupId);
    if (!group) return;
    
    const toggle = group.previousElementSibling?.querySelector('.group-toggle');
    
    if (group.style.display === 'none' || !group.style.display) {
        group.style.display = 'grid';
        if (toggle) {
            toggle.style.transform = 'rotate(0deg)';
            toggle.textContent = '▼';
        }
    } else {
        group.style.display = 'none';
        if (toggle) {
            toggle.style.transform = 'rotate(-90deg)';
            toggle.textContent = '▶';
        }
    }
}

// ==================== КОПИРОВАНИЕ ====================
function copyCommand() {
    if (!currentCommand) {
        showStatus('❌ Сначала сгенерируйте команду', 'error');
        return;
    }
    
    navigator.clipboard.writeText(currentCommand).then(() => {
        showStatus('📋 Команда скопирована в буфер обмена', 'success');
        
        const btn = document.getElementById('copyBtn');
        if (btn) {
            const originalText = btn.innerHTML;
            btn.style.background = 'var(--success)';
            btn.innerHTML = '✅';
            setTimeout(() => {
                btn.style.background = 'var(--primary)';
                btn.innerHTML = originalText;
            }, 1500);
        }
    }).catch(err => {
        console.error('Ошибка копирования:', err);
        showStatus('❌ Не удалось скопировать команду', 'error');
    });
}

// ==================== СТАТУС БАР ====================
function showStatus(message, type = 'info') {
    const statusBar = document.getElementById('statusBar');
    if (!statusBar) return;
    
    statusBar.textContent = message;
    
    switch(type) {
        case 'success':
            statusBar.style.borderLeftColor = 'var(--success)';
            break;
        case 'warning':
            statusBar.style.borderLeftColor = '#f39c12';
            break;
        case 'error':
            statusBar.style.borderLeftColor = '#e74c3c';
            break;
        default:
            statusBar.style.borderLeftColor = 'var(--primary)';
    }
}

// ==================== ПАРСЕР ОТВЕТОВ ====================
function parseResponse() {
    try {
        const response = document.getElementById('responseInput').value.replace(/\s+/g, '').toUpperCase();
        
        // Проверяем длину (40 для 48 бит, 44 для 64 бит)
        if (!response || response.length < 40) {
            showStatus('❌ Введите корректный HEX-ответ (минимум 40 символов)', 'error');
            return;
        }
        
        const prefix = response.substring(0, 4);
        if (prefix !== 'F001') {
            showStatus('⚠️ Это не команда F001', 'warning');
        }
        
        // Парсим поля
        const status = response.substring(4, 6);
        const taskId = response.substring(6, 8);
        const period = response.substring(8, 16);
        const delay = response.substring(16, 20);
        const schedulerCmd = response.substring(20, 24);
        const journalId = response.substring(24, 28);
        
        // Определяем длину маски
        let mask;
        if (response.length >= 44) {
            mask = response.substring(28, 44); // 64 бита
        } else {
            mask = response.substring(28, 40); // 48 бит
        }
        
        // Перевод в DEC
        const taskIdDec = parseInt(taskId, 16);
        const periodDec = parseInt(period, 16);
        const delayDec = parseInt(delay, 16);
        
        // Статус
        let statusText = '';
        let statusColor = '';
        switch(status) {
            case 'C8': statusText = '✅ Успешно'; statusColor = 'var(--success)'; break;
            case '00': statusText = '⏳ Ожидает'; statusColor = '#f39c12'; break;
            case 'FF': statusText = '❌ Ошибка'; statusColor = '#e74c3c'; break;
            default: statusText = `❓ ${status}`; statusColor = 'var(--light-text)';
        }
        
        const modelName = currentModel.name;
        
        // Анализ маски - используем bitShift из конфига
        const maskBigInt = BigInt('0x' + mask);
        const selectedObjects = [];
        
        const minObj = currentModel.minObjectId;
        const maxObj = currentModel.maxObjectId;
        
        for (let objId = minObj; objId <= maxObj; objId++) {
            const bitPosition = objId - currentModel.bitShift;
            if (bitPosition >= 0) {
                const bitValue = BigInt(1) << BigInt(bitPosition);
                if ((maskBigInt & bitValue) !== BigInt(0)) {
                    selectedObjects.push(objId);
                }
            }
        }
        
        selectedObjects.sort((a, b) => a - b);
        
        // Информационная панель с улучшенным отображением периода
        let infoHtml = `
            <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 6px; padding: 15px; margin-bottom: 15px;">
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                    <span style="background: ${statusColor}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">${statusText}</span>
                    <span style="background: var(--primary); color: white; padding: 4px 12px; border-radius: 20px; font-size: 13px;">Задача #${taskIdDec}</span>
                    <span style="background: var(--group-bg); color: var(--text); padding: 4px 12px; border-radius: 20px; font-size: 13px;">${modelName}</span>
                </div>
                
                <div style="display: flex; gap: 20px; font-size: 14px; color: var(--text); flex-wrap: wrap;">
                    <div>
                        <span style="color: var(--light-text);">Период:</span> 
                        <strong>${periodDec} сек</strong>
                        <span style="font-size: 12px; color: var(--light-text); background: var(--card-bg); padding: 2px 6px; border-radius: 4px; margin-left: 5px;">
                            ${Math.round(periodDec/60)} мин / ${(periodDec/3600).toFixed(1)} ч
                        </span>
                    </div>
                    <div><span style="color: var(--light-text);">Задержка:</span> <strong>${delayDec} сек</strong></div>
                    <div><span style="color: var(--light-text);">Журнал:</span> <strong>0x${journalId}</strong></div>
                </div>
            </div>
        `;
        
        // Сетка объектов
        let objectsHtml = `
            <div style="margin-bottom: 15px;">
                <h4 style="margin-bottom: 10px; font-size: 15px; display: flex; align-items: center; gap: 8px;">
                    <span>📋 Выберите объекты для опроса</span>
                    <span style="background: var(--primary); color: white; padding: 2px 10px; border-radius: 20px; font-size: 12px;" id="parserSelectedCount">${selectedObjects.length} объектов</span>
                </h4>
                <div id="parserObjectsContainer" class="objects-grid-compact"></div>
            </div>
        `;
        
        // Панель редактирования
        let editHtml = `
            <div style="background: var(--group-bg); border: 1px solid var(--border); border-radius: 6px; padding: 15px; margin-top: 15px;">
                <div style="display: flex; gap: 15px; align-items: center; margin-bottom: 15px; flex-wrap: wrap;">
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <label style="font-size: 13px; color: var(--light-text);">Задача №:</label>
                        <input type="number" id="parserTaskId" value="${taskIdDec}" min="0" max="255" style="width: 70px; padding: 6px; border: 1px solid var(--border); border-radius: 4px; background: var(--card-bg); color: var(--text);">
                    </div>
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <label style="font-size: 13px; color: var(--light-text);">Период (сек):</label>
                        <input type="number" id="parserPeriod" value="${periodDec}" min="60" max="86400" style="width: 100px; padding: 6px; border: 1px solid var(--border); border-radius: 4px; background: var(--card-bg); color: var(--text);">
                    </div>
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <label style="font-size: 13px; color: var(--light-text);">Задержка:</label>
                        <input type="number" id="parserDelay" value="${delayDec}" min="0" max="3600" style="width: 80px; padding: 6px; border: 1px solid var(--border); border-radius: 4px; background: var(--card-bg); color: var(--text);">
                    </div>
                    <button id="parserGenerateBtn" class="btn-generate" style="margin-left: auto; padding: 8px 16px;">⚡ СГЕНЕРИРОВАТЬ</button>
                </div>
                <div id="parserResultCommand"></div>
            </div>
        `;
        
        let fullHtml = infoHtml + objectsHtml + editHtml;
        
        document.getElementById('parserResult').innerHTML = fullHtml;
        document.getElementById('parserResult').style.display = 'block';
        
        // Перестраиваем группы объектов для парсера
        const parserContainer = document.getElementById('parserObjectsContainer');
        if (!parserContainer) return;
        
        parserContainer.innerHTML = '';
        
        if (currentModel.objectGroups) {
            currentModel.objectGroups.forEach((group, index) => {
                const groupId = `parser-group-${currentModel.modelId}-${index}`;
                
                const groupDiv = document.createElement('div');
                groupDiv.className = 'object-group';
                
                const header = document.createElement('div');
                header.className = 'group-header';
                header.setAttribute('onclick', `toggleGroup('${groupId}')`);
                header.innerHTML = `
                    <span class="group-icon">${group.icon || '📦'}</span>
                    <span class="group-title">${group.name}</span>
                    <span class="group-toggle">▼</span>
                `;
                
                const content = document.createElement('div');
                content.id = groupId;
                content.className = 'group-content';
                
                if (group.objects && Array.isArray(group.objects)) {
                    group.objects.sort((a, b) => a.id - b.id).forEach(obj => {
                        const label = document.createElement('label');
                        label.className = 'object-item';
                        label.innerHTML = `
                            <input type="checkbox" class="object-checkbox" data-source="parser" value="${obj.id}">
                            <span class="obj-num">${obj.id}</span>
                            <span style="flex: 1;">${obj.name}</span>
                            <span class="obis">${obj.obis || ''}</span>
                        `;
                        content.appendChild(label);
                    });
                }
                
                groupDiv.appendChild(header);
                groupDiv.appendChild(content);
                parserContainer.appendChild(groupDiv);
            });
        }
        
        // Устанавливаем галочки
        setTimeout(() => {
            selectedObjects.forEach(objId => {
                const checkbox = document.querySelector(`#parserObjectsContainer .object-checkbox[value="${objId}"]`);
                if (checkbox) checkbox.checked = true;
            });
            
            const parserSelectedCount = document.getElementById('parserSelectedCount');
            if (parserSelectedCount) {
                parserSelectedCount.textContent = `${selectedObjects.length} объектов`;
            }
        }, 50);
        
        // Обработчик кнопки генерации
        setTimeout(() => {
            const parserGenerateBtn = document.getElementById('parserGenerateBtn');
            if (parserGenerateBtn) {
                const newBtn = parserGenerateBtn.cloneNode(true);
                parserGenerateBtn.parentNode.replaceChild(newBtn, parserGenerateBtn);
                newBtn.addEventListener('click', generateFromParser);
            }
            
            document.querySelectorAll('#parserObjectsContainer .object-checkbox').forEach(cb => {
                cb.addEventListener('change', function() {
                    const count = document.querySelectorAll('#parserObjectsContainer .object-checkbox:checked').length;
                    const parserSelectedCount = document.getElementById('parserSelectedCount');
                    if (parserSelectedCount) {
                        parserSelectedCount.textContent = `${count} объектов`;
                    }
                });
            });
        }, 100);
        
        showStatus(`✅ Найдено объектов: ${selectedObjects.length}`, 'success');
        
    } catch (e) {
        console.error('Ошибка парсинга:', e);
        showStatus(`❌ Ошибка: ${e.message}`, 'error');
    }
}

// ==================== ОЧИСТКА ПАРСЕРА ====================
function clearParser() {
    document.getElementById('responseInput').value = '';
    clearParserResult();
    showStatus('🧹 Парсер очищен', 'info');
}

function clearParserResult() {
    const parserResult = document.getElementById('parserResult');
    if (parserResult) {
        parserResult.innerHTML = '';
        parserResult.style.display = 'none';
    }
}

// ==================== ТЕМА ====================
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
        btn.classList.add('pulse');
        setTimeout(() => btn.classList.remove('pulse'), 500);
    }
}

// ==================== ЗАГРУЗКА КОНФИГУРАЦИИ ====================
function loadModelConfig(config) {
    if (!config) return;
    
    const modelTitle = document.getElementById('modelTitle');
    if (modelTitle) modelTitle.innerHTML = `🏭 ${config.name}`;
    
    const journalBadge = document.getElementById('journalBadge');
    if (journalBadge) journalBadge.textContent = `Журнал 0x${config.journalId}`;
    
    const modelInfo = document.getElementById('modelInfo');
    if (modelInfo) modelInfo.textContent = config.description;
    
    const journalLabel = document.getElementById('journalLabel');
    if (journalLabel) journalLabel.textContent = config.journalId;
    
    rebuildObjectGroups('objectsContainer');
    updateSelectedCount();
}

// ==================== ЭКСПОРТ В ГЛОБАЛЬНУЮ ОБЛАСТЬ ====================
window.selectPreset = selectPreset;
window.clearAll = clearAll;
window.toggleGroup = toggleGroup;
window.copyCommand = copyCommand;
window.toggleTheme = toggleTheme;
window.updateCommand = updateCommand;
window.switchModel = switchModel;
window.parseResponse = parseResponse;
window.clearParser = clearParser;
window.generateFromParser = generateFromParser;