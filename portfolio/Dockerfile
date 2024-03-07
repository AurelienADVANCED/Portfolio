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
FROM nginx:stable-alpine as production

# Copie les fichiers de build dans le répertoire de serveur Nginx
# Note: Next.js génère le dossier `.next` après le build. Assurez-vous de copier ce répertoire et les fichiers nécessaires pour servir l'application
COPY --from=build /app/public /usr/share/nginx/html
COPY --from=build /app/.next /usr/share/nginx/html/.next
COPY --from=build /app/src /usr/share/nginx/html/src

# Expose le port 80
EXPOSE 80

# Commande pour démarrer Nginx et servir l'application
CMD ["nginx", "-g", "daemon off;"]
