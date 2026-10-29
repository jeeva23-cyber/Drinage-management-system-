# SMART DRAINAGE GUARD — Underground Intelligence System (`SDG-01`)
> **AI-Assisted Drainage Hazard Prediction, Telemetry & Worker Safety Command Center**

![SDG Architecture](https://img.shields.io/badge/Architecture-SCADA%20Underground%20IoT-C17A45)
![Microcontroller](https://img.shields.io/badge/Hardware-ESP32--WROOM--32-45B8A0)
![React](https://img.shields.io/badge/Frontend-React%2018%20%2B%20TypeScript-E9B949)
![Deployment](https://img.shields.io/badge/Deploy-GitHub%20Pages%20Ready-35443B)

---

## 🚀 Overview

**SMART DRAINAGE GUARD** is an industrial SCADA-grade monitoring and worker life-safety command center for urban drainage networks, manhole culverts, and stormwater channels. It monitors multi-gas concentrations, water levels, hydraulic discharge velocities, and discrete RFID worker checkpoints, backed by a deterministic explainable AI risk scoring engine.

### Key Capabilities
- **6-Channel Telemetry Acquisition:** MQ-4 (Methane), MQ-7 (Carbon Monoxide), MQ-135 (Air Quality), JSN-SR04T (Ultrasonic Water Surcharge Depth), YF-S201 (Hall Turbine Flow Velocity), and DS18B20 (OneWire Waterproof Temperature).
- **15-Second Automated Telemetry Cycles:** Gas sensors, water level, and temperature fluctuate automatically every 15 seconds to simulate dynamic environmental drift. The **YF-S201 Water Flow sensor reading is held locked/steady** as calibrated baseflow.
- **Explainable AI Risk Engine:** Evaluates composite hazard scores (0–100) and detects hydraulic blockage divergence ($\Delta \text{Hydraulic} = \text{Fill Level} - \text{Normalized Flow}$) before surface flooding occurs.
- **Interactive 2D Pipe Cutaway:** Dynamic SVG engineering cutaway showing water head elevation, ultrasonic beam, turbine wheel, and a toggleable silt blockage constriction.
- **MFRC522 RFID Worker Access:** Logs personnel ingress and egress with physical principle disclaimers (near-field magnetic induction $<5\text{ cm}$, no GPS underground).
- **Hardwired Emergency SOS:** Latching alarm system with acoustic alarm buzzer and supervisor reset protocol.
- **Embedded ESP32 Firmware Reference:** Production-ready Arduino C++ code with 1-click clipboard copy.

---

## 🛠️ Git & GitHub Pages Deployment Guide

This repository is **pre-configured for instant Git deployment** on GitHub Pages, Vercel, Netlify, or custom servers.

### 1. Push to Your GitHub Repository

Initialize and push to your GitHub account:

```bash
# 1. Add your GitHub repository remote
git remote add origin https://github.com/YOUR_USERNAME/drainage-guard-ai.git

# 2. Push the main branch
git push -u origin main
```

### 2. Automatic GitHub Pages Deployment (Zero Configuration)

A GitHub Actions workflow is pre-installed at `.github/workflows/deploy.yml`:

1. Open your repository on GitHub.
2. Go to **Settings** &rarr; **Pages** (under Code and automation).
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. That's it! Every time you push to `main`, GitHub Actions will build and publish your site automatically at:
   `https://YOUR_USERNAME.github.io/drainage-guard-ai/`

### 3. Key Deployment Enhancements Included
- **`base: './'` in `vite.config.ts`**: Ensures all JS/CSS asset paths are relative so the dashboard loads correctly from subpaths (e.g. `https://username.github.io/repo/`).
- **`HashRouter` in `src/App.tsx`**: Guarantees direct URL navigation and browser page refresh work cleanly without 404 errors on static hosts.
- **`public/404.html` SPA Redirect**: Safeguards legacy deep links with automatic hash redirection.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local SCADA dev server (accessible locally & over LAN)
npm run dev

# Compile TypeScript and generate production distribution
npm run build

# Preview production build locally
npm run preview
```

---

## 📊 Hardware Pinout & Wiring Matrix

| Subsystem | Sensor / Module | Microcontroller Pin | Signal Domain | Operational Role |
| :--- | :--- | :--- | :--- | :--- |
| **Combustible Gas** | MQ-4 | **GPIO 34 (ADC1)** | 0–5V (2:3 Divider) | SnO2 conductance shift in presence of methane ($CH_4$). Uncalibrated raw 12-bit ADC. |
| **Toxic Gas** | MQ-7 | **GPIO 35 (ADC1)** | 0–5V (2:3 Divider) | Odorless carbon monoxide ($CO$) response via alternating heater cycles. |
| **Hazardous Vapors**| MQ-135 | **GPIO 32 (ADC1)** | 0–5V (2:3 Divider) | SnO2 response to volatile solvents and ammonia. *(Does not measure O2).* |
| **Ultrasonic Surcharge**| JSN-SR04T | **TRIG: 13, ECHO: 14**| ECHO 5V (2:3 Divider) | Acoustic time-of-flight from crown to water surface; computes fill percentage. |
| **Discharge Velocity** | YF-S201 | **GPIO 25 (ISR)** | Digital Pulse (Pullup)| Hall turbine pulse counting: $F = 7.5 \times Q$ (L/min). |
| **Thermal Sensing** | DS18B20 Probe | **GPIO 27 (OneWire)**| 3.3V Digital (4.7kΩ Pullup)| Bio-fermentation warming and stormwater temperature drift. |
| **Worker Access** | MFRC522 RFID | **5, 18, 23, 19, 22** | 3.3V Logic Strictly | Logs discrete worker badge taps at manhole portals ($<5\text{ cm}$). |
| **Emergency SOS** | Push Button | **GPIO 26** | `INPUT_PULLUP` to GND | Hardware interrupt triggering immediate high-priority alarm state. |
| **Local Alarms** | Buzzer & LEDs | **33, 16, 17, 4** | 3.3V Logic | Active acoustic buzzer and Green/Yellow/Red status LEDs. |

---

## ⚖️ Engineering Integrity & Prototype Caveats
This platform is an **educational engineering prototype** designed for academic review. The following engineering boundaries are declared:
1. **Raw ADC Integers:** MQ-series gas sensors provide raw 12-bit ADC integers (0–4095). Converting to certified parts-per-million (ppm) requires laboratory calibration curves and environmental compensation chambers.
2. **Confined-Space Entry:** MQ-135 tin dioxide sensors do not measure oxygen ($O_2$) depletion. Certified industrial confined-space clearance mandates electrochemical oxygen sensors.
3. **Discrete RFID vs GPS:** MFRC522 passive RFID operates via near-field magnetic induction ($<5\text{ cm}$) at discrete portals. Satellite GPS signals cannot penetrate underground soil and reinforced concrete culverts.

---

## 📜 License
Developed for academic presentation & municipal drainage engineering research.
