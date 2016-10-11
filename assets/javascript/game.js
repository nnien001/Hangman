console.log('javascript is working');

	var hangman = {
		wins: 0,
		losses: 0,
		words: [],			//list of possible words game can choose
		currentWord: "",	//holder for word selected
		workingWord: [],	//user's working word.
		workingWordOutput: "", //for cleaner output. 
		missed: [],
		missedCount: 0,
		missLimit: 8,
		initializeWords: function() {	//organized vertically for ez editing
			this.words.push(
				"abyssinian",
				"american bobtail",
				"american curl",
				"american shorthair",
				"american wirehair",
				"balinese",
				"bengal",
				"birman",
				"bombay",
				"british shorthair",
				"burmese",
				"burmilla",
				"chartreux",
				"chinese li hua",
				"colorpoint shorthair",
				"cornish rex",
				"cymric",
				"devon rex",
				"egyptian mau",
				"european burmese",
				"exotic",
				"havana brown",
				"himalayan",
				"japanese bobtail",
				"javanese",
				"korat",
				"laperm",
				"maine coon",
				"manx",
				"nebelung",
				"norwegian forest",
				"ocicat",
				"oriental",
				"persian",
				"ragamuffin",
				"ragdoll",
				"russian blue",
				"savannah",
				"scottish fold",
				"selkirk rex",
				"siamese",
				"siberian",
				"singapura",
				"snowshoe",
				"somali",
				"sphynx",
				"tonkinese",
				"turkish angora",
				"turkish van"
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

		initializeMissed: function() {
			this.missed = [];
			console.log('missed initialized');
		},

		initializeWorkingWord: function() {
			this.workingWord = []; //empty it.
			for (i = 0; i < this.currentWord.length; i++) {
				if (this.currentWord[i] == " ") {
					this.workingWord.push(" ");
				} else {
					this.workingWord.push("_"); //seed with dummy values
				}
			}

			this.updateOutput();
			console.log("workingWord: " + this.workingWord);
		},

		initializeAll: function() {
			this.initializeCurrentWord();
			this.initializeMissedCount();
			this.initializeMissed();
			this.initializeWorkingWord();
		},


		guessSearch: function(x) {

			//accepts only alpha characters. Else do nothing.
			if (x.search(/[a-zA-Z]+/) == 0) {

				var userGuess = x.toLowerCase();
				var pos = this.currentWord.search(userGuess);

				if (pos == -1) {
					this.guessWrong(userGuess);
					
				}
				else {
					this.guessRight(userGuess);
				}

				this.updateOutput();
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
				this.missedCount += 1
				
			}
			else {
				//do nothing. they guessed the same character.
				console.log("missedCount = " + this.missedCount);
			}


		},

		checkWin: function() {
			var pos = this.workingWord.indexOf('_');

			if (pos == -1) {
				alert('winner! ' + this.currentWord);
				this.wins += 1;
				console.log("wins: " + this.wins);
				this.initializeAll();
			} 
		},

		checkLose: function() {
			if (this.missedCount >= this.missLimit) {
				alert('Game Over. It was ' + this.currentWord);
				this.losses += 1;
				console.log("wins: " + this.losses);
				this.initializeAll();
			}
		},

		updateOutput: function() {
			//output is just workingWord without the array markers
			this.workingWordOutput = this.workingWord.toString();
			this.workingWordOutput = this.workingWordOutput.replace(/,/g, "");

			console.log("workingWordOutput: " + this.workingWordOutput);

		}



	};