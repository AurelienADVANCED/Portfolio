# Étape de build
FROM node:18 as build

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie le fichier package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances du projet
RUN npm install

# Copie le reste des fichiers du projet
COPY . .

# Construit l'application pour la production
RUN npm run dev

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expose le port 80
EXPOSE 80

# Commande pour démarrer Nginx et servir l'application
CMD ["nginx", "-g", "daemon off;"]
