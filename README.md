# Rock paper scissors

Les règles du jeu sont disponibles sur https://en.wikipedia.org/wiki/Rock_paper_scissors

## Environnement

Il est nécessaire d'avoir Node.js et npm sur la machine.  
Pour lancer l'application il faut un browser qui accepte les imports de module 

## Comment l'utiliser

Après l'installation des packages gràce à un `npm i`, il suffit de lancer
```
npm start
```
qui démarre un petit serveur http, et ensuite de se rendre à l'adresse
"http://127.0.0.1:8080".

## Tests

Pour lancer les tests :
```
npm test
```
L'interface de coverage sera disponible dans le dossier "coverage".

## Divers

Il est possible de jouer à la variante Spock lizard. Il suffit de remplacer dans
le fichier `./modules/weapons.js` la dernier ligne
```
export default normalPRS
```
par
```
export default spockPRS
```
