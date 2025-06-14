# StyleGuide AI FamLab

## 🎨 Дизайн-система проекта AI FamLab

### Концепция
Современный, чистый "тех-минимализм". Темная цветовая палитра, акцент на микро-анимациях, плавной интерактивности и качественной типографике.

---

## 🌈 Цветовая палитра

### CSS Variables (точно по ТЗ)
```css
:root {
  /* Фоновые цвета */
  --main-bg: #0D0D0F;                    /* Основной фон */
  --card-bg: rgba(26, 26, 31, 0.8);      /* Фон карточек */
  
  /* Акцентные цвета */
  --accent-color: #00FF88;               /* Яркий зеленый для акцентов */
  --accent-hover: #00DD77;               /* Для hover эффектов */
  
  /* Текстовые цвета */
  --main-text: #EAEAEA;                  /* Основной текст */
  --secondary-text: #A0A0A0;             /* Второстепенный текст */
  
  /* Границы и разделители */
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Назначение цветов
- **#0D0D0F** - Основной фон страницы
- **rgba(26, 26, 31, 0.8)** - Карточки с эффектом `backdrop-filter: blur(10px)`
- **#00FF88** - CTA кнопки, акценты, highlights
- **#EAEAEA** - Заголовки, основной текст
- **#A0A0A0** - Подзаголовки, описания, метки

---

## 📝 Типографика

### Шрифт: Inter
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

:root {
  --main-font: 'Inter', sans-serif;
}
```

### Иерархия шрифтов
```css
/* H1 - Главные заголовки */
.hero-title {
  font-family: var(--main-font);
  font-weight: 900;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  color: var(--main-text);
}

/* H2 - Заголовки секций */
.section-title {
  font-family: var(--main-font);
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  color: var(--main-text);
}

/* H3 - Подзаголовки */
.subsection-title {
  font-family: var(--main-font);
  font-weight: 600;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  line-height: 1.3;
  color: var(--main-text);
}

/* Основной текст */
.body-text {
  font-family: var(--main-font);
  font-weight: 400;
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.6;
  color: var(--secondary-text);
}

/* Акцентный текст */
.accent-text {
  color: var(--accent-color);
  font-weight: 600;
}

/* Светящийся текст */
.glow-text {
  color: var(--accent-color);
  text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
}
```

---

## 🎬 Анимации и эффекты (GSAP)

### Базовые анимации
```css
/* Появление элементов */
.fade-in-up {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Свечение кнопок */
.cta-button {
  position: relative;
  background: var(--accent-color);
  box-shadow: 0 0 30px rgba(0, 255, 136, 0.3);
  transition: all 0.3s ease;
}

.cta-button:hover {
  box-shadow: 0 0 50px rgba(0, 255, 136, 0.5);
  transform: translateY(-2px);
}

/* Пульсация */
@keyframes pulse {
  0% { box-shadow: 0 0 30px rgba(0, 255, 136, 0.3); }
  50% { box-shadow: 0 0 50px rgba(0, 255, 136, 0.6); }
  100% { box-shadow: 0 0 30px rgba(0, 255, 136, 0.3); }
}

.pulse-animation {
  animation: pulse 2s infinite;
}
```

### GSAP анимации заголовков
```javascript
// Анимация появления слов в заголовке
function animateHeroTitle() {
  const words = document.querySelectorAll('.hero-title .word');
  
  gsap.fromTo(words, 
    { y: 50, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8,
      stagger: 0.15,
      ease: "cubic-bezier(0.25, 1, 0.5, 1)"
    }
  );
}
```

---

## 🎭 Компоненты

### Карточки
```css
.feature-card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

### Кнопки
```css
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--accent-color) 0%, #00DD77 100%);
  color: #000;
  font-weight: 700;
  font-size: 1.125rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.cta-button:hover::before {
  left: 100%;
}
```

### Иконки
```css
.feature-icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-color);
  border-radius: 12px;
  color: #000;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
```

---

## 📱 Адаптивность

### Breakpoints
```css
/* Мобильные устройства */
@media (max-width: 767px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
}

/* Планшеты */
@media (min-width: 768px) and (max-width: 1199px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

/* Десктоп */
@media (min-width: 1200px) {
  .hero-title {
    font-size: 4rem;
  }
}
```

### Адаптивная типографика с clamp()
```css
.responsive-text {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}
```

---

## 🌟 Специальные эффекты

### Частицы на фоне
```css
.particles-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, rgba(0, 255, 136, 0.3), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(102, 126, 234, 0.3), transparent);
  background-repeat: repeat;
  background-size: 150px 100px;
  animation: particles-float 20s linear infinite;
}

@keyframes particles-float {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-150px, -100px); }
}
```

### Размытие карточек
```css
.blurred-card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
```

### Градиенты
```css
.accent-gradient {
  background: linear-gradient(135deg, #00FF88 0%, #00DD77 100%);
}

.text-gradient {
  background: linear-gradient(135deg, var(--accent-color), var(--main-text));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 🎯 Интерактивные состояния

### Hover эффекты
```css
.interactive-element {
  transition: all 0.3s ease;
}

.interactive-element:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 255, 136, 0.2);
}

.interactive-element:active {
  transform: translateY(-1px);
}
```

### Focus состояния
```css
.focusable:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}
```

---

## 🔧 Утилитарные классы

```css
/* Позиционирование */
.flex-center { display: flex; align-items: center; justify-content: center; }
.flex-between { display: flex; align-items: center; justify-content: space-between; }
.text-center { text-align: center; }

/* Отступы */
.mt-1 { margin-top: 0.5rem; }
.mt-2 { margin-top: 1rem; }
.mt-3 { margin-top: 1.5rem; }
.mb-1 { margin-bottom: 0.5rem; }
.mb-2 { margin-bottom: 1rem; }
.mb-3 { margin-bottom: 1.5rem; }

/* Видимость */
.hidden { display: none; }
.visible { display: block; }
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }

/* Границы */
.border-accent { border: 1px solid var(--accent-color); }
.border-subtle { border: 1px solid var(--border-color); }
```

---

## 📋 Чек-лист соответствия ТЗ

### ✅ Обязательные требования:
- [x] **Цвета**: Точное соответствие палитре из ТЗ
- [x] **Шрифт**: Inter (400, 600, 700, 900)
- [x] **Анимации**: GSAP + Intersection Observer
- [x] **Эффекты**: backdrop-filter: blur(10px)
- [x] **Адаптивность**: Mobile-first подход
- [x] **Интерактивность**: Hover, focus состояния

### 🎨 Стилистические принципы:
- **Минимализм**: Избегать лишних элементов
- **Контраст**: Четкое разделение фона и контента
- **Консистентность**: Единообразие компонентов
- **Производительность**: Оптимизированные анимации 