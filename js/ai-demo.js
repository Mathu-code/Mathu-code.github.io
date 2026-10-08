// Interactive In-Browser Machine Learning Intelligence Lab
// Simulates trained decision trees / ensemble logistic inference in real-time

document.addEventListener("DOMContentLoaded", () => {
  initChurnPredictor();
  initObesityClassifier();
});

// 1. Customer Churn Prediction Engine
function initChurnPredictor() {
  const form = document.getElementById("churn-form");
  if (!form) return;

  const tenureInput = document.getElementById("churn-tenure");
  const tenureVal = document.getElementById("churn-tenure-val");
  const chargesInput = document.getElementById("churn-charges");
  const chargesVal = document.getElementById("churn-charges-val");
  const contractInput = document.getElementById("churn-contract");
  const techSupportInput = document.getElementById("churn-techsupport");
  const internetInput = document.getElementById("churn-internet");
  const paymentInput = document.getElementById("churn-payment");

  // Output elements
  const scoreBadge = document.getElementById("churn-score-badge");
  const scoreBar = document.getElementById("churn-score-bar");
  const riskStatus = document.getElementById("churn-risk-status");
  const riskText = document.getElementById("churn-risk-text");
  const factor1 = document.getElementById("churn-factor-1");
  const factor2 = document.getElementById("churn-factor-2");
  const factor3 = document.getElementById("churn-factor-3");
  const aiRec = document.getElementById("churn-ai-rec");

  function runInference() {
    const tenure = parseFloat(tenureInput.value) || 12;
    const charges = parseFloat(chargesInput.value) || 70;
    const contract = contractInput.value; // 'month', 'one-year', 'two-year'
    const techSupport = techSupportInput.value === "yes";
    const internet = internetInput.value; // 'fiber', 'dsl', 'none'
    const payment = paymentInput.value; // 'electronic', 'auto'

    tenureVal.textContent = `${tenure} mo`;
    chargesVal.textContent = `$${charges}/mo`;

    // Mathematical logistic scoring mimicking trained XGBoost/Logistic Regression weights
    let logit = -1.2; // Base log-odds bias

    // Tenure effect (longer tenure -> lower churn)
    logit -= (tenure / 72) * 2.8;

    // Monthly charges effect (higher charge -> higher churn)
    logit += (charges / 120) * 1.9;

    // Contract effect
    if (contract === "month") logit += 1.8;
    else if (contract === "one-year") logit -= 0.6;
    else if (contract === "two-year") logit -= 1.9;

    // Tech support
    if (!techSupport) logit += 0.8;
    else logit -= 0.7;

    // Internet service
    if (internet === "fiber") logit += 0.6;
    else if (internet === "none") logit -= 1.1;

    // Payment method
    if (payment === "electronic") logit += 0.5;
    else logit -= 0.4;

    // Sigmoid function
    const prob = 1 / (1 + Math.exp(-logit));
    const percentage = Math.round(prob * 100);

    // Update UI
    scoreBadge.textContent = `${percentage}%`;
    scoreBar.style.width = `${percentage}%`;

    let statusText = "Low Churn Risk";
    let statusColor = "var(--accent-emerald)";
    let recommendation = "Customer has strong loyalty indicators. Retain standard engagement protocols.";

    if (percentage > 65) {
      statusText = "High / Critical Churn Risk";
      statusColor = "var(--accent-ruby)";
      scoreBar.style.background = "linear-gradient(90deg, #f59e0b, #ef4444)";
      scoreBadge.style.color = "#ef4444";
      recommendation = "Immediate Retention Action: Offer annual contract incentive discount and priority technical onboarding support.";
    } else if (percentage >= 35) {
      statusText = "Moderate Churn Risk";
      statusColor = "var(--accent-amber)";
      scoreBar.style.background = "linear-gradient(90deg, #10b981, #f59e0b)";
      scoreBadge.style.color = "#f59e0b";
      recommendation = "Proactive Check-in: Send service satisfaction survey and recommend add-on loyalty benefits.";
    } else {
      scoreBar.style.background = "linear-gradient(90deg, #06b6d4, #10b981)";
      scoreBadge.style.color = "#10b981";
    }

    riskStatus.textContent = statusText;
    riskStatus.style.color = statusColor;
    riskText.textContent = `Predicted probability of customer cancellation within next billing cycle: ${percentage}%`;
    aiRec.textContent = recommendation;

    // Factor highlights
    factor1.textContent = contract === "month" ? "❌ Month-to-month contract (+32% risk)" : "✅ Long-term contract commitment (-28% risk)";
    factor2.textContent = charges > 80 ? "⚠️ High monthly billing threshold (+22% risk)" : "✅ Affordable billing tier (-15% risk)";
    factor3.textContent = !techSupport ? "❌ No active Tech Support coverage (+18% risk)" : "✅ Active dedicated Tech Support (-20% risk)";
  }

  [tenureInput, chargesInput, contractInput, techSupportInput, internetInput, paymentInput].forEach(el => {
    el.addEventListener("input", runInference);
    el.addEventListener("change", runInference);
  });

  runInference();
}

// 2. Obesity & Health Intelligence Classifier
function initObesityClassifier() {
  const form = document.getElementById("obesity-form");
  if (!form) return;

  const ageInput = document.getElementById("obs-age");
  const ageVal = document.getElementById("obs-age-val");
  const heightInput = document.getElementById("obs-height");
  const heightVal = document.getElementById("obs-height-val");
  const weightInput = document.getElementById("obs-weight");
  const weightVal = document.getElementById("obs-weight-val");
  const activityInput = document.getElementById("obs-activity");
  const junkInput = document.getElementById("obs-junk");
  const waterInput = document.getElementById("obs-water");

  // Output elements
  const bmiBadge = document.getElementById("obs-bmi-badge");
  const tierBadge = document.getElementById("obs-tier-badge");
  const confBar = document.getElementById("obs-conf-bar");
  const confVal = document.getElementById("obs-conf-val");
  const obsAiNote = document.getElementById("obs-ai-note");

  function runObesityML() {
    const age = parseFloat(ageInput.value) || 24;
    const heightCm = parseFloat(heightInput.value) || 175;
    const weightKg = parseFloat(weightInput.value) || 72;
    const activityDays = parseFloat(activityInput.value) || 3;
    const junkFreq = junkInput.value; // 'frequent', 'moderate', 'rare'
    const waterLiters = parseFloat(waterInput.value) || 2.5;

    ageVal.textContent = `${age} yrs`;
    heightVal.textContent = `${heightCm} cm`;
    weightVal.textContent = `${weightKg} kg`;

    // Standard BMI Calculation
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    const roundedBmi = bmi.toFixed(1);

    // Multi-class risk weighting logic (mimicking Random Forest / Gradient Boosting multi-tier classifier)
    let score = bmi;

    // Lifestyle adjustments
    if (junkFreq === "frequent") score += 1.8;
    else if (junkFreq === "rare") score -= 1.2;

    if (activityDays >= 4) score -= 2.0;
    else if (activityDays <= 1) score += 1.5;

    if (waterLiters >= 3.0) score -= 0.8;
    else if (waterLiters < 1.5) score += 0.8;

    let classification = "Normal Weight Range";
    let color = "var(--accent-emerald)";
    let confidence = 96;
    let guidance = "Optimal metabolic health baseline. Maintain regular strength/cardio training and balanced micronutrient intake.";

    if (score < 18.5) {
      classification = "Underweight / Low Metabolic Mass";
      color = "var(--accent-cyan)";
      guidance = "Recommended to focus on nutrient-dense whole foods and progressive resistance training.";
    } else if (score >= 18.5 && score < 25) {
      classification = "Healthy / Optimal Weight";
      color = "var(--accent-emerald)";
      guidance = "Excellent health equilibrium. Continue current physical activity pattern and hydration regimen.";
    } else if (score >= 25 && score < 30) {
      classification = "Overweight (Early Pre-Obesity Tier)";
      color = "var(--accent-amber)";
      guidance = "Moderate metabolic risk detected. Increasing weekly aerobic training (150+ mins) and reducing processed carbs will optimize profile.";
    } else if (score >= 30 && score < 35) {
      classification = "Obesity Class I (High Risk)";
      color = "#f97316";
      guidance = "Elevated cardiovascular and metabolic risk. Personalized caloric deficit, clinical monitoring, and structured exercise prescribed.";
    } else {
      classification = "Obesity Class II/III (Critical Tier)";
      color = "var(--accent-ruby)";
      guidance = "High priority metabolic intervention advised. Comprehensive dietary restructuring, endocrinologist consultation, and lifestyle remodeling recommended.";
    }

    bmiBadge.textContent = `BMI: ${roundedBmi}`;
    tierBadge.textContent = classification;
    tierBadge.style.color = color;
    confBar.style.width = `${confidence}%`;
    confVal.textContent = `${confidence}% AI Confidence`;
    obsAiNote.textContent = guidance;
  }

  [ageInput, heightInput, weightInput, activityInput, junkInput, waterInput].forEach(el => {
    el.addEventListener("input", runObesityML);
    el.addEventListener("change", runObesityML);
  });

  runObesityML();
}
