<p align="center">
  <img src="./src/assets/img/argentBankLogo.png" alt="Argent Bank Logo" width="200">
</p>

# Argent Bank — Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Ce répertoire contient la partie client de l'application Argent Bank. Il s'agit d'une Single Page Application (SPA) construite avec React et gérée au niveau de l'état par Redux Toolkit.

## 🚀 Installation et Démarrage

1. **Installation des dépendances** :
   ```bash
   npm install
   ```

2. **Lancement du serveur de développement** :
   ```bash
   npm run dev
   ```

3. **Build de production** :
   ```bash
   npm run build
   ```

## 🛠️ Stack Technique
- **Framework** : [React](https://reactjs.org/)
- **Gestion de l'état** : [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routage** : [React Router](https://reactrouter.com/)
- **Tooling** : [Vite](https://vitejs.dev/)
- **Styles** : CSS3 (Animations et transitions fluides)

## 📁 Organisation du Code
- `src/assets` : Contient les images et les styles globaux.
- `src/components` : Composants UI isolés et réutilisables.
- `src/features` : Logique Redux (slices, sélecteurs) organisée par fonctionnalité.
- `src/pages` : Pages principales de l'application incluant la logique de vue.
- `src/services` : Abstraction des appels API (Fetch).
- `src/store.js` : Configuration centrale du store Redux.

## ⚙️ Scripts Disponibles
- `npm run dev` : Lance l'application en mode développement avec HMR.
- `npm run build` : Génère les fichiers optimisés pour la mise en production.
- `npm run lint` : Vérifie la qualité du code avec ESLint.
- `npm run preview` : Prévisualise le build de production localement.
