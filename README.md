  

## Настройка
Установить все зависимости (использую yarn):
  

```bash
yarn install
```

## Тестовый сервер

Старт тестового сервера на `http://localhost:3000`

```bash
yarn dev
```

## Production

Сборка для релиза:

```bash
yarn build
```

Старт с pm2

установка

```bash
yarn global add pm2
```

запуск

```
yarn pm2start
```

остановка

```
yarn pm2stop
```

Locally preview production build:

```bash
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.