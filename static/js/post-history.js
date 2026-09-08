// Keep links into an earlier draft usable after its headings move into history.
function revealHistoryAnchor() {
  if (!location.hash) return;
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id) || document.getElementById(`history-${id}`);
  const history = target?.closest('details.post-history');
  if (history) {
    history.open = true;
    target.scrollIntoView();
  }
}
window.addEventListener('hashchange', revealHistoryAnchor);
revealHistoryAnchor();
