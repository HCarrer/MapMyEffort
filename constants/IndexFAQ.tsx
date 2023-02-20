type ExplanationType = {
  text: string,
  id: string
}

type IndexFAQType = {
  title: string
  explanation: ExplanationType[]
  id: string
}

export const INDEX_FAQ: IndexFAQType[] = [
  {
    title: 'What is View My Effort?',
    explanation: [
      {
        text: "Suppose you have climbed 2400m in your last month cycling. Did you know that's the equivalent of climbing 3x the world's highest building, the Burj Khalifa? That's pretty high, huh?",
        id: "what_is_view_my_effort_first_paragraph"
      },
      {
        text: "View my Effort is a platform where Strava users can see their statistics in a more visual way, with real world distances.",
        id: "what_is_view_my_effort_second_paragraph"
      },
    ],
    id: 'what_is_view_my_effort'
  },
  {
    title: 'How it differs from Strava?',
    explanation: [
      {
        text: "Our objective is NOT to substitute Strava, but complement it with features that might be useful/cool to have.",
        id: "how_it_differs_from_strava_first_paragraph"
      },
      {
        text: "We do not record your data nor any of the things Strava records. We combine that data, with your consent, with the features we provide so you can enjoy even more your activities!",
        id: "how_it_differs_from_strava_second_paragraph"
      },
    ],
    id: 'how_it_differs_from_strava'
  },
  {
    title: 'Is my data safe?',
    explanation: [
      {
        text: "We do not store, alter or share any of your data provided by Strava. All of that data is kept on Strava's servers and we only read it from their official API integration while taking all the recommended safety precautions.",
        id: "is_my_data_safe_first_paragraph"
      },
      {
        text: "The login itself is done on their platform. This way we have no access to both your login and password.",
        id: "is_my_data_safe_second_paragraph"
      },
    ],
    id: 'is_my_data_safe'
  },
]