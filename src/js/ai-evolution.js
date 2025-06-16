/**
 * AI Evolution Block - 3D Chaos Cards Animation
 */

function initializeAIEvolution() {
    console.log('🚀 Инициализация AI Evolution');
    
    // Инициализируем карточки БЕЗ КОНФЛИКТА С CSS
    const memeCards = document.querySelectorAll('.meme-card');
    
    memeCards.forEach((card, index) => {
        // УБИРАЕМ JavaScript transform - пусть CSS сам управляет всеми эффектами
        console.log('Карточка', index + 1, 'готова к CSS анимациям');
    });
    
    console.log('✅ AI Evolution инициализирован БЕЗ конфликтов');
}

class AIEvolutionChaos {
    constructor() {
        this.cards = [];
        this.isInitialized = false;
        this.init();
    }

    init() {
        this.initCards();
        this.isInitialized = true;
        console.log('🚀 AI Evolution 3D Chaos Cards initialized БЕЗ JavaScript transform');
    }

    initCards() {
        const memeCards = document.querySelectorAll('.meme-card');
        
        memeCards.forEach((card, index) => {
            this.cards.push(card);
            
            // УБИРАЕМ ВСЕ JavaScript hover эффекты - пусть CSS управляет
            // НИКАКИХ card.style.transform!
            console.log('Карточка', index + 1, 'передана под управление CSS');
        });
    }
}

// УБИРАЕМ дополнительные CSS через JavaScript - пусть файлы CSS сами управляют
// Больше НЕТ конфликтов между JavaScript и CSS!

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (typeof window.aiEvolutionChaos === 'undefined') {
            window.aiEvolutionChaos = new AIEvolutionChaos();
        }
    }, 100);
});

// Экспорт для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        AIEvolutionChaos: AIEvolutionChaos, 
        initializeAIEvolution: initializeAIEvolution 
    };
}
