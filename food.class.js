class Food {
	constructor(board) {
		this.x=0;
		this.y=0;
		this.board=board;
		this.creer();
		this.timer=setInterval(()=>this.afficher(),500);
	}
	
	creer() {
		this.x=Math.floor(this.board.rows.length*Math.random());
		this.y=Math.floor(this.board.rows[0].cells.length*Math.random());		
	}

	afficher() {
		this.board.rows[this.y].cells[this.x].style.backgroundColor="#F00";
	}	
	
}