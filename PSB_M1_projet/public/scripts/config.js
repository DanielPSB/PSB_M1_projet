// -------------------------------------------------------------
// Fichier de configuration 
// Y. STROPPA
// exemple de configuration possible de vos differentes parties
// --------------------------------------------------------------
var a=58;
var config_YS={
    config1:
	{
		Question:"A vous de retrouver le professionnel, le nombre de voitures nécessaires pour chaque cascade et l'ordre de tournage.",
		Indices:[
			"Le saut au dessus d'un camion n'a été réalisé ni avec 1 ou 3 voitures, ni en ler lieu, ni pas Silvère",
			"La cascade réalisée par Matias en 2ème lieu impliquait moins de 3 voitures et n'était pas un saut ni des tonneaux.",
			"La poursuite ayant mi en cause 5 voitures n'a été effectuée ni par SIlvère, ni par Johnny, ni en 1er lieu ou en 4eme lieu."],
		Image:"Adefinir.jpg",
		Dimension:{nb:12,choix:4},
		Categories:{
			"Cascadeur":["Hubert", "Johnny","Matias","Silvère"],
			"Voiture(s)":[1,2,3,4],
			"Ordre":[1,2,3,4],
			"Cascade":["Poursuite","Saut de camion","Tonneaux","Voiture coupée en 2"]
		},
		Affichage:{ colonnes:["Cascadeur", "Voiture(s)", "Ordre"],lignes:["Cascade", "Ordre","Voiture(s)"]},
		CoupdePouce:"2 voitures ont participé à la 4ème cascade",
		Solution:{}
	}
};

