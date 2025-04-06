# Etapa 1: Construcción de dependencias
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --production

# Etapa 2: Construcción de la aplicación
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Etapa 3: Imagen final para producción
FROM node:22-alpine AS runner
WORKDIR /app

# Crear y usar un usuario no root por seguridad
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
USER nextjs

# Copiar archivos necesarios desde la etapa de construcción
COPY --from=builder --chown=nextjs:nextjs /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next ./.next
COPY --from=builder --chown=nextjs:nextjs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nextjs /app/package.json ./package.json

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["npm", "start"]
