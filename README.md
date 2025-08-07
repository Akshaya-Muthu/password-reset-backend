# Password Reset Backend

This is the backend for a password reset application.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env` file** in the root of the project and add the following environment variables:

   ```
   PORT=5001
   MONGODB_URL="your_mongodb_connection_string"
   JWT_SECRET="your_jwt_secret"
   SENDER_EMAIL="your_sender_email"
   NODE_ENV="development"
   PASS_MAIL="your_brevo_user"
   PASS_KEY="your_brevo_password"
   ```

   **Note:** Replace the placeholder values with your actual credentials.

3. **Start the server:**
   ```bash
   npm start
   ```

The server will start on the port specified in your `.env` file (default is 5001).
