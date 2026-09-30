(function () {
  const moduleList = document.querySelector("#module-list");
  const modules = window.ATLAS_DATA && window.ATLAS_DATA.modules;
  if (moduleList && modules) {
    moduleList.innerHTML = modules.map((module, index) => `
      <details class="module" style="--module-color:${module.color}" ${index === 0 ? "open" : ""}>
        <summary><span class="module-number">${module.id}</span><span class="module-title">${module.title}</span><span class="module-count">10 temas</span><span class="module-toggle" aria-hidden="true">+</span></summary>
        <ol class="topic-list">${module.topics.map((topic, topicIndex) => `<li><span>${String(topicIndex + 1).padStart(2, "0")}</span>${topic}</li>`).join("")}</ol>
      </details>`).join("");
  }
})();
