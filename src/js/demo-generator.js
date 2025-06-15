// Генератор идей FamLab
function initializeFamLabGenerator() {
    const categorySelect = document.getElementById('category-select');
    const generateBtn = document.getElementById('generate-btn');
    const processing = document.getElementById('processing');
    const results = document.getElementById('results');

    // Активация кнопки при выборе категории
    categorySelect.addEventListener('change', function() {
        generateBtn.disabled = this.value === '';
    });

    // Генерация идей
    generateBtn.addEventListener('click', function() {
        if (categorySelect.value === '') return;
        
        // Скрываем результаты и показываем процесс
        results.style.display = 'none';
        processing.style.display = 'block';
        
        // Генерация идей
        setTimeout(() => {
            processing.style.display = 'none';
            
            // Генерируем идеи для выбранной категории
            generateFamLabIdeas(categorySelect.value);
            
            results.style.display = 'grid';
            
            // Анимация появления карточек результатов
            const resultCards = results.querySelectorAll('.result-card');
            resultCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.2}s`;
            });
            
        }, 2500);
    });
}

// Генерация идей FamLab
function generateFamLabIdeas(category) {
    const ideas = {
        'automation': {
            start: [
                "Создай AI-ассистента для email-ответов",
                "Автоматизируй заполнение отчетов с GPT",
                "Настрой AI для сортировки входящих задач",
                "Создай бота для планирования встреч"
            ],
            tools: [
                "Make.com + OpenAI API",
                "Zapier + ChatGPT плагины",
                "Microsoft Power Automate + AI Builder",
                "n8n + локальные AI модели"
            ],
            next: [
                "Изучи продвинутую автоматизацию в FamLab",
                "Пройди курс по интеграции AI-инструментов",
                "Научись создавать многоэтапные воркфлоу",
                "Освой настройку триггеров и условий"
            ]
        },
        'content': {
            start: [
                "Создай AI-копирайтера под свой стиль",
                "Настрой генерацию постов для соцсетей",
                "Автоматизируй создание описаний товаров",
                "Создай систему для генерации заголовков"
            ],
            tools: [
                "Claude + кастомные промпты",
                "ChatGPT + Brand Guidelines",
                "Writesonic + контент-планы",
                "Copy.ai + SEO-оптимизация"
            ],
            next: [
                "Изучи промпт-инжиниринг в FamLab",
                "Научись тренировать AI на своих данных",
                "Освой создание контент-стратегий с AI",
                "Пройди мастер-класс по AI-копирайтингу"
            ]
        },
        'analysis': {
            start: [
                "Анализируй тренды с помощью AI",
                "Создай систему мониторинга конкурентов",
                "Автоматизируй отчеты по продажам",
                "Настрой AI для анализа обратной связи"
            ],
            tools: [
                "Python + OpenAI для анализа данных",
                "Google Sheets + GPT функции",
                "Tableau + AI-инсайты",
                "R + машинное обучение"
            ],
            next: [
                "Изучи Data Science с AI в FamLab",
                "Освой создание дашбордов с AI-выводами",
                "Научись предсказательной аналитике",
                "Пройди курс по машинному обучению"
            ]
        },
        'coding': {
            start: [
                "Используй GitHub Copilot для ускорения кода",
                "Создай AI-помощника для дебаггинга",
                "Автоматизируй написание тестов",
                "Генерируй документацию кода с AI"
            ],
            tools: [
                "GitHub Copilot + VS Code",
                "ChatGPT + Code Interpreter",
                "Tabnine + твоя IDE",
                "Claude + рефакторинг кода"
            ],
            next: [
                "Изучи AI-driven разработку в FamLab",
                "Освой создание AI-приложений",
                "Научись интегрировать LLM в проекты",
                "Пройди курс по AI для программистов"
            ]
        },
        'business': {
            start: [
                "Создай AI-чатбота для клиентского сервиса",
                "Автоматизируй процесс онбординга",
                "Настрой AI для анализа KPI",
                "Создай систему предсказания продаж"
            ],
            tools: [
                "Chatbase + корпоративные данные",
                "HubSpot + AI автоматизация",
                "Notion AI + управление проектами",
                "Salesforce Einstein + CRM"
            ],
            next: [
                "Изучи AI в бизнес-процессах в FamLab",
                "Освой создание AI-стратегий",
                "Научись ROI-анализу AI-решений",
                "Пройди курс по цифровой трансформации"
            ]
        },
        'learning': {
            start: [
                "Создай персонального AI-тьютора",
                "Настрой систему микрообучения",
                "Автоматизируй создание тестов",
                "Создай AI-ментора для навыков"
            ],
            tools: [
                "ChatGPT + персонализированные промпты",
                "Claude + обучающие материалы",
                "Khan Academy + AI адаптация",
                "Anki + AI для карточек"
            ],
            next: [
                "Изучи персонализированное обучение в FamLab",
                "Освой создание адаптивных курсов",
                "Научись геймификации с AI",
                "Пройди программу по EdTech и AI"
            ]
        }
    };
    
    const categoryIdeas = ideas[category];
    if (categoryIdeas) {
        document.getElementById('idea-start').textContent = 
            categoryIdeas.start[Math.floor(Math.random() * categoryIdeas.start.length)];
        document.getElementById('idea-tools').textContent = 
            categoryIdeas.tools[Math.floor(Math.random() * categoryIdeas.tools.length)];
        document.getElementById('idea-next').textContent = 
            categoryIdeas.next[Math.floor(Math.random() * categoryIdeas.next.length)];
    }
} 