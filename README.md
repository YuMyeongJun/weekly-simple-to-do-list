# weekly-simple-todo-list

## Node Version
``` bash
node >= v18
nvm install 20.11.0
nvm use 20.11.0
```

## 설치

1. yarn 설치

   https://yarnpkg.com/

2. OS X & Linux & Windows Shell Emulator:

```sh
# 모듈설치
$ yarn install
```

## 개발 셋팅

```sh
# 개발 모드 실행
yarn dev

# 빌드
yarn build
```

## 프로젝트 구성

```js
.
src
├─ assets
│  ├─ icons
│  │  └─ ic_close.svg
│  └─ react.svg
├─ components
│  ├─ ...
│  └─ pages
│      └─ [페이지명]
│          └─ [페이지명]Component.tsx
│          └─ [페이지명][컴포넌트명].tsx
├─ hooks
│  ├─ client
│  │  ├─ [name]Query.ts
│  │  └─ [name]Client.ts
│  ├─ providers
│  │  └─ [name]Provider.ts
│  └─ use[name].ts
├─ models
│  ├─ interface
│  │  ├─ req
│  │     └─ I[리퀘스트명]req.ts
│  │  ├─ res
│  │     └─ I[리스폰스명]res.ts
│  │  └─ dto
│  │     └─ I[dto명]Dto.ts
│  ├─ types
│  │  └─ [타입명]Type.ts
├─ modules
├─ pages
│  ├─ [페이지명]Page.tsx
├─ routers
├─ store
├─ styles
├─ translations
├─ main.tsx
└─ styles.scss
```

## 패키지 버전 정보

```json
{
  "name": "weekly-simple-todo-list",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "packageManager": "yarn@4.1.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint ./src --fix",
    "preview": "vite preview"
  },
  "dependencies": {
    "@faker-js/faker": "^8.4.1",
    "@hookform/resolvers": "^3.3.4",
    "@tanstack/react-query": "^5.22.2",
    "axios": "^1.6.8",
    "classnames": "^2.5.1",
    "dayjs": "^1.11.10",
    "echarts": "^5.4.3",
    "echarts-for-react": "^3.0.2",
    "faker": "5.5.3",
    "postcss-nesting": "^12.1.1",
    "postcss-simple-vars": "^7.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.50.1",
    "react-loading": "^2.0.3",
    "react-router": "^6.22.0",
    "react-router-dom": "^6.22.0",
    "yup": "^1.4.0",
    "zustand": "^4.5.2"
  },
  "devDependencies": {
    "@types/faker": "5.5.9",
    "@types/react": "^18.2.55",
    "@types/react-dom": "^18.2.19",
    "@typescript-eslint/eslint-plugin": "^6.21.0",
    "@typescript-eslint/parser": "^6.21.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "eslint": "^8.56.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.35",
    "postcss-import": "^16.0.0",
    "prettier": "^3.2.5",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.2.2",
    "vite": "^5.1.0",
    "vite-plugin-svgr": "^4.2.0",
    "vite-tsconfig-paths": "^4.3.1"
  }
}
```
