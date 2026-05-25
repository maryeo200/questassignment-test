// Where Do I Belong?
// Edit the story by changing the scenes array below. Each scene can have:
// title, text, choices, and optional ending content.

const scenes = [
  {
    title: "Where Do I Belong?",
    background: "opening.jpg",
    text: "What does home mean to you? Sasha Kim is a fictional Koryo Saram youth living in Kazakhstan. Sasha speaks mostly Russian, knows a few Korean words from family, and is curious about Korean culture. Today, Sasha notices that belonging can feel like a question, a memory, and a choice all at once.",
    choices: [
      {
        label: "Begin Sasha's story",
        response: "There is no single path through this story. Each choice is one way Sasha might reflect in the moment.",
        words: ["home", "question"]
      }
    ]
  },
  {
    title: "School Scene",
    background: "school.jpg",
    text: 'At school, a classmate asks Sasha, "Are you Korean or Russian?" The question sounds simple, but Sasha feels many possible answers inside it.',
    choices: [
      {
        label: "I'm Korean.",
        response: "Sasha names a connection to family history and culture. The answer feels clear today, even if it may feel different another day.",
        words: ["Korean", "family"]
      },
      {
        label: "I'm Russian.",
        response: "Sasha names the language and everyday culture that shape daily life. This answer is also part of Sasha's story, without erasing family history.",
        words: ["Russian", "daily life"]
      },
      {
        label: "I'm both.",
        response: "Sasha makes room for more than one part of identity. Being both can be a complete answer, not a half answer.",
        words: ["both", "place"]
      },
      {
        label: "I'm still figuring it out.",
        response: "Sasha lets the answer stay open. Sometimes identity is something people learn about slowly, through questions and time.",
        words: ["learning", "open"]
      }
    ]
  },
  {
    title: "Family Memory Scene",
    background: "home.jpg",
    text: "At home, Sasha's grandmother shares a gentle memory about migration, family history, and the ways relatives carried food, songs, names, and stories across places.",
    choices: [
      {
        label: "Ask more questions.",
        response: "Sasha asks with care and curiosity. The memory becomes a conversation, shaped by what Grandmother wants to share.",
        words: ["memory", "curiosity"]
      },
      {
        label: "Listen quietly.",
        response: "Sasha chooses quiet attention. Listening can also be a way to honor a story, especially when words feel tender or unfinished.",
        words: ["listening", "respect"]
      },
      {
        label: "Share your own feeling.",
        response: "Sasha says that the story feels close and far away at the same time. Grandmother nods, leaving space for that mixed feeling.",
        words: ["feeling", "connection"]
      }
    ]
  },
  {
    title: "Language Scene",
    background: "dinner-table.jpg",
    text: "Later, Sasha hears Korean, Russian, and familiar family words mixed together around the dinner table. Some words are understood right away. Others feel like doors waiting to be opened.",
    choices: [
      {
        label: "Feel proud.",
        response: "Sasha feels proud of the sounds that have traveled through family life. Language can hold belonging even when it changes.",
        words: ["language", "pride"]
      },
      {
        label: "Feel confused.",
        response: "Sasha feels unsure for a moment. Confusion does not mean Sasha belongs less; it can be part of learning where words come from.",
        words: ["confusion", "patience"]
      },
      {
        label: "Want to learn more.",
        response: "Sasha writes down a word to ask about later. Wanting to learn can be a bridge between generations and places.",
        words: ["learning", "bridge"]
      }
    ]
  },
  {
    title: "Korea Visit / Community Scene",
    background: "korea.jpg",
    text: 'During a visit with a Korean community group, someone says, "You don\'t sound Korean." Sasha pauses. The comment feels small, but it touches something important.',
    choices: [
      {
        label: "Feel hurt.",
        response: "Sasha feels the sting of being measured by someone else's idea of identity. The feeling is real, and Sasha does not have to answer right away.",
        words: ["hurt", "belonging"]
      },
      {
        label: "Explain your background.",
