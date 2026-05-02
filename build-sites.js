const fs = require("fs");
const path = require("path");

const root = process.cwd();
const output = path.join(root, "business-sites");

const companies = [
  {
    slug: "happy-auto-body",
    repo: "happy-auto-body-website",
    name: "Happy Auto Body Shop",
    type: "Collision Repair & Auto Body",
    city: "Scarborough",
    address: "17 Civic Rd, Scarborough, ON M1L 2K6",
    phone: "(416) 757-7673",
    email: "kumarshappyauto@gmail.com",
    hours: "Open daily 8:00 AM - 8:00 PM",
    rating: "3.6",
    reviewCount: "10+ public reviews",
    summary: "Auto body and repair shop listed as serving Scarborough since 1997, with public contact details and extended daily hours.",
    hero: "https://images.unsplash.com/photo-1632823471565-1ecdf5c278f3?auto=format&fit=crop&w=1800&q=82",
    palette: ["#111827", "#f97316", "#f8fafc", "#334155"],
    services: ["Collision repair", "Dent and bumper work", "Paint refinishing", "Repair estimates", "Insurance repair support", "Appointment scheduling"],
    proof: ["Public listing shows no owned website", "Business email is publicly listed", "Long operating history is a useful trust signal"],
    source: "https://www.allbiz.ca/happy-auto-body-shop_1G-416-757-7673"
  },
  {
    slug: "ic-muffler-auto",
    repo: "ic-muffler-auto-repair-website",
    name: "I C Muffler & Auto Repair",
    type: "Muffler, Exhaust & Auto Repair",
    city: "Scarborough",
    address: "4730 Sheppard Ave E, Toronto, ON M1S 3V6",
    phone: "(416) 291-2868",
    email: "",
    hours: "Call for current hours",
    rating: "5.0",
    reviewCount: "small public review sample",
    summary: "Scarborough repair shop listed for muffler repair, general auto maintenance, and service near Sheppard Avenue East.",
    hero: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1800&q=82",
    palette: ["#0f172a", "#22c55e", "#f7fee7", "#14532d"],
    services: ["Muffler repair", "Exhaust service", "Brake repair", "Oil and maintenance", "Diagnostics", "General repairs"],
    proof: ["Founded in 2007 per public listing", "No owned website listed", "Service niche is search-friendly"],
    source: "https://www.allbiz.ca/i-c-muffler-auto-repair-416-291-2868"
  },
  {
    slug: "glidden-auto-electric",
    repo: "glidden-auto-electric-website",
    name: "Glidden Auto Electric",
    type: "Auto Electric & Mechanical Repair",
    city: "Brampton",
    address: "289 Rutherford Rd S Unit 12, Brampton, ON L6W 3R9",
    phone: "(905) 769-4404",
    email: "gliddenauto@hotmail.com",
    hours: "Mon-Fri 9:00 AM - 7:00 PM, Sat 8:30 AM - 4:00 PM",
    rating: "10",
    reviewCount: "reviews noted in public directory context",
    summary: "Brampton shop publicly described as specializing in auto electrical work, alternators, starters, oil changes, tune-ups, brakes, and maintenance.",
    hero: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1800&q=82",
    palette: ["#18181b", "#38bdf8", "#ecfeff", "#155e75"],
    services: ["Electrical diagnostics", "Starter rebuilding", "Alternator service", "Brake repairs", "Tune-ups", "Domestic and import repair"],
    proof: ["Public email available", "No website listed on public business directory", "Specialized electrical positioning is strong for local SEO"],
    source: "https://www.allbiz.ca/glidden-auto-electric-905-769-4404"
  },
  {
    slug: "happyland-pub-fast-food",
    repo: "happyland-pub-fast-food-website",
    name: "Happyland Pub & Fast Food",
    type: "Pub, Grill & Fast Food",
    city: "Scarborough",
    address: "2302 Eglinton Ave E, Scarborough, ON M1K 2M2",
    phone: "(416) 759-9780",
    email: "",
    hours: "Open daily 11:00 AM - 11:00 PM",
    rating: "Publicly listed",
    reviewCount: "reviews vary by directory",
    summary: "Neighbourhood pub and fast food restaurant listed with dine-in, call-in, and delivery-related public information.",
    hero: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=82",
    palette: ["#1c1917", "#eab308", "#fff7ed", "#7c2d12"],
    services: ["Pub food", "Fast food", "Takeout calls", "Beer and beverages", "Daily meals", "Neighbourhood dining"],
    proof: ["Founded in 1992 per public listing", "No owned website listed", "Menu-first mobile site would help customers decide quickly"],
    source: "https://www.allbiz.ca/happyland-pub-grill-416-759-9780"
  },
  {
    slug: "fortune-stone-restaurant",
    repo: "fortune-stone-restaurant-website",
    name: "Fortune Stone Restaurant",
    type: "Hong Kong-Style Cafe",
    city: "Markham",
    address: "7010 Warden Ave, Markham, ON L3R 5Y3",
    phone: "(905) 475-0099",
    email: "",
    hours: "Public listings vary; call to confirm",
    rating: "3.9",
    reviewCount: "217 Google reviews noted by Sluurpy",
    summary: "Markham Hong Kong-style cafe known in public listings for fast service, milk tea, noodles, rice plates, wings, and takeout-friendly meals.",
    hero: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1800&q=82",
    palette: ["#1f2937", "#dc2626", "#fff1f2", "#7f1d1d"],
    services: ["HK-style cafe meals", "Noodles and rice plates", "Milk tea", "Chicken wings", "Takeout", "Delivery options"],
    proof: ["Google review count cited by public restaurant directory", "Restaurantji describes quick service and cozy atmosphere", "No clear owned website found in public directory checks"],
    source: "https://www.sluurpy.com/en/markham/restaurant/4780655/new-fortune-stone-restaurant"
  },
  {
    slug: "happy-cafe-steak-house",
    repo: "happy-cafe-steak-house-website",
    name: "Happy Cafe and Steak House",
    type: "Cafe & Steak House",
    city: "Markham",
    address: "8392 Kennedy Rd, Markham, ON L3R 0W4",
    phone: "(905) 415-1198",
    email: "",
    hours: "Call for current hours",
    rating: "Publicly listed",
    reviewCount: "reviews vary by directory",
    summary: "Markham cafe and steak house listed on Kennedy Road, with public business history dating back to 2000.",
    hero: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=1800&q=82",
    palette: ["#111111", "#a16207", "#fefce8", "#713f12"],
    services: ["Cafe plates", "Steak dishes", "Breakfast and lunch", "Hot drinks", "Call-in orders", "Plaza dining"],
    proof: ["Founded in 2000 per public listing", "No owned website listed", "Location details are easy to package into a one-page restaurant site"],
    source: "https://www.allbiz.ca/happy-cafe-and-steak-house-905-415-1198"
  },
  {
    slug: "mojo-hair-co",
    repo: "mojo-hair-co-website",
    name: "Mojo Hair Co",
    type: "Hair Salon",
    city: "Mississauga",
    address: "608 Arbor Rd, Mississauga, ON L5G 2J9",
    phone: "(905) 990-6656",
    email: "",
    hours: "Tue-Thu 10:00 AM - 8:00 PM, Fri 9:00 AM - 7:00 PM, Sat 9:00 AM - 4:00 PM",
    rating: "5.0",
    reviewCount: "10+ public reviews",
    summary: "Mississauga salon publicly described as offering haircuts and colouring, with positive public review snippets around clean service and consistent cuts.",
    hero: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1800&q=82",
    palette: ["#3b0764", "#ec4899", "#fdf2f8", "#831843"],
    services: ["Haircuts", "Colour services", "Blowouts", "Consultations", "Styling", "Regular appointments"],
    proof: ["AllBiz lists 5.0 with 10+ reviews", "No owned website listed", "Strong fit for a polished booking-first salon site"],
    source: "https://www.allbiz.ca/mojo-hair-co-905-990-6656"
  },
  {
    slug: "unica-hair-beauty",
    repo: "unica-hair-beauty-website",
    name: "Unica Hair & Beauty Salon",
    type: "Hair, Colour & Beauty",
    city: "Mississauga",
    address: "128 Queen St S Unit #5, Mississauga, ON L5M 1K8",
    phone: "(905) 826-1656",
    email: "amiraelkony1@gmail.com",
    hours: "Tue-Sun hours vary by listing",
    rating: "4.9",
    reviewCount: "474 Google reviews noted by Birdeye",
    summary: "Streetsville salon with a strong public review profile, known for colour, hair treatments, styling, waxing, lashes, makeup, and beauty services.",
    hero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=82",
    palette: ["#064e3b", "#f59e0b", "#ecfdf5", "#78350f"],
    services: ["Hair colour", "Keratin and botox treatments", "Hair extensions", "Makeup", "Waxing and threading", "Lash services"],
    proof: ["Birdeye reports 4.9 from 474 Google reviews", "Public listing includes email", "A premium site can organize a broad service menu"],
    source: "https://reviews.birdeye.com/unica-hair-beauty-salon-168026189321611"
  },
  {
    slug: "super-ten-nails",
    repo: "super-ten-nails-website",
    name: "Super Ten Nails",
    type: "Nail Salon",
    city: "Oakville",
    address: "2530 Third Line, Oakville, ON L6M 0G8",
    phone: "(905) 825-9995",
    email: "",
    hours: "Mon-Fri 10:00 AM - 8:00 PM, Sat 10:00 AM - 6:00 PM, Sun 11:00 AM - 4:00 PM",
    rating: "Publicly listed",
    reviewCount: "reviews vary by directory",
    summary: "Oakville nail salon publicly listed with long weekly hours and nail care services.",
    hero: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1800&q=82",
    palette: ["#312e81", "#14b8a6", "#eef2ff", "#134e4a"],
    services: ["Manicures", "Pedicures", "Shellac polish", "Gel services", "Nail enhancements", "Nail art gallery"],
    proof: ["No owned website listed in public directory", "Long hours are useful for mobile searchers", "Simple service menus convert well for salons"],
    source: "https://www.allbiz.ca/super-ten-nails_3F-905-825-9995"
  },
  {
    slug: "blessed-hair",
    repo: "blessed-hair-mississauga-website",
    name: "Blessed Hair",
    type: "Hair, Wigs & Extensions",
    city: "Mississauga",
    address: "966 Dundas St E Unit 9, Mississauga, ON L4Y 4H5",
    phone: "(647) 654-8059",
    email: "",
    hours: "Mon-Fri 10:00 AM - 7:00 PM, Sat 8:00 AM - 5:00 PM",
    rating: "mixed",
    reviewCount: "small public review sample",
    summary: "Mississauga hair salon publicly described around styling, custom wigs, weave extensions, and hair care services.",
    hero: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1800&q=82",
    palette: ["#7c2d12", "#84cc16", "#f7fee7", "#365314"],
    services: ["Wigs", "Weaves", "Extensions", "Hair styling", "Wash and blowout", "Appointment policies"],
    proof: ["No owned website listed in public directory", "Historical domain appears inactive in listing", "Clear service policies can reduce appointment confusion"],
    source: "https://www.allbiz.ca/blessed-hair-647-654-8059"
  }
];

function esc(text) {
  return String(text).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function html(company) {
  const [ink, accent, soft, deep] = company.palette;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>${esc(company.name)} | ${esc(company.type)} in ${esc(company.city)}</title>
    <meta name="description" content="${esc(company.summary)}">
    <style>
      :root{--ink:${ink};--accent:${accent};--soft:${soft};--deep:${deep};--muted:#62656b;--line:#e6e3dc;--white:#fff}
      *{box-sizing:border-box} body{margin:0;background:var(--soft);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
      a{color:inherit}.wrap{width:min(1120px,calc(100% - 32px));margin:auto}.top{position:sticky;top:0;z-index:20;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:14px clamp(16px,4vw,58px);background:rgba(255,255,255,.94);border-bottom:1px solid var(--line);backdrop-filter:blur(16px)}.brand{font-weight:850;text-decoration:none}.nav{display:flex;gap:14px;color:var(--muted);font-size:14px}.nav a{text-decoration:none}.hero{position:relative;min-height:78vh;display:grid;align-items:end;background-image:linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.22)),url('${company.hero}');background-size:cover;background-position:center;color:#fff}.hero .wrap{padding:88px 0 70px}.eyebrow{color:var(--accent);font-size:13px;font-weight:850;letter-spacing:.08em;text-transform:uppercase}h1,h2,h3,p{margin-top:0}h1{max-width:780px;margin-bottom:18px;font-size:clamp(40px,7vw,78px);line-height:.96}h2{font-size:clamp(30px,5vw,50px);line-height:1.02}.lead{max-width:720px;color:rgba(255,255,255,.86);font-size:20px;line-height:1.55}.btns{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:11px 16px;border-radius:7px;border:1px solid var(--accent);background:var(--accent);color:${ink};font-weight:850;text-decoration:none}.btn.alt{border-color:rgba(255,255,255,.7);background:transparent;color:#fff}.info{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;background:var(--line)}.info div{padding:20px clamp(16px,3vw,30px);background:#fff;min-height:102px}.info span{display:block;color:var(--muted);font-size:12px;text-transform:uppercase}.info strong{display:block;margin-top:6px;font-size:17px;line-height:1.3}.section{padding:64px 0}.split{display:grid;grid-template-columns:.85fr 1.15fr;gap:46px;align-items:start}.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.card{padding:20px;border:1px solid var(--line);border-radius:8px;background:#fff;min-height:150px}.card p,.muted{color:var(--muted);line-height:1.55}.dark{background:var(--ink);color:#fff}.dark .muted,.dark p{color:rgba(255,255,255,.76)}.review{display:grid;grid-template-columns:.7fr 1.3fr;gap:36px;align-items:center}.rating{font-size:72px;font-weight:900;line-height:1;color:var(--accent)}.contact{display:grid;grid-template-columns:1fr 1fr;gap:18px}.note{padding:14px;border-left:5px solid var(--accent);background:#fff;color:var(--muted);line-height:1.5}.foot{padding:28px 16px;text-align:center;color:var(--muted);font-size:13px;border-top:1px solid var(--line);background:#fff}@media(max-width:840px){.info,.split,.grid,.review,.contact{grid-template-columns:1fr}.nav{display:none}.hero{min-height:74vh}h1{font-size:42px}}
    </style>
  </head>
  <body>
    <header class="top">
      <a class="brand" href="#">${esc(company.name)}</a>
      <nav class="nav"><a href="#services">Services</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a></nav>
    </header>
    <main>
      <section class="hero">
        <div class="wrap">
          <div class="eyebrow">${esc(company.type)} · ${esc(company.city)}</div>
          <h1>${esc(company.name)}</h1>
          <p class="lead">${esc(company.summary)}</p>
          <div class="btns"><a class="btn" href="tel:${company.phone.replace(/[^0-9+]/g, "")}">Call ${esc(company.phone)}</a><a class="btn alt" href="#contact">View location</a></div>
        </div>
      </section>
      <section class="info">
        <div><span>Location</span><strong>${esc(company.address)}</strong></div>
        <div><span>Phone</span><strong>${esc(company.phone)}</strong></div>
        <div><span>Hours</span><strong>${esc(company.hours)}</strong></div>
        <div><span>Public Rating Signal</span><strong>${esc(company.rating)} · ${esc(company.reviewCount)}</strong></div>
      </section>
      <section id="services" class="section wrap split">
        <div>
          <div class="eyebrow">Services</div>
          <h2>Clear information for customers ready to call.</h2>
          <p class="muted">This page is structured around the public information customers usually look for first: services, hours, phone number, location, and trust signals.</p>
        </div>
        <div class="grid">
          ${company.services.map((service) => `<div class="card"><h3>${esc(service)}</h3><p>Easy-to-scan service section for mobile visitors searching in ${esc(company.city)}.</p></div>`).join("")}
        </div>
      </section>
      <section id="reviews" class="section dark">
        <div class="wrap review">
          <div><div class="eyebrow">Reviews</div><div class="rating">${esc(company.rating)}</div><p>${esc(company.reviewCount)}</p></div>
          <div>
            <h2>Public reputation, organized into a stronger web presence.</h2>
            <p>Review and business details were gathered from public directory sources. Final site copy, photos, service list, and exact hours should be confirmed by the business owner before this becomes an official website.</p>
          </div>
        </div>
      </section>
      <section id="contact" class="section wrap contact">
        <div class="card">
          <div class="eyebrow">Contact</div>
          <h2>Visit or call</h2>
          <p><strong>Address:</strong> ${esc(company.address)}</p>
          <p><strong>Phone:</strong> ${esc(company.phone)}</p>
          ${company.email ? `<p><strong>Email:</strong> ${esc(company.email)}</p>` : ""}
          <p><strong>Hours:</strong> ${esc(company.hours)}</p>
        </div>
        <div class="card">
          <div class="eyebrow">Information checked</div>
          <h2>Public source notes</h2>
          <ul>
            ${company.proof.map((item) => `<li>${esc(item)}</li>`).join("")}
          </ul>
          <p><a href="${company.source}" rel="noreferrer" target="_blank">Primary public source</a></p>
        </div>
      </section>
      <section class="wrap">
        <p class="note">Prepared as a proposed website for ${esc(company.name)}. It is not published as the official business website unless the owner approves it. Photography is representative and should be replaced with owner-approved photos.</p>
      </section>
    </main>
    <footer class="foot">Website prepared for ${esc(company.name)} · ${esc(company.city)}</footer>
  </body>
</html>`;
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const company of companies) {
  const dir = path.join(output, company.repo);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html(company));
  fs.writeFileSync(path.join(dir, "README.md"), `# ${company.name}\n\nProposed static website for ${company.name}.\n\nSource: ${company.source}\n`);
}

fs.writeFileSync(path.join(output, "companies.json"), JSON.stringify(companies.map(({ hero, palette, services, proof, ...rest }) => rest), null, 2));
console.log(`Built ${companies.length} company sites in ${output}`);
