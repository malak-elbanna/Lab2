# Setup Instructions

- Create a `.env` file with the following:
    - PORT=5000
    - JWT_SECRET=secret-token
    - MONGO_URI=mongodb://localhost:27017/yourdb

- Run `npm install` to install needed packages
- Run the main file `node index.js`

# List of Features
- Authentication: User registeration and login with bycrypt pass hashing and JWTs
- Authorization: For specific roles (`regular`, `admin`, `moderator`)
- Routes:
    - /api/auth/register
    - /api/auth/login

    - /api/user/public (no auth required)
    - /api/user/protected (requires auth)
    - /api/user/admin (for admins only)
    - /api/user/moderator (for admins + moderators)

    - /api/user/profile --> Get user profile
    - /api/user/profile/update/:id --> Update user profile
    - /api/user/profile/role/:id --> Update user role (admin only)
- Rate limiting: User is only allowed 10 requests per 5 mins.

# How to test each endpoint
You can either use curl commands or Postman. For curl commands, refer to the screenshots folder to see a demo of what you should do. Additionally, here is an example to register a regular account:

```bash
curl -X POST http://localhost:5174/api/auth/register -H "Content-Type: application/json" -d '{"username": "test", "email": "test@test.com", "password": "password123"}'
```

This should return
```bash
{"message":"Done. Now login!"}
```