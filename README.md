# Law Offices of Molly Hopkins Hanes

Static single-page website for mollyhaneslegal.com. Plain HTML, CSS, and vanilla JS. No frameworks, no build tools, no runtime dependencies.

---

## Local Preview

Requires [Node.js](https://nodejs.org) and the `serve` package.

```bash
# Install serve globally if not already installed
npm install -g serve

# From the project directory
cd mollyhaneslegal
serve .
```

Open the URL shown in the terminal (default: http://localhost:3000).

---

## GitHub Pages Setup

1. Create a new repository at github.com/boardybell. Push this project to the `main` branch.

2. Go to repo **Settings**, then **Pages**. Under Build and Deployment, set Source to **GitHub Actions**.

3. Go to repo **Settings**, then **Pages**, then **Custom Domain**. Enter `mollyhaneslegal.com` and save.

4. In Squarespace DNS, confirm the following records:
   - **Apex domain:** four A records pointing to:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **www subdomain:** one CNAME record with name `www` pointing to `boardybell.github.io`

5. Check **Enforce HTTPS** once the domain verifies. SSL is provisioned automatically.

---

## Go-Live Checklist

1. **BLOCKING:** Replace both instances of `P.O. Box XXX` with the actual box number. Register that address as the current mailing address in the NC State Bar membership record before publishing. Required by Rule 7.2(d) and 2012 FEO 6.

2. Wire the contact form to Formspree, Netlify Forms, or equivalent. Replace `action="#"` with your endpoint.

3. Confirm `frontdesk@mollyhaneslegal.com` wildcard redirect is active.

4. Add a privacy policy page and link in the footer before the form goes live.

5. PLLC does not appear anywhere. Add only if formally registered with the NC Secretary of State.

6. Domain `mollyhaneslegal.com` is a minor variation of the firm name. No trade name registration required.

7. NC State Bar Rules 7.1, 7.2, and 7.4 compliance review by ethics counsel recommended before publishing.

8. If board certifications are obtained in the future, add under Rule 7.4 with the certifying organization identified.

9. NOTE: "Law Offices of Molly Hopkins Hanes" is explicitly listed as a permissible designation by the NC State Bar. No action required.
