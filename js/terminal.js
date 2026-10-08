// Interactive Terminal / CLI Mode for Engineers & Recruiters
document.addEventListener("DOMContentLoaded", () => {
  initTerminal();
});

function initTerminal() {
  const terminalBody = document.getElementById("terminal-output");
  const terminalInput = document.getElementById("terminal-cli-input");
  const terminalContainer = document.getElementById("terminal-window");

  if (!terminalBody || !terminalInput) return;

  const commandHistory = [];
  let historyIndex = -1;

  const commands = {
    help: () => `
<div class="term-line-resp">
  <span class="term-highlight">Available Commands:</span><br>
  - <span class="term-cyan">about</span>       : View Mathuran's background & career focus<br>
  - <span class="term-cyan">skills</span>      : List technical stack & AI/ML proficiencies<br>
  - <span class="term-cyan">projects</span>    : Display highlighted software & ML projects<br>
  - <span class="term-cyan">demo</span>        : Jump to the interactive in-browser AI/ML Lab<br>
  - <span class="term-cyan">education</span>   : View academic background (Data Science @ SLIIT)<br>
  - <span class="term-cyan">contact</span>     : Get direct email, GitHub & LinkedIn connections<br>
  - <span class="term-cyan">stats</span>       : Show GitHub repository & development stats<br>
  - <span class="term-cyan">cat resume.json</span> : Output structured JSON developer profile<br>
  - <span class="term-cyan">sudo hire</span>   : Direct fast-track hiring gateway<br>
  - <span class="term-cyan">clear</span>       : Clean the terminal window
</div>`,

    about: () => `
<div class="term-line-resp">
  <span class="term-green">Mathuran (Mathu)</span> - Full Stack Engineer & AI / ML Practitioner<br>
  🎓 Undergraduate in Data Science @ SLIIT (Sri Lanka Institute of Information Technology)<br>
  📍 Malabe / Colombo, Sri Lanka | Available Worldwide (Remote / Onsite)<br>
  🧠 Passionate about bridging Deep Learning / NLP with scalable full-stack web architectures.
</div>`,

    skills: () => `
<div class="term-line-resp">
  <span class="term-highlight">Technical Capabilities:</span><br>
  <span class="term-cyan">🧠 AI & Data Science:</span> Python, PyTorch, TensorFlow, Scikit-Learn, XGBoost, Pandas, NumPy, NLP, EDA, Jupyter<br>
  <span class="term-cyan">🌐 Full Stack Web:</span> TypeScript, JavaScript, React, Next.js, Node.js, Express, Spring Boot, REST APIs, Socket.io<br>
  <span class="term-cyan">🗄️ Databases & Storage:</span> MongoDB, PostgreSQL, MySQL, Room Database<br>
  <span class="term-cyan">📱 Mobile & Tools:</span> Kotlin, Android SDK, Git/GitHub, Docker, Vercel, Postman, Linux
</div>`,

    projects: () => `
<div class="term-line-resp">
  <span class="term-highlight">Selected Engineering Projects:</span><br>
  1. <span class="term-green">Obesity-Risk-Intelligence-System</span> [ML / Healthcare] - Multi-tier classification pipeline.<br>
  2. <span class="term-green">Multilingual AI Customer Support</span> [NLP / LLM] - Real-time multilingual intent triage.<br>
  3. <span class="term-green">Customer Churn Prediction Pipeline</span> [Predictive ML] - End-to-end subscriber risk analysis.<br>
  4. <span class="term-green">Project Team Management Platform</span> [TypeScript / Next.js] - Kanban & collaboration workspace.<br>
  5. <span class="term-green">Real-time Chat App</span> [React / Node / Socket.io] - Instant messaging with WebSockets.<br>
  6. <span class="term-green">BusGo Ticket Booking Engine</span> [Node / Mongo / PDF] - Nationwide transit reservation.<br>
  <span class="term-dim">Tip: Type 'demo' or scroll to the Projects section for live links!</span>
</div>`,

    demo: () => {
      setTimeout(() => {
        const demoSec = document.getElementById("ai-playground");
        if (demoSec) demoSec.scrollIntoView({ behavior: "smooth" });
      }, 400);
      return `<div class="term-line-resp term-green">Navigating to Interactive AI / ML Playground...</div>`;
    },

    education: () => `
<div class="term-line-resp">
  <span class="term-highlight">🎓 Academic Credentials:</span><br>
  <span class="term-green">B.Sc. (Hons) in Information Technology specializing in Data Science</span><br>
  Institution: Sri Lanka Institute of Information Technology (SLIIT)<br>
  Core Modules: Machine Learning, Deep Learning, Big Data Analytics, Cloud Computing, Distributed Systems, Software Engineering
</div>`,

    contact: () => `
<div class="term-line-resp">
  <span class="term-highlight">📬 Contact & Social Channels:</span><br>
  - GitHub: <a href="https://github.com/Mathu-code" target="_blank" class="term-cyan">github.com/Mathu-code</a><br>
  - Website: <a href="http://mathu.me" target="_blank" class="term-cyan">mathu.me</a><br>
  - X / Twitter: <a href="https://x.com/MassMathuran" target="_blank" class="term-cyan">@MassMathuran</a><br>
  - Direct Inquiry: Scroll down to the Contact form or email directly!
</div>`,

    stats: () => `
<div class="term-line-resp">
  <span class="term-highlight">⚡ GitHub Metrics:</span><br>
  - Public Repositories: 20+<br>
  - Primary Languages: Python, TypeScript, JavaScript, Java, Kotlin<br>
  - Live Hosted Deployments: 4+ Products Active<br>
  - Status: Active Builder & Open Source Contributor
</div>`,

    "cat resume.json": () => `
<div class="term-line-resp term-code">
{
  "name": "Mathuran",
  "title": "Full Stack Engineer & AI/ML Specialist",
  "education": "Data Science @ SLIIT",
  "location": "Malabe, Sri Lanka",
  "specialties": [
    "Machine Learning & Predictive Modeling",
    "Natural Language Processing (NLP)",
    "Modern Full-Stack Applications (React/Next/Node/Spring)",
    "Cloud & DevOps Workflows"
  ],
  "status": "Ready for Impact"
}
</div>`,

    "sudo hire": () => {
      setTimeout(() => {
        const contactSec = document.getElementById("contact");
        if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
      }, 400);
      return `<div class="term-line-resp term-green">🚀 Access Granted! Unlocking direct priority channel. Navigating to contact section...</div>`;
    },

    clear: () => {
      terminalBody.innerHTML = "";
      return null;
    }
  };

  // Initial welcome message in terminal
  terminalBody.innerHTML = `
    <div class="term-line-resp">
      <span class="term-green">MathuOS v2.4 (x86_64-sri-lanka-sliit)</span><br>
      Type <span class="term-cyan">'help'</span> to explore interactive CLI commands or <span class="term-cyan">'sudo hire'</span> to initiate priority contact.<br>
      --------------------------------------------------
    </div>
  `;

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const inputRaw = terminalInput.value.trim();
      const inputCmd = inputRaw.toLowerCase();
      terminalInput.value = "";

      if (!inputRaw) return;

      commandHistory.push(inputRaw);
      historyIndex = commandHistory.length;

      // Echo command
      const echoEl = document.createElement("div");
      echoEl.className = "term-echo";
      echoEl.innerHTML = `<span class="term-prompt">visitor@mathu-os:~$</span> <span class="term-cmd-text">${escapeHtml(inputRaw)}</span>`;
      terminalBody.appendChild(echoEl);

      // Execute
      let response = "";
      if (commands[inputCmd]) {
        response = commands[inputCmd]();
      } else if (inputCmd.startsWith("cat ") && commands[inputCmd]) {
        response = commands[inputCmd]();
      } else {
        response = `<div class="term-line-resp term-error">Command not recognized: '${escapeHtml(inputRaw)}'. Type <span class="term-cyan">'help'</span> for a list of available commands.</div>`;
      }

      if (response) {
        const respEl = document.createElement("div");
        respEl.innerHTML = response;
        terminalBody.appendChild(respEl);
      }

      terminalContainer.scrollTop = terminalContainer.scrollHeight;
    } else if (e.key === "ArrowUp") {
      if (commandHistory.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = "";
      }
    }
  });

  function escapeHtml(text) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
}
