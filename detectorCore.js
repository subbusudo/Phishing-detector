import { checkOpenPhish } from "./detectors/openphishChecker.js";
import { runHeuristics } from "./detectors/heuristicChecker.js";
import { calculateScore } from "./utils/scoreCalculator.js";

export function runFullScan(emailText) {
  return fetch(chrome.runtime.getURL("openphish-data.json"))
    .then(res => res.json())
    .then(openPhishData => {
      const phish = checkOpenPhish(emailText, openPhishData);
      const heuristics = runHeuristics(emailText);
      const score = calculateScore(phish, heuristics);
      return { score, phish, heuristics };
    });
}