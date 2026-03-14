Frontend State:
  useState   → UI only
  Zustand    → Shared UI state across components
  ReactQuery → Server State Manager in the UI layer (server state fetch & cache)

Backend State:
 MongoDB → Permanent storage + 2dsphere geo queries (users, drivers, trips, payments)
 Redis  → Caching + realtime coordination + rate limiting + sessions

API Layer:

  REST       -> for  Commands & CRUD
  WebSocket  → Realtime events
  GraphQL    → Dashboard/Analytics queries
  

  1️⃣ REST API → Request/Response

Used when client asks for something.
Examples in your project:
Signup
Login
Create trip
Accept trip
Cancel trip
Fetch trip history
Create payment order

Example:
POST /api/trips

Client sends request → Server responds → Connection closes.
👉 Stateless communication.



2️⃣ WebSocket → Real-Time Communication
Used for live updates.

Examples:
Rider requests trip → notify nearby drivers
Driver accepts trip → notify rider instantly
Driver location updates every 3 seconds
Trip status changes

Example flow:

Driver connects via socket
Rider requests trip
Server emits "new-trip-request"
Driver sees popup immediately

👉 Persistent connection.
👉 Bidirectional.
👉 No refresh required.

This is core for ride-hailing apps.



3️⃣ Webhook → External Server → Server

Used only for payments.
Example:
User pays via Razorpay
Razorpay sends POST request to:
POST /api/payment/webhook

 server verifies signature.
Then updates Payment.status.

👉 Gateway talks to your backend.
👉 Not client-facing.
👉 Security critical.



Additional: 
//Applied dynamic Rate Limiting per module

