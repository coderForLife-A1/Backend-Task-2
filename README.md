In-memory storage: Messages are stored in an array (data resets if the server restarts)

Endpoints:
● POST /contact → Accepts form data {name, email, message} and stores it in memory.
● GET /contact → Returns all saved contact messages.
