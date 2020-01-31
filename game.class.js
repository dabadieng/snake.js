class Game {
    constructor(nbLigne,nbColonne,dimCase) {
        this.nbColonne=nbColonne;
        this.nbLigne=nbLigne;
        this.dimCase=dimCase;
        this.board=this.creerBoard();
        document.body.appendChild(this.board);
        document.addEventListener("keydown",(e)=>this.clavier(e));
        //food
        this.food=new Food(this.board);
        //snake
        this.snake=new Snake(parseInt(nbLigne/2),parseInt(nbColonne/2),this.board,this.food);

    }

    
    // Crée une table
    creerBoard() {
        let t = document.createElement("table");
        t.style.border = "1px solid #444";
        document.body.appendChild(t);
        for (let i = 0; i < this.nbLigne; i++) {
            let l = document.createElement("tr");
            t.appendChild(l);
            for (let j = 0; j < this.nbColonne; j++) {
                let c = document.createElement("td");
                c.style.border = "1px solid #777";
                c.style.width = this.dimCase + "px";
                c.style.height = this.dimCase + "px";
                l.appendChild(c);
            }
        }
        return t;
    }

    //gestionnaire de keydown
    clavier(e) {

        if (e.key == "ArrowRight") {
            this.snake.vx=1;
            this.snake.vy=0;
            
        } else if (e.key == "ArrowLeft") {
            this.snake.vx=-1;
            this.snake.vy=0;
        } else if (e.key == "ArrowUp") {
            this.snake.vx=0;
            this.snake.vy=-1;
        } else if (e.key == "ArrowDown") {
            this.snake.vx=0;
            this.snake.vy=1;
        }
    }
}