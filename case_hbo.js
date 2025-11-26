const caseScenes = [
  {
    id: "intro-role",
    type: "narrative",
    title: "Your Role at TAQA Snacks",
    text:
      "You are the strategic advisor to Soumaya Merhi, founder of TAQA Snacks. Lebanon is collapsing economically and socially, and TAQA’s survival now depends on a series of difficult choices. Your task is to help Soumaya protect TAQA’s mission, identity, and people while navigating extreme uncertainty.",
    image:
      "https://www.taqasnacks.com/wp-content/uploads/2022/01/Website-top-02.png?auto=compress&w=900"
  },

  {
    id: "crisis-context",
    type: "narrative",
    title: "Lebanon Melts Down (2019–2022)",
    text:
      "TAQA grew rapidly across the region until Lebanon fell into one of the worst crises in its modern history. Half of TAQA’s cash became trapped in banks under informal capital controls. The Lebanese pound lost more than 95% of its value. Production costs exploded due to expensive imports, and demand plummeted as consumers emigrated. TAQA’s output fell by 75% and regional expansion stalled.",
    image:
      "https://c.files.bbci.co.uk/116E3/production/_113359317_062379460.jpg?auto=compress&w=900"
  },

  {
    id: "dp-liquidity",
    type: "decision",
    title: "Decision Point: Surviving the Liquidity Crisis",
    text:
      "TAQA has cash stuck in the bank, production costs are skyrocketing, and expansion is impossible without liquidity. How do you secure cash without destroying TAQA’s identity?",
    image: null,
    options: [
      {
        label: "Seek a convertible loan from international partners.",
        tier: "best",
        score: 2,
        headline: "Best — liquidity while preserving control.",
        why_this:
          "A convertible loan provides foreign currency, keeps TAQA alive, and avoids giving up immediate ownership.",
        why_not_best: null
      },
      {
        label: "Sell shares to new investors to inject cash quickly.",
        tier: "okay",
        score: 1,
        headline: "Okay — solves liquidity, weakens control.",
        why_this:
          "It delivers immediate funding but dilutes Soumaya’s ownership and risks mission drift.",
        why_not_best:
          "You get cash, but you lose power. Investors may not prioritize sustainability or community impact."
      },
      {
        label: "Operate entirely on cash flow and freeze all expansion.",
        tier: "poor",
        score: 0,
        headline: "Poor — stabilizes, but suffocates growth.",
        why_this:
          "Running cash-only protects TAQA from bank risk but traps the company in survival mode.",
        why_not_best:
          "This approach delays collapse but offers no path back to regional competitiveness."
      }
    ]
  },

  {
    id: "sustainability-pressure",
    type: "narrative",
    title: "Sustainability Under Pressure",
    text:
      "Electricity shortages force TAQA to rely on diesel ovens. Plastics remain unavoidable at industrial scale. Reforestation costs are rising. Lebanese consumers, struggling financially, deprioritize eco-friendly brands. Sustainability is TAQA’s identity, but it is also expensive to maintain under crisis.",
    image:
      "https://www.santanderopenacademy.com/en/blog/what-is-sustainability/_jcr_content/root/container/responsivegrid/image_416961853.coreimg.jpeg/1649173753985/what-is-sustainability-1.jpeg?auto=compress&w=900"
  },

  {
    id: "dp-sustainability",
    type: "decision",
    title: "Decision Point: Mission vs. Survival",
    text:
      "TAQA’s sustainability practices cost money that the company barely has. Do you maintain full environmental standards or compromise temporarily?",
    image: null,
    options: [
      {
        label: "Maintain full zero-waste and carbon-neutral practices.",
        tier: "best",
        score: 2,
        headline: "Best — protects TAQA’s core differentiation.",
        why_this:
          "Sustainability is TAQA's identity and competitive moat. Cutting it would dilute brand equity and consumer trust.",
        why_not_best: null
      },
      {
        label: "Outsource sustainability initiatives to NGOs or partners.",
        tier: "okay",
        score: 1,
        headline: "Okay — maintains impact with lower effort.",
        why_this:
          "External partners can handle awareness events, recycling, and carbon offsets when TAQA lacks capacity.",
        why_not_best:
          "Delegation reduces control and may weaken the authenticity that made TAQA stand out."
      },
      {
        label: "Suspend sustainability efforts until the crisis ends.",
        tier: "poor",
        score: 0,
        headline: "Poor — damages the brand.",
        why_this:
          "Cutting sustainability temporarily saves money.",
        why_not_best:
          "This move contradicts TAQA’s mission and risks losing loyal consumers who trust its environmental promise."
      }
    ]
  },

  {
    id: "expansion-context",
    type: "narrative",
    title: "Regional Expansion Disrupted",
    text:
      "TAQA was poised to expand aggressively into the Gulf. A major deal in Saudi Arabia collapsed due to Lebanon’s crisis. However, the UAE shows promise with rising exports and a distributor willing to support TAQA’s long-term presence.",
    image:
      "https://a.storyblok.com/f/165154/1280x720/f1dfdb487a/hero-image_geographic-expansion-how-to-expand-to-new-markets-1.jpg/m/?auto=compress&w=900"
  },

  {
    id: "dp-expansion",
    type: "decision",
    title: "Decision Point: Where to Focus Growth",
    text:
      "With Lebanon unstable, TAQA cannot expand everywhere. Where do you focus limited resources?",
    image: null,
    options: [
      {
        label: "Double down on UAE expansion.",
        tier: "best",
        score: 2,
        headline: "Best — stable demand, foreign currency, and growth momentum.",
        why_this:
          "UAE sales are rising and the market values sustainability. It offers stability that Lebanon cannot.",
        why_not_best: null
      },
      {
        label: "Consolidate only in Lebanon and wait for stability.",
        tier: "okay",
        score: 1,
        headline: "Okay — defensively safe, strategically weak.",
        why_this:
          "Remaining local reduces risk but limits revenue and exposes TAQA to Lebanon’s volatile environment.",
        why_not_best:
          "You protect yourself short-term but sacrifice long-term growth and foreign currency inflows."
      },
      {
        label: "Try to re-enter the Saudi market immediately.",
        tier: "poor",
        score: 0,
        headline: "Poor — high risk with no guaranteed payoff.",
        why_this:
          "Replicating the KSA strategy in crisis conditions will likely fail again.",
        why_not_best:
          "KSA already collapsed once due to Lebanon’s instability — the timing is still unfavorable."
      }
    ]
  },

  {
    id: "production-identity",
    type: "narrative",
    title: "The Identity Dilemma",
    text:
      "TAQA was born in Lebanon. But Lebanon’s infrastructure is too unstable to support regional manufacturing reliably. Outsourcing to MENA partners may ensure growth, but risks diluting TAQA’s values. Staying fully Lebanese preserves identity but threatens survival.",
    image:
      "https://thisisbeirut.com.lb/images/bibli/1920/1280/2/sect-over-state-website.jpg?auto=compress&w=900"
  },

  {
    id: "dp-production",
    type: "decision",
    title: "Decision Point: Production Model",
    text:
      "How should TAQA produce its products going forward?",
    image: null,
    options: [
      {
        label: "Outsource regional manufacturing while keeping R&D in Lebanon.",
        tier: "best",
        score: 2,
        headline: "Best — preserves identity, ensures survival.",
        why_this:
          "This model keeps TAQA’s spirit in Lebanon while bypassing local operational instability.",
        why_not_best: null
      },
      {
        label: "Downsize and produce only from Lebanon.",
        tier: "okay",
        score: 1,
        headline: "Okay — protects identity, limits growth.",
        why_this:
          "Staying local avoids brand dilution but sacrifices scale and exposes TAQA to constant disruptions.",
        why_not_best:
          "Dependence on Lebanon’s infrastructure will continue to choke production capacity."
      },
      {
        label: "Sell the company and exit entirely.",
        tier: "poor",
        score: 0,
        headline: "Poor — destroys mission and sacrifices employees.",
        why_this:
          "Selling transfers the headache to an investor.",
        why_not_best:
          "Brand purpose, sustainability mission, and employee livelihoods would likely be compromised."
      }
    ]
  },

  {
    id: "future-context",
    type: "narrative",
    title: "Looking Beyond the Crisis",
    text:
      "TAQA stabilizes in the short term, but Soumaya needs a long-term identity for the brand. The company must define what it wants to be across the region.",
    image:
      "https://images.pexels.com/photos/3184666/pexels-photo-3184666.jpeg?auto=compress&w=900"
  },

  {
    id: "dp-future",
    type: "decision",
    title: "Decision Point: Long-Term Identity",
    text:
      "What kind of company should TAQA become over the next decade?",
    image: null,
    options: [
      {
        label: "A regional sustainable brand: Lebanon R&D, MENA manufacturing.",
        tier: "best",
        score: 2,
        headline: "Best — scalable, resilient, mission-aligned.",
        why_this:
          "This model preserves TAQA’s Lebanese identity while enabling regional growth and operational stability.",
        why_not_best: null
      },
      {
        label: "Rebuild full Lebanese manufacturing once the crisis ends.",
        tier: "okay",
        score: 1,
        headline: "Okay — idealistic but risky.",
        why_this:
          "A pure Lebanese brand has emotional and cultural appeal.",
        why_not_best:
          "Lebanon’s long-term stability is uncertain, making this strategy fragile."
      },
      {
        label: "Become a marketing-only brand and outsource everything.",
        tier: "poor",
        score: 0,
        headline: "Poor — destroys product authenticity.",
        why_this:
          "Offloading all production reduces operational headaches.",
        why_not_best:
          "TAQA’s value lies in quality, sustainability, and authenticity — full outsourcing erodes all three."
      }
    ]
  }
];
