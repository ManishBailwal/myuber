folder structure
src/
 ├── app/
 │     ├── router.jsx
 │     ├── routes.js
 │     └── providers.jsx
 ├── features/
 │     ├── auth/
 │     ├── rider/
 │     ├── driver/
 │     ├── trip/
 │     ├── maps/
 │     ├── payments/
 │     └── notifications/
 ├── components/
 ├── hooks/
 ├── api/
 ├── services/
 ├── store/
 ├── utils/
 ├── layouts/
 ├── assets/
 ├── lib/
 ├── styles/
 └── main.jsx


frontend is completely in react js

Frontend State:
  useState   → UI only
  Zustand    → Shared UI state across components
  ReactQuery → Server State Manager in the UI layer (server state fetch & cache)


API Calling -> 
REST       -> for  Commands & CRUD
WebSocket  → Realtime events
GraphQL    → Dashboard/Analytics queries

Folders Explanation:-> 

| Layer       | Responsibility                        |
| ----------- | ------------------------------------- |
| app/        | Start the app, set providers, routing |
| features/   | Business domains                      |
| components/ | Reusable UI pieces                    |
| hooks/      | Reusable logic                        |
| api/        | How to talk to server                 |
| services/   | What business operations do           |
| store/      | Client-side state (Zustand)           |
| utils/      | Pure helper functions                 |
| layouts/    | Page shell/structure                  |
| assets/     | Static files                          |
| lib/        | Third-party adapters                  |
| styles/     | Global styling                        |
| main.jsx    | Entry point                           |
