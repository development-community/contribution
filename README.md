# contribution
Venez contribuer a l'amélioration du serveur Developpement Community et des outils proposés.

### Voici des exemples pour chaque listes:
</br>

Liste des cours et documentations pour les langages/librairies/framworks
```js
"JavaScript": {
        "Cours": [
            "[JavaScript.com ressources](https://www.javascript.com/resources)",
            "[Grafikart](https://grafikart.fr/formations/debuter-javascript)"
        ],
        "Documentation": [
            "[MDN JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)",
            "[MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)"
        ],
        "Exercices": [
            "[Coding Game](https://www.codingame.com/start)",
            "[JavaScript Cours](https://www.odyssey.sdlm.be/)"
        ],
        "Vidéos": [
            "[JavaScript - GetCodingKnowledge](https://www.youtube.com/watch?v=s_VMwHFSjXY&list=PLuWyq_EO5_AI83Z2JdSPdJ-81QPvI3cxC)",
        ]
},
```
</br>

Error détection système
```js
{
        detection: ["erreur à détecter"],
        send: {
          content:
              `Message a envoyer\n` +
              `En plusieurs lignes`,
          files: [
              new MessageAttachment("./src/assets/image.png", "image.png"), // Image si il y en a
          ]
        }
}
```
</br>

Hebergements Liste
```js
{
        name: "OVH",
        url: "https://www.ovhcloud.com/fr/",
        logo: "https://axial-host.fr/asset/images/logo.png",
        advantages: [
            "Peu de downtime",
        ],
        disadvantages: [
            "Prix élevé"
        ],
        offres: ["VPS", "VDS", "Serveurs dédiés", "Web", "Nom de domaine"]
},
```
