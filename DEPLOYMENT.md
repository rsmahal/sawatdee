# Parallel Multi-Container Deployment Guide (DigitalOcean)

This configuration enables **Sawatdee** (`sawatdee-app`) to run in parallel with your existing container (`mario-kart-app`) on your DigitalOcean droplet without downtime or port collisions.

---

## 1. Container Architecture on Your Droplet

| Container Name | Image Source | Host Port Mapping | Purpose |
|----------------|--------------|-------------------|---------|
| `mario-kart-app` | `ghcr.io/rsmahal/leagueoflegendsv2:latest` | `127.0.0.1:3000 -> 3000` | Existing app |
| `sawatdee-app` | `ghcr.io/rsmahal/sawatdee:latest` | `0.0.0.0:3001 -> 3000` | Sawatdee Thai Learning |

- **No Port Conflict**: `mario-kart-app` continues running on port `3000`, while `sawatdee-app` binds to host port `3001`.
- **Zero droplet compilation overhead**: The Docker image is built on GitHub's free runners and pushed to GitHub Container Registry (`ghcr.io`), so your 512MB RAM Droplet simply pulls the image and runs it without risking memory exhaustion.

---

## 2. Linking from the Existing Container to Sawatdee

To open Sawatdee from a link or button inside your other container (`mario-kart-app`), use either of the approaches below:

### Approach A: Direct Port Link (Simplest)
Add an anchor link or button pointing to port `3001`:

```html
<!-- In HTML/JSX -->
<a
  href="http://YOUR_SERVER_IP:3001"
  target="_blank"
  rel="noopener noreferrer"
  class="your-button-class"
>
  Learn Thai (Sawatdee) →
</a>
```
Or dynamically using the current hostname:
```javascript
// Opens Sawatdee on port 3001 relative to the current host
window.open(`${window.location.protocol}//${window.location.hostname}:3001`, '_blank');
```

---

### Approach B: Nginx Reverse Proxy (Domain or Subpath)
If you are using Nginx on your droplet to handle domain names or SSL:

#### Option 1: Subpath (e.g. `yourdomain.com/sawatdee`)
```nginx
# Existing app on port 3000
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}

# Sawatdee on port 3001
location /sawatdee/ {
    proxy_pass http://127.0.0.1:3001/;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

#### Option 2: Subdomain (e.g. `sawatdee.yourdomain.com`)
```nginx
server {
    server_name sawatdee.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## 3. GitHub Actions Setup

The workflow at `.github/workflows/deploy.yml` runs automatically whenever changes are pushed to `main`.

### Repository Secrets Checklist
In your GitHub repository (**Settings → Secrets and variables → Actions**):

| Secret | Value |
|---|---|
| `DO_HOST` | Your droplet IP (`ubuntu-s-1vcpu-512mb-10gb-lon1`) |
| `DO_USERNAME` | `root` |
| `DO_SSH_KEY` | Private SSH key that connects to `root@your-droplet` |
| `DO_APP_PORT` | *(Optional, default: 3001)* Port to expose on the host |
| `CR_PAT` | *(Optional)* GitHub Personal Access Token with `read:packages` if the GHCR package is private |

---

## 4. Manual Verification on Your Droplet

After the workflow runs, you can verify both containers are running in parallel by executing:

```bash
docker ps
```

You will see:
```text
CONTAINER ID   IMAGE                                      STATUS       PORTS                      NAMES
<hash>         ghcr.io/rsmahal/sawatdee:latest            Up           0.0.0.0:3001->3000/tcp     sawatdee-app
7e8d9c8cf55c   ghcr.io/rsmahal/leagueoflegendsv2:latest   Up 7 weeks   127.0.0.1:3000->3000/tcp   mario-kart-app
```
