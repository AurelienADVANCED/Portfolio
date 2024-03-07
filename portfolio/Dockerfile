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

# Étape de run
FROM nginx:stable-alpine as production

# Expose le port 80
EXPOSE 80

# Commande pour démarrer Nginx et servir l'application
CMD ["nginx", "-g", "daemon off;"]
