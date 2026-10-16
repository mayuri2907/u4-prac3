import { useState } from 'react';
import { HashRouter, MemoryRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// Simple demo components for child routers
function DemoHome({ routerType }) {
  return (
    <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
      <h4 className="font-semibold text-emerald-800">Home Page ({routerType})</h4>
      <p className="text-sm text-emerald-700 mt-1">
        Welcome to the home view rendered under {routerType}.
      </p>
    </div>
  );
}

function DemoProducts({ routerType }) {
  return (
    <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
      <h4 className="font-semibold text-amber-800">Products Catalog ({routerType})</h4>
      <p className="text-sm text-amber-700 mt-1">
        Displaying list of items inside {routerType}.
      </p>
    </div>
  );
}

function DemoSettings({ routerType }) {
  return (
    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
      <h4 className="font-semibold text-purple-800">User Settings ({routerType})</h4>
      <p className="text-sm text-purple-700 mt-1">
        Configuring user preferences managed by {routerType}.
      </p>
    </div>
  );
}

// Memory router observer component to display internal memory stack
function MemoryLocationBadge() {
  const location = useLocation();
  return (
    <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-xs font-mono font-medium rounded-md">
      Internal Memory Path: {location.pathname}
    </div>
  );
}

// Hash router observer component
function HashLocationBadge() {
  const location = useLocation();
  return (
    <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 text-xs font-mono font-medium rounded-md">
      Active Hash Path: #{location.pathname}
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('hash');
  const [ssrSimUrl, setSsrSimUrl] = useState('/articles/react-basics');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-slate-800">
              RouterTypes<span className="text-teal-700">.</span>
            </span>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
              U4-PRAC 3
            </span>
          </div>
          <span className="text-xs font-medium text-slate-500">
            HashRouter vs MemoryRouter vs StaticRouter
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Intro Banner */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-xs font-semibold px-2.5 py-1 bg-teal-50 text-teal-800 rounded border border-teal-200">
            Practical 3: Router Types Comparison
          </span>
          <h1 className="text-2xl font-bold text-slate-800 mt-2">
            Demonstrating HashRouter, MemoryRouter & StaticRouter
          </h1>
          <p className="text-slate-600 text-sm mt-1 leading-relaxed">
            Different application environments require distinct routing mechanisms. Explore how each router functions and where it is best utilized.
          </p>

          {/* Switcher Navigation */}
          <div className="flex flex-wrap gap-2 mt-5 border-t border-slate-100 pt-4">
            <button
              onClick={() => setActiveTab('hash')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'hash'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              1. HashRouter Demo
            </button>
            <button
              onClick={() => setActiveTab('memory')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'memory'
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              2. MemoryRouter Demo
            </button>
            <button
              onClick={() => setActiveTab('static')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'static'
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              3. StaticRouter (SSR)
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'comparison'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              4. Summary & Viva Table
            </button>
          </div>
        </div>

        {/* Tab 1: HashRouter Demo */}
        {activeTab === 'hash' && (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-mono font-bold text-amber-700 uppercase">Interactive Playground</span>
              <h2 className="text-xl font-bold text-slate-800 mt-1">HashRouter Demo</h2>
              <p className="text-sm text-slate-600 mt-1">
                Notice how the URL uses the hash symbol (<code className="font-mono bg-slate-100 px-1 font-bold">#</code>). The text after the hash is never sent to the web server, eliminating the need for server URL rewrite rules.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-lg border border-slate-200">
              <HashRouter>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex space-x-2">
                      <Link to="/" className="px-3 py-1.5 bg-white text-slate-700 rounded border border-slate-300 text-xs font-medium hover:bg-slate-100">
                        #/ (Home)
                      </Link>
                      <Link to="/products" className="px-3 py-1.5 bg-white text-slate-700 rounded border border-slate-300 text-xs font-medium hover:bg-slate-100">
                        #/products
                      </Link>
                      <Link to="/settings" className="px-3 py-1.5 bg-white text-slate-700 rounded border border-slate-300 text-xs font-medium hover:bg-slate-100">
                        #/settings
                      </Link>
                    </div>
                    <HashLocationBadge />
                  </div>

                  <div className="bg-white p-4 rounded-md border border-slate-200">
                    <Routes>
                      <Route path="/" element={<DemoHome routerType="HashRouter" />} />
                      <Route path="/products" element={<DemoProducts routerType="HashRouter" />} />
                      <Route path="/settings" element={<DemoSettings routerType="HashRouter" />} />
                    </Routes>
                  </div>
                </div>
              </HashRouter>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-sm text-amber-900 space-y-1">
              <h4 className="font-bold">Where is HashRouter used?</h4>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Static file hosts like <strong>GitHub Pages</strong> or AWS S3 buckets where server-side fallback rewriting (404 redirect to index.html) cannot be configured.</li>
                <li>Legacy browser environments that do not support HTML5 History API.</li>
                <li>Electron desktop apps loading local <code className="font-mono">file://</code> protocol files.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: MemoryRouter Demo */}
        {activeTab === 'memory' && (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-mono font-bold text-purple-700 uppercase">In-Memory Navigation</span>
              <h2 className="text-xl font-bold text-slate-800 mt-1">MemoryRouter Demo</h2>
              <p className="text-sm text-slate-600 mt-1">
                MemoryRouter stores its location history entirely in an internal JavaScript array. The browser's address bar is <strong>never modified</strong>!
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-lg border border-slate-200">
              <MemoryRouter initialEntries={['/']}>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex space-x-2">
                      <Link to="/" className="px-3 py-1.5 bg-white text-slate-700 rounded border border-slate-300 text-xs font-medium hover:bg-slate-100">
                        Go to Memory Home
                      </Link>
                      <Link to="/products" className="px-3 py-1.5 bg-white text-slate-700 rounded border border-slate-300 text-xs font-medium hover:bg-slate-100">
                        Go to Memory Products
                      </Link>
                      <Link to="/settings" className="px-3 py-1.5 bg-white text-slate-700 rounded border border-slate-300 text-xs font-medium hover:bg-slate-100">
                        Go to Memory Settings
                      </Link>
                    </div>
                    <MemoryLocationBadge />
                  </div>

                  <div className="bg-white p-4 rounded-md border border-slate-200">
                    <Routes>
                      <Route path="/" element={<DemoHome routerType="MemoryRouter" />} />
                      <Route path="/products" element={<DemoProducts routerType="MemoryRouter" />} />
                      <Route path="/settings" element={<DemoSettings routerType="MemoryRouter" />} />
                    </Routes>
                  </div>
                </div>
              </MemoryRouter>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-sm text-purple-900 space-y-1">
              <h4 className="font-bold">Where is MemoryRouter used?</h4>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li><strong>Automated Testing:</strong> Running component tests with Jest, Vitest, or React Testing Library where no real browser URL exists.</li>
                <li><strong>React Native:</strong> Mobile applications where there is no browser address bar.</li>
                <li><strong>Embedded Widgets:</strong> Third-party widgets embedded on external websites where modifying the host page URL is prohibited.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 3: StaticRouter Simulation */}
        {activeTab === 'static' && (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-mono font-bold text-slate-600 uppercase">Server-Side Rendering (SSR)</span>
              <h2 className="text-xl font-bold text-slate-800 mt-1">StaticRouter Simulation</h2>
              <p className="text-sm text-slate-600 mt-1">
                StaticRouter never changes location interactively. The location is provided once by the server request (<code className="font-mono bg-slate-100 px-1">location=&#123;req.url&#125;</code>) to render static HTML on Node.js.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-lg border border-slate-200 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Simulate Incoming Server Request URL:
                </label>
                <div className="flex space-x-2">
                  <select
                    value={ssrSimUrl}
                    onChange={(e) => setSsrSimUrl(e.target.value)}
                    className="px-3 py-2 border border-slate-300 rounded text-sm bg-white text-slate-800"
                  >
                    <option value="/articles/react-basics">GET /articles/react-basics</option>
                    <option value="/about-institute">GET /about-institute</option>
                    <option value="/courses/web-dev">GET /courses/web-dev</option>
                  </select>
                </div>
              </div>

              <div className="p-4 bg-white rounded border border-slate-200 font-mono text-xs text-slate-700 space-y-2">
                <div className="text-slate-400">// Server-side Node.js rendering pipeline:</div>
                <div className="text-slate-800 font-semibold">
                  import &#123; renderToString &#125; from 'react-dom/server';
                </div>
                <div className="text-slate-800 font-semibold">
                  import &#123; StaticRouter &#125; from 'react-router-dom/server';
                </div>
                <div className="p-2 bg-slate-100 rounded text-teal-800">
                  const html = renderToString(
                  <br />
                  &nbsp;&nbsp;&lt;StaticRouter location="{ssrSimUrl}"&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;App /&gt;
                  <br />
                  &nbsp;&nbsp;&lt;/StaticRouter&gt;
                  <br />
                  );
                </div>
                <div className="text-emerald-700 font-sans text-xs">
                  ✓ HTML string generated and served immediately for SEO and fast First Contentful Paint (FCP).
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-100 rounded-lg border border-slate-300 text-sm text-slate-800 space-y-1">
              <h4 className="font-bold">Where is StaticRouter used?</h4>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li><strong>Server-Side Rendering (SSR):</strong> Frameworks like Next.js, Remix, or Express.js servers.</li>
                <li><strong>Search Engine Optimization (SEO):</strong> Rendering pre-built HTML for web crawlers (Google, Bing).</li>
                <li><strong>Static Site Generation (SSG):</strong> Generating offline HTML pages during the build phase.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 4: Comparison Table */}
        {activeTab === 'comparison' && (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-mono font-bold text-teal-700 uppercase">Exam Reference</span>
              <h2 className="text-xl font-bold text-slate-800 mt-1">Router Types Comparison Table</h2>
              <p className="text-sm text-slate-600 mt-1">
                Quick reference guide summarizing the four major router types in React Router.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 text-slate-700 font-semibold uppercase">
                  <tr>
                    <th className="p-3 border-b border-slate-200">Router Type</th>
                    <th className="p-3 border-b border-slate-200">URL Representation</th>
                    <th className="p-3 border-b border-slate-200">Server Rewrite Needed?</th>
                    <th className="p-3 border-b border-slate-200">Primary Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">BrowserRouter</td>
                    <td className="p-3 font-mono">/orders/current</td>
                    <td className="p-3 text-red-600 font-medium">Yes (Fallback to index.html)</td>
                    <td className="p-3">Standard production SPAs with HTML5 History API.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">HashRouter</td>
                    <td className="p-3 font-mono">/#/orders/current</td>
                    <td className="p-3 text-emerald-700 font-medium">No (Hash stays client-side)</td>
                    <td className="p-3">Static hosting (GitHub Pages), Electron, legacy browsers.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">MemoryRouter</td>
                    <td className="p-3 font-mono">Hidden (In-memory stack)</td>
                    <td className="p-3 text-emerald-700 font-medium">No (No browser URL involved)</td>
                    <td className="p-3">Unit tests (Jest/Vitest), React Native, embedded iframe widgets.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">StaticRouter</td>
                    <td className="p-3 font-mono">Static string from req.url</td>
                    <td className="p-3 text-emerald-700 font-medium">No (Runs on backend)</td>
                    <td className="p-3">Server-side rendering (SSR) in Node.js for SEO.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        React Practical 3 | Router Types Demonstration & Reference
      </footer>
    </div>
  );
}

export default App;
