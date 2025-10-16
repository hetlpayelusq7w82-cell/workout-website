document.getElementById("workoutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const equipment = document.getElementById("equipment").value;
  const goal = document.getElementById("goal").value;
  const days = parseInt(document.getElementById("days").value);

  let plan = generateWorkoutPlan(location, equipment, goal, days);

  document.getElementById("plan").innerHTML = plan;
  document.getElementById("result").classList.remove("hidden");
});

function generateWorkoutPlan(location, equipment, goal, days) {
  let routine = `<p><b>Location:</b> ${location}</p>
                 <p><b>Goal:</b> ${goal.replace("_", " ")}</p>
                 <p><b>Days per week:</b> ${days}</p>
                 <hr/>`;

  routine += "<h3>Suggested Weekly Plan:</h3>";

  for (let i = 1; i <= days; i++) {
    routine += `<h4>Day ${i}</h4>`;
    routine += `<ul>${generateDailyRoutine(goal, equipment, location)}</ul>`;
  }

  routine += "<p><i>Stay consistent for 8–12 weeks before adjusting.</i></p>";
  return routine;
}

function generateDailyRoutine(goal, equipment, location) {
  const strength = ["Squats", "Deadlifts", "Bench Press", "Overhead Press", "Pull-ups"];
  const fat_loss = ["Burpees", "Jump Rope", "Mountain Climbers", "Push-ups", "Bodyweight Squats"];
  const endurance = ["Running", "Cycling", "Rowing", "Plank", "Lunges"];
  const muscle_gain = ["Incline Press", "Barbell Rows", "Leg Press", "Curls", "Dips"];

  let pool;

  if (goal === "strength") pool = strength;
  else if (goal === "fat_loss") pool = fat_loss;
  else if (goal === "endurance") pool = endurance;
  else pool = muscle_gain;

  let routine = "";
  for (let i = 0; i < 4; i++) {
    const exercise = pool[Math.floor(Math.random() * pool.length)];
    routine += `<li>${exercise} — 4 sets x 8–12 reps</li>`;
  }

  return routine;
}
