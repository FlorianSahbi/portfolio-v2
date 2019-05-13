'use strict';

exports.getSkills = (req, res) => {
    res.status(200).json(
        [
            {
                "_id": "0",
                "name": "html5",
                "logo": "/images/skills/competenceHtml.png",
                "svg": "html5",
                "alt": "Logo HTML5",
                "description": "A l'aise avec HTML, je n'oublie jamais de me soucier du SEO en sélectionnant les balises HTML les plus pertinentes. Je fais aussi toujours en sorte que le passage de mes noeuds vers des écrans plus étroits se fasse de la façon la plus naturelle possible.",
                "position": ""
            },
            {
                "_id": "1",
                "name": "css3",
                "logo": "/images/skills/competenceCss.png",
                "svg": "css3",
                "alt": "Logo CSS3",
                "description": "J'aime beaucoup m'amuser avec le CSS et je n'ai pas de problème particulier quand je l'utilise. Je suis bien au fait de la lecture en cascade et donc des priorités dans l'attribution des styles. J'use et abuse de la technologie flexbox pour mes mises en page. Je sais utiliser les media queries. J'ai aussi pas mal expérimenté les animations, transitions, keyframe permettants la création d'animations en CSS pour éviter l'utilisation parfois gourmande d'un script JS.",
                "position": ""
            },
            {
                "_id": "2",
                "name": "javascript & framework",
                "logo": "/images/skills/competenceJavascript.png",
                "svg": "javascript",
                "alt": "Logo JavaScript",
                "description": "J'utilise JavaScript au quotidien depuis le début de mon contrat en octobre, je suis donc plutôt à l'aise avec ce dernier. J'utilise surtout la version ECMAScript 6 qui a maintenant une bonne compatibilité avec tous les navigateurs récents et je fais de mon mieux pour utiliser ce que cet version a à offrir comme les fonctions flechées, la déclaration des variables utilisant 'let' pour maintenir le scope dans le bloc de mes fonctions ou encore l'utilisation des promesses pour l'écriture de code asynchrone. Côté frameworks, Angular 6 est actuellement le framework sur lequel je suis le plus à l'aise car je l'utilise tous les jours au travail. J'ai aussi eu l'occasion d'utiliser ReactJs pour différents projets (comme ce site) et j'ai donc pu acquerir les bases dans l'utilisation de ce dernier. Enfin je connais un peu Météor que j'ai utilisé pour un de mes projets personnel (Otaku Project).",
                "postion": ""
            },
            {
                "_id": "3",
                "name": "php & framework",
                "logo": "/images/skills/competencePhp.png",
                "svg": "php",
                "alt": "Logo PHP",
                "description": "Dans le cadre de mon BTS j'ai longtemps utilisé PHP comme langage côté serveur avant de passer à JavaScript. C'est avec ce langage que j'ai pu apprendre l'architecture Model-View-Controller. C'est aussi avec lui que j'ai appris la POO, le traitement de fichier JSON/XML, l'exploitation des informations reçues depuis les formulaires html ou encore la création d'espaces utilisateur. Côté frameworks, en deuxième année du BTS j'ai découvert Symfony 3 qui a changé mes habitudes de codeur en rendant accessible differents outils facilitant le développement. J'ai donc trouvé une nouvelle architecture de fichier toujours basé sur le MVC mais où les fonctionnalités du sites sont decoupées en bundles, j'ai appris à utiliser un moteur de template avec Twig et j'ai pu tester mon premier ORM - Doctrine.",
                "position": ""
            },
            {
                "_id": "4",
                "name": "sql",
                "logo": "/images/skills/competenceSql.png",
                "svg": "mysql",
                "alt": "Logo SQL",
                "position": "",
                "description": "J'ai énormement utilisé MySQL lors de mon parcours scolaire et professionnel et je suis à l'aise avec une grande partie des concepts qui y sont liés comme la conception de bases de données (Modèle entité-association / Modèle logique de données ), les contraintes d'intégrité fonctionnelle, la création de requetes plus ou moins complexes necessitants des jointures ou non."
            },
            {
                "_id": "5",
                "name": "NoSQL",
                "logo": "/images/skills/competenceMongo.png",
                "svg": "mongodb",
                "alt": "Logo Ajax",
                "position": "",
                "description": "Utilisé depuis octobre avec Node, ça a été un peu difficile d'accepter la redondance des informations dans les documents de mes collections mais j'aime et apprécie maintenant utiliser les bases de données NoSQL."
            },
            {
                "_id": "6",
                "name": "nodejs / express",
                "logo": "/images/skills/competenceNode.svg",
                "svg": "nodejs",
                "alt": "Logo Node.js",
                "position": "",
                "description": "Environnement que j'utilise depuis octobre 2018, je structure mes projets NodeJs sous une architecture MVC en utilisant le middleware routeur d'express. Quand je code dans cette environnement j'abuse des promesses qui me permettent de gérer toutes les erreurs qui pourraient faire planter mon application. Sous NodeJs j'ai eu l'occasion de developper des api, des outils de scraping, un chat, un serveur de fichiers statiques, ou encore un générateur de fichiers statiques. J'aime beaucoup travailler avec Node et si possible j'aimerais développer en priorité mes competences autours de cet environnement."
            },
            {
                "_id": "7",
                "name": "NGINX",
                "logo": "/images/skills/competenceNginx.png",
                "svg": "nginx",
                "alt": "Logo Jquery",
                "position": "",
                "description": "Dans le cadre de mon travail j'ai dû un peu travailler avec Nginx car nos applications sont hebergées dessus. J'ai donc dû apprendre à configurer et mettre en place un serveur, créer des blocs serveur et y lier des certificats ssl en utilisant 'let's encrypt'."
            },
            {
                "_id": "8",
                "name": "wordpress / WooCommerce",
                "logo": "/images/skills/competenceWordpress.png",
                "svg": "wordpress",
                "alt": "Logo WordPress",
                "description": "Pour certain projets devant être realisés rapidement et destinés à être administrés par un client n'ayant pas de connaissances en développement, j'aime utiliser WordPress car il permet la mise en ligne rapide d'un site et de son espace d'administration. Je n'ai aucun soucis à mettre en place le serveur chargé d'héberger le CMS et à faire les configurations nécessaires à son bon fonctionnement.",
                "position": ""
            },
            {
                "_id": "9",
                "name": "divers",
                "logo": null,
                "svg": "git",
                "alt": null,
                "description": "GitfLow, Trello, Gestionnaire de paquet (npm), Swagger, Postman...",
                "position": ""
            }
        ]
    )
};
