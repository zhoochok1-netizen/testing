# Тестовое задание Middle Frontend Developer

Одностраничное приложение с двумя полноэкранными секциями, разработанное на Next.js 15+ с TypeScript.

## Технические требования

- ✅ Next.js 15.0.0 (app router)
- ✅ TypeScript
- ✅ PostCSS модули (без Tailwind)
- ✅ Адаптивная верстка (375px - 1920px) с использованием Flexbox
- ✅ Рабочий SSR (страница корректно рендерится с выключенным JavaScript)
- ✅ Интеграция с API

## Функциональность

### Главный экран

- Высота экрана 100vh вместе с шапкой
- Видео блок с телефоном (videoUrl из API)
- Кнопка "Смотреть видео о приложении" открывает видео на весь экран
- Адаптивная верстка для всех разрешений
- Корректные hover эффекты на кнопках и ссылках

### Секция отзывов

- Высота экрана 100vh вместе с шапкой
- Рабочий слайдер с отзывами из API (горизонтальный скролл)
- Данные загружаются из API

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start
```

Приложение будет доступно по адресу: `http://localhost:3000`

## API

Приложение использует тестовое API: https://revmo-api.netlify.app/

- `/api/main` - данные для главного экрана (заголовки, кнопки, видео, соцсети)
- `/api/navigation` - данные для навигации (меню, логотип)
- `/api/slider` - данные отзывов для слайдера

## Структура проекта

```
├── app/
│   ├── globals.css          # Глобальные стили
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Главная страница (Server Component)
│   └── page.module.css      # Стили главной страницы
├── components/
│   ├── Header.tsx           # Хедер (Server Component)
│   ├── Header.module.css
│   ├── HeroSection.tsx      # Главная секция (Server Component)
│   ├── HeroSection.module.css
│   ├── ReviewsSection.tsx   # Секция отзывов (Server Component)
│   ├── ReviewsSection.module.css
│   ├── ReviewCard.tsx       # Карточка отзыва (Client Component)
│   ├── VideoCardButton.tsx  # Кнопка видео (Client Component)
│   ├── VideoModal.tsx       # Модальное окно видео (Client Component)
│   ├── Footer.tsx           # Футер (Server Component)
│   └── Footer.module.css
├── public/
│   ├── icons/               # SVG иконки
│   ├── logo/                # Логотип
│   └── video/               # Видео файлы
├── package.json
├── tsconfig.json
├── next.config.js
└── postcss.config.js
```

## Особенности реализации

- **SSR**: Все компоненты по умолчанию Server Components, только необходимые интерактивные части (модальное окно, обработка ошибок изображений) используют Client Components
- **API**: Данные загружаются на сервере при рендеринге страницы
- **Адаптивность**: Используется CSS Flexbox и Grid для адаптивной верстки
- **PostCSS**: Используются postcss-nested и autoprefixer для удобства написания стилей
