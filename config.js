/* ------------------------------------------------------------------
   ALL THE WORDS LIVE HERE.  Edit this file, nothing else.
   ------------------------------------------------------------------ */

const SITE = {

  /* 1. Paste your Google Drive share link here. */
  driveLink: "PASTE-YOUR-GOOGLE-DRIVE-LINK-HERE",
  driveLabel: "Open it →",

  /* 2. Home page */
  home: {
    kicker: "nineteen",
    name: "Keshav",
    line1: "Happy 19th Birthday",
    /* Replace with your own paragraph. */
    lede: "Nineteen, and somehow still the person I want to tell everything to first. This little corner of the internet is ours — the coffee, the cookie, the clock, the temple, and all the miles in between.",
    sinceDate: "2025-12-05",   /* the Belgaum day. Drives the live counter. */
    clockCaption: "time behaves differently when you're in it",
    frames: [
      { caption: "us, somewhere unremarkable", hint: "drop your photo at assets/photos/photo-1.jpg" },
      { caption: "and then this happened",      hint: "drop your photo at assets/photos/photo-2.jpg" }
    ],
    coffeeNote: "coffee and cookie, the only pairing that has never once let us down."
  },

  /* 3. Lakshita GPT — sidebar threads, newest first. */
  gpt: {
    assistantName: "Lakshita GPT",
    greeting: "What's on your mind, Keshav?",
    subGreeting: "ask me anything. I've already thought about most of it.",
    pinnedQuestion: "What does my 19th birthday mean to you?",

    threads: [
      {
        id: "fight",
        title: "What to do after a fight?",
        when: "just now",
        question: "What to do after a fight?",
        /* The punchline thread. Answer renders in bold caps. */
        answer: "GO BUY ICE CREAM FIRST.",
        bold: true
      },
      {
        id: "slower",
        title: "Wish time went by slower",
        when: "yesterday",
        question: "Wish time went by slower",
        answer: "You can't slow it, but you can widen it. Days where nothing happens are the days that stretch the furthest backwards — that's why Belgaum still feels long even though it was one evening.\n\nSo the honest answer is: put more nothing in. More bus rides with no destination, more plates of rice we take too long to finish. Time only feels fast when it's all milestones and no minutes."
      },
      {
        id: "hersheys",
        title: "How to spread Hershey's on a kitchen wall",
        when: "last week",
        question: "How to spread Hershey's on a kitchen wall?",
        answer: "Technically: warm it slightly so it moves, use a flat bench scraper, work top to bottom, and accept that a wall is a very bad surface.\n\nRealistically: this is not a Hershey's problem, this is a 'we were bored and happy in a kitchen' problem. Keep the memory, let the wall go."
      },
      {
        id: "cricket",
        title: "How to watch cricket without being noticed by my partner",
        when: "last week",
        question: "How do I watch cricket without being noticed by my partner?",
        answer: "One: use earbuds, because sound is what gets you caught, not light. Two: the over is your unit of time — six balls, roughly four minutes, easy to disappear for. Three: honestly, just tell me. I'll bring the snacks and sit with you. Watching it together costs less than hiding it does."
      },
      {
        id: "dominant",
        title: "How do I be dominant one day of the year",
        when: "2 weeks ago",
        question: "How do I be dominant one day of the year?",
        answer: "Once a year is a good rule, because it makes it an occasion instead of a habit. Decide the day in advance, decide the two or three things that are yours to call that day, and be clear about it rather than cute and vague about it.\n\nThe part people miss: it only works if the other person gets to hand it over willingly. So ask first. That's not a mood killer, that's the whole mechanism."
      },
      {
        id: "belgaum",
        title: "The Belgaum discussion",
        when: "3 weeks ago",
        question: "Can we talk about Belgaum again?",
        answer: "We can. It was the 5th of December, it happened on a bus, and it is the reason I have a before and an after.\n\nWhat I keep coming back to is that nothing about it was planned. That's the whole point. You can't manufacture a Belgaum, you can only be the kind of people who let one happen on a random seat at the back of a bus.\n\n[Replace this with your own version of that day — it lives in SITE.threads in js/config.js]"
      },
      {
        id: "noface",
        title: "How to handle the no face",
        when: "last month",
        question: "How do I handle the no phase?",
        answer: "You handle it by not treating it like a verdict. A 'no' in January was never about whether we work — it was about timing, fear, and two people who were both too proud to say the smaller thing first.\n\nWhat actually helps: keep living normally, stay reachable but not waiting, and let the 'no' be true for exactly as long as it was true. The 5th of January taught me that. The 16th of March proved it."
      }
    ],

    /* Answer when he types something not in the list. */
    fallback: "I don't have a prepared answer for that one, which is rare, so let me say the unprepared version: I heard you.\n\n[Edit js/config.js → SITE.gpt.fallback to change what Lakshita GPT says to anything else.]"
  },

  /* 4. Vrindavan / temple page */
  temple: {
    gateKicker: "vrindavan",
    gateTitle: "Radha Raman",
    gateLine: "step in",
    innerGreeting: "You entered the way we always do — quietly, and then all at once.",
    murtiCaption: "Lalji keeps every version of us we've tried to forget.",

    /* The button that opens the chapters. */
    storyButton: "Lalji, tell us the story",
    storyIntro: "There were three days that made us. He remembers them in the order they happened. I remember them in the order they mattered.",

    chapters: [
      {
        id: "belgaum",
        date: "5 December 2025",
        place: "Belgaum · the last two seats of a bus",
        title: "Belgaum",
        image: "assets/photos/bus.jpg",
        /* Full narration shown inside the immersive bus scene. */
        text: [
          "It happened on a bus. That's the part nobody gets credit for.",
          "We were in the very last seats, the ones by the back window where the road keeps arriving behind you and pretending to be somewhere else. Your head found my shoulder somewhere past the third stop and never formally left it.",
          "Everything that mattered that evening was unplanned. That's why it's unexplainable — you can't describe a thing that wasn't designed. You can only point at it and say: December 5th. The bus. The last two seats.",
          "[Replace this with what actually happened in Belgaum. It lives in js/config.js → SITE.temple.chapters[0].text]"
        ],
        caption: "belgaum · 05.12.2025"
      },
      {
        id: "noface",
        date: "5 January 2026",
        place: "The college canteen · across a table",
        title: "The no phase",
        image: "assets/photos/canteen.jpg",
        text: [
          "Then came January, and January said no.",
          "We sat across from each other at that small table with two plates of rice going cold between us, and the whole relationship happened in the silence around those plates. Rice in front of us. Everything else behind us.",
          "A lot of realisations land when you're not allowed to say them out loud. That table changed the shape of us — not by what got settled, but by what got survived.",
          "[Replace this with your exact text for the 5th of January. js/config.js → SITE.temple.chapters[1].text]"
        ],
        caption: "the no phase · 05.01.2026"
      },
      {
        id: "yes",
        date: "16 March 2026",
        place: "A train · standing, both of us",
        title: "You said yes",
        image: "assets/photos/train.jpg",
        text: [
          "March 16th. A train, and neither of us sitting down.",
          "You were holding a folded piece of paper with four letters on it and a box of pasta like it was a ring, and I laughed so hard a woman two seats down looked at me.",
          "Yes is a small word. It took us a whole winter to earn it.",
          "[Replace this with your exact text for the 16th of March. js/config.js → SITE.temple.chapters[2].text]"
        ],
        caption: "yes · 16.03.2026"
      }
    ],

    /* The train journey — five breakdowns, then the smooth stretch. */
    journey: {
      title: "and then the train kept going",
      hint: "hover a signal for what went wrong · press the throttle to move ahead",
      startLabel: "the platform",
      stops: [
        { name: "the first silence", text: "Two days of nothing, and I spent all of them re-reading one message. We almost lost it to a thing neither of us said out loud." },
        { name: "the misunderstanding", text: "A sentence taken the wrong way on purpose, because it was easier to be angry than to be hurt. Somebody almost walked." },
        { name: "the other people", text: "Everyone had an opinion about us, and for a while we listened to them instead of each other. That wheel slipped badly." },
        { name: "the distance", text: "Kilometres do the quiet kind of damage. Not a fight — just the slow erosion of ordinary days we weren't sharing." },
        { name: "the almost", text: "The closest one. No dramatic scene, just a Tuesday where it genuinely looked like the end, and neither of us said the last word." }
      ],
      finalTitle: "the smooth stretch",
      finalText: [
        "Five times this train should have derailed. Five times it didn't, and I still don't fully know why.",
        "The journey ahead isn't going to be easy. I'm not going to stand here and promise you a straight, flat line — we've both seen what that costs.",
        "But it's with you, so it's worth it. Every rough patch was worth the next one, and the next one was worth you.",
        "I love you so much. Happy 19th. Come on — the track's clear from here."
      ]
    },

    /* The playful interludes that run underneath the rough patches. */
    fun: {
      title: "the parts that were just fun",
      items: [
        { image: "assets/photos/beach.jpg",     label: "the beach",     note: "you ran, I ran, nobody caught anybody, we both lost on purpose" },
        { image: "assets/photos/icecream.jpg",  label: "chocolate cones", note: "ice cream as a facial treatment. highly recommended, very sticky" },
        { image: "assets/photos/canteen.jpg",   label: "fruit salad",   note: "two bowls, one spoon, an unfair amount of mango" },
        { image: "assets/photos/elderflowers.jpg", label: "elderflower", note: "the small yellow thing that turns up in every version of this" }
      ]
    }
  }
};
