Frontend State:
  useState   → UI only
  Zustand    → Shared UI state across components
  ReactQuery → Server State Manager in the UI layer (server state fetch & cache)

Backend State:
  Redis      → Fast cache + realtime coordination + geo + sessions
  Database   → Permanent storage (PostgreSQL + PostGIS)

API Layer:

  REST       -> for  Commands & CRUD
  WebSocket  → Realtime events
  GraphQL    → Dashboard/Analytics queries
