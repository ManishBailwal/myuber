bakend folder structure
backend/
 ├── src/
 │     ├── api/
 │     │     ├── auth.routes.js
 │     │     ├── trip.routes.js
 │     │     └── payment.routes.js
 │     ├── graphql/
 │     │     ├── schema.js
 │     │     └── resolvers.js
 │     ├── ws/
 │     │     └── socket.js
 │     ├── services/
 │     ├── models/
 │     ├── middlewares/
 │     ├── utils/
 │     └── index.js
 ├── package.json
 └── README.md

 //api folder is playing role of routers folder


One HTTP server → multiple communication interfaces.
┌──────────────────────────┐
│   httpServer (port 4000) │  -> node server
│                          │
│  ┌────────────────────┐  │
│  │   Express (REST)   │  │  → /api/trips
│  └────────────────────┘  │
│                          │
│  ┌────────────────────┐  │
│  │  Apollo (GraphQL)  │  │  → /graphql
│  └────────────────────┘  │
│                          │
│  ┌────────────────────┐  │
│  │ WebSocket (WS/SIO) │  │  → ws://... real time/events
│  └────────────────────┘  │
└──────────────────────────┘


backend flow ->

REST API
        Client
          ↓
     ROUTER (match)
          ↓
  MIDDLEWARE (auth, validation)
          ↓
  CONTROLLER (parse/response)
          ↓
    SERVICE (business logic)
          ↓
     MODEL (data mapping)
          ↓
        DB (storage)


GraphQL cuts through:
Client → GraphQL → Resolver → Service → Model → DB


WebSocket uses:
Client → Socket → Service → Emit → Client     



login api workflow -> 
Client
  ↓
Authorization: Bearer TOKEN
  ↓
authenticate middleware
  ↓
authorize middleware
  ↓
controller
  ↓
service
  ↓
database