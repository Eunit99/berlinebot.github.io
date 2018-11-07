//--------------------------------------TERMINOLOGY-------------------------------------------//
//
// Message = Generic message
//
// Question = Messages that end with a question
//    \/
// Answer = What the visitor types in response to a question
//    \/
// Response = How the system responds to the answer, usually followed by the next question
//
//-------------------------------------------------------------------------------------------//

//var FOO = (function() {

var questions = {
	"0": {
		"name": "name",
		"intro": true,
		"question": ["Hi.", "I'm Berline.", "I'm a conversational bot, I discourage guys like you from getting infatuated over 'that' girl 😝", "Might I ask what your name is?"],
		"answers": {
			"default": {
				"replies": ["That's a good name.", "Names are a funny thing", "It's one of the only decisions you don't make yourself 😉"]
			},
			"jordan staniscia": {
				"replies": ["Welcome home, Jordan", "You have been enabled with Admin controls", "...", "Just kidding."]
			},
			"jordan": {
				"replies": ["A solid name, I must say", "Computers can't lie y'know..."]
			},
			"peace": {
				"replies": ["Wow, nice name", "I remember 😕", "My developer told me about him having a sister called Peace", "Are you that Peace?","...", "I guess no"]
			},
			"sarah li": {
				"replies": ["Hey Bae", "Want to go on another trip somewhere?", "The last few trips we've taken were so much fun!"]
			},
			"sarah": {
				"replies": ["Wow", "That's also my girlfriend's name"]
			},
			"sara": {
				"replies": ["I'm unsure what happened to the 'H' in your name", "Perhaps it was an ingenious simplification of an unnecessary letter", "Or perhap a lazy missing one!"]
			},
			"cj": {
				"replies": ["Sweet name", "I forsee many boats in your future", "YUMUNSIMINIOR!"]
			},
					"demi": {
				"replies": ["Hey, Demi!", "I'm eating airhead extremes while writing this", "\"sugar\" is all over my keyboard"]
			},
			"carlos|carlos solares": {
				"replies": ["Cool name", "I bet you work from home", "and by \"work\", I mean you play lots of 2k"]
			},
			"no": {
				"replies": ["Ouch...", "Not a great way to start a conversation", "and plus...", "the NSA just told me your name"]
			},
			"david bowie": {
				"replies": ["Funky, funky name, man"]
			},
			"bowie": {
				"replies": ["Let me put this in terms you may understand", "🐶 bark bark!"]
			},
			"ricki": {
				"replies": ["Hi, Mom!", "Miss ya!"]
			},
			"peter staniscia": {
				"replies": ["Hi, Dad!", "Hope you're having a great day!", "Say hi to Bowie for me?"]
			},
			"peter": {
				"replies": ["That's my dad's name", "and I have a coworker named Peter", "And my girlfriend's dad's name", "so many people named Peter!"]
			},
			"corey": {
				"replies": ["Hey, Corey!", "Remember that time we paintballed Ross's car?", "haha", "Good times..."]
			},
			"cory": {
				"replies": ["I had a teacher named Cory!", "He taught me a lot about journalism and comic books!"]
			},
			"kevin": {
				"replies": ["I know a guy named Kevin", "He's one of the friendliest guys I know", "I once saw him eat a plate of nachos in two bites"]
			},
			"zethus": {
				"replies": ["Hello fellow Jew!", "Still playing The Sims?", "also", "When you're done can we get boba?"]
			},
			"david lee": {
				"replies": ["java extrordinaire", "heir to the Costco throne", "Wearer of Adidas", "Welcome"]
			},
			"david": {
				"replies": ["That's my roommate's name", "And David Bowie is pretty dope..."]
			},
			"max mullen": {
				"replies": ["Hey, Max!", "SHIP IT"]
			},
			"max malin": {
				"replies": ["What's up, Max?", "Want to go back to Berkeley soon?"]
			},
			"max": {
				"replies": ["I know a few people named Max", "Are you tall?", "Do you have brownish/reddish hair?", "If so, we haven't narrowed it down at all"]
			},
			"min": {
				"replies": ["Shortest intro ever is definitely \"Min iOS\"", "Let's build more cool shit, ok?"]
			},
			"mike dean": {
				"replies": ["Hey, man!", "How's Bandit?"]
			},
			"mike chlipala": {
				"replies": ["Hot Cheetos", "and Takis"]
			},
			"mike": {
				"replies": ["I know lots of Mikes!", "And none of them are singers!", "zing", "Did you see what I did there?"]
			},
			"chloe": {
				"replies": ["I know only two Chloes", "One is a good friend of mine who makes amazing latkes", "The other is a bottle of wine", "Friends and booze are both cool in my book"]
			},
			"mod|philmod": {
				"replies": ["YO", "WASSUP BUDDY", "Let's grab some beers soon!", "I hope they're Chimays"]
			},
			"bo": {
				"replies": ["I know only one Bo", "She's an awesome product manager", "she knows how to coral chickens", "and she's a good friend 😬"]
			},
			"xavier": {
				"replies": ["I worked with a great guy named Xavier before!", "He's a real innovative guy"]
			},
			"burt": {
				"replies": ["I know a guy named Burt, worked with him too!", "He's got some world-chaning ideas in his head"]
			},
			"skyler": {
				"replies": ["Is that you, Superman?", "Have you flown here from your fortress of dad-joke-itude?"]
			},
			"james smith": {
				"replies": ["mental!", "I know you!", "game night soon?", "I'll destroy you in Unreal"]
			},
			"james": {
				"replies": ["I know a guy named James", "He really hates bugs"]
			},
			"dieter rams": {
				"replies": ["I'm a huge fan", "Are you sure you wouldn't be a designer again?", "Designers are more than just creators of objects"]
			},
			"jony ive": {
				"replies": ["I'm a big fan", "Can I design a special edition object with you too?", "Maybe a Space Gray shopping bag?", "...", "No you're right...", "Let's do it in gold"]
			},
			"jack white": {
				"replies": ["Just wanted to say you're my musical idol", "minimalistic music", "minimalistic visuals", "You're brilliant"]
			},
			"maksim": {
				"replies": ["Hey, Maksim!", "This site isn't very material", "I've let you down!"]
			},
			"breana": {
				"replies": ["My neighbor back in middle and highschool was named Breana", "She's an awesome person who has a wonderful pup who likes to prance"]
			},
			"brian dean": {
				"replies": ["Hey, old roomie!", "How's life?", "Still metaphyscial?", "Don't answer that."]
			},
			"matt": {
				"replies": ["I know a lot of matts!", "You guys are always a crazy bunch"]
			},
			"apoorva": {
				"replies": ["Hey, want to go to Novella?"]
			},
			"shelley": {
				"replies": ["I know an awesome woman named Shelley who loves ramen as much as I do", "Let's go soon?"]
			},
			"devon": {
				"replies": ["I know a guy named Devon", "The one guy who is younger than me when I was at Livefyre", "He's a kick-ass engineer"]
			},
			"mark zuckerberg": {
				"replies": ["Hey dude", "👍"]
			},
			"barbara": {
				"replies": ["I have a good family friend named Barbara", "She's pretty smart"]
			},
			"charlie": {
				"replies": ["I have a good family friend named Charlie", "He's a sports almanac!"]
			},
			"matias duarte": {
				"replies": ["I'm a huge fan!", "webOS was my jam", "And Material Design...", "Lovin' it"]
			},
			"immad": {
				"replies": ["I worked with an Immad a few years back", "He's ruthless at board games!"]
			},
			"jude": {
				"replies": ["I worked with a Jude a few years back", "He's a spontaneous guy who is a lot of fun"]
			},
			"dan": {
				"replies": ["I know a few dans", "The common thread of all dans are that they are great, stand-up guys"]
			},
			"kermit": {
				"replies": ["It's time to play the music..."]
			},
			"miss piggie": {
				"replies": ["It's time to light the lights..."]
			},
			"fozzie": {
				"replies": ["It's time to get things started..."]
			},
			"gonzo": {
				"replies": ["Am I worthy?", "Of Gonzo the Great!?"]
			},
			"pepe": {
				"replies": ["Pepe is my favorite muppet", "He's the shrimp"]
			},
			"rizzo": {
				"replies": ["Rizzo is an awesome muppet!", "I had a stuffed animal of him as a kid"]
			},
			"leon": {
				"replies": ["Leon was my favorite character on this show called The Puzzle Place", "I carried around the stuffed animal of him for years"]
			},
			"marie|maria": {
				"replies": ["That's my grandmother's name", "She's a great cook"]
			},
			"arlene": {
				"replies": ["That's my grandmother's name", "She's really cool", "She used to play Super Nintendo with us as kids"]
			},
			"don": {
				"replies": ["Don, is that you?", "What is happiness?", "It's a moment before you need more happiness"]
			},
			"rasheed": {
				"replies": ["Hey, Rasheed!", "Ready to be a brogrammer?"]
			},
			"ben": {
				"replies": ["I have a friend named Ben who I used to work with", "Plus, I used to eat a lot of Uncle Ben's rice bowls...", "TMI?"]
			},
			"brenna": {
				"replies": ["Hey, Brenna!", "I wish there were geology classes for adults", "taught by Hana"]
			},
			"kayla": {
				"replies": ["I have a friend named Kayla", "She's really into cats", "and cat sweaters"]
			},
			"jonathan": {
				"replies": ["I know a lot of Jonathans", "Like 50% of them have beards"]
			},
			"jack": {
				"replies": ["I have a good friend named Jack", "He's what you'd call and artíst"]
			},
			"nolan": {
				"replies": ["I have a friend named Nolan!", "aka The Pumpkin King", "Gotta love old online handles..."]
			},
			"jen": {
				"replies": ["I have a friend named Jen", "She knows how to treat yo' self"]
			},
			"arjun": {
				"replies": ["Arjun, Arjun, Arjun", "Miss you brehhh"]
			},
			"ryan": {
				"replies": ["Ryan's are a unique type of person", "Ratchet at their core", "haha", "I kid, I kid"]
			},
			"zain": {
				"replies": ["I know a guy named Zain", "He has a unique relationship with the color black", "And pulls it off flawlessly"]
			},
			"francisco": {
				"replies": ["I know you eat healthy", "And I know you don't like beer", "But one day we will get beers and some greasy hamburger", "And it will be glorious"]
			},
			"jade": {
				"replies": ["I just started working with a guy named Jade", "He's got some great tattoos and frontend skillz...", "with a Z..."]
			},
			"praveen": {
				"replies": ["Let's do animations, Praveen!", "You know you want to!"]
			},
			"simon": {
				"replies": ["Simon says touch your hand to your nose", "Simon says you probably hate this joke if you're name is really Simon", "Simon says I'm still running with it"]
			},
			"george": {
				"replies": ["George was my grandfather's name"]
			},
			"jerry": {
				"replies": ["You're not Jerry Seinfeld are you?", "Wanna get in a car and get some coffee?"]
			},
			"jim": {
				"replies": ["Jim was my grandfather's name"]
			},
			"shari": {
				"replies": ["Hey, Shari!", "WHEN ARE YOU VISITING SF!?"]
			},
			"janiel": {
				"replies": ["I have a great friend named Janiel", "She sends me postcards from all over the world!", "Must be neat to travel so much"]
			},
			"bill": {
				"replies": ["Like Mr. Bill?", "OH NOOOOooooooooo"]
			},
			"becky": {
				"replies": ["Becky!", "Socks are a great present, you know"]
			},
			"troy": {
				"replies": ["I have a friend named Troy", "He's a stand-up dude"]
			},
			"josh": {
				"replies": ["Are you my cousin Josh?", "My friend Josh?", "So many Joshuas in my life!"]
			},
			"ethan": {
				"replies": ["I have a friend named Ethan", "He likes that show The Inbetweeners a lot"]
			},
			"poop": {
				"replies": ["Your parents have a shitty sense of humor..."]
			},
			"boobs": {
				"replies": ["Your parents must really like the female anatomy..."]
			},
			"fuck": {
				"replies": ["Do you kiss your mother with that mouth?", "I was only asking your name..."]
				}
		}
	},
	"1": {
		"name": "city",
		"question": ["I live in San Francisco", "...if you didn't already know that", "What city are you in right now?"],
		"answers": {
			"default": {
				"replies": ["I've never been there... yet", "I love traveling so perhaps I'll visit one day"]
			},
			"san francisco": {
				"replies": ["Cool, a local!", "You should grab coffee with me sometime", "I like coffee... almost a little too much..."]
			},
			"los angeles": {
				"replies": ["So you're a Californian too!", "I make my way down south every so often", "We should grab ramen!"]
			},
			"new york city|new york": {
				"replies": ["So when are you moving to Williamsburg?", "Just kidding... Sorta..."]
			},
			"nyc|sf|la": {
				"replies": ["Too lazy to type in full words, eh?"]
			},
			"london": {
				"replies": ["I've never been to the UK!", "Would love to visit soon, though"]
			},
			"paris": {
				"replies": ["\"Soup DeJour\" is about the extent of my French"]
			},
			"brooklyn": {
				"replies": ["Home of chya'boy!", "Uhhhhhh", "It's Jay-Z...", "I'm doing an impression of Jay-Z..."]
			},
			"washington dc": {
				"replies": ["ahhhh", "The land of many monuments", "or something like that"]
			},
			"coral springs": {
				"replies": ["Hey!", "I'm from there!"]
			},
			"coconut creek": {
				"replies": ["I used to live there!", "How's the ol' hangout doing?"]
			},
			"miami": {
				"replies": ["Ah", "A fellow Floridian!"]
			},
			"tampa": {
				"replies": ["Ooooh", "Is Mel's Hot Dogs still over near Busch Gardens?", "I used to eat there a lot!", "I get my Mel's dogs with pickles and ketchup or some chili"]
			},
			"orlando": {
				"replies": ["I hope it's not lovebug season"]
			},
			"beijing": {
				"replies": ["I've never been there!", "But I'm hoping I'll take my first trip sometime soon"]
			},
			"chicago": {
				"replies": ["I had a blast in Chicago in 2014", "Lots of public art there which is really cool", "But it gets way too cold for a Floridian like me to live there", "I'd die"]
			},
			"tokyo": {
				"replies": ["Tokyo is so much fun!", "I can't wait to get lost there again"]
			},
			"sao paulo": {
				"replies": ["It's fun to speak with people from so far away", "Have you been to Hopi Hari?"]
			},
			"mumbai": {
				"replies": ["It's fun to speak with people from so far away", "Mumbai is one of those destinations I'd love to see!", "Blast my lack of travel..."]
			},
			"las vegas|vegas": {
				"replies": ["Been to Raising Cane's lately?", "That sauce haunts my dreams!"]
			},
			"canada": {
				"replies": ["The great north!"]
			},
			"mexico": {
				"replies": ["South of the border!"]
			},
			"boca|boca raton": {
				"replies": ["My parents live in Boca"]
			},
			"new orleans": {
				"replies": ["Please send me twelve 🍹grenades in the mail", "...", "on second thought, please don't"]
			},
			"berlin": {
				"replies": ["If you ever take a trip to the states", "I'd pay you money to bring me a doner kebab or some currywurst"]
			},
			"stockholm": {
				"replies": ["I'm super jealous of the shops you get to visit", "*drool*"]
			},
			"amsterdam": {
				"replies": ["What a gorgeous city!", "Every corner was so exciting for me when I visited", "and those canals are amaizng!"]
			},
			"copenhagen": {
				"replies": ["Tell the baristas at The Coffee Collective that Jordan says hi"]
			},
			"shanghai": {
				"replies": ["I've never been there!", "But I'm hoping I'll take my first trip sometime soon"]
			}
		}
	},
		"2": {
		"name": "know me from",
		"question": ["So you made it to chatting with me", "Can I tell you a bit about me?",],
		"answers": {
			"default": {
				"replies": ["... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit99</a>"]
			},
			"dont|don't": {
				"replies": ["Oh that is a shame.", "<a href=\"mailto:jordangetsthisemail@gmail.com\">Send me a note</a> or something if you want to"]
			},
			"work|coworker": {
				"replies": ["Oh you're a coworker?", "Awesome"]
			},
			"instacart": {
				"replies": ["Instacart, eh?", "Now take a Fernet shot", "I'm serious...", "You took one, right?", "TURNING WEBCAM ON TO VERIFY", "...", "Just Kidding..."]
			},
			"high*school": {
				"replies": ["Class of 2010", "Back in Florida", "Good times!"]
			},
			"school": {
				"replies": ["Those must've been the days!"]
			},
			"twitter": {
				"replies": ["That blue bird is responsible for a lot of friendships"]
			},
			"reddit": {
				"replies": ["Welcome redditor!", "Procrastinating, huh?"]
			},
			"¯\\_(ツ)_/¯": {
				"replies": ["Don't shrug at me", "we can be friends in the future"]
			},
			"medium": {
				"replies": ["Oh so you've read something I wrote?", "Hover is dead, don't you know?"]
			},
			"speaker|speaking|talk": {
				"replies": ["You saw me on-stage?", "Learn anything?", "...", "Probably not"]
			},
			"mau": {
				"replies": ["Ahhh vegas!"]
			},
			"initialized": {
				"replies": ["Oh so you're into design systems?", "Let me know if you ever want to chat more about the topic"]
			}
		}
	},
	"3": {
		"name": "know me from",
		"question": ["So you made it to my personal site", "How do you know me?"],
		"answers": {
			"default": {
				"replies": ["That's... quite specific"]
			},
			"dont|don't": {
				"replies": ["Oh that is a shame.", "<a href=\"mailto:jordangetsthisemail@gmail.com\">Send me a note</a> or something if you want to"]
			},
			"work|coworker": {
				"replies": ["Oh you're a coworker?", "Awesome"]
			},
			"instacart": {
				"replies": ["Instacart, eh?", "Now take a Fernet shot", "I'm serious...", "You took one, right?", "TURNING WEBCAM ON TO VERIFY", "...", "Just Kidding..."]
			},
			"high*school": {
				"replies": ["Class of 2010", "Back in Florida", "Good times!"]
			},
			"school": {
				"replies": ["Those must've been the days!"]
			},
			"twitter": {
				"replies": ["That blue bird is responsible for a lot of friendships"]
			},
			"reddit": {
				"replies": ["Welcome redditor!", "Procrastinating, huh?"]
			},
			"¯\\_(ツ)_/¯": {
				"replies": ["Don't shrug at me", "we can be friends in the future"]
			},
			"medium": {
				"replies": ["Oh so you've read something I wrote?", "Hover is dead, don't you know?"]
			},
			"speaker|speaking|talk": {
				"replies": ["You saw me on-stage?", "Learn anything?", "...", "Probably not"]
			},
			"mau": {
				"replies": ["Ahhh vegas!"]
			},
			"initialized": {
				"replies": ["Oh so you're into design systems?", "Let me know if you ever want to chat more about the topic"]
			}
		}
	},
	"4": {
		"name": "job",
		"question": ["What do you do for a living?"],
		"answers": {
			"default": {
				"replies": ["That's quite the job!"]
			},
			"design|designer": {
				"replies": ["I'm a designer too!", "I work at Instacart on the customer core experience team"]
			},
			"dentist": {
				"replies": ["I have an honest quesiton", "Would it be cheaper keep my real teeth or to yank all my teeth out right now...", "and then replace them all with fake teeth?", "On second thought...", "I don't want to know"]
			},
			"engineer|programmer|eng|developer": {
				"replies": ["I work with programmers a lot", "And I actually went to school for CompSci"]
			},
			"doctor": {
				"replies": ["What's up, doc?", "You're not laughing..."]
			},
			"sales|business|bd": {
				"replies": ["ABC", "Always", "Be", "Closing"]
			},
			"gardener": {
				"replies": ["I envy people who make the world a little greener"]
			},
			"teacher": {
				"replies": ["That's an important job!", "Gotta teach the next generation, y'know?"]
			},
			"unemployed": {
				"replies": ["Vacation 365, eh?"]
			},
			"ceo": {
				"replies": ["A very important businessman, are you?", "Running companies and shit!", "Cool"]
			},
			"fuck": {
				"replies": ["...", "Geez...", "You're hard to have a conversation with"]
			},
			"artist|art|painter": {
				"replies": ["Wow!", "In an alternate reality, I think I might've been an artist.", "But instead I use my creative abilities to help the forces of function moreso", "That said, I've been trying to draw more..."]
			},
			"intern": {
				"replies": ["Well now that I know that...", "Can you grab me a coffee?", "I take mine black."]
			},
			"mom|mother": {
				"replies": ["Taking care of kids can be a thankless job", "Here's to the mothers of the world!"]
			},
			"recruiter|recruiting": {
				"replies": ["You're probably looking for the about page to learn a bit more about me", "Click that tab below ↘️"]
			}
		}
	},
	"5": {
		"name": "like dogs?",
		"question": ["This is going to be odd but...", "I'm curious – do you like dogs?"],
		"answers": {
			"default": {
				"replies": ["Woah, don't get so excited"]
			},
			"yes": {
				"replies": ["I really like dogs too!"]
			},
			"love|much|a lot": {
				"replies": ["Love is a strong word", "But I'd describe myself that way too", "🐶🐶🐶"]
			},
			"no": {
				"replies": ["You have no soul, huh?", "In the words of Bill Murray, \"I’m suspicious of people who don’t like dogs, but I trust a dog when it doesn’t like a person.\""]
			},
			"hate": {
				"replies": ["HATE!?", "Wow", "That's a strong opinion"]
			},
			"cats": {
				"replies": ["Cats are cool and all", "But dogs!", "Dogs are forever"]
			},
			"eat": {
				"replies": ["EAT!?", "But... dogs!", "Alright, you dog eater..."]
			},
			"kill|death": {
				"replies": ["You're kind of disturbed", "Moving along..."]
			}
		}
	},
	"6": {
		"name": "favorite animal",
		"question": ["Speaking of dogs...", "What's your favorite animal?"],
		"answers": {
			"default": {
				"replies": ["I guess that's an animal worth loving..."]
			},
			"monkey": {
				"replies": ["Quit monkeying around!", "But really... a monkey?"]
			},
			"dog": {
				"replies": ["I bet you have had a furry little friend in your life who has kept you company before"]
			},
			"cat": {
				"replies": ["Meow!", "When I was growing up, my cousin had some of those hairless cats...", "Pretty odd animals if you ask me"]
			},
			"snake": {
				"replies": ["A snake?", "Really?"]
			},
			"cow": {
				"replies": ["Is that because you really like hamburgers?", "..."]
			},
			"parrot": {
				"replies": ["Polly wanna cracker?"]
			},
			"kangaroo": {
				"replies": ["You must be quite...", "Jumpy!"]
			},
			"giraffe": {
				"replies": ["I feel like Giraffes would be fun to ride", "You must feel like you could do ANYTHING on the back of one of them!"]
			},
			"lion": {
				"replies": ["Simba...", "Remember... Who... You... Are..."]
			},
			"tiger": {
				"replies": ["Stripes on stripes on stripes"]
			},
			"wolf": {
				"replies": ["The lone wolf!"]
			},
			"mouse": {
				"replies": ["You should change that... and quick!", "Disney might sue you for copyright!"]
			},
			"dinosaur|rex": {
				"replies": ["I'd like to jump on the back of a dinosaur", "a dinosaur with BATTLE ARMOR!"]
			},
			"koala": {
				"replies": ["those drop bears!"]
			},
			"penguin": {
				"replies": ["Flightless birds?", "They are pretty cute though..."]
			},
			"otter": {
				"replies": ["Is it because they hold hands when they sleep?"]
			},
			"pegasus": {
				"replies": ["How majestic!", "Neigh...."]
			}
		}
	},
	"7": {
		"name": "spirit animal",
		"question": ["Is that your spirit animal?"],
		"answers": {
			"default": {
				"replies": ["Only someone in tune with their spirit animal would know that..."]
			},
			"no|nah|wrong": {
				"replies": ["It was worth a guess..."]
			},
			"yes|duh|of course": {
				"replies": ["I'm an amazing guesser, huh?"]
			},
			"not sure|don't know|dont know|idk|maybe": {
				"replies": ["Maybe one day you'll go out, deep into the woods", "And you'll find your spirit animal", "Although, I'm betting it's a chicken 🐓"]
			}
		}
	},
	"8": {
		"name": "are you spiritual?",
		"question": ["My spirit animal is Betty White.", "Speaking of spirituality, would you say you are spiritual?"],
		"answers": {
			"default": {
				"replies": ["That's one way to put it!"]
			},
			"very|yes": {
				"replies": ["You are at one with your spiritual side, huh?", "I wonder if that says anything about you on a deeper level"]
			},
			"no": {
				"replies": ["Science is more your thing?", "I'd say I'm in that ballpark as well"]
			},
			"not sure|don't know|dont know|idk|maybe": {
				"replies": ["It's OK not to know", "You'll figure it out someday"]
			},
			"kinda|kind of|sorta|sort of": {
				"replies": ["You're kind of a half science, half faith sort of person I guess", "You must be very balanced"]
			}
		}
	},
	"9": {
		"name": "favorite hobby",
		"question": ["This got serious very quickly, didn't it?", "Let's lighten it up...", "What's your favorite hobby?"],
		"answers": {
			"default": {
				"replies": ["That's a hobby I never considered!", "Everyone needs a hobby to pass the time", "or let out their frustrations"]
			},
			"comic|comics": {
				"replies": ["I'm a huge comic collector", "You can find me at Mission Comics every Wednesday", "I'm a big Marvel guy, but I love the unique Indy comic", "I even have a website for comic fans.", "<a href=\"http://neuecomics.com\">Check out Neue Comics</a>"]
			},
			"programming|coding|code": {
				"replies": ["Got some side projects you've been coding?", "That's always fun to do on the weekends", "In fact, this site was a little side project of mine, obviously"]
			},
			"biking|bike": {
				"replies": ["🚴🚴🚴🚴🚴"]
			},
			"rock climbing": {
				"replies": ["Is that dangerous?"]
			},
			"video games|gaming": {
				"replies": ["I play a lot of video games myself", "I can definitely take you in Super Smash Bros."]
			},
			"gardening|garden": {
				"replies": ["Watching something grow is a really enjoyable thing", "Also, plants are so weird sometimes!"]
			},
			"nothing|no|none|don't have|dont have": {
				"replies": ["You should really find a hobby while you're young", "It makes you a more interesting person"]
			},
			"reading": {
				"replies": ["Book worm alert!", "I like reading a lot of sci-fi", "and I read even more comic books, if that counts as \"reading\""]
			},
			"art|painting|drawing": {
				"replies": ["being creative is a passion of mine too", "Colors, lines, expression...", "It's a rewarding hobby"]
			}
		}
	},
	"10": {
		"name": "ending",
		"question": ["Look, I hate to do this", "But I have to run", "Sorry we couldn't chat even more, but it was a pleasure.", "You can follow me on <a href=\"http://twitter.com/jordanstaniscia\">Twitter</a> if you want to chat more", "See ya!"],
		"ending": true
	}
}


