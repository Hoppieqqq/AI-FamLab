/**
 * ОБЛАЧНЫЙ ПЕРЕХОД - Упрощенный и элегантный модуль
 * Создает плавный переход "сквозь облака" между Hero и AI Evolution секциями
 */

class CloudPassage {
    constructor() {
        this.container = null;
        this.progressIndicator = null;
        this.currentState = 'idle';
        this.init();
    }
    
    async init() {
        try {
            console.log('🌤️ Инициализация элегантного облачного перехода...');
            
            await this.initDOM();
            await this.initGSAP();
            this.initScrollTrigger();
            
            console.log('✅ Облачный переход готов');
            
        } catch (error) {
            console.error('❌ Ошибка инициализации облачного перехода:', error);
            this.initFallback();
        }
    }
    
    async initDOM() {
        this.container = document.getElementById('cloud-transition');
        if (!this.container) {
            throw new Error('Контейнер облачного перехода не найден');
        }
        
        this.progressIndicator = this.container.querySelector('.progress-indicator');
        
        // Добавляем класс active для начальной анимации
        setTimeout(() => {
            this.container.classList.add('active');
        }, 100);
        
        console.log('🔍 DOM элементы облачного перехода найдены');
    }
    
    async initGSAP() {
        if (typeof gsap === 'undefined') {
            throw new Error('GSAP не загружен');
        }
        
        if (typeof ScrollTrigger === 'undefined') {
            throw new Error('ScrollTrigger не загружен');
        }
        
        gsap.registerPlugin(ScrollTrigger);
        console.log('🎬 GSAP инициализирован для облачного перехода');
    }
    
    initScrollTrigger() {
        const cloudMasses = this.container.querySelectorAll('.cloud-mass');
        const mistLayers = this.container.querySelectorAll('.mist-layer');
        
        // Основной ScrollTrigger для всего перехода
        ScrollTrigger.create({
            trigger: this.container,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            
            onUpdate: (self) => {
                const progress = self.progress;
                this.updateTransitionState(progress);
                this.updateProgressIndicator(progress);
            },
            
            onEnter: () => {
                console.log('🌤️ Вход в облачный переход');
            },
            
            onLeave: () => {
                console.log('🌤️ Выход из облачного перехода');
            }
        });
        
        // Анимация облачных масс при скролле
        gsap.to(cloudMasses, {
            opacity: 1,
            scale: 1.1,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: this.container,
                start: "top 60%",
                end: "bottom 40%",
                scrub: 1
            }
        });
        
        // Анимация туманных слоев
        gsap.to(mistLayers, {
            opacity: 0.8,
            duration: 1.5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: this.container,
                start: "top 70%",
                end: "center center",
                scrub: 1
            }
        });
        
        console.log('📜 ScrollTrigger настроен для облачного перехода');
    }
    
    /**
     * Обновление состояния перехода на основе прогресса скролла
     */
    updateTransitionState(progress) {
        let newState = 'idle';
        
        if (progress < 0.25) {
            newState = 'entering';
        } else if (progress < 0.75) {
            newState = 'immersed';
        } else {
            newState = 'exiting';
        }
        
        if (this.currentState !== newState) {
            // Удаляем предыдущие классы состояния
            this.container.classList.remove('entering', 'immersed', 'exiting');
            
            // Добавляем новый класс состояния
            if (newState !== 'idle') {
                this.container.classList.add(newState);
            }
            
            this.currentState = newState;
            console.log(`🔄 Состояние облачного перехода: ${newState}`);
        }
    }
    
    /**
     * Обновление индикатора прогресса
     */
    updateProgressIndicator(progress) {
        if (this.progressIndicator) {
            const width = Math.max(0, Math.min(100, progress * 100));
            this.progressIndicator.style.width = `${width}%`;
        }
    }
    
    /**
     * Fallback режим при ошибках
     */
    initFallback() {
        console.log('🔧 Активация fallback режима для облачного перехода');
        
        if (this.container) {
            this.container.classList.add('active');
            
            // Простая CSS анимация без JavaScript
            this.container.style.transition = 'all 2s ease-out';
            this.container.style.opacity = '1';
        }
    }
}

// Глобальная переменная для экземпляра
let cloudPassageInstance = null;

/**
 * Инициализация облачного перехода
 */
function initCloudTransition() {
    if (cloudPassageInstance) {
        return; // Уже инициализирован
    }
    
    cloudPassageInstance = new CloudPassage();
}

// Автоматическая инициализация при загрузке DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCloudTransition);
} else {
    initCloudTransition();
}
