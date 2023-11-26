# Stage 1
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@16
COPY . .
RUN npm run build:prod
RUN ls -alt

# Etapa de produccion
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json /app/package-lock.json ./

RUN npm install --omit=dev
# CMD ["npm", "run", "start:prod"]

RUN npm install -g http-server

# Ejecutar el servidor http en el puerto 4200
CMD ["http-server", "dist/task-list", "-p", "4200"]
