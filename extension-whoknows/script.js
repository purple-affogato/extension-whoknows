var list = [
    "never be a loser",
    "come on baby america!",
    "my love for you is like arm pit hair. Even if you shave it, it keeps growing longer and thicker.",
    "he who fears he will suffer, already suffers because he fears.",
    "don't delete your cringe. delete the part of you that cringes.",
    "you can only be free when even the desire of seeking freedom becomes a harness to you, and when you cease to speak of freedom as a goal and a fulfillment.",
    "when shall we meet again after this parting? for life is like the morning dew.",
    "go and catch some well-deserved Z's",
    "if i were to describe myself, i'm a confident woman. to put it in words, a woman of feeling. if you think you can do it, you can follow me.",
    "gobble gooble goodle moodle",
    "and i'm like, so tru!!",
    "it's time for your batDOOM!",
    "the better the ass, the better the man.",
    "anyone can be babygirl if you try hard enough.",
    "if it has abs, it can't be that bad.",
    "dee-double-u about it.",
    "Life is a beautiful galaxy. Be a writer, the genre is fantasy. A big big stage will open for me tomorrow. So that is who I am.",
    "You are someone's dream come true. Deja vu of some perfect day.",
    "And I walk like a lion, I'm making my own history. I don't know the answers, I just go my own way.",
    "I'm a confident person, but I do get depressed and cry alone at home sometimes. You can't help that because we're humans. It's okay to cry and make mistakes. People always make mistkaes and learn from them. Fall down again and again, then get up one more time. That's a confident woman.",
    "Be on the side that saves people. If both sides are the same, then choose to become a good person. Save the weak, protect the orphaned. You might not see a great difference between right and wrong, but... saving others is something just a bit wonderful.",
    "live, laugh, hehe :)",
    "Ah, inspiration, it comes, it comes.",
    "A song can go on even without ornaments or extra direction, as long as it has the main melody to be played. That's the most important thing. That's you. You're the main thing, the important thing, the conductor of my orchaestra. I love you. I love you like that."
];

document.getElementById("button1").addEventListener("click", getQuote)

function getQuote() {
    var rand = Math.floor(Math.random() * list.length);
    document.getElementById("quote").innerHTML = list[rand];
}