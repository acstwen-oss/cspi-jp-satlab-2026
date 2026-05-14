const site = {
  lines: {
    "3d-mapping": {
      label: "3D Mapping",
      title: "3D マッピング",
      subtitle: "SLAM・RTK・高密度点群による、現場で速いデータ取得。",
      copy: "Handheld, backpack, vehicle and UAV mapping workflows for construction, infrastructure and indoor/outdoor survey.",
      scenarios: [
        ["建設現場の進捗記録", "Complex sites can be scanned quickly for progress, stockpile and as-built documentation."],
        ["インフラ点検", "Roads, bridges, tunnels and stations can be captured with flexible SLAM workflows."],
        ["屋内外の一体計測", "Smooth transition from indoor spaces to open-sky RTK areas for complete site context."]
      ],
      products: ["sl9-slam-rtk", "cygnus3-slam-pro"]
    },
    surveying: {
      label: "Surveying",
      title: "測量ソリューション",
      subtitle: "GNSS とトータルステーションで、基準点から施工管理まで。",
      copy: "Reliable field instruments for control survey, stakeout, cadastral work and daily construction measurement.",
      scenarios: [
        ["基準点・出来形測量", "GNSS and total station workflows support accurate field control."],
        ["ワンマン測量", "Robotic and Android-based operation improves field productivity."],
        ["施工位置出し", "Clear field workflows help teams move from design data to site execution."]
      ],
      products: ["sl8", "ats1", "slt12-android-total-station"]
    },
    hydrographic: {
      label: "Hydrographic",
      title: "水域測量",
      subtitle: "浅水域・港湾・河川での安全で効率的な測深ワークフロー。",
      copy: "Unmanned hydrographic survey platform for bathymetry, inspection and environmental monitoring.",
      scenarios: [
        ["河川・湖沼測深", "Remote survey reduces operator exposure while collecting repeatable bathymetry data."],
        ["港湾・護岸点検", "Integrated navigation and sonar workflows support inspection around structures."],
        ["浚渫・土量管理", "Regular survey runs help compare terrain changes and support construction decisions."]
      ],
      products: ["hydroboat-1200mb"]
    },
    "machine-control": {
      label: "Machine Control",
      title: "マシンコントロール",
      subtitle: "設計データを重機オペレーションへつなぐ施工支援。",
      copy: "Machine guidance and control workflows for excavation, grading and site productivity.",
      scenarios: [
        ["掘削・整地支援", "Design surfaces can guide operators toward consistent site execution."],
        ["施工品質管理", "Position-aware workflows help reduce rework and improve daily productivity."],
        ["建設 DX", "Machine, field and office teams can share a clearer view of site progress."]
      ],
      products: ["machine-control-solution"]
    }
  },
  products: {
    "sl9-slam-rtk": {
      line: "3d-mapping",
      name: "SL9 SLAM RTK",
      en: "SLAM RTK Mapping System",
      intro: "RTK と SLAM を組み合わせた、屋外・屋内連続計測向けの高効率マッピングシステム。",
      tag: "RTK-SLAM",
      visual: "SL9",
      image: "",
      points: ["RTK によるグローバル座標付け", "SLAM による複雑環境の点群取得", "施工・維持管理向けの現場即応ワークフロー"],
      applications: ["建設現場の as-built 記録", "道路・橋梁・トンネル点検", "屋内外をまたぐ施設計測"],
      specs: [["測位", "RTK / PPK workflow ready"], ["データ", "Point cloud, trajectory and imagery workflow"], ["運用", "Handheld and mobile mapping scenarios"], ["資料", "日本語カタログ準備中 / Brochure placeholder"]]
    },
    "cygnus3-slam-pro": {
      line: "3d-mapping",
      name: "Cygnus3 SLAM Pro",
      en: "Engineering-Grade SLAM Scanner",
      intro: "リアルタイム品質確認と多用途運用に対応する、エンジニアリング向け SLAM スキャナー。",
      tag: "SLAM Scanner",
      visual: "C3",
      image: "assets/cover.jpg",
      points: ["高密度点群の高速取得", "リアルタイムプレビューと品質確認", "ハンドヘルド、バックパック、車載、UAV ワークフロー"],
      applications: ["BIM / as-built ドキュメント", "プラント・施設計測", "都市インフラと道路計測"],
      specs: [["スキャン", "High-speed SLAM point cloud capture"], ["品質確認", "Real-time preview and accuracy heatmap workflow"], ["運用", "Handheld / backpack / vehicle / UAV"], ["資料", "PDF brochure available"]]
    },
    sl8: {
      line: "surveying",
      name: "SL8",
      en: "GNSS Receiver",
      intro: "測量・施工現場向けのコンパクトな GNSS 受信機。毎日の位置出しと基準点作業をシンプルに。",
      tag: "GNSS",
      visual: "SL8",
      image: "",
      points: ["マルチコンステレーション GNSS", "RTK フィールドワーク対応", "軽量で持ち運びやすい現場設計"],
      applications: ["基準点測量", "施工位置出し", "地形・境界測量"],
      specs: [["測位", "Multi-constellation GNSS RTK workflow"], ["通信", "Controller and correction data workflow"], ["現場", "Daily survey and stakeout operation"], ["資料", "日本語カタログ準備中 / Brochure placeholder"]]
    },
    ats1: {
      line: "surveying",
      name: "ATS1",
      en: "Robotic Total Station",
      intro: "ワンマン測量と施工位置出しを支援する、ロボティックトータルステーション。",
      tag: "Robotic TS",
      visual: "ATS1",
      image: "",
      points: ["自動追尾を活用した効率的な測量", "施工現場で見やすい操作フロー", "基準点から出来形確認まで対応"],
      applications: ["ワンマン測量", "建設位置出し", "構造物計測"],
      specs: [["機器", "Robotic total station workflow"], ["用途", "Stakeout, control survey and monitoring"], ["連携", "Field controller and survey software ready"], ["資料", "日本語カタログ準備中 / Brochure placeholder"]]
    },
    "slt12-android-total-station": {
      line: "surveying",
      name: "SLT12 Android Total Station",
      en: "Android Total Station",
      intro: "Android 操作環境を備えたトータルステーション。現場入力から測定までを一体化。",
      tag: "Android TS",
      visual: "SLT12",
      image: "",
      points: ["Android ベースの直感的な操作", "日常測量に必要な機能を一体化", "施工・測量チーム向けの扱いやすいワークフロー"],
      applications: ["一般測量", "施工位置出し", "出来形確認"],
      specs: [["操作", "Android-based field interface"], ["用途", "Angle, distance and coordinate measurement"], ["現場", "Surveying and construction layout"], ["資料", "日本語カタログ準備中 / Brochure placeholder"]]
    },
    "hydroboat-1200mb": {
      line: "hydrographic",
      name: "HydroBoat 1200MB",
      en: "Unmanned Hydrographic Survey Boat",
      intro: "河川、湖沼、港湾での測深作業を安全かつ効率的に行う無人測量ボート。",
      tag: "USV",
      visual: "1200MB",
      image: "",
      points: ["無人運用による安全な水域測量", "測深・航行データの統合ワークフロー", "浅水域や構造物周辺の調査に対応"],
      applications: ["河川・湖沼測深", "港湾・護岸点検", "浚渫前後の地形確認"],
      specs: [["プラットフォーム", "Unmanned survey vessel"], ["測深", "Bathymetry workflow ready"], ["運用", "Remote mission and navigation workflow"], ["資料", "日本語カタログ準備中 / Brochure placeholder"]]
    },
    "machine-control-solution": {
      line: "machine-control",
      name: "Machine Control Solution",
      en: "Construction Machine Guidance",
      intro: "設計データ、測位、重機オペレーションをつなぎ、現場の施工精度と生産性を高めるソリューション。",
      tag: "Construction DX",
      visual: "MC",
      image: "",
      points: ["重機向けガイダンスワークフロー", "設計面に基づく施工支援", "現場とオフィスをつなぐデータ活用"],
      applications: ["掘削・整地", "道路・造成工事", "施工進捗管理"],
      specs: [["対象", "Excavator, dozer and grading workflows"], ["データ", "Design surface and positioning workflow"], ["価値", "Productivity, quality and reduced rework"], ["資料", "日本語カタログ準備中 / Brochure placeholder"]]
    }
  }
};

const root = document.querySelector("#page-root");
const page = document.body.dataset.page;
const pathDepth = document.body.dataset.depth ? Number(document.body.dataset.depth) : 0;
const prefix = pathDepth ? "../".repeat(pathDepth) : "";

function linkTo(path) {
  return `${prefix}${path}`;
}

function productUrl(id) {
  const product = site.products[id];
  return linkTo(`satlab/${product.line}/${id}/index.html`);
}

function lineUrl(id) {
  return linkTo(`satlab/${id}/index.html`);
}

function button(label, href, modifier = "primary", extra = "") {
  return `<a class="button button--${modifier}" href="${href}" ${extra}>${label}</a>`;
}

function renderLineCards() {
  return Object.entries(site.lines).map(([id, line]) => `
    <article class="line-card">
      <span>${line.label}</span>
      <strong>${line.title}</strong>
      <p>${line.subtitle}</p>
      ${button("詳しく見る / View", lineUrl(id), "ghost")}
    </article>
  `).join("");
}

function renderProductCard(id) {
  const product = site.products[id];
  const line = site.lines[product.line];
  return `
    <article class="product-card">
      <div>
        <span>${line.label}</span>
        <h3>${product.name}</h3>
        <p>${product.intro}</p>
        <ul>
          ${product.points.slice(0, 3).map(point => `<li>${point}</li>`).join("")}
        </ul>
      </div>
      <div class="card-actions">
        ${button("製品ページ / Detail", productUrl(id), "dark")}
        ${button("PDF", productUrl(id).replace("index.html", "brochure.pdf"), "line", "download")}
      </div>
    </article>
  `;
}

function renderScenarioCards(items) {
  return items.map(([title, copy]) => `
    <article class="scenario-card">
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `).join("");
}

function renderHome() {
  root.innerHTML = `
    <section class="hero">
      <div class="hero__inner">
        <p class="eyebrow">CSPI-EXPO Japan 2026 / Exhibition Portal</p>
        <h1>SatLab Product Materials</h1>
        <p class="hero__copy">日本 CSPI 展会现场での iPad 展示、QR アクセス、製品カタログ下载に対応した SatLab 資料サイト。</p>
        <div class="hero__actions">
          ${button("製品総覧を見る", linkTo("satlab/index.html"), "primary")}
          ${button("3D Mapping", lineUrl("3d-mapping"), "ghost")}
          ${button("Surveying", lineUrl("surveying"), "ghost")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Product Lines</p>
          <h2>四大製品ライン</h2>
        </div>
        <p>高精度測位、点群計測、水域測量、施工支援を、展会現場で素早く案内できる構成にしています。</p>
      </div>
      <div class="line-grid">${renderLineCards()}</div>
    </section>
    <section class="section cta-band">
      <div class="section-heading">
        <div>
          <p class="eyebrow">For Booth Use</p>
          <h2>iPad と QR 導線に最適化</h2>
        </div>
        <p>全ページは静的ファイルのみで構成。GitHub Pages へそのまま配置できます。</p>
      </div>
    </section>
  `;
}

function renderBrand() {
  const ids = Object.keys(site.products);
  root.innerHTML = `
    <section class="page-title">
      <div class="page-title__inner">
        <p class="eyebrow">satlab / Product Overview</p>
        <h1>SatLab 展会製品総覧</h1>
        <p>CSPI JP 2026 で紹介する全製品を、製品ライン別に整理した展示資料ポータルです。</p>
      </div>
    </section>
    <section class="section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">All Products</p>
          <h2>製品カード</h2>
        </div>
        <p>各カードから製品詳細ページと PDF 資料にアクセスできます。</p>
      </div>
      <div class="product-grid">${ids.map(renderProductCard).join("")}</div>
    </section>
  `;
}

function renderLine() {
  const id = document.body.dataset.line;
  const line = site.lines[id];
  root.innerHTML = `
    <section class="page-title">
      <div class="page-title__inner">
        <p class="eyebrow">satlab / ${line.label}</p>
        <h1>${line.title}</h1>
        <p>${line.subtitle}<br>${line.copy}</p>
      </div>
    </section>
    <section class="section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Products</p>
          <h2>製品一覧</h2>
        </div>
        <p>${line.label} line products for booth consultation and brochure download.</p>
      </div>
      <div class="product-grid">${line.products.map(renderProductCard).join("")}</div>
    </section>
    <section class="section section--tight">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Applications</p>
          <h2>应用场景 / 活用シーン</h2>
        </div>
      </div>
      <div class="scenario-grid">${renderScenarioCards(line.scenarios)}</div>
    </section>
  `;
}

function renderProduct() {
  const id = document.body.dataset.product;
  const product = site.products[id];
  const line = site.lines[product.line];
  const visual = product.image
    ? `<img src="${product.image}" alt="${product.name} product visual">`
    : `<div class="product-visual__badge">${product.visual}</div>`;

  root.innerHTML = `
    <section class="product-hero">
      <div class="product-hero__inner">
        <div>
          <p class="eyebrow">${line.label} / ${product.tag}</p>
          <h1>${product.name}</h1>
          <p class="hero__copy">${product.intro}<br><span lang="en">${product.en}</span></p>
          <div class="hero__actions">
            ${button("PDF 下载 / Download", "brochure.pdf", "primary", "download")}
            ${button("製品ラインへ戻る", "../index.html", "ghost")}
          </div>
        </div>
        <div class="product-visual">${visual}</div>
      </div>
    </section>
    <section class="product-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Key Benefits</p>
          <h2>核心卖点</h2>
        </div>
      </div>
      <div class="feature-grid">
        ${product.points.map(point => `<article class="feature-card"><h3>${point}</h3><p>${product.name} supports field teams with a clear, booth-ready workflow for consultation.</p></article>`).join("")}
      </div>
    </section>
    <section class="product-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Applications</p>
          <h2>应用场景</h2>
        </div>
      </div>
      <div class="scenario-grid">
        ${product.applications.map(item => `<article class="scenario-card"><h3>${item}</h3><p>現場説明、顧客ヒアリング、資料下载の導線として使用できます。</p></article>`).join("")}
      </div>
    </section>
    <section class="product-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Specifications</p>
          <h2>关键参数</h2>
        </div>
      </div>
      <table class="spec-table">
        <tbody>
          ${product.specs.map(([key, value]) => `<tr><th>${key}</th><td>${value}</td></tr>`).join("")}
        </tbody>
      </table>
      <div class="product-actions" style="margin-top: 28px;">
        ${button("PDF 下载 / Download", "brochure.pdf", "primary", "download")}
        ${button("返回产品线 / Back", "../index.html", "line")}
      </div>
    </section>
  `;
}

if (page === "home") renderHome();
if (page === "brand") renderBrand();
if (page === "line") renderLine();
if (page === "product") renderProduct();
