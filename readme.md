<div align="center">
    <img src="./Frontend/src/assets/img/argentBankLogo.png" alt="Logo ArgentBank">
    <h3 align="center">ArgentBank</h3>
    <p align="center">ArgentBank est une application web de la banque éponyme qui permet à ses clients de se connecter et de gérer leurs comptes et leur profil.</p>
</div>

## Contexte du projet

ArgentBank est un projet fictif, constituant le 9ème projet pratique dans le cadre du cursus que je suis chez OpenClassrooms. <br />
Celui-ci m'a amené à travailler sur :

- L'authentification à une API
- L'implémentation d'un gestionnaire d'état via Redux dans une application React
- Intéragir avec avec une API et la modéliser

## Technologies utilisées

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Test du projet

1. Cloner ce dépôt de code sur votre machine locale via la commande `git clone https://github.com/AndreaP2A/P9-ArgentBank-API`.
2. Rendez-vous dans le dossier du backend via `cd Backend`, installer Node.js v12 via `nvm install 12.18` (s'il est déjà installé, `nvm use 12.18`), puis `npm install`.
3. Lancer la commande `npm run dev:server`, après quelques instants, le message "Database successfully connected" devrait s'afficher : le backend est prêt.
4. Dans un second terminal (ou second VSCode), rendez-vous dans le dossier du frontend via `cd Frontend`, installer Node.js v22 via `nvm install 22.2.0` (s'il est déjà installé, `nvm use 22`) puis npm via `npm install`.
5. Enfin, lancer la commande `npm run dev` : après quelques instants, un message "➜ Local: http://localhost:5173/" devrait s'afficher avec le lien d'accès à l'application. Les serveurs backend et frontend étants lancées, rendez-vous sur http://localhost:5173/ !

## En tant qu'utilisateur, je dois pouvoir ...

- Me rendre sur la [page d'accueil](http://localhost:5173/) d'ArgentBank et voir les données mock.
- Me rendre sur [la page de login](http://localhost:5173/#/user/login) en cliquant sur le bouton 'Sign in' de la barre de navigation, renseigner mes identifiants dans les inputs prévus à cet effet, me connecter à l'API backend en cliquant sur 'Sign in' et être redirigé vers [mon profil](http://localhost:5173/#/user/profile).
- Consulter mon profil, voir mon prénom et mon nom affichés et voir mes informations bancaires mockées.
- Editer mon profil (prénom et nom) et voir ces changements rester de façon permanente.
- Me déconnecter via le bouton 'Sign out' qui doit s'afficher sur la barre de navigation lorsque je suis connecté. Lorsque je clique sur ce bouton, je suis déconnecter et redirigé vers la [page d'accueil](http://localhost:5173/).

## Site en ligne

A venir !

## Contact

andrea.porche2a@gmail.com

Lien du repo: [https://github.com/AndreaP2A/P9-ArgentBank-API](https://github.com/AndreaP2A/P9-ArgentBank-API)
