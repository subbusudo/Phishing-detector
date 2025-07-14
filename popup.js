import { checkOpenPhish } from "./detectors/openphishChecker.js";
import { runHeuristics } from "./detectors/heuristicChecker.js";
import { calculateScore } from "./utils/scoreCalculator.js";

let openPhishData = [];

fetch("openphish-data.json")
  .then(res => res.json())
  .then(data => openPhishData = data);

document.getElementById("analyzeBtn").addEventListener("click", () => {
  const emailText = document.getElementById("emailInput").value;
  const openPhishHits = checkOpenPhish(emailText, openPhishData);
  const heuristicHits = runHeuristics(emailText);
  const score = calculateScore(openPhishHits, heuristicHits);

  document.getElementById("result").innerHTML = `
    <p>🔍 <strong>Risk Score:</strong> ${score}/10</p>
    <p>🚨 <strong>OpenPhish Matches:</strong> ${openPhishHits.join(", ") || "None"}</p>
    <p>⚠️ <strong>Heuristics:</strong> ${heuristicHits.join(", ") || "None"}</p>
  `;
});