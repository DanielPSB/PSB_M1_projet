    var nbpieces=10;
    var nave=navigator.userAgent.toLowerCase(); 
    if (nave.indexOf("firefox") > -1) nave="Firefox"; else nave="Firefox";
    var fenetre = document.getElementById('canvas'); 
    var hh=canvas.getContext('2d');
    hh.canvas.style.border="3px solid #000";
    hh.translate(0.5,0.5);
    var Xs,Ys;
    var Xd=10,Yd=10;
    var ct,xmin=Xd+30,xmax=xmin+6*a,ymin=Yd+30,ymax=ymin+6*a;

    // ajout pour adaptation
    var blanc="rgb(220,220,220)",gris="rgb(70,70,70)";
    var entete_=7;
    var configuration;
    var nb_cases; // nb de colonnes == nb ligne c'est un carré
    var tl; // hauteur de la ligne
    var tc; // largeur de la ligne
    var entete_ligne=7;
    var entete_colonne=7;
    var configuration;

    document.addEventListener("DOMContentLoaded", function(event) {
        // appel des fonctions d'initialisation
        charge_listejeux();
        chargement_();
    });

    function charge_listejeux() {
        var sele = document.getElementById('config-select');
        for (var jeu in config_YS) {
            var option = document.createElement("option");
            option.text = jeu;
            option.value = jeu;
            sele.add(option);
        }
    }

    function chargement_(){
        var sele = document.getElementById('config-select');
        var config=sele.value;
        indication=config_YS[config].Question;
        // lecture de la fonfiguration
        configuration=config_YS[config];
        choixRaz();
        $("#descriptif > p").html(indication);
        console.log("chargement de la question", indication);
    }

// commandes ***********************
    function choixRaz(){
        zone_dessin = document.getElementById('canvas');
        nb_cases=configuration.Dimension.nb+entete_;
        tl=(zone_dessin.height-2*xmin)/(nb_cases+1);
        tc=(zone_dessin.width-2*ymin)/(nb_cases+1);
        trace();
        trace_entetes_lignes();
    }  
    
    function choixSave(){
    }
    
    function stop(){
    }

    function depart(bt1) {						
    }

    function deplace(bt1) {						
    }

        
//   ******************************************

    function drawLine(xi,yi,xf,yf){
        hh.beginPath();
        hh.moveTo(xi,yi);
        hh.lineTo(xf,yf);
        hh.stroke();} 
    
    function cadre3D(x,y,w,ha){
        hh.strokeStyle="rgb(130,130,133)";            
        drawLine(x,y+1,w-1,y+1);	drawLine(x,y,x,ha);
        drawLine(x+1,y,x+1,ha-1);   drawLine(x,y,w,y);
        hh.strokeStyle="rgb(230,230,230)";  		
        drawLine(x,ha,w,ha);	drawLine(w,y+1,w,ha);
        drawLine(x+1,ha-1,w,ha-1);	drawLine(w-1,y+2,w-1,ha);
    } 

    function affiche(){
	    // exemple d'affichage d'un texte dans la zone canvas
	        hh.fillStyle="red";
            hh.fillText("BIENVENUE DANS VOTRE APPLICATION",210,100);
        }	


    function trace(){
        hh.font="bold 16px Arial";
        hh.textAlign="center";
        hh.fillStyle="silver";       
	    hh.fillRect(0,0,1000,1000);
        hh.fillStyle="silver";
        hh.fillRect(xmin,ymin,920,920);
        hh.fillStyle="silver";	
	    hh.fillRect(388,160,12,55);
        hh.lineWidth=1;
        cadre3D(20,20,980,980);
	    affiche();
    }

    function trace_entetes_lignes() {
        // trace des entetes de colonnes
        hh.strokeStyle="black";
        hh.lineWidth = 4;
        let y=[0+ymin,1*tl+ymin, (entete_-1)*tl+ymin];
        for (let yi of y) {
            drawLine(entete_ *tc+xmin,yi,nb_cases*tc+xmin,yi);
        }
        let x=[0+xmin,1*tc+xmin,(entete_-1)*tc+xmin];
        for (let xi of x) {
            drawLine(xi,entete_*tl+ymin,xi,nb_cases*tl+ymin);
        }
    }
