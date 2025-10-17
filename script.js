document.getElementById("workoutForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const equipment = document.getElementById("equipment").value;
  const goal = document.getElementById("goal").value;
  const days = document.getElementById("days").value;

  const prompt = `
  Create a detailed, long-term workout routine for a person who works out at a ${location}.
  Equipment available: ${equipment}.
  Goal: ${goal}.
  They can train ${days} days per week.
  Include weekly structure, rest guidance, and progressive overload suggestions.
  Format nicely with headings and bullet points.
  `;

  document.getElementById("plan").innerHTML = "<p>Generating your AI workout plan... 🧠💪</p>";
  document.getElementById("result").classList.remove("hidden");

  try {
    const response = await fetch("https://playful-sunflower-af2b05.netlify.app/.netlify/functions/ai-workout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    document.getElementById("plan").innerHTML = data.output || "Something went wrong 😅";
  } catch (error) {
    document.getElementById("plan").innerHTML = "⚠️ Error: Unable to generate workout plan.";
  }
});
