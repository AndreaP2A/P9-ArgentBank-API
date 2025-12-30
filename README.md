<p align="center">
  <img src="./Frontend/src/assets/img/argentBankLogo.png" alt="Argent Bank Logo" width="300">
</p>

# Argent Bank — Système d'Authentification Bancaire
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23C1E1C5?style=for-the-badge&logo=swagger&logoColor=black)

Argent Bank est une application web moderne de gestion bancaire permettant aux utilisateurs de s'authentifier de manière sécurisée et de gérer leur profil. Le projet se concentre sur l'implémentation de solutions de gestion d'état globales et l'intégration fluide de services API REST.

## 📌 Présentation du Projet
Argent Bank est une banque en ligne en plein essor qui souhaitait refondre son application web pour y intégrer un système d'authentification robuste. L'objectif de ce projet était de construire une interface utilisateur réactive en utilisant React, tout en assurant une communication efficace avec un backend Node/MongoDB prédéfini. La gestion complexe de l'état (authentification, profil utilisateur) a été centralisée via Redux pour garantir une expérience fluide et cohérente.

## 🎯 Objectifs techniques
- **Gestion d'état avec Redux Toolkit** : Mise en place de Slices et de Thunks pour gérer les appels asynchrones et l'état global de l'utilisateur.
- **Authentification & Sécurité** : Utilisation de tokens JWT pour sécuriser les sessions et protéger les accès aux données privées.
- **Développement avec Vite** : Exploitation de la rapidité de Vite pour le développement et l'optimisation des builds de production.
- **Modélisation d'API** : Intégration et documentation des points de terminaison via Swagger pour faciliter la collaboration frontend-backend.
- **Clean Code & Architecture** : Organisation modulaire du code pour assurer sa maintenabilité et son évolutivité.

## ✨ Fonctionnalités
Le projet a été conçu pour offrir une navigation intuitive et sécurisée :

### 🔐 Authentification par Tokens
Système de connexion persistant permettant de maintenir la session utilisateur même après un rechargement de page (selon les options de stockage).

### 👤 Édition de Profil Dynamique
Interface dédiée permettant aux utilisateurs de modifier leurs informations personnelles avec validation en temps réel et synchronisation immédiate avec la base de données.

### 💳 Tableaux de Bord Financiers
Visualisation synthétique des différents comptes (compte courant, épargne, crédit) avec affichage dynamique des transactions et des soldes.

### 🛡️ Protection des Routes
Système de sécurité empêchant l'accès aux tableaux de bord sans jeton d'authentification valide, garantissant la confidentialité des données bancaires.

## 🚀 Installation et Utilisation

### Prérequis
- **Node.js** : Version 12+ (Backend) / Version 18+ (Frontend)
- **MongoDB** : Installé et en cours d'exécution localement.

### Installation locale
1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/AndreaP2A/P9-ArgentBank-API.git
   cd P9-ArgentBank-API
   ```

2. **Configuration du Backend** :
   ```bash
   cd Backend
   npm install
   npm run populate-db # (Optionnel) Pour initialiser les utilisateurs de test
   npm run dev:server
   ```

3. **Configuration du Frontend** :
   ```bash
   cd ../Frontend
   npm install
   npm run dev
   ```

4. **Accès** : L'application sera lancée par défaut sur [http://localhost:5173/](http://localhost:5173/).

## 🛠️ Structure du projet
L'architecture est organisée de manière à séparer les responsabilités techniques :

```text
.
├── Backend/            # API Server, modèles MongoDB & Controllers
├── Frontend/           # Code source de l'application React
│   ├── src/
│   │   ├── assets/     # Images, logos et styles CSS globaux
│   │   ├── components/ # Composants UI réutilisables (Header, Footer, Feature)
│   │   ├── features/   # Slices Redux Toolkit et logique d'état
│   │   ├── pages/      # Vues principales (Home, Sign-In, User Profile)
│   │   ├── services/   # Services d'API et appels Fetch/Axios
│   │   └── main.jsx    # Point d'entrée de l'application
└── README.md           # Documentation globale du projet
```

## 🎓 Contexte Pédagogique
Ce projet constitue le 9ème projet pratique de mon parcours Développeur d'application (CDA) JavaScript / React (Bac+3/+4) chez OpenClassrooms. Il m'a permis de maîtriser les concepts fondamentaux de React, de comprendre les enjeux de la gestion d'état centralisée avec Redux, et d'apprendre à interagir avec une API sécurisée.

## 👨‍💻 Auteur
**Andréa PORCHE**

- GitHub : [@AndreaP2A](https://github.com/AndreaP2A)
- LinkedIn : [Andrea Porche](https://www.linkedin.com/in/andrea-porche-a09506202/)
- Email : andrea.porche2a@gmail.com
