// Narrative + decision data for the HBO case.
// Scenes can be type "narrative" or "decision".
// Decision options include scoring + elaborated feedback.

const caseScenes = [
  {
    id: "intro-role",
    type: "narrative",
    title: "Your Role at HBO",
    text:
      "You are Leon DeNeve, a program manager at HBO. The streaming wars are intensifying and HBO must choose its strategic footing.",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=900"
  },
  {
    id: "vp-meeting",
    type: "narrative",
    title: "Meeting with the VP of Programming",
    text:
      "VP: “New entrants are crowding the market, content costs are rising, and churn is creeping up. We need a coherent plan for the next 12–24 months.”",
    image:
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&w=900"
  },
  {
    id: "dp-2019-orig-vs-license",
    type: "decision",
    title: "Decision Point: Originals vs Licensing (2019)",
    text:
      "After reviewing internal analyses, you’ve narrowed options. Pick your recommendation. You can change your selection until you submit.",
    image: null,
    options: [
      {
        label: "Prioritize original content (build HBO-owned IP).",
        tier: "best",
        score: 2,
        headline: "Best choice — builds durable control of supply.",
        why_this:
          "Owning IP reduces supplier power in the long run, creates enduring differentiation, and compounds brand equity.",
        why_not_best:
          null
      },
      {
        label: "License more from external studios for rapid catalog growth.",
        tier: "poor",
        score: 0,
        headline: "Poor choice — reinforces supplier dependence.",
        why_this:
          "Faster short-term volume, but rental content keeps leverage with outside studios and raises renewal risk.",
        why_not_best:
          "Originals convert cost into assets; licensing turns budget into a metered expense with limited defensibility."
      },
      {
        label: "Split resources evenly between licensing and originals.",
        tier: "okay",
        score: 1,
        headline: "Okay — hedges bets but dilutes momentum.",
        why_this:
          "Balanced exposure can manage risk when uncertainty is high.",
        why_not_best:
          "Focus accelerates capability building; a split slows compounding IP advantages versus competitors."
      }
    ]
  },
  {
    id: "narr-entrants",
    type: "narrative",
    title: "Competitive Pressure Increases (2020)",
    text:
      "Disney+, Apple TV+, and Peacock intensify rivalry. Price moves and exclusives dominate headlines.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=900"
  },
  {
    id: "dp-2020-positioning",
    type: "decision",
    title: "Decision Point: Positioning vs Price (2020)",
    text:
      "Given new entrants, do you push price tactics or defend a premium position?",
    image: null,
    options: [
      {
        label: "Introduce ad-supported tier and cut price.",
        tier: "okay",
        score: 1,
        headline: "Okay — improves reach, risks dilution.",
        why_this:
          "Ad tiers can capture price-sensitive segments and reduce churn elasticity.",
        why_not_best:
          "Price wars erode margins and shift focus away from content quality as the differentiator."
      },
      {
        label: "Hold price; double down on quality and exclusives.",
        tier: "best",
        score: 2,
        headline: "Best — defend differentiation against rivalry.",
        why_this:
          "Premium positioning aligns with HBO’s brand and counters rivalry on non-price dimensions.",
        why_not_best: null
      },
      {
        label: "Match competitors’ promotions aggressively.",
        tier: "poor",
        score: 0,
        headline: "Poor — fuels a race to the bottom.",
        why_this:
          "Aggressive promos train buyers to expect discounts; retention falls when promos end.",
        why_not_best:
          "A strong content moat resists imitation; pricing tactics are easily copied and unsustainable."
      }
    ]
  },
  {
    id: "narr-substitutes",
    type: "narrative",
    title: "Attention Shifts to Short-Form (2021)",
    text:
      "Short-form platforms explode. HBO must decide whether to engage or ignore.",
    image:
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&w=900"
  },
  {
    id: "dp-2021-substitutes",
    type: "decision",
    title: "Decision Point: Responding to Substitutes (2021)",
    text:
      "Choose how to respond to short-form substitutes siphoning attention.",
    image: null,
    options: [
      {
        label: "Ignore; remain purely premium long-form.",
        tier: "poor",
        score: 0,
        headline: "Poor — underestimates time-share erosion.",
        why_this:
          "Purity protects the brand but risks gradual engagement decline.",
        why_not_best:
          "Selective experiments earn learning options without diluting the flagship experience."
      },
      {
        label: "Pilot short-form companions and creator partnerships.",
        tier: "best",
        score: 2,
        headline: "Best — small bets for learning and reach.",
        why_this:
          "Companion shorts extend universes, seed discovery, and create on-ramps to long-form.",
        why_not_best: null
      },
      {
        label: "Build a separate short-form app asap.",
        tier: "okay",
        score: 1,
        headline: "Okay — bold, but heavy and risky.",
        why_this:
          "Own distribution could capture new segments.",
        why_not_best:
          "Capital intensive with unclear synergy; pilots first preserve optionality."
      }
    ]
  },
  {
    id: "narr-buyer-power",
    type: "narrative",
    title: "Plateau & Buyer Power (2022)",
    text:
      "Subscribers plateau; switching costs are low. Retention drivers matter more than ever.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=900"
  },
  {
    id: "dp-2022-retention",
    type: "decision",
    title: "Decision Point: Retention & Personalization (2022)",
    text:
      "Where do you place execution focus to counter high buyer power?",
    image: null,
    options: [
      {
        label: "Rigorous feedback loops + personalization.",
        tier: "best",
        score: 2,
        headline: "Best — raises perceived value per user.",
        why_this:
          "Better fit lowers churn, increases time-on-platform, and informs content bets.",
        why_not_best: null
      },
      {
        label: "Push geographic expansion immediately.",
        tier: "okay",
        score: 1,
        headline: "Okay — adds volume, not stickiness.",
        why_this:
          "New markets bring growth, but don’t fix core churn mechanics.",
        why_not_best:
          "Retention groundwork multiplies the payoff of later expansion."
      },
      {
        label: "Increase promotional discounts to reduce churn.",
        tier: "poor",
        score: 0,
        headline: "Poor — masks, not solves, retention issues.",
        why_this:
          "Temporary dips in churn revert; margin damage compounds.",
        why_not_best:
          "Personalization addresses root causes; promos train discount sensitivity."
      }
    ]
  },
  {
    id: "narr-uncertainty",
    type: "narrative",
    title: "Planning Under Uncertainty (2023)",
    text:
      "Technology and tastes shift quickly. The question is how to stay proactive.",
    image:
      "https://images.pexels.com/photos/3184666/pexels-photo-3184666.jpeg?auto=compress&w=900"
  },
  {
    id: "dp-2023-uncertainty",
    type: "decision",
    title: "Decision Point: Proactive Planning (2023)",
    text:
      "Select your approach to navigate ongoing uncertainty.",
    image: null,
    options: [
      {
        label: "React to market leaders; fast-follow.",
        tier: "okay",
        score: 1,
        headline: "Okay — reduces downside, loses initiative.",
        why_this:
          "Tracking leaders avoids worst errors when info is scarce.",
        why_not_best:
          "Proactive playbooks create option value and speed in inflection moments."
      },
      {
        label: "Build forecasting + what-if playbooks with partners.",
        tier: "best",
        score: 2,
        headline: "Best — institutionalizes adaptability.",
        why_this:
          "Scenario planning, early signals, and partner optionality widen strategic degrees of freedom.",
        why_not_best: null
      },
      {
        label: "Freeze bets until uncertainty clears.",
        tier: "poor",
        score: 0,
        headline: "Poor — cedes ground and momentum.",
        why_this:
          "Waiting shrinks learning loops and increases catch-up costs.",
        why_not_best:
          "Structured experimentation turns uncertainty into information."
      }
    ]
  }
];
