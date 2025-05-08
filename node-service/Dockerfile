# 1. Use official Node.js image
FROM node:18

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy rest of the code
COPY . .

# 5. Expose app port
EXPOSE 3000

# 6. Command to run the app
CMD ["node", "app.js"]
