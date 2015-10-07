var Preload = function(game){};

Preload.prototype = {

	preload: function(){ 
		this.game.load.image('floor', 'assets/ground_grass_broken.png');
		this.game.load.image('player', 'assets/bunny1_stand.png');
	},

	create: function(){
		this.game.state.start("Main");
	}
}