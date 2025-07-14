# 🛡️ PhishSentry - Offline Chrome Phishing Detector

PhishSentry is a Chrome extension that detects phishing emails using offline OpenPhish data and heuristic rules. It also integrates with Gmail to auto-scan opened emails.

## 🔍 Features

- ✅ Offline detection using OpenPhish feed (no API keys required)
- 🧠 Heuristic analysis: suspicious TLDs, IP-based links, urgency, and more
- 💌 Auto-scans Gmail emails using content scripts
- 🖥️ Clean popup UI for manual email scanning
- ⚙️ No backend or server — fully local

## 📦 How to Install

1. Clone or download this repo
2. Open `chrome://extensions/` in Chrome
3. Enable **Developer Mode**
4. Click **Load Unpacked** and select the unzipped folder

## 📧 How to Test

Send yourself a fake phishing email with:
- An IP-based URL: `http://192.168.1.1/login`
- Suspicious domain: `paypal-support.xyz`
- A known malicious domain: `phishing-link.net`

PhishSentry will show:
- Risk Score
- Heuristic warnings
- OpenPhish matches

## 🛠 Stack

- JavaScript (ES6 Modules)
- Chrome Extensions v3
- OpenPhish (offline data)
- Gmail DOM integration

# How to 🧪 Test Instructions:
Unzip the file.

Go to chrome://extensions/

Enable Developer Mode

Click Load unpacked and select the unzipped folder.

Open Gmail and click on any email.

Look for the “🔍 Scan with PhishSentry” button above the message.

Click it — you'll get phishing detection results instantly.


---

> ⚠️ For educational/testing use only. Do not use for malicious purposes.

