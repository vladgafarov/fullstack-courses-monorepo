# Full-stack web-application

Учебный проект с фронтендом на React/Next.js и бэкендом на Node/Nest.js на тематику курсов.

## Frontend

**Стек:** React - Next.js, redux-toolkit, tailwindCSS, chakra-ui, typescript

**Особенности:**

-  Авторизация через jwt
-  Возможности пользователя:
   -  вход - выход - регистрация
   -  сброс пароля и смена пароля
   -  запись на курсы, отписка от них
   -  возможность оставить отзыв на записанный курс
   -  редактирование и удаление своих отзывов
   -  личный кабинет с информацией о пользователе, его курсов и отзывов
- Админка с просмотром и редактированием курсов, отзывов, пользователей, а также созданием самих курсов
-  Автоматическая генерация graphql в typescript через graphql-codegen
-  Пагинация, фильтры, поиск курсов
- Тесты на jest, cypress

**Планы на будущее:**

-  Написать фронт на react-router/react-query без Next.js
-  Написать фронт на SvelteKit

![Страница курсов](/courses.png 'Страница курсов')
![Профиль](/profile.png 'Профиль')
![Курс](/course-page.png 'Страница курса')
![Редактирование отзыва](/edit-review.png 'Редактирование отзыва')
![Поиск](/search.png 'Поиск')

## Backend

**Стек:** Nest.js, Prisma, postgreSQL, typescript

**Особенности:**

-  GraphQL API
-  Prisma как ORM для работы с БД
-  CRUD для курсов, отзывов, пользователей
-  Загрузка изображений курсов на Cloudinary
-  Отправка писем для подтверждения регистрации и сброса пароля
-  Шифрование паролей и токенов с помощью argon2
-  Разделение пользователей на три роли: USER, ADMIN, TESTER

**Планы на будущее:**

-  Доработать возможности администратора
-  Покрыть тестами с jest

Модель пользователей в Prisma Studio
![Prisma Studio](/prisma.png 'Prisma Studio')
Модель курсов
![Prisma Studio](/prisma-course.png 'Prisma Studio')
Модель отзывов
![Prisma Studio](/prisma-review.png 'Prisma Studio')