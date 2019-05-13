'use strict';

exports.getProjects = (req, res) => {
    res.status(200).json(
        [
            {
                "_id": 0,
                "name": null,
                "formattedName": null,
                "description": null,
                "url": null,
                "buttonLabel": null,
                "type": null,
                "duree": null,
                "dateDebut": null,
                "dateFin": null,
                "preview": null,
                "alt": null,
                "background": null
            },
            {
                "_id": 1,
                "name": "oddmushroomshop.com",
                "formattedName": "Odd Mushroom Shop",
                "description": "Site d'e-commerce basé sur WordPress et utilisant le plugin WooCommerce. Créé pour une créatrice de pins s'inspirant de la culture geek, je me suis chargé de lui donner les outils lui permettant de vendre ses premières créations. Mes missions ont été la configuration de WordPress et du plugin WooCommerce, la modification et l'ajout de code pour que l'UI du site corresponde à ses attentes, la mise en place d'un système de paiement securisé, le calcul automatique des frais de livraison, la mise en place du certificat SSL, la customisation des templates d'emails, la gestion des stocks, le référencement et aussi m'assurer que le site soit RGPD compliant.",
                "url": "https://www.oddmushroomshop.com",
                "buttonLabel": "Site de oddmushroomshop",
                "type": "Personnel",
                "duree": "6 mois",
                "dateDebut": "Juillet 2018",
                "dateFin": "Decembre 2018",
                "preview": "/images/previews/previewOddMushroom.png",
                "alt": "Aperçu de oddmushroomshop.com",
                "background": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjP38aj0o_iAhWk2eAKHfBrAvUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXGcY2Vr5CKU&psig=AOvVaw33xhTxa0biNMphgZrhvP2j&ust=1557532335584605"
            },
            {
                "_id": 2,
                "name": "otakuProject",
                "formattedName": "Otaku Project",
                "description": "Projet qui me tient à coeur et que je pense terminer quand j'aurai plus de temps libre, il permet aux fans des figurines de type 'Nendoroid' de partager leur collection avec d'autres fans. C'est un projet qui me sert également de base quand je décide d'apprendre une nouvelle technologie car il est idéal pour pratiquer la gestion des espaces utilisateur, la mise en place des CRUD, ou la gestion des fichiers statiques. Créé dans un premier temps en utilisant une api basée sur Symfony 3 pour distribuer les données stockées dans une base de données MySql sur un front en HTML5 et CSS from scratch. J'ai rapidement crée une version 2 sur cette base en utilisant le framework ReactJs et une V3 en utilisant le framework full stack MeteorJS. Il existe aussi une version de ce projet utilisant la JAMStack (basée sur NodeJs et le moteur de templates EJS) permettant de générer un fichier statique pour chaque page du site.",
                "url": null,
                "buttonLabel": null,
                "type": "Personnel",
                "duree": "En cours",
                "dateDebut": "2018",
                "dateFin": "2019",
                "preview": "/images/previews/previewOtakuProject.png",
                "alt": "Aperçu de otakuProject",
                "background": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjP38aj0o_iAhWk2eAKHfBrAvUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXGcY2Vr5CKU&psig=AOvVaw33xhTxa0biNMphgZrhvP2j&ust=1557532335584605"
            },
            {
                "_id": 3,
                "name": "lareinette.fr",
                "formattedName": "la Reinette",
                "description": "La Reinette est le second événement organisé par l’Entente Athlétique du Plateau Est (EAPE). C’est une course en partenariat avec l’association Emma qui lutte contre le cancer du sein. Il est exclusivement destiné aux femmes et fêtera sa 13ème édition le dimanche 7 octobre 2018 en rassemblant 2000 coureuses et marcheuses.",
                "url": "http://www.lareinette.fr",
                "buttonLabel": "Site de La Reinette",
                "type": "Bénévolat",
                "duree": "5 semaines",
                "dateDebut": "Mai 18",
                "dateFin": "Juin 18",
                "preview": "/images/previews/previewLareinette.png",
                "alt": "Aperçu de lareinette.fr",
                "background": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjP38aj0o_iAhWk2eAKHfBrAvUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXGcY2Vr5CKU&psig=AOvVaw33xhTxa0biNMphgZrhvP2j&ust=1557532335584605"
            },
            {
                "_id": 4,
                "name": "lagalopee.fr",
                "formattedName": "La Galopee",
                "description": "La Galopée est l’évènement organisé par l’Entente Athlétique du Plateau Est (EAPE). L’évènement fêtera sa 20ème édition le dimanche 3 juin 2018 et rassemble généralement plus de 1000 coureurs et marcheurs. Il est composé de six épreuves différentes permettant à tout le monde, coureurs expérimentés ou débutants, de trouver chaussure à son pied.",
                "url": "http://www.lagalopee.fr",
                "buttonLabel": "Site de La Galopée",
                "type": "Stage",
                "duree": "6 semaines",
                "dateDebut": "Janvier 18",
                "dateFin": "Février 2018",
                "preview": "/images/previews/previewLagalopee.png",
                "alt": "Aperçu de lagalopee.fr",
                "background": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjP38aj0o_iAhWk2eAKHfBrAvUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXGcY2Vr5CKU&psig=AOvVaw33xhTxa0biNMphgZrhvP2j&ust=1557532335584605"
            },
            {
                "_id": 5,
                "name": "Naval Group - Cirisi",
                "formattedName": "Naval Group",
                "description": "NAVAL GROUP est le leader européen du naval de défense et un acteur majeur dans les énergies marines renouvelables. Le groupe conçoit, réalise et maintient en service des sous-marins et des navires de surface. Il fournit également des services pour les chantiers et bases navals. Enfin, le groupe propose un large panel de solutions dans les énergies marines renouvelables.",
                "url": null,
                "buttonLabel": null,
                "type": "Stage",
                "duree": "6 semaines",
                "dateDebut": "Juin 17",
                "dateFin": "Juillet 17",
                "preview": "/images/previews/previewCirisi.png",
                "alt": "Aperçu affiche CIRISI",
                "background": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjP38aj0o_iAhWk2eAKHfBrAvUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXGcY2Vr5CKU&psig=AOvVaw33xhTxa0biNMphgZrhvP2j&ust=1557532335584605"
            },
            {
                "_id": 6,
                "name": "floriansahbi.com",
                "formattedName": "Portfolio V2",
                "description": "floriansahbi.com est le site servant de vitrine à mes compétences, et en tant que projet personnel, je peux me permettre de lui faire prendre la direction que je souhaite et y tester sans contrainte ce qui me vient à l’esprit.",
                "url": null,
                "buttonLabel": null,
                "type": "Personnel",
                "duree": "2 jours",
                "dateDebut": "Mars 18",
                "dateFin": "Avril 2018",
                "preview": "/images/previews/previewFloriansahbi.png",
                "alt": "Aperçu de floriansahbi.com",
                "background": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjP38aj0o_iAhWk2eAKHfBrAvUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXGcY2Vr5CKU&psig=AOvVaw33xhTxa0biNMphgZrhvP2j&ust=1557532335584605"
            }
        ]
    )
};
