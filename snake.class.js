class Snake {
	position=[];
	interval=500;
	constructor(x,y,board,food) {
		this.position.push({x:x,y:y});		
		this.vx=1;
		this.vy=0;
		this.board=board;
		this.food=food;
		this.timer = setInterval(()=>this.avancer(),this.interval);
	}
	
	avancer() {		
		//nouvelle position
		let newPosition= {
			x:this.position[0].x + this.vx,
			y:this.position[0].y + this.vy
		};

		//si la nouvelle position est en dehors du board : gameover
		if (!this.board.rows[newPosition.y] || !this.board.rows[newPosition.y].cells[newPosition.x]) {
			clearInterval(this.timer);
			this.board.rows[0].innerHTML="<td colspan='99'>GAMEOVER</td>";
			return;
		}

		// si la nouvelle position contient du food alors :
		if (newPosition.x==this.food.x && newPosition.y==this.food.y ) {
			//augmenter la taille du snake en ajoutant la newPosition au début du corps
			this.position.unshift(newPosition);
			//afficher ce segement
			this.afficher(0,"#000");
			//créer un new food
			this.food.creer();
			//accélérer le snake
			clearInterval(this.timer);
			this.interval--;
			this.timer = setInterval(()=>this.avancer(),this.interval);
			
		} else {
			//effacer la queue = couleur noire
			this.effacerLaQueue();		
			
			//décaler chaque segment de 1 vers la tete
			for(let i=this.position.length-1; i>0; i--) {
				this.position[i].x=this.position[i-1].x;
				this.position[i].y=this.position[i-1].y;
			}

			//déplacer la tete
			this.position[0] = newPosition;

			//afficher la tete = couleur blanche
			this.afficherLaTete();	
		}		
	}
	
	afficher(i,couleur) {
		let colonne = this.position[i].x;
		let ligne = this.position[i].y;
		this.board.rows[ligne].cells[colonne].style.backgroundColor=couleur;
	}

	effacerLaQueue() {
		this.afficher(this.position.length-1,"#FFF");	
	}

	afficherLaTete() {
		this.afficher(0,"#000");
	}
		
}