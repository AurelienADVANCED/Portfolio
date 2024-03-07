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

# Étape de production
FROM node:18 AS production


# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de build dans le répertoire de serveur Nginx
# Note: Next.js génère le dossier `.next` après le build. Assurez-vous de copier ce répertoire et les fichiers nécessaires pour servir l'application
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

# Expose le port 80
EXPOSE 80

# Commande pour démarrer Nginx et servir l'application
CMD ["nginx", "-g", "daemon off;"]
