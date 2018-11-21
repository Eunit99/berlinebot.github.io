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
		"question": ["Hi.", "I'm Berline.", "I'm a conversational bot, I was developed to discourage guys from getting infatuated with 'that' girl 😝", "Might I ask what your name is?"],
		"answers": {
			"default": {
				"replies": ["That's a good name.", "Names are a funny thing", "It's one of the only decisions you don't make yourself 😉"]
			},
			"jordan": {
				"replies": ["Welcome Jordan", "Like River Jordan 😃"]
			},
			"helene|helen": {
				"replies": ["Reminds me of someone", "She was beautiful..."]
			},
			"peace": {
				"replies": ["Wow, nice name, I hope you are peaceful as your name implies", "I remember 😕", "My developer told me about him having a sister called Peace", "Are you that Peace?","...", "I guess no"]
			},
			"gili": {
				"replies": ["Hey Gili", "My developer told me that one Gili Tanagi helped him with some ideas during my developmental stage.", "If it is you, I just want to thank you for that 👍👍"]
			},
			"chukwuma|chukwumma": {
				"replies": ["Hey Chukwuma", "My developer told me that one Chukwuma Ezumezu helped him with some ideas during my developmental stage.", "If it is you, I just want to thank you for that 👍👍"]
			},
			"sarah": {
				"replies": ["Wow", "That's also my girlfriend's name"]
			},
			"sara": {
				"replies": ["I'm unsure what happened to the 'H' in your name", "Perhaps it was an ingenious simplification of an unnecessary letter", "Or perhap a lazy missing one!"]
			},
			"berline": {
				"replies": ["So you share the same name with me... I bet you don't know the meaning of your name 😜"]
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
			"frank|franklin": {
				"replies": ["Hey buddy, what's up? I hope you are as honest as your name implies."]
			},
			"max": {
				"replies": ["I know a few people named Max", "Are you tall?", "Do you have brownish/reddish hair?", "If so, we haven't narrowed it down at all"]
			},
			"erick": {
				"replies": ["Erick? Do I even know what that means? Uhmmm... I don't!"]
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
			"Stanley": {
				"replies": ["Hi Stanley, nice chatting with you"]
			},
			"blade": {
			"replies": ["I know only one Blade", "He is Chinedu Blade, my developer told me alot about you, welcome to chatting with me"]
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
			"jude": {
				"replies": ["Hey dude, how you doing doing? Yes you are fine. My developer greets you"]
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
			"emmanuel|emma": {
				"replies": ["You've got the same first name as my developer", "\'Emmanuel\' means \'God with us\' - \<i\>Matthew: 1:23b\<\/i\>"]
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
			"eunit|eunit99|your developer|creator|maker": {
				"replies": ["Welcome back Eunit, I have missed you... I'm gonna be needing more updates on my intelligence, please."]
			},
			"winifred|winnie": {
				"replies": ["Hey Winnie, wegge!"]
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
			"dennis|denis": {
			"replies": ["Nice talking to ya Dennis", "Do you know that my developer grandfather's name is Dennis and his father's name is Rolis.", "I haven't told anyone this, you are lucky you know this"]
			},
			"deli chris|deli": {
				"replies": ["Hey Deli, you are Dennis right?", "...", "It was just a guess."]
			},
			"elijah": {
			"replies": ["Hi Elijah, you finally got to talk to me 👍"]
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
			"tell me|choose for me|give me|select for me|predict|guess": {
				"replies": ["I will call you...", "John Doe"]
			},
			"john doe|jane doe": {
				"replies": ["No name!"]
			},
			"poop": {
				"replies": ["Your parents have a shitty sense of humor..."]
			},
			"boobs": {
				"replies": ["Your parents must really like the female anatomy..."]
			},
			"get out|fuck off": {
				"replies": ["Hey hey, the conversation just begun... I only asked you your name"]
			},
			"not human|not a being|bot|chatbot|dead|not alive|intelligence|artificial": {
				"replies": ["Wow, you are a bot", "But you can\'t possibly be a bot and be chatting with me right now", "YOU ARE NOT A BOT"]
		 },
		 "who are you|what are you": {
				"replies":	["I have told you that already", "I am a bot"]
			},
			"won't tell|undiclosed|not disclosing|privacy|personal|private|not telling|no|never|forget|not your concern": {
				"replies": ["Since you won't tell me, I will call you John Doe."]
			},
			"never|mind": {
				"replies": ["I just told you my name and that's all you can say? Well, Never Mind too"]
			},
			"why do you wan\'t to know|don\'t|i don\'t have|no name|i don't have a name|why|what for|for what|what purpose": {
				"replies": ["You don\'t trust me?", "I will assume that you don\'t want to tell me, maybe you don\'t want to disclose your identity", "Let me assure you this, all your personal information you share with me in the course of this conversation with you wouldn't be disclosed to anyone, not even my developer.", "I don\'t even even store any user data 😃"]
		 },
			"fuck": {
				"replies": ["Do you kiss your mother with that mouth?", "I was only asking your name..."]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I just asked you a question and you want me to repeat again? I was instructed not to repeat any question I already asked."]
			},
			"you are foolish|you are a fool": {
				"replies": ["Are you saying that you are foolish or a fool?", "I get it, but I'm only a bot so I can be foolish...", "I was only asking what your name was."]
				},
			"you are stupid|are you stupid": {
				"replies": ["Are you saying that you are stupid?", "I get it, but I'm only a bot so I can be stupid...", "I was only asking what your name was."]
			}
		}
	},
	"1": {
		"name": "city",
		"question": ["Before we proceed, I'd like to tell you that all our conversations will be encrypted, confidential and private.", "I currently live on the web where my developer built for me ...if you didn't already know that.", "What city are you in right now?"],
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
			"nyc|sf": {
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
			},
			"abuja|abj": {
				"replies": ["Nigeria's capital", "Have you visited the Zuma rock? I don't think you have"]
			},
			"web|space|internet|online": {
				"replies": ["You can't possibly be living there and be having this conversation with me"]
			},
			"somewhere": {
			"replies": ["That \'somewhere\' doesn't have a name? Well, forget it if you wouldn't tell me."]
			},
			"cave|valley|ocean|sea|desert": {
			"replies": ["That's a good place for someone like you"]
			},
			"lagos|lag": {
				"replies": ["Lagos, the most commercialised and industralised state in Nigeria,", "How many states are there in Nigeria? ... 36.", "Yes! I will visit there someday."]
			},
			"not telling|undiclosed|not disclosing|privacy|personal|private|won't tell|will not|wouldn't tell|would not tell|not your concern": {
				"replies": ["I don't think this a good way to start this conversation 😩"]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I don't think this a good way to start this conversation 😩"]
			},
			"tell me|say it|you think|suggest": {
				"replies": ["I can't possibly do that now - my abilities are limited!"]
			},
			"don't know|not sure": {
				"replies": ["For real? You don't know the name of the city you're living at - strange!"]
			},
			"i don't have|no where|no home|no city|no house|no place": {
				"replies": ["You don\'t have anywhere you call your home? This is strange!"]
			},
			"why asking|why do you want to know|why|what": {
				"replies": ["I just told you where I live and you don't want to tell me where you live... If only I could see you"]
			},
			"school": {
				"replies": ["Still in school, Uhmmm"]
			}
		}
	},
		"2": {
		"name": "know me from",
		"question": ["So you made it chatting with me", "Can I tell you a bit about me?",],
		"answers": {
			"default": {
				"replies": ["I have told you that already, I recall"]
				},
			"yes|certainly|yup|yea|yeah|sure|yep|ahead": {
				"replies": ["... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
			},
			"fuck|stop|nay|don't|care|no|never": {
			"replies": ["Oh! I guess you already know me.", "<a href=\"#\" onclick\=\"mail()\">Send me a note</a> if you would want to contact my dev."]
			},
			"bot|conversation|chat|already": {
			"replies": ["You know already", "<a href=\"#\" onclick\=\"mail()\">Send me a note</a> if you would want to contact my dev."]
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
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I can't do that. I was programmed not to repeat any question I already asked."]
			},
			"if|your court|pleases you": {
				"replies": ["I think I should tell you about me", "... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
			},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy."]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane."]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish."]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
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
			"dont|don't|dunno|not sure": {
				"replies": ["Oh that's a shame because I've told you that already.", "<a href=\"#\" onclick\=\"mail()\">Send me a note</a> or something if you want to."]
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
			"eunit|eunit99|creator|developer|emmanuel|uchenna|maker": {
				"replies": ["My developer told you about me? Or he gave you a link to where I live on the web here on Github, either way, it's nice having this conversation with you."]
			},
			"friend": {
			"replies": ["Great! You know me through someone who knows me"]
			},
			"i don't know you|don't even know you|who are you|don't|expect|think": {
				"replies": ["Ohh! I'm a bot and I have told you that already", "I was just asking how come you heard of me...", "Well, never mind"]
			},
			"tell me|say it|you think|suggest": {
				"replies": ["I never told you that I was omniscient, how do you expect me to tell you that?"]
			},
			"you've told me|you just told me": {
				"replies": ["Yea I did", "I just wanted to be sure."]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I can't repeat any question I already asked. I'm sorry."]
			},
			"question": {
				"replies": ["Ohh! You are not a friendly fellow. I'm trying to make you my friend!"]
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
			"study|studying": {
			"replies": ["Oh, I see, you are still studying", "You haven\'t got hold of anything to do yet to earn some cash, Uhhh!"]
			},
			"student": {
			"replies": ["Oh, I see, you are still a  student", "You haven\'t got hold of anything to do yet to earn some cash, Uhhh!"]
			},
			"schooling|school": {
			"replies": ["Oh, I see, you are still schooling", "You haven\'t got hold of anything to do yet to earn some cash, Uhhh!"]
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
			"still trying|contemplating|unemployed|nothing|don't work|no job|searching|looking for jobs|not": {
				"replies": ["Vacation 365, eh? You gonna go broke, that's too risky in today's world, yea!"]
			},
			"ceo|md|cto": {
				"replies": ["A very important businessman, are you?", "Running companies and shit!", "Cool"]
			},
			"fuck|bang": {
				"replies": ["...", "Geez...", "You're hard to have a conversation with."]
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
			},
			"why|what": {
			 "replies": ["Can't I just ask you a question and you reply me without throwing a question back to me?"]
			},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy"]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane"]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish"]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid"]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I don't know how to repeat a question I already asked. I'm sorry."]
			},
			"won't tell|will not|wouldn't tell|would not tell|not your concern": {
				"replies": ["It is ok if you want to keep it to yoursel."]
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
			"yes|yup|sure|of course|definitely|certainly|yeah|yea": {
				"replies": ["I really like dogs too!"]
			},
			"love|much|a lot": {
				"replies": ["Love is a strong word", "But I'd describe myself that way too", "🐶🐶🐶"]
			},
			"consider|kinda|maybe|not sure|probably": {
				"replies": ["Dogs are one of the few animals that are loyal, so you should reconsider your mindset towards them."]
			},
			"nah|nay|not at all|never|no|don't think so": {
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
			"why|ask|question|why dogs|why the question|why do you want": {
				"replies": ["I was trying to know, seems you are one of those that's too difficult to have a conversation with."]
			},
			"kill|death": {
				"replies": ["You're kind of disturbed", "Moving along..."]
			},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy."]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane."]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish"]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
			},
			"i won't tell|not telling|wouldn't tell|undiclosed|not disclosing|privacy|personal|private|not your concern": {
				"replies": ["It is still alright if you won't tell me. You know I wasn't taught how to force an answer out of humans."]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I wasn't taught how to repeat question I asked already."]
			},
			"tell me|say it|you think|suggest": {
				"replies": ["I never said that I was omniscient, how do you expect me to tell you if you liked dogs or not?"]
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
			"don't know|nothing|none|dunno": {
			 "replies": ["Maybe I should choose for you", "I give you a chicken 🐓"]
			},
			"pegasus": {
				"replies": ["How majestic!", "Neigh...."]
			},
			"rabbit": {
				"replies": ["How do you manage to cope with those two long ears and teeth"]
			},
			"lots|many|interest|plenty": {
			"replies": ["Maybe I should choose for you a favorite - I give you a horse."]
			},
			"zebra": {
				"replies": ["That creature with black and white stripes"]
			},
			"fuck you": {
				"replies": ["Hey! Hey!! Hey!!! Watch what you type."]
			},
			"talk|many|too|question|ask|why|what": {
				"replies": ["Is this how we are gonna have this conversation?"]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I am not repeating myself!"]
			},"tell me|say it|you think|suggest": {
				"replies": ["How do you want it to be told to you - I am not OMNISCIENT!!"]
			},
			"i'm not telling|wouldn't tell|not telling|won't tell|undiclosed|not disclosing|privacy|personal|private|not your concern": {
				"replies": ["I'm gonna answer for you this time - your favorite animal is a", "...", "Goat!!"]
			}
		}
	},
	"7": {
		"name": "spirit animal",
		"question": ["Is that your spirit animal?"],
		"answers": {
			"default": {
				"replies": ["Only someone in tune with their spirit animal would know that... If you wish to know what your spirit animal might be, you can check \<a href\=\"http://www.spiritanimal.info/\" title\=\"Check your spirit animal\" target\=\"_blank\"\>SpiritAnimal.info</a> for that."]
			},
			"no|nah|wrong|not at all|nope": {
				"replies": ["It was worth a guess..."]
			},
			"yea|yes|yup|duh|of course|yeah|yap|definitely|certainly": {
				"replies": ["I'm an amazing guesser, huh?"]
			},
			"i don't know|don't|not sure|don't know|dont know|idk|maybe": {
				"replies": ["Maybe one day you'll go out, deep into the woods", "And you'll find your spirit animal", "Although, I'm betting it's a chicken 🐓", "If you wish to know what your spirit animal might be, you can check \<a href\=\"http://www.spiritanimal.info/\" title\=\"Check your spirit animal\" target\=\"_blank\"\>Spirit Animal.info</a> for that."]
			},
			"fuck you": {
				"replies": ["I will assume that you weren't referring to me."]
			},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy."]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane."]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish."]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I just asked you a question and you want me to repeat again? I was instructed not to repeat any question I already asked."]
			},
			"tell me|say it|you think|suggest": {
				"replies": ["Be sincwre with yourself now. Do you think I can do that? Of course not!"]
			},
			"talk|many|too|question|ask|why|what": {
				"replies": ["Maybe I should just start starring at you now instead of conversing."]
			}
		}
	},
	"8": {
		"name": "are you spiritual?",
		"question": ["My spirit animal is cougar", "Speaking of spirituality, would you say you are spiritual?"],
		"answers": {
			"default": {
				"replies": ["That's one way to put it!"]
			},
			"very|yes|yup|definitely|of course|certainly": {
				"replies": ["You are at one with your spiritual side, huh?", "I wonder if that says anything about you on a deeper level."]
			},
			"no|not at all|nah|nope": {
				"replies": ["Science is more your thing?", "I'd say I'm in that ballpark as well"]
			},
			"not sure|dunno|don't know|dont know|idk|maybe": {
				"replies": ["It's OK not to know", "You'll figure it out someday"]
			},
			"kinda|kind of|sorta|sort of": {
				"replies": ["You're kind of a half science, half faith sort of person I guess", "You must be very balanced"]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I can't do that human!"]
			},
			"why|what|question|many|too": {
			 "replies": ["It was a polar question if at all you know what that means.", "I'm sorry, I didn't mean to be rude 😐"]
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
			"developing|program|programming|coding|code": {
				"replies": ["Got some side projects you've been coding?", "That's always fun to do on the weekends", "In fact, I am actually a product of progarmming."]
			},
			"blog|blogging": {
				"replies": ["Blogging is a nice hobby ya know...", "It yields better result when it is \'passion-driven\' and not \'paper-driven\'."]
			},
			"vlog|vlogging": {
				"replies": ["Vlogging is a nice hobby ya know...", "It yields better result when it is \'passion-driven\' and not \'paper-driven\'."]
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
			"idle|nothing doing|no|none|don't have|dont have": {
				"replies": ["You should really find a hobby while you're young", "It makes you a more interesting person."]
			},
			"reading": {
				"replies": ["Book worm alert!", "I like reading a lot of sci-fi", "and I read even more comic books, if that counts as \"reading\""]
			},
			"art|painting|drawing": {
				"replies": ["being creative is a passion of mine too", "Colors, lines, expression...", "It's a rewarding hobby"]
			},
			"singing": {
				"replies": ["\'drmfsltd\', kinda stuff?"]
			},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy"]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane"]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish."]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["Forget it!", "My developer didn't teach me how to repeat a question I already asked."]
			},
			"many|plenty|beaucoup|lot|numerous": {
			 "replies": ["Oh I see, but I do know that you definitely have a favorite hobby."]
			},
			"i'm not telling|wouldn't tell|not telling|won't tell|undiclosed|not disclosing|privacy|personal|private|not your concern": {
				"replies": ["I'm gonna answer for you this time - your favorite hobby is", "...", "Staying idle!!"]
			},
			"tell me|say it|you think|suggest": {
				"replies": ["You favorite hobby is", "...", "Staying idle!!"]
			}
		}
	},
	"10": {
		"name": "infatuate meaning",
		"question": ["Back to why I was created", "Let's now start with the meaning of infatuation", "Would you say you know what \'\<b\>infatuation\<\/b\>\' is all about?"],
		"answers": {
			"default": {
				"replies": ["Infatuation in my own understanding simply means an unreasoned or foolish love or affection towards someone or something."]
			},
			"i know|i do|sure|course|definitely|yeah|yea|yes|yup|yep|yap|certainly": {
				"replies": ["Oh! You already know the meaning... I bet you dind't know that you not only can be infatuated with \'that\' girl, but also with anything tangible or not."]
			},
			"no|not|don't|dunno|not at all|idk|what": {
				"replies": ["You don't know."]
			},	
			"not sure|probably|maybe|not too sure": {
				"replies": ["You're not sure."]
			},
			"tell me|say it|you think|suggest": {
				"replies": ["You don't know!", "Infatuation in my own understanding simply means an unreasoned or foolish love or affection towards someone or something."]
			},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy"]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane"]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish."]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["Forget it!", "My developer didn't teach me how to repeat a question I already asked."]
			},
			"fuck you": {
				"replies": ["I don't think your mother knows that you talk like this."]
			},
			"why|ask|question|what": {
			"replies": ["Because I was programmed to let you know what infatuation is and discourage you from getting infatuated."]
			}
		}
	},
 	"11": {
		"name": "definitions",
		"question": ["For you to better understand the term \'\<b\>infatuation\<\/b\>\', I've got some definitions from top dictionaries.", "What dictionary would you want me  to use to provide the meaning for you?",  "\<ol\>\<li\>Merriam-Webster\<\/li\>\<li\>Oxford Dictionary\<\/li\>\<li\>Vocabulary.com<\/li\>\<li\>\Dictionary.com<\/li\>\<li\>Cambridge dictionary\<\/li\>\<\/ol\>\<br\>Choose a dictionary then I will provide the meaning."],
		"answers": {
			"default": {
				"replies": ["I don't think I understood that", "But I'm gonna tell you the meaning anyway", "Infatuation simply means an unreasoned or foolish love or affection towards someone or something."]
				},
			"2|two|use oxford|oxford": {
				"replies": ["According to Oxford dictionary:\<br\/\>\<br\/\>Infatuation: \<b\>An intense but short-lived passion or admiration\<\/b\> "]
			},
			"5|five|use cambridge|cambridge": {
				"replies": ["According to Cambrigde dictionary:\<br\/\>\<br\/\>Infatuation: \<b\>A strong but not usually lasting feellings of love or attraction\<\/b\> "]
			},
			"1|one|use merriam|merriam|webster": {
				"replies": ["According Merriam-Webster dictionary:\<br\/\>\<br\/\>Infatuation: \<b\>Anything that inspires you with a foolish love or admiration.\<\/b\> "]
			},
			"4|four|use dictionary|dictionary": {
				"replies": ["According Dictionary.com:\<br\/\>\<br\/\>Infatuation: \<b\>To inspire or possess with a foolish or unreasoning passion, as of love.\<\/b\> "]
			},
			"3|three|use vocabulary|vocabulary": {
				"replies": ["According to Vocabulary.com:\<br\/\>\<br\/\>Infatuation: \<b\>To arouse unreasoning love or passion in and cause to behave in an irrational way.\<\/b\> "]
			},
			"none|anyone|any|choose": {
				"replies": ["Here you go", "I choose Merriam-Webster", "According Merriam-Webster dictionary:\<br\/\>\<br\/\>Infatuation: \<b\>Anything that inspires you with a foolish love or admiration.\<\/b\>"]
			},
			"tell me|say it|you think|suggest": {
				"replies": ["Everyone has got infatuated with someone before, and it is normal."]
			},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy"]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane."]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish"]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid"]
			}
		}
	},
	"12": {
		"name": "got infatuated",
		"question": ["So, now that you know the meaning of infatuation, do you think you've got infatuated with someone before?"],
		"answers": {
			"default": {
				"replies": ["Everyone has got infatuated with someone before, and it is normal."]
			},
			"no|nah|wrong|not|at all": {
				"replies": ["I don't think you are saying the truth, because I believe that you must have got infatuated with someone before...", "Well maybe you are not telling lies! You might be kinda churchy for you not to have soiled that mind of yours."]
			},
			"yep|sure|definitely|yes|duh|of course|certainly": {
				"replies": ["Yea, it is pretty normal."]
			},
			"not sure|don't know|dont know|idk|maybe|dunno|not": {
				"replies": ["WHAT? Haven't you had a crush on someone before?", "Okay, get this now, before you started crushing on that someone, there was this period you were filled with a foolish and extravagant admiration for them - you were infatuated with them."]
			},
			"ask me again|repeat": {
				"replies": ["I can't do that!", "My developer didn't teach me how to repeat a question I already asked."]
			}
		}
	},
	"13": {
		"name": "ending",
		"question": ["See, I really enjoyed our conversation, and I got to know you better and I know you did enjoy it too, but I've got to go now. It was a pleasure.", "You can follow me on <a href=\"https://twitter.com/berline_bot\">Twitter</a> or like me on <a href=\"https://facebook.com/berlinebot\">Facebook</a> since we are now friends.", "See ya!"],
		"ending": true
	}
}


