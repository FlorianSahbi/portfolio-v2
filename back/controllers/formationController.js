'use strict';

exports.getFormation = (req, res) => {
    res.status(200).json(
        [
            {
                "logo": "/images/logos/logoHetic.png",
                "alt": "Logo de Hetic",
                "place": "Montreuil (93)",
                "name": "bachelor web : Deuxième année",
                "beginDate": "2018",
                "endDate": "2020"
            },
            {
                "logo": "/images/logos/logoNdlp.png",
                "alt": "Logo de NDLP",
                "place": "avranches",
                "name": "bts sio",
                "beginDate": "2016",
                "endDate": "2018"
            },
            {
                "logo": "/images/logos/logoCachin.png",
                "alt": "logo de Cachin",
                "place": "cherbourg-en-cotentin",
                "name": "bac pro tmsec",
                "beginDate": "2011",
                "endDate": "2013"
            }
        ]
    )
};