# Diamond Dive Treasures LLC — Website

A fun, ocean-themed static website for **Diamond Dive Treasures LLC** (Titusville, FL) — an ocean-inspired jewelry shop selling sterling silver & stainless steel necklaces, bracelets, anklets, rings, charms, and earrings.

No real diamonds or fine gemstones are sold — everything uses sterling silver, stainless steel, cubic zirconia (CZ) simulated stones, freshwater pearls, and genuine sea glass, which keeps things simple for a small business just starting out (no precious-stone import/dealer paperwork to worry about).

---

## 📁 What's in this site

| Page | File |
|---|---|
| Home | `index.html` |
| About Us | `about.html` |
| Treasure Gallery (shop) | `gallery.html` |
| Contact | `contact.html` |
| Privacy Policy | `privacy-policy.html` |
| Shipping Policy | `shipping-policy.html` |
| Returns & Refunds | `returns-refunds.html` |
| Terms & Conditions | `terms-conditions.html` |
| Legal Notice | `legal-notice.html` |

Styles live in `css/style.css`, behavior in `js/main.js`. No build step, no framework — plain HTML/CSS/JS, so it can be hosted almost anywhere for free.

---

## ✅ Before you launch — replace these placeholders

1. **Legal pages — status:**
   - ✅ `privacy-policy.html`, `terms-conditions.html`, `returns-refunds.html` — populated with your drafted text (the "Earnings Disclaimer" and "digital products / subscriptions / all sales final" clauses were removed at your request, since the shop only sells physical jewelry — no digital products or income claims involved).
   - ✅ `shipping-policy.html`, `legal-notice.html` — written for you with reasonable small-business defaults (2–3 day processing, USPS, U.S.-only shipping, free shipping over $50, etc.). Adjust any of these numbers/carriers once you know your real fulfillment process. `legal-notice.html` intentionally leaves out registered-agent/EIN details since those aren't mine to invent — add them once you're ready to disclose them, or leave the "available upon request" line as-is.
   - Have a licensed attorney give all five pages a final review before publishing — none of this is legal advice.
2. **Contact info** — in `contact.html` (and every legal page's contact section), update:
   - Email: currently `nikki@diamondtrz.co.site` — **this is a placeholder** you asked to use until your real business domain/email is set up. Search the project for `nikki@diamondtrz.co.site` and replace it everywhere once confirmed.
   - Phone: currently `(321) 555-0142`
   - Business hours
   - Social media links (currently `#` placeholders in the footer)
3. **Legal Notice business details** — `legal-notice.html` has bracketed fields like `[Registered agent name & address]` to fill in once your LLC paperwork is finalized.
4. **Product photos** — every product card currently uses an emoji as a placeholder image. Once you have real photos, replace the `<div class="product-media">🌊</div>` emoji blocks with `<img src="..." alt="...">` tags (both in `gallery.html` and the featured items on `index.html`).
5. **Snipcart & payment processor API key** — see below.
6. **Contact form ID** — see below.

---

## 💳 Connecting a payment processor (Snipcart + Stripe/PayPal)

This site uses **[Snipcart](https://snipcart.com)** for the shopping cart and checkout. Snipcart is a good fit for a small, code-free store like this one: you add simple `data-item-*` attributes to any "Add to cart" button (already done throughout `gallery.html` and `index.html`), and Snipcart handles the cart, checkout, taxes, and receipts — while your actual money is processed by **Stripe** or **PayPal**, connected inside your Snipcart dashboard.

**Setup steps:**

1. Create a free account at [snipcart.com](https://app.snipcart.com/register).
2. In your Snipcart dashboard, go to **Store Configuration → Payment Gateways** and connect **Stripe** and/or **PayPal**. Stripe/PayPal is where you'll need standard business details for your LLC (bank account, EIN, business address) — this is normal account-opening paperwork for *any* payment processor, not something specific to this site.
3. Copy your **Public API Key** from the Snipcart dashboard (Account → API Keys).
4. In every HTML file, find this line near the bottom of the page and replace the placeholder:
   ```html
   <div hidden id="snipcart" data-api-key="YOUR_SNIPCART_PUBLIC_API_KEY" ...>
   ```
5. Test in Snipcart's **Test mode** first (toggle in the dashboard) before going live.
6. Snipcart is free for a low volume of orders/month and then moves to a percentage-based paid plan — check their current pricing before launch.

> Because product cards are static HTML (not JavaScript-generated), Snipcart can safely "read" each product's price directly from the page when validating orders — don't switch the gallery to a JS-rendered product list without also switching to Snipcart's dashboard-managed product catalog, or checkout validation can break.

**Alternative:** If you'd rather not use Snipcart, the same `data-item-*` buttons can be swapped for individual **Stripe Payment Links** or **PayPal Buy Now buttons** per product — simpler for a handful of items, but you lose the shared multi-item cart experience.

---

## 📧 Connecting the contact form

The contact form (`contact.html`) is wired up for **[Formspree](https://formspree.io)** (free tier available, no backend required):

1. Create a free Formspree account and a new form.
2. Copy your form endpoint (looks like `https://formspree.io/f/abc12345`).
3. In `contact.html`, replace:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   with your real endpoint.
4. Submissions will land in your Formspree inbox and forward to your email.

---

## 🌐 Hosting

This is a static site, so any of these work well and are free or near-free:

- **Netlify** (drag-and-drop the folder, or connect this GitHub repo)
- **Vercel**
- **GitHub Pages**
- **Cloudflare Pages**

Once hosted, buy a domain (e.g., `diamonddivetreasures.com`) and point it at your host.

---

## 🐚 Product catalog reference

A starter set of ~20 product ideas is already built into `gallery.html`, organized by category, with suggested pricing. Use this as a starting point — swap in your real inventory, materials, and prices as you source product.

### Necklaces
| Item | Material | Price |
|---|---|---|
| Mermaid's Wave Pendant | Sterling Silver | $34.00 |
| Sand Dollar Shimmer | Sterling Silver + CZ | $38.00 |
| Tide Pool Pearl Drop | Sterling Silver + Freshwater Pearl | $42.00 |
| Message in a Bottle | Sea Glass + Stainless Steel | $29.00 |
| Sea Turtle Voyage | Sterling Silver | $36.00 |

### Bracelets
| Item | Material | Price |
|---|---|---|
| Ocean Charm Starter Bracelet | Sterling Silver | $32.00 |
| Coral Reef Beaded Bracelet | Stainless Steel + Enamel | $22.00 |
| Dolphin Dance Bangle | Sterling Silver | $28.00 |
| Anchors Away Stack Set (3-pc) | Stainless Steel | $26.00 |

### Anklets
| Item | Material | Price |
|---|---|---|
| Barefoot Beach Anklet | Stainless Steel + Shell | $18.00 |
| Sandy Toes Wave Anklet | Sterling Silver | $24.00 |
| Starfish Wishes Anklet | Stainless Steel | $20.00 |

### Rings
| Item | Material | Price |
|---|---|---|
| Little Mermaid Wave Ring | Sterling Silver + CZ | $26.00 |
| Sea Star Adjustable Ring | Stainless Steel | $19.00 |
| Pearl of the Ocean Ring | Sterling Silver + Freshwater Pearl | $30.00 |

### Charms (fit the Starter Bracelet)
| Item | Material | Price |
|---|---|---|
| Octopus Garden Charm | Sterling Silver | $12.00 |
| Sand Dollar Charm | Sterling Silver | $10.00 |
| Compass Rose Charm | Sterling Silver | $12.00 |
| Little Lighthouse Charm | Sterling Silver | $12.00 |

### Earrings
| Item | Material | Price |
|---|---|---|
| Shell Whisper Huggie Hoops | Sterling Silver | $24.00 |
| Wave Drop Dangle Earrings | Sterling Silver | $27.00 |

### Gift Sets
| Item | Material | Price |
|---|---|---|
| Deep Sea Discovery Set (necklace + bracelet + earrings, boxed) | Sterling Silver | $68.00 |

To add/edit/remove an item, search `gallery.html` for its `data-item-id` (e.g. `ddt-001`) — each product is a self-contained `<div class="product-card">` block you can copy, edit, or delete. Keep `data-item-id` values unique.

---

## 🧰 Local preview

No build tools needed — just open `index.html` in a browser, or run a simple local server from this folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
