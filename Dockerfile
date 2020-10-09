FROM node:12.16.1

WORKDIR /app/frontend

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy Code
COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["yarn", "start"]