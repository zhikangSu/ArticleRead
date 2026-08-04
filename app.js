const REPOSITORY = 'zhikangSu/DeepRead';
const RELEASE_API = `https://api.github.com/repos/${REPOSITORY}/releases/latest`;
const RELEASE_PAGE = `https://github.com/${REPOSITORY}/releases/latest`;

const downloadPatterns = {
  mac: (name) => /arm64\.dmg$/i.test(name),
  'linux-deb': (name) => /_amd64\.deb$/i.test(name),
  'linux-appimage': (name) => /\.AppImage$/i.test(name),
};

function updateReleaseLabels(label) {
  document.querySelectorAll('[data-release-label]').forEach((element) => {
    element.textContent = label;
  });
}

function updateDownloadLinks(release) {
  const assets = Array.isArray(release.assets) ? release.assets : [];

  document.querySelectorAll('[data-download]').forEach((link) => {
    const kind = link.dataset.download;
    const matcher = downloadPatterns[kind];
    const asset = matcher ? assets.find((item) => matcher(item.name || '')) : null;
    link.href = asset?.browser_download_url || release.html_url || RELEASE_PAGE;
  });

  document.querySelectorAll('[data-release-page]').forEach((link) => {
    link.href = release.html_url || RELEASE_PAGE;
  });
}

async function hydrateLatestRelease() {
  try {
    const response = await fetch(RELEASE_API, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!response.ok) throw new Error(`GitHub ${response.status}`);

    const release = await response.json();
    if (release.tag_name) updateReleaseLabels(release.tag_name);
    updateDownloadLinks(release);
  } catch {
    document.querySelectorAll('[data-release-page], [data-download]').forEach((link) => {
      if (!link.href) link.href = RELEASE_PAGE;
    });
  }
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

hydrateLatestRelease();
