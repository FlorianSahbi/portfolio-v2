'use strict';

exports.getJobs = (req, res) => {
    res.status(200).json(
        [
            {
                "title": "Développeur full stack",
                "companyName": "Appartoo",
                "presentation": "Pour mon premier contrat débuté en Octobre au sein de la startup Appartoo, ma mission est la migration de l'ancienne stack basée sur AngularJS - Apache - Symfony 2 et MySql vers la stack MEAN. Le défi à mon arrivée fut ici de surmonter mon manque d'expérience dans l'utilisation de JavaScript et du framework Angular 6 ainsi que de réussir à correctement prendre en main l'environnement d'exécution JavaScript asynchrone et orienté événnement qu'est NodeJS, startup oblige, nous sommes une petite équipe et c'est pourquoi j'ai la chance et la responsabilité de m'occuper de la bonne exécution du projet. J'ai donc pu travailler sur la quasi-totalité du site, ce qui fut très formateur pour une première experience. Mes missions furent, entre autres :",
                "missions": [
                    "Développer 'from scratch' un chat en temps réel avec WebSocket.",
                    "Développer un script de migration pour convertir les données de la db SQL vers la db NoSQL.",
                    "Faire des recherches géographiques et d'agrégation pour isoler des utilisateurs correspondant à certain filtres et les placer sur une carte.",
                    "Créer un espace utilisateur sécurisé avec cryptage de mot de passe.",
                    "Créer un service de notifications envoyant mails et sms.",
                    "Configurer un Swagger pour documenter les routes de l'API."
                ],
                "previews": [
                    "/images/previews/previewAppartoo1.png",
                    "/images/previews/previewAppartoo2.png",
                    "/images/previews/previewAppartoo3.png",
                    "/images/previews/previewAppartoo4.png"
                ],
                "alt": "projectPreview"
            }
        ]
    )
};