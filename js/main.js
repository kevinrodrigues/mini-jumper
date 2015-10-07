var Main = function(game){

};

Main.prototype = {

	create: function() {
		var me = this;

		//get floor dimentions..
		me.titleWidth = me.game.cache.getImage('tile').width;
		me.tileHeight = me.game.cache.getImage('tile').height;

		//bg color..
		me.game.stage.backgroundColor = '479cde';

		// enable arcade physics system..
		me.game.physics.startSystem(Phaser.Physics.ARCADE);

		//add platforms group..
		me.platforms = me.game.add.group();
		me.platforms.enableBody = true;
		me.platforms.createMultiple(250, 'tile');
	},

	addTile: function(x, y) {

		var me = this,
			//get tile not on screen..
			tile = me.platforms.getFirstDead();

		tile.reset(x, y);
		tile.body.velocity.y = 150;
		tile.body.immovable = true;

		//remove tile when off screen..
		tile.checkWorldBounds = true;
		tile.outOfBoundsKill = true;

	},

	addPlatform: function(y) {

		var me = this;

		
	},

	update: function() {

	},

	gameOver: function(){
		this.game.state.start('GameOver');
	}

};