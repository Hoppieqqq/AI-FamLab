/**
 * Demo Generator JavaScript
 */

function initializeDemoGenerator() {
    console.log('🚀 Инициализация Demo Generator');
    
    const categorySelect = document.getElementById('category-select');
    const generateBtn = document.getElementById('generate-btn');
    const processing = document.getElementById('processing');
    const results = document.getElementById('results');
    
    if (!categorySelect || !generateBtn) {
        console.warn('Demo Generator элементы не найдены');
        return;
    }
    
    // Активируем кнопку при выборе категории
    categorySelect.addEventListener('change', function() {
        generateBtn.disabled = !this.value;
    });
    
    // Обработка генерации
    generateBtn.addEventListener('click', function() {
        if (categorySelect.value) {
            generateIdeas(categorySelect.value);
        }
    });
    
    console.log('✅ Demo Generator инициализирован');
}

function generateIdeas(category) {
    const processing = document.getElementById('processing');
    const results = document.getElementById('results');
    
    if (processing) processing.style.display = 'block';
    if (results) results.style.display = 'none';
    
    // Симуляция генерации
    setTimeout(() => {
        if (processing) processing.style.display = 'none';
        if (results) results.style.display = 'block';
        
        // Обновляем содержимое в зависимости от категории
        updateIdeaContent(category);
    }, 2000);
}

function updateIdeaContent(category) {
    const ideaStart = document.getElementById('idea-start');
    const ideaTools = document.getElementById('idea-tools'); 
    const ideaNext = document.getElementById('idea-next');
    
    const ideas = {
        automation: {
            start: 'Автоматизируй email-рассылки с помощью AI',
            tools: 'MailChimp + GPT для персонализации',
            next: 'Изучи автоматизацию соцсетей в FamLab'
        },
        content: {
            start: 'Создавай контент-планы с AI-помощником',
            tools: 'ChatGPT + Notion для организации',
            next: 'Освой копирайтинг с AI в FamLab'
        },
        analysis: {
            start: 'Анализируй данные клиентов с AI',
            tools: 'Google Sheets + AI-плагины',
            next: 'Изучи продвинутую аналитику в FamLab'
        },
        coding: {
            start: 'Используй AI для написания кода',
            tools: 'GitHub Copilot + ChatGPT',
            next: 'Освой промпты для программирования в FamLab'
        },
        business: {
            start: 'Автоматизируй бизнес-процессы с AI',
            tools: 'Zapier + AI боты',
            next: 'Изучи AI-стратегии для бизнеса в FamLab'
        },
        learning: {
            start: 'Создай персонального AI-наставника',
            tools: 'Custom GPT + учебные материалы',
            next: 'Построй систему обучения с AI в FamLab'
        }
    };
    
    const selectedIdeas = ideas[category] || ideas.automation;
    
    if (ideaStart) ideaStart.textContent = selectedIdeas.start;
    if (ideaTools) ideaTools.textContent = selectedIdeas.tools;
    if (ideaNext) ideaNext.textContent = selectedIdeas.next;
}

// Экспорт функции
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeDemoGenerator };
}

// Инициализация анимации заголовка секции
function initializeDemoSectionTitle() {
    const titleParts = document.querySelectorAll('#screen2 .title-part');
    
    titleParts.forEach((part, index) => {
        setTimeout(() => {
            part.style.opacity = '1';
            part.style.transform = 'translateY(0)';
            part.style.transition = 'all 0.8s ease-out';
        }, index * 200);
    });
}

// Инициализация анимации pipeline шагов
function initializePipelineAnimation() {
    const pipelineSteps = document.querySelectorAll('.pipeline-step');
    const pipelineArrows = document.querySelectorAll('.pipeline-arrow');
    
    // Intersection Observer для анимации при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const step = entry.target;
                const stepIndex = Array.from(pipelineSteps).indexOf(step);
                
                setTimeout(() => {
                    step.classList.add('visible');
                    
                    // Анимируем стрелку после шага
                    if (pipelineArrows[stepIndex]) {
                        setTimeout(() => {
                            pipelineArrows[stepIndex].style.opacity = '1';
                        }, 400);
                    }
                }, stepIndex * 300);
            }
        });
    }, { threshold: 0.3 });
    
    pipelineSteps.forEach(step => observer.observe(step));
}

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