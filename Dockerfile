FROM node:17.3.0
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]