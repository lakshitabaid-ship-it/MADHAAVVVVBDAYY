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
    clockCaption: "Time works differently when we are together.",
    frames: [
      { caption: "us, somewhere unremarkable", hint: "drop your photo at leave this field emptyphoto-1.jpg" },
      { caption: "and then this happened",      hint: "drop your photo atleave this field emptyphoto-2.jpg" }
    ],
    coffeeNote: "It all started with a cup of coffee and a cookie, unknowingly, and turned into a mandatory date that threw you into something deeper and beautiful. Ironically, both of us are not going to drink coffee, but this will still remain the closest memory to both of us. I just don't depend on coffee and cookies like they are an important part for us."
  },

  /* 3. Lakshita GPT — sidebar threads, newest first. */
  gpt: {
    assistantName: "Lakshita GPT",
    greeting: "What's on your mind, Keshav?",
    subGreeting: "ask me anything. I've already thought about most of it.",
    pinnedQuestion:  "What does my 19th birthday mean to her?",

    threads: [
     {
  id: "fight",
  title: "What should I do after a fight?",
  when: "just now",
  question: "What should I do after a fight?",
  answer: "Go buy her ice cream.",
  bold: false
},
     {
  id: "slower",
  title: "Can time go slower?",
  when: "yesterday",
  question: "Can time go slower?",
  answer: "You cannot tell Bhaiya to make Maggi slower, or the train to go slower, or time to stop. You can just make the most of it and just add a little GPT type to it."
},
     {
  id: "hersheys",
  title: "How do I handle the kitchen Hershey's situation?",
  when: "last week",
  question: "How do I handle the kitchen Hershey's situation?",
  answer: "Okay, perfect. Now first make her believe that you care for her. When she is washing dishes, tell her to go and rest. When she's all happy and she hugs you and she goes and rests, call Maya, mess the kitchen up, and go off, like just disappear. When she comes back and she's annoyed because the kitchen is messy and is about to scream, just show up in front of her with her favorite food and your puppy faces. Just quietly clean the kitchen while she's doing the happy dance with the food. It's a win-win for everyone."
},
      {
  id: "cricket",
  title: "How do I watch cricket without her noticing?",
  when: "last week",
  question: "How do I watch cricket without her noticing?",
  answer: "Of course, add a little bit of GPT work, but the core answer should be: just ensure Samay is on your side. First, tell him to play along, and then just tell her that you have an early meeting and stuff, and go to sleep. After she sleeps, both of you quietly go and watch cricket. Worst-case scenario, if she catches you guys watching, you guys be good boys and carry the blanket and pillow straight out of the house door for the night. It is the best solution for everybody in this situation."
},
      {
  id: "dominant",
  title: "Can I have one day of the year?",
  when: "2 weeks ago",
  question: "Can I have one day of the year?",
  answer: "Once a year is a good option. She will allow it, don't worry. You can do so perfectly by ordering her to rest and not go out, by restricting her from dressing up and just relaxing in her pajamas, and by restricting her from cooking and just ordering food. After all of this, she will definitely feel like you have the upper hand and you have dominated for one entire day. Ultimately, you will be happy as well."
},
     {
  id: "belgaum",
  title: "Can we talk about Belgaum again?",
  when: "3 weeks ago",
  question: "Can we talk about Belgaum again?",
  answer: "It just happened. We just felt something we never felt before, and it was magical. No place can ever replace that, and she feels the same. It just happened. You guys just felt something you had never felt before. It was magical, and it was never planned. She thinks about it quite often, and it is a very special memory to her."
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
        image: "bus.jpg",
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
        image: "canteen.jpg",
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
        image: "train.jpg",
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
        { image: "beach.jpg",     label: "the beach",     note: "you ran, I ran, nobody caught anybody, we both lost on purpose" },
        { image: "icecream.jpg",  label: "chocolate cones", note: "ice cream as a facial treatment. highly recommended, very sticky" },
        { image: "canteen.jpg",   label: "fruit salad",   note: "two bowls, one spoon, an unfair amount of mango" },
        { image: "elderflowers.jpg", label: "elderflower", note: "the small yellow thing that turns up in every version of this" }
      ]
    }
  }
};
