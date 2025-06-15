// Инициализация секции эволюции AI с GSAP
function initializeAIEvolutionSection() {
    const evolutionSection = document.getElementById('ai-evolution-concept');
    if (!evolutionSection) return;

    // Регистрируем GSAP плагины
    gsap.registerPlugin(ScrollTrigger);

    // Инициализация переменных
    let currentStage = 0;
    const totalStages = 4;

    // Анимация заголовка с морфингом
    function initializeTitleAnimation() {
        const titleLayers = evolutionSection.querySelectorAll('.title-layer');
        
        gsap.set(titleLayers, { 
            opacity: 0, 
            y: 50, 
            rotationY: 45 
        });

        gsap.to(titleLayers, {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 1.2,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: evolutionSection,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse"
            }
        });

        // Непрерывная анимация частиц вокруг заголовка
        const titleParticles = evolutionSection.querySelector('.title-particles');
        if (titleParticles) {
            gsap.to(titleParticles, {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: "none"
            });
        }
    }

    // Анимация 3D карточек мемов
    function initializeMemeCards() {
        const memeCards = evolutionSection.querySelectorAll('.meme-card');
        
        memeCards.forEach((card, index) => {
            // Начальное состояние
            gsap.set(card, {
                opacity: 0,
                scale: 0.5,
                rotationY: 90,
                z: -200
            });

            // Анимация появления
            gsap.to(card, {
                opacity: 1,
                scale: 1,
                rotationY: 0,
                z: 0,
                duration: 1.5,
                delay: index * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    end: "top 30%",
                    toggleActions: "play none none reverse"
                }
            });

            // Интерактивность при наведении
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.1,
                    rotationY: 10,
                    z: 50,
                    duration: 0.6,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    rotationY: 0,
                    z: 0,
                    duration: 0.6,
                    ease: "power2.out"
                });
            });

            // Клик для переворота карточки
            card.addEventListener('click', () => {
                const cardInner = card.querySelector('.card-inner');
                const isFlipped = card.dataset.flipped === 'true';
                
                gsap.to(cardInner, {
                    rotationY: isFlipped ? 0 : 180,
                    duration: 0.8,
                    ease: "power2.inOut"
                });
                
                card.dataset.flipped = !isFlipped;
            });
        });
    }

    // Анимация временной шкалы
    function initializeTimeline() {
        const timelineProgress = evolutionSection.querySelector('#timelineProgress');
        const timelinePoints = evolutionSection.querySelectorAll('.timeline-point');
        
        // Анимация прогресса
        gsap.to(timelineProgress, {
            width: "100%",
            duration: 3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: evolutionSection.querySelector('.evolution-timeline'),
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        });

        // Анимация точек
        timelinePoints.forEach((point, index) => {
            gsap.set(point, { scale: 0, opacity: 0 });
            
            gsap.to(point, {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.3,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: evolutionSection.querySelector('.evolution-timeline'),
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse"
                }
            });

            // Интерактивность точек
            point.addEventListener('click', () => {
                // Убираем активный класс у всех точек
                timelinePoints.forEach(p => p.classList.remove('active'));
                // Добавляем активный класс к текущей
                point.classList.add('active');
                
                // Анимация пульса
                gsap.fromTo(point, 
                    { scale: 1 },
                    { 
                        scale: 1.3, 
                        duration: 0.3, 
                        yoyo: true, 
                        repeat: 1,
                        ease: "power2.inOut"
                    }
                );
            });
        });
    }

    // Анимация 3D кубов статистики
    function initializeStatCubes() {
        const statCubes = evolutionSection.querySelectorAll('.stat-cube');
        
        statCubes.forEach((cube, index) => {
            gsap.set(cube, {
                opacity: 0,
                scale: 0,
                rotationY: 180
            });

            gsap.to(cube, {
                opacity: 1,
                scale: 1,
                rotationY: 0,
                duration: 1.2,
                delay: index * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cube,
                    start: "top 85%",
                    end: "top 30%",
                    toggleActions: "play none none reverse"
                }
            });

            // Анимация счетчиков
            const statNumber = cube.querySelector('.stat-number');
            if (statNumber) {
                const targetValue = parseInt(statNumber.dataset.target);
                const counter = { value: 0 };
                
                gsap.to(counter, {
                    value: targetValue,
                    duration: 2,
                    ease: "power2.out",
                    onUpdate: () => {
                        statNumber.textContent = Math.round(counter.value);
                    },
                    scrollTrigger: {
                        trigger: cube,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            }

            // Интерактивность кубов
            cube.addEventListener('mouseenter', () => {
                gsap.to(cube, {
                    scale: 1.1,
                    rotationY: 180,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });

            cube.addEventListener('mouseleave', () => {
                gsap.to(cube, {
                    scale: 1,
                    rotationY: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });
        });
    }

    // Анимация кнопки эволюции
    function initializeEvolutionButton() {
        const evolutionBtn = evolutionSection.querySelector('#evolutionBtn');
        if (!evolutionBtn) return;

        // Анимация появления
        gsap.set(evolutionBtn, { 
            opacity: 0, 
            y: 50, 
            scale: 0.8 
        });

        gsap.to(evolutionBtn, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: evolutionBtn,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });

        // Интерактивность
        evolutionBtn.addEventListener('mouseenter', () => {
            gsap.to(evolutionBtn, {
                scale: 1.05,
                y: -5,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        evolutionBtn.addEventListener('mouseleave', () => {
            gsap.to(evolutionBtn, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        // Клик с эффектом
        evolutionBtn.addEventListener('click', () => {
            gsap.to(evolutionBtn, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut",
                onComplete: () => {
                    // Здесь можно добавить переход к форме регистрации
                    document.querySelector('#screen3').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }
            });
        });
    }

    // Параллакс эффекты для фона
    function initializeParallaxEffects() {
        const neuralParticles = evolutionSection.querySelector('.neural-particles');
        const dataStreams = evolutionSection.querySelector('.data-streams');
        const quantumField = evolutionSection.querySelector('.quantum-field');

        if (neuralParticles) {
            gsap.to(neuralParticles, {
                y: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: evolutionSection,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        }

        if (dataStreams) {
            gsap.to(dataStreams, {
                x: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: evolutionSection,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2
                }
            });
        }

        if (quantumField) {
            gsap.to(quantumField, {
                scale: 1.2,
                opacity: 0.8,
                ease: "none",
                scrollTrigger: {
                    trigger: evolutionSection,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5
                }
            });
        }
    }

    // Инициализация всех анимаций
    initializeTitleAnimation();
    initializeMemeCards();
    initializeTimeline();
    initializeStatCubes();
    initializeEvolutionButton();
    initializeParallaxEffects();

    // Добавляем стили для сердечек при клике на мемы
    if (!document.getElementById('heart-animation-style')) {
        const style = document.createElement('style');
        style.id = 'heart-animation-style';
        style.textContent = `
            @keyframes heart-float {
                0% { 
                    opacity: 1; 
                    transform: translate(-50%, -50%) scale(0.5); 
                }
                50% { 
                    opacity: 1; 
                    transform: translate(-50%, -80px) scale(1.2); 
                }
                100% { 
                    opacity: 0; 
                    transform: translate(-50%, -120px) scale(0.8); 
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Новая функциональность для мемов
function initializeMemeInteractions() {
    // Детекция устройства
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const hintElement = document.getElementById('interactionHint');
    
    if (hintElement) {
        const hintText = hintElement.querySelector('.hint-text');
        if (hintText) {
            hintText.textContent = isMobile ? "Нажми на карточки" : "Наведи курсор на карточки";
        }
    }

    // Автоматический переворот карточек на мобильных
    const memeCards = document.querySelectorAll('.meme-card');
    
    memeCards.forEach(card => {
        const cardInner = card.querySelector('.card-inner');
        let flipTimeout;
        
        if (isMobile) {
            // Для мобильных устройств - клик
            card.addEventListener('click', function() {
                // Очищаем предыдущий таймер
                if (flipTimeout) {
                    clearTimeout(flipTimeout);
                    card.classList.remove('flipped', 'active');
                }
                
                // Добавляем классы для анимации
                card.classList.add('flipped', 'active');
                
                // Возвращаем обратно через 3 секунды
                flipTimeout = setTimeout(() => {
                    card.classList.remove('flipped', 'active');
                }, 3000);
                
                // Добавляем эффект конфетти
                if (typeof confetti !== 'undefined') {
                    confetti({
                        particleCount: 30,
                        spread: 60,
                        origin: { 
                            x: Math.random(),
                            y: Math.random() * 0.5 + 0.3
                        },
                        colors: ['#00ff88', '#667eea', '#764ba2']
                    });
                }
            });
        } else {
            // Для десктопа - улучшенный hover
            card.addEventListener('mouseenter', function() {
                card.classList.add('active');
            });
            
            card.addEventListener('mouseleave', function() {
                card.classList.remove('active');
            });
        }
    });
}

// Улучшенная кнопка эволюции с конфетти
function enhanceEvolutionButton() {
    const evolutionBtn = document.getElementById('evolutionBtn');
    if (evolutionBtn && typeof confetti !== 'undefined') {
        evolutionBtn.addEventListener('click', function(e) {
            // Запускаем конфетти
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#00ff88', '#667eea', '#764ba2', '#f093fb']
            });
            
            // Дополнительный эффект через полсекунды
            setTimeout(() => {
                confetti({
                    particleCount: 50,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 }
                });
                confetti({
                    particleCount: 50,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 }
                });
            }, 500);
        });
    }
}

// Анимация облака-перехода
function initializeCloudTransition() {
    const cloudWrapper = document.getElementById('cloudTransition');
    const cloud = cloudWrapper.querySelector('.cloud-transition');
    const evolutionSection = document.getElementById('ai-evolution-concept');
    
    if (!cloud || !evolutionSection) return;

    // GSAP анимация облака
    const cloudTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: cloudWrapper,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                
                if (progress < 0.3) {
                    // Облако поднимается
                    cloud.style.opacity = progress * 3;
                    cloud.style.transform = `translateY(${100 - progress * 150}%)`;
                } else if (progress < 0.7) {
                    // Облако закрывает экран
                    cloud.style.opacity = 1;
                    cloud.style.transform = `translateY(-50%)`;
                } else {
                    // Облако расступается
                    const revealProgress = (progress - 0.7) / 0.3;
                    cloud.style.opacity = 1 - revealProgress * 0.7;
                    cloud.style.transform = `translateY(-${50 + revealProgress * 50}%)`;
                    
                    // Изменяем форму облака
                    const morphedClipPath = `polygon(
                        0% ${40 - revealProgress * 40}%, 
                        15% ${35 - revealProgress * 35}%, 
                        25% ${45 - revealProgress * 45}%, 
                        35% ${30 - revealProgress * 30}%, 
                        50% ${40 - revealProgress * 40}%, 
                        65% ${25 - revealProgress * 25}%, 
                        75% ${35 - revealProgress * 35}%, 
                        85% ${30 - revealProgress * 30}%, 
                        100% ${45 - revealProgress * 45}%, 
                        100% ${100 - revealProgress * 80}%, 
                        0% ${100 - revealProgress * 75}%
                    )`;
                    cloud.style.clipPath = morphedClipPath;
                }
            }
        }
    });

    // Дополнительные эффекты для частиц
    gsap.to(cloud.querySelector('.cloud-particles'), {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
    });
}

// Three.js частицы для облака (упрощенная версия)
function initializeThreeJSParticles() {
    if (typeof THREE === 'undefined') return;

    // Отключаем тяжелые эффекты на мобильных
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) return;

    const cloudWrapper = document.getElementById('cloudTransition');
    if (!cloudWrapper) return;

    // Создаем canvas для Three.js
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    cloudWrapper.appendChild(canvas);

    // Настройка Three.js сцены
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Создание частиц
    const particleCount = 200;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

        colors[i * 3] = 0;     // R
        colors[i * 3 + 1] = 1; // G
        colors[i * 3 + 2] = 0.5; // B
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.6
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 10;

    // Анимация частиц
    function animateParticles() {
        requestAnimationFrame(animateParticles);
        
        particleSystem.rotation.x += 0.001;
        particleSystem.rotation.y += 0.002;
        
        renderer.render(scene, camera);
    }

    animateParticles();

    // Обработка изменения размера окна
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
} 