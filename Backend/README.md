# Argent Bank — Backend
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23C1E1C5?style=for-the-badge&logo=swagger&logoColor=black)

Ce répertoire contient l'API REST sécurisée de l'application Argent Bank. Elle gère l'authentification des utilisateurs et la gestion des profils.

## 🚀 Installation et Démarrage

### Prérequis
- **Node.js** (Version 12.x recommandé pour ce backend spécifique)
- **MongoDB** (Doit être installé et lancé sur votre machine)

### Instructions
1. **Installation des dépendances** :
   ```bash
   npm install
   ```

2. **Initialisation de la base de données** :
   Exécutez cette commande pour remplir la base de données avec des utilisateurs de test :
   ```bash
   npm run populate-db
   ```

3. **Lancement du serveur** :
   ```bash
   npm run dev:server
   ```
   Le serveur sera accessible sur `http://localhost:3001`.

## 📄 Documentation API
Une documentation complète des endpoints est disponible via **Swagger**. Une fois le serveur lancé, accédez à :
👉 `http://localhost:3001/api-docs`

## 👥 Données de Test (Utilisateurs)
Après avoir exécuté le script `populate-db`, vous pouvez utiliser les identifiants suivants :

| Utilisateur | Email | Mot de passe |
| :--- | :--- | :--- |
| **Tony Stark** | `tony@stark.com` | `password123` |
| **Steve Rogers** | `steve@rogers.com` | `password456` |

## 🛠️ Stack Technique
- **Runtime** : Node.js
- **Framework** : Express.js
- **Base de données** : MongoDB
- **Sécurité** : JWT (JSON Web Tokens) & Bcrypt
- **Documentation** : Swagger UI / OpenAPI 3.0
