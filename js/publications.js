/* ══════════════════════════════════════════════
   publications.js — parses PUBLICATIONS_MD (from
   content/publications-data.js) and renders it into
   #pub-list-papers / #pub-list-patents
   ══════════════════════════════════════════════ */

function loadPublications() {
  const papersEl = document.getElementById('pub-list-papers');
  const patentsSection = document.getElementById('pub-patents-section');
  const patentsEl = document.getElementById('pub-list-patents');
  if (!papersEl) return;

  if (typeof PUBLICATIONS_MD === 'undefined') {
    papersEl.innerHTML = '<p class="pub-loading">Could not load publications.</p>';
    return;
  }

  const entries = parsePublications(PUBLICATIONS_MD);
  const papers = entries.filter(e => e.type !== 'patent');
  const patents = entries.filter(e => e.type === 'patent');

  papersEl.innerHTML = papers.map(renderEntry).join('');

  if (patents.length && patentsEl && patentsSection) {
    patentsEl.innerHTML = patents.map(renderEntry).join('');
    patentsSection.style.display = '';
  }
}

function parsePublications(raw) {
  // Strip HTML comments (the instructional header block)
  const withoutComments = raw.replace(/<!--[\s\S]*?-->/g, '');
  const blocks = withoutComments.split(/\n---\n/).map(b => b.trim()).filter(Boolean);

  return blocks.map(block => {
    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    const entry = { idx: '', title: '', authors: '', venue: '', type: 'paper',
                     highlight: false, award: '', pending: '', summary: '', links: [] };

    lines.forEach(line => {
      const titleMatch = line.match(/^###\s*\[([^\]]+)\]\s*(.+)$/);
      if (titleMatch) {
        entry.idx = titleMatch[1];
        entry.title = titleMatch[2];
        return;
      }
      const kv = line.match(/^([A-Za-z][A-Za-z ·]*?):\s*(.+)$/);
      if (!kv) return;
      const key = kv[1].trim();
      const val = kv[2].trim();

      if (key === 'Authors') entry.authors = val;
      else if (key === 'Venue') entry.venue = val;
      else if (key === 'Type') entry.type = val.toLowerCase();
      else if (key === 'Highlight') entry.highlight = /true/i.test(val);
      else if (key === 'Award') entry.award = val;
      else if (key === 'Pending') entry.pending = val;
      else if (key === 'Summary') entry.summary = val;
      else if (/^Link\s+/i.test(key)) {
        const label = key.replace(/^Link\s+/i, '').trim();
        entry.links.push({ label, url: val });
      }
    });

    return entry;
  }).filter(e => e.title);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderEntry(entry) {
  const cls = 'pub-entry' + (entry.highlight ? ' highlight' : '');

  const summaryHtml = entry.summary
    ? `<div class="pub-summary">${escapeHtml(entry.summary)}</div>` : '';

  // Render authors, bolding "Y. Chen" so the author-of-interest stands out
  const authorsHtml = entry.authors
    ? `<div class="pub-authors">${escapeHtml(entry.authors)
         .replace(/\bY\. Chen\b/g, '<strong>Y. Chen</strong>')}</div>` : '';

  const awardHtml = entry.award
    ? `<span class="pub-award">${escapeHtml(entry.award)}</span>` : '';

  const pendingHtml = entry.pending
    ? `<span class="pub-pending" title="${escapeHtml(entry.pending)}">${escapeHtml(entry.pending)}</span>` : '';

  const linksHtml = entry.links.length
    ? `<div class="pub-links">${entry.links.map(l =>
        `<a href="${escapeHtml(l.url)}" target="_blank">${escapeHtml(l.label)}</a>`).join('')}</div>`
    : '';

  return `
    <div class="${cls}">
      <div class="pub-body">
        <div class="pub-title">${escapeHtml(entry.title)}</div>
        ${authorsHtml}
        <div class="pub-venue">${escapeHtml(entry.venue)}</div>
        ${awardHtml}
        ${pendingHtml}
        ${summaryHtml}
        ${linksHtml}
      </div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', loadPublications);
