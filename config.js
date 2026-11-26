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
    innerGreeting: "You were always there.",
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
  "I think Belgaum was the beginning of something neither of us really saw coming. It started with the two of us sitting next to each other in the front seats of the bus. Something about that day just felt different. We went to a café, had our usual deep conversations about life, death, and everything in between, and spent time together just as we always had. Except, somehow, this time felt different.",

  "And then there was you, holding my hand while crossing the road to the bakery. Except you didn't let go once we crossed. You held on all the way there, until we realised everyone was at the bakery and we probably had to let go. And somehow, neither of us ever spoke about it again.",

  "Then came that bus stop where you dropped me off, and the next morning, when I rested my head on your shoulder and you gently massaged it because it was hurting. You even offered to come along and get medicines. Such a small gesture, but so very you.",

  "And who could forget the journey back? The last seats of the bus, the dim lights, that little disco light, and me leaning on your shoulder. Both of us looking at each other, somehow knowing exactly what the other wanted to say, but choosing not to say it. Maybe some things really are better left unsaid.",

  "I don't think Belgaum was about one particular moment. It was all the little things, and the way something so familiar suddenly felt so different. Neither of us can quite explain it even today. Only Lalju knows.",

  "And had you not reached out saying you wanted to talk about something, who knows where we would be today? You had the courage to address what neither of us had spoken about. I didn't, but you did. And I'm so glad you did.",

  "Because that conversation became the beginning of something truly magical. And Belgaum will always be special because it was where you became the beginning of a story that means so much to me."
]
        caption: "belgaum · 05.12.2025"
      },
      {
        id: "noface",
        date: "5 January 2026",
        place: "The college canteen · across a table",
        title: "The no phase",
        image: "canteen.jpg",
       text: [
  "5th January was the day you said no. Not because there wasn't something between us, but because you felt that the path you wanted to take spiritually needed a different kind of commitment. You were thinking about your journey, your faith, and the person you wanted to become. And even though it was difficult, I think there was something incredibly beautiful about how honestly you chose to express that.",

  "I still remember the canteen that day. Somehow, amidst everything, there were smiles. A strange kind of happiness in knowing that perhaps this was part of something bigger than either of us could understand. Of course, the days that followed weren't quite as easy. There were tears, there were wishes that things could have worked out differently, and there was that visit to the Shiv temple. But somewhere along the way, I began to understand that some things cannot be forced or figured out. They have to be surrendered to.",

  "Ironically, the no phase taught us two things: just how much we wanted each other, and that we were capable of being okay even if the other person chose not to stay. It taught us patience, faith, and the difference between wanting something and trying to control when it happens.",

  "And perhaps that was the biggest lesson of all. We stopped trying to decide how the story had to unfold and left it to happen when it was meant to. Looking back, I'm grateful for that phase too. For your honesty, for the choices you made, and for everything that those days taught us. Because sometimes, even a no becomes an important part of the way to a yes."
]
        caption: "the no phase · 05.01.2026"
      },
      {
        id: "yes",
        date: "15 March 2026",
        place: "A train · standing, both of us",
        title: "You said yes",
        image: "train.jpg",
       text: [
  "And then came 15th March. The day you finally said yes. I still don't think you understand how completely you managed to catch me off guard. A long time ago, you had told me that if you ever said yes to me, you would make pasta for me. And you, a man who barely knows his way around a kitchen, actually made pasta, packed it, and brought it all the way on the train. As if that wasn't enough, you were carrying those little pieces of paper that simply said YES.",

  "I remember being completely blank. After everything, after the no, after all the waiting and surrendering, I was suddenly looking at a paper that said the exact opposite. I didn't know whether to laugh, scream, or just keep staring at it. And then you gave me that letter. Somehow, you had managed to turn an ordinary train journey into one of the sweetest memories of my life.",

  "And look at us now. This past year has been the sweetest one. You've shown me what it feels like to be cared for, respected, and genuinely looked after. From handling all my tantrums to making sure I'm okay, from the little things you do without being asked to the way you make me feel heard and valued, you've made love feel so gentle and reassuring.",

  "I hope you know how grateful I am for you. For the person you are, for the way you love, for the patience you have with me, and for all the ways you show up. If the no phase taught us surrender, the yes phase has taught me just how beautiful it can be when things finally fall into place. And if I could go back to that train journey, I'd still want to experience that moment of seeing those two letters in your hands for the very first time."
]
        caption: "yes · 15.03.2026"
      }
    ],

    /* The train journey — five breakdowns, then the smooth stretch. */
    journey: {
      title: "and then the train kept going",
      hint: "hover a signal for what went wrong · press the throttle to move ahead",
      startLabel: "the platform",
      stops: [
  {
    name: "The railway station",
    text: "The first rough patch happened at the railway station, when she finally told him everything. He was furious, and she felt terrible. It was one of those moments where everything became difficult to understand, and neither of them knew how to make it better immediately."
  },
  {
    name: "The Indore breakdown",
    text: "In Indore, everything that had been building up inside him came out at once. The comparisons about GPT being better, the feeling that she was always like this, and all the chaos of the misunderstanding came together. She cried, and it became a very unpleasant phase for both of them."
  },
  {
    name: "The dress misunderstanding",
    text: "A huge misunderstanding over one ground dress lasted two days. Neither of them could understand what the other was trying to say. They both cried, the discussions became difficult, and eventually they hugged it out. They did not let it defeat them, even though those two days were hard."
  },
  {
    name: "The day everything went quiet",
    text: "After a whole day of agitation, he felt bad the next morning. That evening, when they spoke about why, she made things worse by bringing up things from the past and explaining how she had felt. She cried through the day, they did not speak for the entire day, and he ignored her because he was disappointed. It was one of the saddest days for her."
  },
  {
    name: "The days we still chose each other",
    text: "There were moments when everything felt heavier than it needed to. There were misunderstandings, difficult conversations, and days when neither of them knew what to say. But even through all of it, they kept finding their way back to each other."
}
],
      finalTitle: "the smooth stretch",
      finalText: [
  "Everything has slowly been working around this without us realising and we couldn't be more grateful for you to have been a part of this story.",
  "The journey ahead isn't going to be easy. I'm not going to stand here and promise you a straight, flat line — we've both seen what that costs.",
  "But it's with you, so it's worth it. Every rough patch was worth the next one, and the next one was worth you.",
  "I love you so much. Happy 19th. Come on — the track's clear from here."
]
    },

    /* The playful interludes that run underneath the rough patches. */
    fun: {
      title: "the parts that were just fun",
     items: [
  {
    image: "beach.jpg",
    label: "the beach",
    note: "you ran, I ran, nobody caught anybody, we both lost on purpose"
  },
  {
    image: "icecream.jpg",
    label: "chocolate cones",
    note: "ice cream as a facial treatment. highly recommended, very sticky"
  },
  {
    image: "fruit-salad.jpg",
    label: "fruit salad",
    note: "two bowls, one spoon, an unfair amount of mango"
  },
  {
    image: "elderflowers.jpg",
    label: "yellow elderflower",
    note: "the national flower of the Bahamas, and a little piece of our story"
  },
  {
    image: "video-call.jpg",
    label: "a little closer, even from far away",
    note: "the video calls that made the distance feel smaller"
  },
  {
    image: "wound-care.jpg",
    label: "let me take care of that",
    note: "the day he cleaned her wound"
  },
  {
    image: "campus-chase.jpg",
    label: "The run for 23",
    note: "running around campus, chasing each other, and forgetting everything else"
  },
  {
    image: "metro-sunflowers.jpg",
    label: "An unforgettable day.",
    note: "a book, two sunflowers, and a moment she will always remember"
  },
  {
    image: "photo-booth.jpg",
    label: "photo booth memories",
    note: "All the crazy photo booth hugs and memories and stuff like that."
  }
]
    }
  }
};
