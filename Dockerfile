# ---------- Stage 1: Build ----------
FROM node:22-alpine AS build

WORKDIR /app

# Copiar manifests e instalar dependencias
COPY package.json package-lock.json ./
RUN npm ci

# Copiar el resto del código y construir
COPY . .
RUN npm run build

# ---------- Stage 2: Serve ----------
FROM nginx:stable-alpine AS production

# Copiar el build estático a Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Configuración de Nginx para SPA (rutas client-side)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
