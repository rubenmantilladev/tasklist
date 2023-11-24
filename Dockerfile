# Stage 1
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod
RUN ls -alt

# Etapa de produccion
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json /app/package-lock.json ./

RUN npm install --omit=dev
CMD ["npm", "start"]
