# Pointing **ishaanpuri23.com** at GitHub Pages

> Do this **last** — only after the GitHub Pages version looks the way you want.
> Until you change DNS, the live ishaanpuri23.com keeps serving the old Wix site, so there is no downtime.

## Current setup (recorded 2026-06-18)
| Item | Value |
|---|---|
| Registrar | **Wix.com Ltd.** |
| Nameservers | `ns8.wixdns.net`, `ns9.wixdns.net` (Wix-managed DNS) |
| Apex `A` records | `185.230.63.107`, `185.230.63.171`, `185.230.63.186` (Wix) |
| `www` | CNAME → Wix CDN (`cdn1.wixdns.net`) |
| Registered | 2026-01-04 → expires 2029-01-04 |
| Transfer lock | **Past the 60-day ICANN lock — transferable** |

## Target records for GitHub Pages (`puriishaan.github.io`)
Apex (`ishaanpuri23.com`) → four `A` records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
(optional IPv6 `AAAA`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`)

`www.ishaanpuri23.com` → `CNAME` → `puriishaan.github.io`

## Two ways to cut over

### Option A — keep the domain at Wix, just edit its DNS
1. In Wix: **manage.wix.com → Domains → ishaanpuri23.com → Edit DNS / Advanced**.
2. Disconnect the domain from the Wix site (so Wix stops forcing its own A records).
3. Replace the apex `A` records with the four GitHub IPs above; set `www` CNAME → `puriishaan.github.io`.
   *Wix sometimes restricts editing the apex A record while a site is connected — if so, use Option B.*

### Option B — move DNS to Cloudflare (recommended, full control)
1. Create a free Cloudflare account, add `ishaanpuri23.com`.
2. At Wix (Domains → Advanced → Nameservers) change the nameservers to the two Cloudflare ones.
   *(Changing nameservers is allowed even during a registrar transfer lock.)*
3. In Cloudflare add the four `A` records + the `www` CNAME above (DNS-only / grey cloud to start).

## Then, in this repo
1. Add a file named `CNAME` (no extension) containing exactly:
   ```
   ishaanpuri23.com
   ```
2. In GitHub → repo **Settings → Pages → Custom domain**, enter `ishaanpuri23.com`, save, and tick **Enforce HTTPS** once the certificate is issued (can take ~15 min–24 h).

DNS changes can take up to 24–48 h to propagate fully.
