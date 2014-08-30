	(function() {
		var topRBContainer = document.getElementsByClassName('topRB').item(0);
		var topWRContainer = document.getElementsByClassName('topWR').item(0);
		var topQBContainer = document.getElementsByClassName('topQB').item(0);
		var topTEContainer = document.getElementsByClassName('topTE').item(0);
		var topKContainer = document.getElementsByClassName('topK').item(0);
		var topDEFContainer = document.getElementsByClassName('topDEF').item(0);

		var setTopPositions = function() {
			var players = document.getElementsByTagName('ul').item(0);
			var getTopPlayer = function(players) {
				var topPlayer;
				for(var i=0; i < players.length; i++) {
					var player = players.item(i);
					if(player.className.search("selected") < 0) {
						i = players.length
						var topPlayer = player;
					}
				}
				return topPlayer;
			};

			var topRB = getTopPlayer(players.getElementsByClassName('player-rb'));
			var topWR = getTopPlayer(players.getElementsByClassName('player-wr'));
			var topQB = getTopPlayer(players.getElementsByClassName('player-qb'));
			var topTE = getTopPlayer(players.getElementsByClassName('player-te'));
			var topK = getTopPlayer(players.getElementsByClassName('player-k'));
			var topDEF = getTopPlayer(players.getElementsByClassName('player-def'));

			topRBContainer.innerHTML = topRB.innerHTML;
			topWRContainer.innerHTML = topWR.innerHTML;
			topQBContainer.innerHTML = topQB.innerHTML;
			topTEContainer.innerHTML = topTE.innerHTML;
			topKContainer.innerHTML = topK.innerHTML;
			topDEFContainer.innerHTML = topDEF.innerHTML;
		};
		setTopPositions();
	  var lis = document.getElementsByTagName('li');
	 	Array.prototype.map.call(lis, function(li) {
			li.addEventListener("click", function() {
				// toggle selected class
				var player = this.getElementsByClassName('player').item(0);
				var className = player.className;
				var selectedIndex = className.search("selected");
				if(selectedIndex < 0) {
					player.className = className + " selected";
				} else {
					player.className = className.substr(0, selectedIndex);
				}

				// replace top positions
				setTopPositions();
			});
		});
	})();
