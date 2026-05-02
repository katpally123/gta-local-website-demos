const leads = [
  {
    slug: "happy-auto-body",
    name: "Happy Auto Body Shop",
    category: "Auto Body & Collision",
    city: "Scarborough",
    address: "17 Civic Rd, Scarborough, ON M1L 2K6",
    phone: "(416) 757-7673",
    email: "kumarshappyauto@gmail.com",
    hours: "Mon-Sun 8 AM-8 PM",
    rating: "3.6",
    reviews: "10+",
    source: "https://www.allbiz.ca/happy-auto-body-shop_1G-416-757-7673",
    status: "Strong email lead",
    pitch: "Collision-focused site with appointment calls, insurance help, photo-ready repair sections, and trust signals for a long-running shop.",
    hero: "https://images.unsplash.com/photo-1632823471565-1ecdf5c278f3?auto=format&fit=crop&w=1800&q=82",
    headline: "Collision repair and body work made straightforward.",
    intro: "A practical demo for a Scarborough auto body shop that needs customers to call quickly, understand services, and feel confident before visiting.",
    services: [
      ["Collision repair", "Clear sections for fender, bumper, dent, and accident repair inquiries."],
      ["Paint and refinishing", "A visual space for before-and-after photos and paint-match quality."],
      ["Insurance assistance", "Simple copy explaining estimates, claims, and appointment flow."],
      ["Fast contact", "Sticky phone, map, hours, and email calls-to-action for mobile visitors."]
    ],
    themes: ["Long-running shop listed as founded in 1997", "Public listing says no website listed", "Email available", "Mixed review profile makes credibility work useful"]
  },
  {
    slug: "ic-muffler-auto",
    name: "I C Muffler & Auto Repair",
    category: "Muffler & Auto Repair",
    city: "Scarborough",
    address: "4730 Sheppard Ave E, Toronto, ON M1S 3V6",
    phone: "(416) 291-2868",
    email: "",
    hours: "Call for hours",
    rating: "5.0",
    reviews: "1+",
    source: "https://www.allbiz.ca/i-c-muffler-auto-repair-416-291-2868",
    status: "Phone-only lead",
    pitch: "Service page for mufflers, exhaust, brakes, maintenance, and direct call booking.",
    hero: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1800&q=82",
    headline: "Muffler, exhaust, and everyday repair in Scarborough.",
    intro: "This demo is built around high-intent local searches: muffler repair, exhaust noise, brakes, maintenance, and quick phone booking.",
    services: [
      ["Muffler repair", "A clear landing section for noisy exhausts, replacements, and diagnostics."],
      ["General maintenance", "Oil, brakes, inspections, and common repair requests in one place."],
      ["Same-day calls", "Mobile-first call buttons for customers who need a quick answer."],
      ["Local SEO", "Location copy around Sheppard Ave E and Scarborough repair searches."]
    ],
    themes: ["Founded in 2007 per AllBiz", "Public listing says no website listed", "Small review count means search presence can be improved"]
  },
  {
    slug: "glidden-auto-electric",
    name: "Glidden Auto Electric",
    category: "Auto Electric & Repair",
    city: "Brampton",
    address: "289 Rutherford Rd S Unit 12, Brampton, ON L6W 3R9",
    phone: "(905) 769-4404",
    email: "gliddenauto@hotmail.com",
    hours: "Mon-Fri 9 AM-7 PM; Sat 8:30 AM-4 PM",
    rating: "Listed near 10 reviews",
    reviews: "10",
    source: "https://www.allbiz.ca/glidden-auto-electric-905-769-4404",
    status: "Strong email lead",
    pitch: "Specialized auto-electric positioning for alternators, starters, diagnostics, and domestic/import maintenance.",
    hero: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1800&q=82",
    headline: "Electrical diagnostics, starters, alternators, and full auto repair.",
    intro: "A focused Brampton demo for a shop whose strongest public description is auto electric expertise plus regular maintenance.",
    services: [
      ["Electrical diagnostics", "Highlight warning lights, starting issues, battery drain, and wiring checks."],
      ["Alternators and starters", "A dedicated section for rebuilds and replacements."],
      ["Brakes and tune-ups", "Everyday maintenance services for imported and domestic vehicles."],
      ["Easy appointment flow", "Phone, email, hours, and map surfaced in every main section."]
    ],
    themes: ["Public email available", "No website listed on AllBiz", "Specific niche is easier to rank than generic auto repair", "Brampton shop with clear service categories"]
  },
  {
    slug: "happyland-pub-fast-food",
    name: "Happyland Pub & Fast Food",
    category: "Restaurant & Pub",
    city: "Scarborough",
    address: "2302 Eglinton Ave E, Scarborough, ON M1K 2M2",
    phone: "(416) 759-9780",
    email: "",
    hours: "Mon-Sun 11 AM-11 PM",
    rating: "Directory listed",
    reviews: "N/A",
    source: "https://www.allbiz.ca/happyland-pub-grill-416-759-9780",
    status: "Phone-only lead",
    pitch: "Menu-first restaurant page with call-to-order, delivery cues, pub atmosphere, and Google Maps visibility.",
    hero: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=82",
    headline: "A neighbourhood pub page built for orders, visits, and regulars.",
    intro: "This demo gives a small restaurant a cleaner way to show menu categories, hours, delivery options, and quick contact.",
    services: [
      ["Menu sections", "Simple food, drinks, specials, and late-night items without needing a PDF."],
      ["Call-to-order", "Prominent phone buttons for takeout and delivery questions."],
      ["Neighbourhood SEO", "Scarborough and Eglinton Ave copy for local discovery."],
      ["Photos and updates", "Room for food photos, events, and weekly specials."]
    ],
    themes: ["Founded in 1992 per AllBiz", "Public listing says no website listed", "Delivery mentioned in Q&A", "Restaurant sites benefit from mobile-first menu access"]
  },
  {
    slug: "fortune-stone-restaurant",
    name: "Fortune Stone Restaurant",
    category: "Hong Kong-Style Cafe",
    city: "Markham",
    address: "7010 Warden Ave, Markham, ON L3R 5Y3",
    phone: "(905) 475-0099",
    email: "",
    hours: "Public listings vary",
    rating: "3.9",
    reviews: "217+ Google reviews noted",
    source: "https://www.sluurpy.com/en/markham/restaurant/4780655/new-fortune-stone-restaurant",
    status: "High-review phone lead",
    pitch: "A menu and photo-forward cafe page for a Hong Kong-style restaurant with existing review demand but no clear owned site.",
    hero: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1800&q=82",
    headline: "Hong Kong-style comfort food, fast service, and easy ordering.",
    intro: "The demo leans into quick service, milk tea, noodles, rice plates, wings, and takeout-friendly browsing.",
    services: [
      ["Menu highlights", "Fast meal, noodle, rice, baked dish, and drink categories."],
      ["Takeout and delivery", "Clear prompts for DoorDash, Uber Eats, and phone orders where available."],
      ["Review-aware copy", "Balances loyal-customer strengths with clean, current menu messaging."],
      ["Bilingual-ready layout", "Designed to support English and Chinese section labels later."]
    ],
    themes: ["Sluurpy notes Google 3.9/5 from 217 reviews", "Restaurantji describes HK cafe, friendly staff, quick food", "Public directories show no owned website", "High review count means a demo has stronger social proof"]
  },
  {
    slug: "happy-cafe-steak-house",
    name: "Happy Cafe and Steak House",
    category: "Cafe & Steak House",
    city: "Markham",
    address: "8392 Kennedy Rd, Markham, ON L3R 0W4",
    phone: "(905) 415-1198",
    email: "",
    hours: "Call for hours",
    rating: "Directory listed",
    reviews: "N/A",
    source: "https://www.allbiz.ca/happy-cafe-and-steak-house-905-415-1198",
    status: "Phone-only lead",
    pitch: "Simple restaurant landing page for menu discovery, hours, plaza location, and phone calls.",
    hero: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=1800&q=82",
    headline: "A compact restaurant site for regulars and first-time visitors.",
    intro: "A practical demo for a Markham cafe that needs basic visibility, calls, and a place to keep menu information current.",
    services: [
      ["Menu preview", "Breakfast, cafe plates, steak items, drinks, and specials."],
      ["Location clarity", "Kennedy Road plaza address and easy map placement."],
      ["Call-first UX", "Phone number surfaced for reservations, orders, and hours checks."],
      ["Search presence", "Basic SEO for Markham cafe and steak house searches."]
    ],
    themes: ["Founded in 2000 per AllBiz", "No website listed on AllBiz", "Located in a plaza with multiple food businesses"]
  },
  {
    slug: "mojo-hair-co",
    name: "Mojo Hair Co",
    category: "Hair Salon",
    city: "Mississauga",
    address: "608 Arbor Rd, Mississauga, ON L5G 2J9",
    phone: "(905) 990-6656",
    email: "",
    hours: "Tue-Thu 10 AM-8 PM; Fri 9 AM-7 PM; Sat 9 AM-4 PM",
    rating: "5.0",
    reviews: "10+",
    source: "https://www.allbiz.ca/mojo-hair-co-905-990-6656",
    status: "Good social lead",
    pitch: "Elegant appointment-focused salon page with services, stylist trust, reviews, and gallery space.",
    hero: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1800&q=82",
    headline: "Haircuts and colour with a relaxed Port Credit feel.",
    intro: "This demo turns a small salon’s reputation into a polished booking page with services, hours, and review cues.",
    services: [
      ["Cuts and styling", "Women’s, men’s, and regular client haircut sections."],
      ["Colour services", "Highlights, refreshes, consultation, and transformation gallery space."],
      ["Appointment flow", "Phone-first booking with hours visible above the fold."],
      ["Review trust", "Customer language around clean service, punctuality, and consistent cuts."]
    ],
    themes: ["AllBiz lists 5.0 with 10+ reviews", "ManeReviews shows positive Google review snippets", "No website listed on AllBiz", "Salon has clear hours and strong service fit"]
  },
  {
    slug: "unica-hair-beauty",
    name: "Unica Hair & Beauty Salon",
    category: "Hair & Beauty Salon",
    city: "Mississauga",
    address: "128 Queen St S Unit #5, Mississauga, ON L5M 1K8",
    phone: "(905) 826-1656",
    email: "amiraelkony1@gmail.com",
    hours: "Tue-Sun, hours vary by listing",
    rating: "4.9",
    reviews: "474 Google reviews noted",
    source: "https://reviews.birdeye.com/unica-hair-beauty-salon-168026189321611",
    status: "Strong email lead",
    pitch: "Premium salon demo that organizes hair, beauty, bridal, colour, treatments, and booking around a strong review profile.",
    hero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=82",
    headline: "Colour, treatments, styling, and beauty appointments in Streetsville.",
    intro: "This demo is built for a salon with a strong reputation that can convert more searches with a polished owned website.",
    services: [
      ["Hair colour", "Balayage, highlights, tint, correction, and consultation sections."],
      ["Treatments", "Keratin, protein, collagen, botox, and repair-focused copy."],
      ["Beauty services", "Makeup, waxing, threading, lashes, and facial treatment categories."],
      ["Online-ready booking", "A clean structure for future booking links and price menus."]
    ],
    themes: ["Birdeye shows 4.9 from 474 Google reviews", "AllBiz lists email and says no website listed", "BestProsInTown highlights hair treatments and strong service themes", "High review count makes this a premium upsell candidate"]
  },
  {
    slug: "super-ten-nails",
    name: "Super Ten Nails",
    category: "Nail Salon",
    city: "Oakville",
    address: "2530 Third Line, Oakville, ON L6M 0G8",
    phone: "(905) 825-9995",
    email: "",
    hours: "Mon-Fri 10 AM-8 PM; Sat 10 AM-6 PM; Sun 11 AM-4 PM",
    rating: "Directory listed",
    reviews: "N/A",
    source: "https://www.allbiz.ca/super-ten-nails_3F-905-825-9995",
    status: "Phone-only lead",
    pitch: "Nail-service website with manicure, pedicure, shellac, gallery, hours, and appointment calls.",
    hero: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1800&q=82",
    headline: "Clean nail care, polished services, and easy appointment calls.",
    intro: "A mobile-friendly salon demo that turns hours, services, and location into an easier customer path.",
    services: [
      ["Manicures", "Classic, shellac, gel, and polish-change sections."],
      ["Pedicures", "Spa pedicure and foot-care category space."],
      ["Nail enhancements", "Room for acrylic, design, fills, and add-on pricing."],
      ["Gallery", "Before-and-after and nail-art photos can be added quickly."]
    ],
    themes: ["AllBiz says no website listed", "Located near Trafalgar Ridge area listings", "Long hours make call and map visibility valuable"]
  },
  {
    slug: "blessed-hair",
    name: "Blessed Hair",
    category: "Hair, Wigs & Extensions",
    city: "Mississauga",
    address: "966 Dundas St E Unit 9, Mississauga, ON L4Y 4H5",
    phone: "(647) 654-8059",
    email: "",
    hours: "Mon-Fri 10 AM-7 PM; Sat 8 AM-5 PM",
    rating: "Low public score",
    reviews: "Small sample",
    source: "https://www.allbiz.ca/blessed-hair-647-654-8059",
    status: "Reputation-risk lead",
    pitch: "A reset-style website could clarify services, appointments, pricing expectations, and quality standards.",
    hero: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1800&q=82",
    headline: "Extensions, wigs, and styling with clearer booking expectations.",
    intro: "This demo is framed as a reputation reset: clear appointments, service expectations, gallery, and transparent contact flow.",
    services: [
      ["Extensions and weaves", "Service pages that explain timing, prep, and consultation needs."],
      ["Custom wigs", "Space for portfolio photos, care notes, and booking requirements."],
      ["Cuts and styling", "Basic salon services organized for quick browsing."],
      ["Appointment policies", "Clear policies help reduce confusion before a customer arrives."]
    ],
    themes: ["AllBiz says no website listed", "Old domain appears historical in AllBiz", "Some public reviews are negative, so pitch carefully", "Could benefit from clearer service expectations"]
  }
];

function siteUrl(slug) {
  return `${location.origin}${location.pathname}?site=${slug}`;
}

function renderHome() {
  const strong = leads.filter((lead) => lead.email).length;
  document.title = "GTA Local Website Demos";
  app.innerHTML = `
    <section class="lead-hero shell">
      <div class="kicker">Lead research and demo campaign</div>
      <h1>Static website mockups for GTA businesses with weak or missing web presence.</h1>
      <p class="subhead">Each card includes the public listing signal, review cue, contact status, and a tailored demo page. Verify on Google Maps before closing or taking payment.</p>
      <div class="stats">
        <div class="stat"><strong>${leads.length}</strong><span>demo concepts</span></div>
        <div class="stat"><strong>${strong}</strong><span>public email leads</span></div>
        <div class="stat"><strong>$200</strong><span>one-time offer</span></div>
        <div class="stat"><strong>$20/mo</strong><span>maintenance offer</span></div>
      </div>
    </section>
    <section class="shell grid">
      ${leads.map((lead) => `
        <article class="lead-card">
          <div class="meta">
            <span class="pill">${lead.city}</span>
            <span class="pill">${lead.category}</span>
            <span class="pill">${lead.status}</span>
          </div>
          <h2>${lead.name}</h2>
          <p><span class="score">${lead.rating}</span> rating signal · ${lead.reviews} reviews</p>
          <p>${lead.pitch}</p>
          <div class="actions">
            <a class="btn" href="?site=${lead.slug}">View demo</a>
            <a class="btn secondary" href="${lead.source}" target="_blank" rel="noreferrer">Source</a>
          </div>
        </article>
      `).join("")}
    </section>
    <section id="outreach" class="section band">
      <div class="shell split">
        <div>
          <div class="kicker">Outreach positioning</div>
          <h2>Soft pitch, clear price, no pressure.</h2>
          <p class="subhead">Best use: send only to public business emails and keep the message honest that this is an unofficial sample, not a completed official website.</p>
        </div>
        <div class="service-grid">
          <div class="service"><h3>Offer</h3><p>$200 CAD to customize and launch the site, plus $20/month for small updates, hosting guidance, backups, and edits.</p></div>
          <div class="service"><h3>Proof</h3><p>Use their demo link, public review strength, missing website signal, and mobile-first design as the reason for contacting them.</p></div>
          <div class="service"><h3>Follow-up</h3><p>Call phone-only leads. Email leads can receive the direct demo link and a short ask to review it.</p></div>
          <div class="service"><h3>Risk</h3><p>Some directories are stale. Confirm Google Maps and any Facebook/Instagram links before pushing hard.</p></div>
        </div>
      </div>
    </section>
  `;
}

function renderDemo(lead) {
  document.title = `${lead.name} Website Demo`;
  app.innerHTML = `
    <section class="demo-hero" style="background-image:url('${lead.hero}')">
      <div class="shell">
        <div class="notice">Unofficial sample website concept for ${lead.name}. Demo imagery used for presentation.</div>
        <div class="kicker">${lead.category} · ${lead.city}</div>
        <h1>${lead.headline}</h1>
        <p class="subhead">${lead.intro}</p>
        <div class="actions">
          <a class="btn" href="tel:${lead.phone.replaceAll(" ", "")}">Call ${lead.phone}</a>
          <a class="btn secondary" href="./">Back to lead dashboard</a>
        </div>
      </div>
    </section>
    <section class="quickbar">
      <div><span>Business</span><strong>${lead.name}</strong></div>
      <div><span>Address</span><strong>${lead.address}</strong></div>
      <div><span>Hours</span><strong>${lead.hours}</strong></div>
      <div><span>Contact</span><strong>${lead.email || lead.phone}</strong></div>
    </section>
    <section class="section shell split">
      <div>
        <div class="kicker">Website concept</div>
        <h2>Built for the customer who is already searching.</h2>
        <p class="subhead">${lead.pitch}</p>
      </div>
      <div class="service-grid">
        ${lead.services.map((service) => `
          <div class="service">
            <h3>${service[0]}</h3>
            <p>${service[1]}</p>
          </div>
        `).join("")}
      </div>
    </section>
    <section class="section band">
      <div class="shell reviews">
        <div>
          <div class="kicker">Public review signal</div>
          <div class="rating-big">${lead.rating}</div>
          <p>${lead.reviews} reviews or listing signals found in public directories.</p>
        </div>
        <div>
          <h2>Research notes</h2>
          <p>These notes summarize public sources used to shape the demo. They should be verified against Google Maps before final sales outreach.</p>
          <ul>
            ${lead.themes.map((theme) => `<li>${theme}</li>`).join("")}
          </ul>
        </div>
      </div>
    </section>
    <section class="section shell contact-panel">
      <div class="research-card">
        <div class="kicker">Lead contact</div>
        <h2>Public contact info</h2>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Email:</strong> ${lead.email || "No public email found yet"}</p>
        <p><strong>Source:</strong> <a href="${lead.source}" target="_blank" rel="noreferrer">public listing</a></p>
      </div>
      <div class="research-card">
        <div class="kicker">Sample price</div>
        <h2>$200 CAD + $20/month</h2>
        <p>Includes customizing copy, replacing demo images with real photos, publishing the final site, basic SEO metadata, mobile polish, and light monthly maintenance.</p>
        <div class="actions">
          <a class="btn" href="mailto:${lead.email || ""}?subject=${encodeURIComponent(`Website demo for ${lead.name}`)}">Email this demo</a>
          <a class="btn secondary" href="${siteUrl(lead.slug)}">Copy page link</a>
        </div>
      </div>
    </section>
  `;
}

const app = document.querySelector("#app");
const params = new URLSearchParams(location.search);
const selected = leads.find((lead) => lead.slug === params.get("site"));

if (selected) {
  renderDemo(selected);
} else {
  renderHome();
}
