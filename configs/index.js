// ==================== ГЛАВНЫЙ ЭКСПОРТ ВСЕХ МОДЕЛЕЙ ====================

// Импортируем все модели
import { ENERGOMERA_MODELS_MAP } from './energomera/index.js';
import { MERCURY_MODELS_MAP } from './mercury/index.js';
import { NEVA_MODELS_MAP } from './neva/index.js';

// Объединяем все модели в один объект
export const ALL_MODELS = {
    ...ENERGOMERA_MODELS_MAP,
    ...MERCURY_MODELS_MAP,
    ...NEVA_MODELS_MAP
};

// Экспортируем по производителям
export const MODELS_BY_MANUFACTURER = {
    'Энергомера': ENERGOMERA_MODELS_MAP,
    'Меркурий': MERCURY_MODELS_MAP,
    'Нева': NEVA_MODELS_MAP
};

// Экспортируем все карты
export {
    ENERGOMERA_MODELS_MAP,
    MERCURY_MODELS_MAP,
    NEVA_MODELS_MAP
};