FROM node:18-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production --ignore-scripts

COPY . .

# 🔧 Give ownership of files to the node user
RUN chown -R node:node /usr/src/app

USER node

EXPOSE 3000

CMD ["node", "app.js"]
