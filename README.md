# 🍕 Next Pizza

<div align="center">
  <h2>
    <a href="#-english">English</a> |
    <a href="#-русский">Русский</a>
  </h2>
</div>

---

<h1 id="-english">English</h1>

A modern, full-stack pizza delivery application built with Next.js 14, featuring real-time ordering, payment processing, and administrative dashboard.

## ✨ Features

- 🛒 **Interactive Shopping Cart** - Add, remove, and customize pizza orders
- 💳 **Secure Payment Processing** - Integrated YooKassa payment gateway
- 📱 **Responsive Design** - Optimized for all devices using Tailwind CSS
- 🔐 **Authentication System** - User registration and login with NextAuth.js
- 📊 **Admin Dashboard** - Manage orders, products, and analytics
- 🎨 **Modern UI Components** - Built with Radix UI and shadcn/ui
- 📧 **Email Notifications** - Order confirmations via Resend
- 🗃️ **Database Integration** - PostgreSQL with Prisma ORM
- 🔍 **Advanced Search** - Find pizzas with filtering and sorting
- 📈 **Real-time Updates** - Live order status tracking

## 🚀 Tech Stack

### 🎨 Frontend

#### 🧩 Core Framework

- **Next.js 14** - React framework with App Router
- **React** - Library for building user interfaces
- **React DOM** - React rendering for the DOM
- **TypeScript** - Type-safe development

#### 🎭 Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **shadcn/ui** - Beautiful component library
- **class-variance-authority** - CSS class variance management
- **clsx** - Utility for conditional CSS class joining
- **Lucide React** - Modern icon library

#### 📝 Forms & Validation

- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation and data parsing

#### 🔄 State Management & Data Fetching

- **Zustand** - Lightweight state management
- **Axios** - HTTP client for API requests

#### ✨ UI/UX Enhancements

- **React Hot Toast** - Toast notifications for React
- **React Insta Stories** - Instagram-style stories component
- **NextJS TopLoader** - Page loading indicator for Next.js
- **React DaData** - DaData integration for address autocomplete

### ⚙️ Backend

#### 🏃‍♂️ Runtime & Framework

- **Node.js** - JavaScript runtime environment for server-side development
- **Next.js API Routes** - Server-side API endpoints

#### 💾 Database & ORM

- **Prisma** - Modern database toolkit and ORM
- **PostgreSQL** - Robust relational database

#### 🔒 Authentication & Security

- **NextAuth.js** - Authentication solution for Next.js
- **bcrypt** - Password hashing library for secure password storage

#### 💸 Payment & External Services

- **YooKassa** - Russian payment processing platform
- **Resend** - Modern email delivery service

### 🛠️ Development Tools

- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting and style consistency
- **TypeScript** - Static type checking across the stack
- **Prisma Studio** - Visual database management interface

## 🏗️ Project Structure

```
next-pizza/
├── app/                   # Next.js 14 App Router
│   ├── (admin-panel)/     # Admin panel pages
│   ├── (checkout)/        # Checkout flow pages
│   ├── (dashboard)/       # Dashboard pages
│   ├── (root)/            # Root pages
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── shared/                # Shared application logic
│   ├── components/        # Reusable components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── forms/         # Form components
│   │   ├── modals/        # Modal components
│   │   └── shared/        # Shared components
│   ├── constants/         # Application constants
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   │   ├── auth.ts        # Authentication config
│   │   ├── db.ts          # Database connection
│   │   ├── yookassa.ts    # YooKassa configuration
│   │   └── utils.ts       # Helper functions
│   ├── server/            # Server-side logic
│   ├── services/          # API services and external integrations
│   └── store/             # Zustand stores
├── prisma/                # Database schema and migrations
│   ├── constants/         # Database constants
│   ├── schema.prisma      # Prisma schema
│   ├── prisma.ts          # Prisma client
│   └── seed.ts            # Database seeding
├── public/                # Static assets
└── types/                 # TypeScript type definitions
```

## 🙏 Acknowledgments

- 🔄 [Next.js](https://nextjs.org/) - The React framework for production
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 💾 [Prisma](https://prisma.io/) - Next-generation ORM
- 💸 [YooKassa](https://yookassa.ru/) - Payment processing platform
- 🧩 [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- 📧 [Resend](https://resend.com/) - Modern email delivery service
- 🔄 [Zustand](https://github.com/pmndrs/zustand) - Lightweight state management
- 🔒 [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js

---

<div align="center">
  Сделано с ❤️ <a href="https://github.com/quinqueqe">quinqueqe</a>
</div>

## 📄 License

This project is licensed under a custom license that permits free personal and educational use only. Commercial use, copying, modification, and distribution are prohibited - see below for full terms.

```
📄 Custom License

Copyright (c) 2025 quinqueqe

Permission is hereby granted, free of charge, to any person to use this software
and associated documentation files (the "Software") for personal and educational
purposes only, subject to the following conditions:

✅ Permitted Uses:
- View and study the source code
- Run the software for personal use
- Use the software for educational purposes

❌ Prohibited Activities:
- Copying, reproducing, or duplicating the Software
- Modifying, altering, or creating derivative works
- Merging the Software with other software or projects
- Distributing, sharing, or transmitting to third parties
- Sublicensing or granting rights to others
- Selling, commercializing, or monetizing
- Using for commercial purposes

📋 Conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software that are permitted under this license.

⚠️ Disclaimer:
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.

📧 Contact:
For any questions regarding this license, or to request permissions beyond those
granted herein, please contact: vrsxdcrown@gmail.com
```

---

<h1 id="-русский">Русский</h1>

Современное полнофункциональное приложение для доставки пиццы создано с использованием Next.js 14, с поддержкой заказов в реальном времени, обработкой платежей и удобной административной панелью.

## ✨ Особенности

- 🛒 **Интерактивная корзина** — добавление, удаление и настройка заказов пиццы
- 💳 **Безопасная обработка платежей** — интеграция с платёжным шлюзом ЮKassa
- 📱 **Адаптивный дизайн** — оптимизация под любые устройства с помощью Tailwind CSS
- 🔐 **Система аутентификации** — регистрация и вход через NextAuth.js
- 📊 **Административная панель** — управление заказами, товарами и аналитикой
- 🎨 **Современные UI-компоненты** — на базе Radix UI и shadcn/ui
- 📧 **Email-уведомления** — подтверждения заказов через сервис Resend
- 🗃️ **Интеграция с базой данных** — PostgreSQL с ORM Prisma
- 🔍 **Расширенный поиск** — фильтрация и сортировка пицц
- 📈 **Обновления в реальном времени** — отслеживание статуса заказа онлайн

## 🚀 Технологии

### 🎨 Фронтенд

#### 🧩 Основной фреймворк

- **Next.js 14** — React-фреймворк с App Router
- **React** — библиотека для создания интерфейсов
- **React DOM** — рендеринг React в DOM
- **TypeScript** — типобезопасная разработка

#### 🎭 Стилизация и UI

- **Tailwind CSS** — CSS-фреймворк на основе утилит
- **Radix UI** — безголовые UI-компоненты
- **shadcn/ui** — красивая библиотека компонентов
- **class-variance-authority** — управление вариантами CSS-классов
- **clsx** — утилита для условного объединения классов
- **Lucide React** — современная библиотека иконок

#### 📝 Формы и валидация

- **React Hook Form** — удобная работа с формами и валидация
- **Zod** — схемная валидация и парсинг данных

#### 🔄 Управление состоянием и получение данных

- **Zustand** — легковесное управление состоянием
- **Axios** — HTTP-клиент для API-запросов

#### ✨ Улучшения UI/UX

- **React Hot Toast** — уведомления в стиле Toast
- **React Insta Stories** — компонент историй, как в Instagram
- **NextJS TopLoader** — индикатор загрузки страниц
- **React DaData** — интеграция с DaData для автозаполнения адресов

### ⚙️ Бэкенд

#### 🏃‍♂️ Среда выполнения и фреймворк

- **Node.js** — среда выполнения JavaScript на сервере
- **Next.js API Routes** — серверные API-эндпоинты

#### 💾 База данных и ORM

- **Prisma** — современный ORM и инструментарий для работы с БД
- **PostgreSQL** — надежная реляционная база данных

#### 🔒 Аутентификация и безопасность

- **NextAuth.js** — решение для аутентификации в Next.js
- **bcrypt** — безопасное хеширование паролей

#### 💸 Платежи и внешние сервисы

- **ЮKassa** — российская платформа для обработки платежей
- **Resend** — современный сервис для отправки email

### 🛠️ Инструменты разработки

- **ESLint** — проверка кода и поддержание качества
- **Prettier** — автоматическое форматирование кода
- **TypeScript** — статическая типизация по всему стеку
- **Prisma Studio** — визуальный интерфейс для работы с базой данных

## 🏗️ Структура проекта

```
next-pizza/
├── app/                   # Next.js 14 App Router
│   ├── (admin-panel)/     # Страницы административной панели
│   ├── (checkout)/        # Страницы оформления заказа
│   ├── (dashboard)/       # Страницы дашборда
│   ├── (root)/            # Корневые страницы
│   ├── api/               # API-маршруты
│   ├── globals.css        # Глобальные стили
│   └── layout.tsx         # Корневой шаблон
├── shared/                # Общая логика приложения
│   ├── components/        # Повторно используемые компоненты
│   │   ├── ui/            # Компоненты shadcn/ui
│   │   ├── forms/         # Компоненты форм
│   │   ├── modals/        # Модальные окна
│   │   └── shared/        # Общие компоненты
│   ├── constants/         # Константы приложения
│   ├── hooks/             # Кастомные React хуки
│   ├── lib/               # Вспомогательные функции
│   │   ├── auth.ts        # Конфигурация аутентификации
│   │   ├── db.ts          # Подключение к базе данных
│   │   ├── yookassa.ts    # Конфигурация ЮKassa
│   │   └── utils.ts       # Утилиты
│   ├── server/            # Серверная логика
│   ├── services/          # API-сервисы и интеграции
│   └── store/             # Zustand хранилища
├── prisma/                # Схема базы данных и миграции
│   ├── constants/         # Константы базы данных
│   ├── schema.prisma      # Схема Prisma
│   ├── prisma.ts          # Prisma клиент
│   └── seed.ts            # Скрипт заполнения базы данных
├── public/                # Статические файлы
└── types/                 # Определения типов TypeScript
```

## 🙏 Благодарности

- 🔄 [Next.js](https://nextjs.org/) - React фреймворк для продакшена
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - CSS фреймворк, основанный на утилитах
- 💾 [Prisma](https://prisma.io/) - ORM нового поколения
- 💸 [YooKassa](https://yookassa.ru/) - Платформа обработки платежей
- 🧩 [shadcn/ui](https://ui.shadcn.com/) - Красивая библиотека компонентов
- 📧 [Resend](https://resend.com/) - Современный сервис доставки электронной почты
- 🔄 [Zustand](https://github.com/pmndrs/zustand) - Легковесное управление состоянием
- 🔒 [NextAuth.js](https://next-auth.js.org/) - Аутентификация для Next.js 

---

<div align="center">
  Сделано с ❤️ <a href="https://github.com/quinqueqe">quinqueqe</a>
</div>

## 📄 Лицензия

Этот проект лицензирован под пользовательской лицензией, которая разрешает только бесплатное личное и образовательное использование. Коммерческое использование, копирование, изменение и распространение запрещены - полные условия смотри ниже.

```
📄 Пользовательская лицензия

Авторские права (c) 2025 quinqueqe

Настоящим бесплатно предоставляется разрешение любому лицу на использование данного
программного обеспечения и связанных с ним файлов документации ("Программное обеспечение")
исключительно в личных и образовательных целях при соблюдении следующих условий:

✅ Разрешенные виды использования:
- Просмотр и изучение исходного кода
- Запуск программного обеспечения для личного использования
- Использование программного обеспечения в образовательных целях

❌ Запрещенные действия:
- Копирование, воспроизведение или дублирование Программного обеспечения
- Изменение, модификация или создание производных работ
- Объединение Программного обеспечения с другими проектами
- Распространение, передача или предоставление третьим лицам
- Сублицензирование или предоставление прав другим лицам
- Продажа, коммерциализация или монетизация
- Использование в коммерческих целях

📋 Условия:
Указанное выше уведомление об авторских правах и данное уведомление о разрешении
должны быть включены во все копии или существенные части Программного обеспечения,
которые разрешены в рамках данной лицензии.

⚠️ Отказ от ответственности:
ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ "КАК ЕСТЬ", БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ,
ЯВНЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ ГАРАНТИЯМИ ТОВАРНОЙ
ПРИГОДНОСТИ, СООТВЕТСТВИЯ ОПРЕДЕЛЕННОЙ ЦЕЛИ И НЕНАРУШЕНИЯ ПРАВ.

📧 Контакты:
По любым вопросам, касающимся данной лицензии, или для запроса разрешений
сверх тех, что предоставлены в настоящем документе, обращайтесь по адресу:
vrsxdcrown@gmail.com
```
