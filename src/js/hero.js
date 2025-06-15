// === HERO SECTION JAVASCRIPT ===

// Основатель
function initializeFounder() {
    const founderTexts = [
        "Привет! Рады видеть тебя в AI FamLab!",
        "Хватит собирать инфу, пора внедрять!",
        "Будь на шаг впереди! Вступай в наш клуб!"
    ];
    
    let currentTextIndex = 0;
    const founderTextElement = document.getElementById('founder-text');
    const founderImage = document.querySelector('.founder-image');
    
    // Анимация загрузки фото
    founderImage.addEventListener('load', () => {
        founderImage.classList.add('loaded');
    });
    
    // Если изображение уже загружено
    if (founderImage.complete) {
        founderImage.classList.add('loaded');
    }
    
    // Креативная ротация текста с пересборкой
    function animateTextTransition() {
        const currentText = founderTexts[currentTextIndex];
        const nextIndex = (currentTextIndex + 1) % founderTexts.length;
        const nextText = founderTexts[nextIndex];
        const speechBubble = founderTextElement.parentElement;
        
        // Добавляем класс для визуального эффекта
        speechBubble.classList.add('scrambling');
        
        // Этап 1: Разборка текста
        scrambleText(founderTextElement, currentText, () => {
            // Этап 2: Сборка нового текста
            currentTextIndex = nextIndex;
            assembleText(founderTextElement, nextText, () => {
                // Убираем класс после завершения анимации
                speechBubble.classList.remove('scrambling');
                // Запускаем следующую итерацию без задержки
                animateTextTransition();
            });
        });
    }
    
    // Функция разборки текста
    function scrambleText(element, originalText, callback) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        let iterations = 0;
        const maxIterations = originalText.length;
        
        const scrambleInterval = setInterval(() => {
            element.textContent = originalText
                .split('')
                .map((char, index) => {
                    if (char === ' ') return ' ';
                    if (index < iterations) {
                        return chars[Math.floor(Math.random() * chars.length)];
                    }
                    return originalText[index];
                })
                .join('');
            
            iterations++;
            
            if (iterations > maxIterations) {
                clearInterval(scrambleInterval);
                // Небольшая задержка перед переходом к сборке
                setTimeout(() => {
                    callback();
                }, 50);
            }
        }, 40);
    }
    
    // Функция сборки нового текста
    function assembleText(element, newText, callback) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        let iterations = 0;
        
        const assembleInterval = setInterval(() => {
            element.textContent = newText
                .split('')
                .map((char, index) => {
                    if (char === ' ') return ' ';
                    if (index < iterations) {
                        return newText[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');
            
            iterations++;
            
            if (iterations >= newText.length) {
                clearInterval(assembleInterval);
                // Финальная стабилизация текста
                element.textContent = newText;
                // Задержка 1.8 секунды перед вызовом callback
                setTimeout(() => {
                    if (callback) callback();
                }, 1800);
            }
        }, 35);
    }
    
    // Первый запуск через 1.8 секунды, затем автоматически по завершении анимации
    setTimeout(animateTextTransition, 1800);
}

// Счетчик статистики
function initializeStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.dataset.target);
                animateCounter(target, finalValue);
                observer.unobserve(target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

// Анимация счетчика
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, stepTime);
}

// Класс для плавающих мыслепузырей
class ThoughtBubbles {
    constructor() {
        this.container = document.getElementById('thoughtBubblesContainer');
        if (!this.container) {
            console.warn('ThoughtBubbles container not found');
            return;
        }
        
        this.bubbles = [];
        this.icons = ['💡', '🚀', '⚡', '🧠', '🎯', '💰', '📈', '🔥'];
        this.maxBubbles = 8;
        this.isLowPerformance = this.detectLowPerformance();
        
        if (!this.isLowPerformance && this.container) {
            this.init();
            this.bindEvents();
        }
    }
    
    detectLowPerformance() {
        // Простая проверка производительности
        return window.innerWidth < 768 || navigator.hardwareConcurrency < 4;
    }
    
    init() {
        this.createBubbles();
        this.animate();
    }
    
    createBubbles() {
        // Создаем начальную партию пузырей (меньше)
        for (let i = 0; i < Math.min(3, this.maxBubbles); i++) {
            setTimeout(() => {
                this.createBubble();
            }, i * 2000);
        }
    }
    
    createBubble() {
        if (!this.container || this.bubbles.length >= this.maxBubbles) return;
        
        const bubble = document.createElement('div');
        bubble.className = 'thought-bubble';
        
        // Случайный размер с весами
        const sizeWeights = [
            { class: 'size-sm', weight: 0.3 },
            { class: '', weight: 0.5 },
            { class: 'size-lg', weight: 0.2 }
        ];
        const randomWeight = Math.random();
        let cumulativeWeight = 0;
        for (const size of sizeWeights) {
            cumulativeWeight += size.weight;
            if (randomWeight <= cumulativeWeight) {
                if (size.class) bubble.classList.add(size.class);
                break;
            }
        }
        
        // Случайная позиция по X с отступами от краев
        const margin = 100;
        const startX = margin + Math.random() * (window.innerWidth - 2 * margin);
        bubble.style.left = startX + 'px';
        
        // Случайная скорость (очень медленная для ненавязчивости)
        const speed = 25 + Math.random() * 15;
        bubble.style.setProperty('--bubble-speed', speed + 's');
        
        // Случайная задержка
        bubble.style.animationDelay = Math.random() * 3 + 's';
        
        // Случайный дрейф
        const driftRange = 150;
        bubble.style.setProperty('--drift-x', (Math.random() - 0.5) * driftRange + 'px');
        
        // Случайная иконка
        bubble.textContent = this.icons[Math.floor(Math.random() * this.icons.length)];
        
        // Добавляем пузырь
        this.container.appendChild(bubble);
        this.bubbles.push(bubble);
        
        // Удаляем пузырь после анимации с запасом времени
        setTimeout(() => {
            if (bubble && bubble.parentNode) {
                bubble.parentNode.removeChild(bubble);
                this.bubbles = this.bubbles.filter(b => b !== bubble);
            }
        }, (speed + 2) * 1000);
    }
    
    animate() {
        // Более плавное создание пузырей
        const createBubbleInterval = () => {
            if (this.bubbles.length < this.maxBubbles && this.container) {
                this.createBubble();
            }
            
            // Случайный интервал для более естественного вида (реже)
            const nextInterval = 5000 + Math.random() * 8000;
            setTimeout(createBubbleInterval, nextInterval);
        };
        
        // Запускаем через небольшую задержку
        setTimeout(createBubbleInterval, 2000);
    }
    
    bindEvents() {
        let mouseX = 0, mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            this.bubbles.forEach(bubble => {
                const rect = bubble.getBoundingClientRect();
                const bubbleX = rect.left + rect.width / 2;
                const bubbleY = rect.top + rect.height / 2;
                
                const distance = Math.sqrt(
                    Math.pow(mouseX - bubbleX, 2) + Math.pow(mouseY - bubbleY, 2)
                );
                
                if (distance < 100) {
                    bubble.classList.add('repelled');
                    const angle = Math.atan2(bubbleY - mouseY, bubbleX - mouseX);
                    const repelForce = (100 - distance) * 0.5;
                    const repelX = Math.cos(angle) * repelForce;
                    const repelY = Math.sin(angle) * repelForce;
                    
                    bubble.style.transform = `translate(${repelX}px, ${repelY}px) scale(0.8)`;
                } else {
                    bubble.classList.remove('repelled');
                    bubble.style.transform = '';
                }
            });
        });
    }
}

// Инициализация плавающих пузырей
function initializeThoughtBubbles() {
    new ThoughtBubbles();
}

// Плавный скролл для CTA кнопок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Эффект параллакса для фона
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.particles-bg, .neural-bg');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Функция глобальных улучшений
function initializeGlobalEnhancements() {
    // Добавляем класс для плавных переходов
    document.body.classList.add('enhanced');
    
    // Улучшаем производительность скролла
    let ticking = false;
    function updateScrollEffects() {
        const scrollY = window.scrollY;
        const sections = document.querySelectorAll('.full-screen-section');
        
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                section.classList.add('in-viewport');
            } else {
                section.classList.remove('in-viewport');
            }
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
    
    // Первоначальная проверка
    updateScrollEffects();
} 