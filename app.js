document.addEventListener("DOMContentLoaded", () => {
  const transcriptBtn = document.getElementById("transcriptBtn");
  const restartBtn = document.getElementById("restartBtn");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const transcriptOverlay = document.getElementById("transcriptOverlay");
  const closeTranscript = document.getElementById("closeTranscript");
  const transcriptContent = document.getElementById("transcriptContent");
  const content = document.getElementById("content");

  // === global state ===
  const state = {
    index: 0,
    history: [],
    score: 0
  };

  // === utilities ===
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (m) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[m]));
  }

  function currentScene() {
    return caseScenes[state.index];
  }

  function resetState() {
    state.index = 0;
    state.history = [];
    state.score = 0;
  }

  // === transcript overlay behavior ===
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !transcriptOverlay.classList.contains("hidden")) {
      transcriptOverlay.classList.add("hidden");
    }
  });
  transcriptOverlay.addEventListener("click", (e) => {
    if (!e.target.closest(".transcript-window")) transcriptOverlay.classList.add("hidden");
  });
  closeTranscript.onclick = () => transcriptOverlay.classList.add("hidden");

  transcriptBtn.onclick = () => {
    transcriptContent.innerHTML = state.history.map((h) => {
      let out = `<p><b>${h.title}</b><br>${escapeHtml(h.text)}</p>`;
      if (h.type === "decision" && h.submitted) {
        const opt = h.options[h.chosenIndex];
        out += `<p><i>You chose:</i> ${escapeHtml(opt.label)}</p>${renderFeedbackHTML(h)}`;
      }
      return out;
    }).join("");
    transcriptOverlay.classList.remove("hidden");
  };

  restartBtn.onclick = () => { resetState(); renderScene(); };

  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
  themeToggleBtn.onclick = () => {
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(cur === "dark" ? "light" : "dark");
  };

  // === renderers ===
  function renderScene() {
    const sc = currentScene();
    if (!sc) return;

    // snapshot for history
    if (!state.history[state.index]) {
      state.history[state.index] = JSON.parse(JSON.stringify(sc));
    }
    const h = state.history[state.index];

    let html = `<div class="scene-container">`;
    if (h.image) html += `<div class="scene-image"><img src="${h.image}" alt=""></div>`;
    html += `<div class="scene-text"><h2>${h.title}</h2><p>${escapeHtml(h.text)}</p>`;

    if (h.type === "decision") {
      html += `<div class="options">`;
      h.options.forEach((opt, i) => {
        const sel = h.chosenIndex === i ? " selected" : "";
        html += `<div class="option${sel}" data-idx="${i}"><span class="label">${escapeHtml(opt.label)}</span><span class="hint">You can change until you submit.</span></div>`;
      });
      html += `</div>`;
      if (h.submitted) html += renderFeedbackHTML(h);
    }

    html += `<div class="controls">`;
    if (h.type === "decision") {
      html += `<button class="btn ghost" id="backBtn"${state.index===0?" disabled":""}>← Back</button>`;
      if (h.submitted)
        html += `<button class="btn primary" id="nextBtn">Next →</button>`;
      else
        html += `<button class="btn primary" id="submitBtn" disabled>Submit</button>`;
    } else {
      html += `<button class="btn ghost" id="prevBtn"${state.index===0?" disabled":""}>← Previous</button>`;
      html += `<button class="btn primary" id="nextBtn">Next →</button>`;
    }
    html += `</div></div></div>`;
    content.innerHTML = html;

    // === attach interactions ===
    if (h.type === "decision") {
      content.querySelectorAll(".option").forEach((el) => {
        el.onclick = () => {
          if (h.submitted) return;
          const idx = Number(el.dataset.idx);
          h.chosenIndex = idx;
          content.querySelectorAll(".option").forEach(o=>o.classList.remove("selected"));
          el.classList.add("selected");
          const sb = document.getElementById("submitBtn");
          if (sb) sb.disabled = false;
        };
      });

      const backBtn = document.getElementById("backBtn");
      if (backBtn) backBtn.onclick = () => {
        if (state.index > 0) { state.index--; renderScene(); }
      };

      const submitBtn = document.getElementById("submitBtn");
      if (submitBtn) submitBtn.onclick = () => {
        if (typeof h.chosenIndex !== "number") return;
        h.submitted = true;
        const chosen = h.options[h.chosenIndex];
        state.score += Number(chosen.score || 0);

        // lock selection
        content.querySelectorAll(".option").forEach(o => o.style.pointerEvents = "none");

        // show feedback directly without re-render
        const feedback = renderFeedbackHTML(h);
        const div = document.createElement("div");
        div.innerHTML = feedback;
        content.querySelector(".scene-text").appendChild(div);

        // replace submit with next
        submitBtn.remove();
        const controls = content.querySelector(".controls");
        const next = document.createElement("button");
        next.className = "btn primary";
        next.id = "nextBtn";
        next.textContent = "Next →";
        next.onclick = () => goNextOrSummary();
        controls.appendChild(next);
      };
    }

    const prevBtn = document.getElementById("prevBtn");
    if (prevBtn) prevBtn.onclick = () => { if (state.index>0){state.index--; renderScene();} };
    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn) nextBtn.onclick = () => goNextOrSummary();
  }

  function renderFeedbackHTML(h) {
    const opt = h.options[h.chosenIndex];
    const tier = opt.tier || "ok";
    const cls = tier === "best" ? "good" : tier === "poor" ? "bad" : "ok";
    const whyNot = opt.why_not_best ? `<p>${escapeHtml(opt.why_not_best)}</p>` : "";
    return `<div class="feedback ${cls}">
      <h4>${escapeHtml(opt.headline)}</h4>
      <p>${escapeHtml(opt.why_this)}</p>
      ${whyNot}
    </div>`;
  }

  function goNextOrSummary() {
    if (state.index < caseScenes.length - 1) {
      state.index++;
      renderScene();
    } else {
      renderSummary();
    }
  }

  function renderSummary() {
    const maxScore = caseScenes.reduce((acc, sc) => {
      if (sc.type !== "decision") return acc;
      return acc + Math.max(...sc.options.map(o => o.score));
    }, 0);
    const pct = Math.round((state.score / maxScore) * 100);
    const decisions = state.history.filter(h=>h.type==="decision")
      .map((h,i)=>{
        const c = h.options[h.chosenIndex];
        const col = c.tier==="best"?"good":c.tier==="poor"?"bad":"ok";
        return `<li><b>${i+1}. ${h.title}</b><br><span class="${col}">You chose: ${escapeHtml(c.label)}</span></li>`;
      }).join("");

    content.innerHTML = `<div class="summary">
      <h2>Simulation Summary</h2>
      <div class="scoreline">Score: <b>${state.score}</b> / ${maxScore} (${pct}%)</div>
      <ol>${decisions}</ol>
      <button class="btn ghost" id="restart">Start Over</button>
    </div>`;
    document.getElementById("restart").onclick = () => { resetState(); renderScene(); };
  }

  // initial render
  renderScene();
});
