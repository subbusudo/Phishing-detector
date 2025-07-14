function waitForEmailContent() {
  const emailDiv = document.querySelector("div.a3s.aXjCH");
  if (emailDiv && !document.getElementById("phishsentry-scan-btn")) {
    const button = document.createElement("button");
    button.innerText = "🔍 Scan with PhishSentry";
    button.id = "phishsentry-scan-btn";
    button.style.cssText = "position:relative;margin-top:10px;padding:6px;background:#4caf50;color:white;border:none;cursor:pointer;";

    emailDiv.prepend(button);

    button.addEventListener("click", () => {
      const emailText = emailDiv.innerText;
      import(chrome.runtime.getURL("detectorCore.js")).then(module => {
        module.runFullScan(emailText).then(results => {
          alert(`Risk Score: ${results.score}/10\nOpenPhish: ${results.phish.join(", ") || "None"}\nHeuristics: ${results.heuristics.join(", ") || "None"}`);
        });
      });
    });
  }
}

setInterval(waitForEmailContent, 2000);