# Управление контактами

## Локальный запуск проекта

```
npm install
npm run serve
```

### Production-сборка

```
npm run build
```

## Описание проекта

Приложение позволяет управлять контактами, состоит из 3 страниц:

1. Список всех контактов
2. Создание нового контакта
3. Редактирование существующего контакта

В шапке всех страниц есть ссылка на главную страницу со списком контактов и кнопка для перехода на создание нового контакта.

## Реализация

-   Проект создан на Vue 3 (Composition API) + TypeScript.
-   При первом открытии проекта запрашиваем данные из файла public/data/contacts.json и сохраняем их в localStorage.
    Дальнейшее взаимодействие с данными (добавление / редактирование / удаление) происходит через localStorage, то есть будет сохранено в конкретном браузере и отображено даже при перезагрузке страницы.
-   Для отрисовки страниц использованы несколько компонентов: ContactList - список контактов, ContactItem - конкретный контакт, SearchBar - поле ввода для поиска контактов по имени, ContactForm - форма для создания и редактирования контактов.
-   Переход между страницами реализован с помощью Vue Router.
-   Для взаимодействия с localStorage созданы и отдельно вынесены 2 метода в файле methods.ts: getContacts - чтение актуальных контактов и setContacts - запись обновленных контактов.
