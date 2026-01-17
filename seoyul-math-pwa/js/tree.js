// TreeUI v2: syllabus.json uses stable ids (unitId)
// Exposes: TreeUI.loadJson(url), TreeUI.renderTree(syllabus, onSelect)

const TreeUI = (() => {
  async function loadJson(url){
    const r = await fetch(url);
    return await r.json();
  }

  function renderTree(syllabus, onSelect){
    const root = document.getElementById('tree');
    root.innerHTML = '';

    const chapters = syllabus.chapters || [];
    chapters.forEach(ch => {
      const node = document.createElement('div');
      node.className = 'node';
      node.innerHTML = `<div class="node-title">${ch.title}</div>`;

      (ch.sections||[]).forEach(sec => {
        const secTitle = document.createElement('div');
        secTitle.style.color = 'var(--muted)';
        secTitle.style.fontSize = '12px';
        secTitle.style.margin = '6px 4px 8px';
        secTitle.textContent = sec.title;
        node.appendChild(secTitle);

        (sec.units||[]).forEach(u => {
          const leaf = document.createElement('div');
          leaf.className = 'leaf';
          leaf.dataset.unitId = u.id;
          leaf.dataset.title = u.title;
          leaf.textContent = u.title;
          leaf.addEventListener('click', () => {
            root.querySelectorAll('.leaf').forEach(x=>x.classList.remove('active'));
            leaf.classList.add('active');
            onSelect({ unitId: u.id, title: u.title, sectionTitle: sec.title, chapterTitle: ch.title });
          });
          node.appendChild(leaf);
        });
      });

      root.appendChild(node);
    });
  }

  return { loadJson, renderTree };
})();

window.TreeUI = TreeUI;
