console.log('javascript is working');

	var hangman = {
		wins: 0,
		losses: 0,
		words: [],			//list of possible words game can choose
		currentWord: "",	//holder for word selected
		workingWord: [],	//user's working word. 
		missed: [],
		missedCount: 0,
		missLimit: 8,
		initializeWords: function() {	//organized vertically for ez editing
			this.words.push(
				'cat', 
				'dog', 
				'horse', 
				'pig', 
				'sheep', 
				'cow', 
				'goat', 
				'chicken', 
				'ostrich', 
				'alligator'
			);
			
			console.log('words initialized');			
		},
		
		initializeCurrentWord: function() {
			this.currentWord = this.words[Math.floor(Math.random()*this.words.length)];
			console.log('the word is: ' + this.currentWord);
		},

		initializeMissedCount: function() {
			this.missedCount = 0;
			console.log('missedCount set to 0');
		},

		initializeWorkingWord: function() {
			this.workingWord = []; //empty it.
			for (i = 0; i < this.currentWord.length; i++) {
				this.workingWord.push("_"); //seed with dummy values
			}
			console.log("workingWord: " + this.workingWord);
		},

		initializeAll: function() {
			this.initializeCurrentWord();
			this.initializeMissedCount();
			this.initializeWorkingWord();
		},


		guessSearch: function(x) {
			var userGuess = x.toLowerCase();
			var pos = this.currentWord.search(userGuess);

			if (pos == -1) {
				this.guessWrong(userGuess);
				
			}
			else {
				this.guessRight(userGuess);
			}
		},

		
		guessRight: function(x) {
			for (i = 0; i < this.currentWord.length; i++) {
				if (x == this.currentWord.charAt(i)) {
					this.workingWord[i] = x;
				}
			}
		},

		guessWrong: function(x) {
			var pos = this.missed.indexOf(x);
			if (pos == -1) {
				this.missed.push(x);
			}
			else {
				this.missedCount += 1
				console.log("missedCount = " + this.missedCount);
			}


		},

		checkWin: function() {
			var pos = this.workingWord.indexOf('_');

			if (pos == -1) {
				alert('winner');
				this.wins += 1;
				console.log("wins: " + this.wins);
				this.initializeAll();
			} 
		},

		checkLose: function() {
			if (this.missedCount > this.missLimit) {
				alert('Game Over');
				this.losses += 1;
				console.log("wins: " + this.losses);
				this.initializeAll();
			}
		},



		touch: function() {
			console.log('hangman is working');
		}


	};