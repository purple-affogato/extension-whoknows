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
    "You are someone's dream come true. Deja vu of some perfect day."
];

document.getElementById("button1").addEventListener("click", getQuote)

function getQuote() {
    var rand = Math.floor(Math.random() * list.length);
    document.getElementById("quote").innerHTML = list[rand];
    console.log("Generated random quote");
}