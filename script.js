const STORAGE_KEY = "ms-portfolio-theme";

function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  const btn = document.getElementById("themeToggle");
  if (btn) btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
}

function getPreferredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  }
}

function wireCopyTemplate() {
  const btn = document.getElementById("copyContactBtn");
  const note = document.getElementById("copyNote");
  if (!btn || !note) return;

  btn.addEventListener("click", async () => {
    const template = [
      "Hi Manasi,",
      "",
      "I saw your portfolio and would love to connect.",
      "Role/Opportunity:",
      "Company:",
      "Message:",
      "",
      "Thanks,",
      "Name",
      "Email/Phone"
    ].join("\n");

    const ok = await copyToClipboard(template);
    note.textContent = ok ? "Copied. Paste it into email/DM and fill details." : "Copy failed.";
    window.setTimeout(() => {
      note.textContent = "";
    }, 3200);
  });
}

function wireThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  });
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function markPlaceholders() {
  document.querySelectorAll("[data-placeholder]").forEach((a) => {
    a.addEventListener("click", (e) => e.preventDefault());
  });
}

function markActiveNav() {
  const path = (window.location.pathname || "").split("/").pop() || "index.html";
  const normalized = path === "" ? "index.html" : path;
  document.querySelectorAll('nav[aria-label="Primary"] a[href]').forEach((a) => {
    const href = a.getAttribute("href") || "";
    if (!href.endsWith(".html")) return;
    const hrefFile = href.split("/").pop();
    if (hrefFile === normalized) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}

applyTheme(getPreferredTheme());
wireThemeToggle();
wireCopyTemplate();
setYear();
markPlaceholders();
markActiveNav();

