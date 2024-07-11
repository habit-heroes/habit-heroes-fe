import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tutorial.css";

export default function Tutorial({ isLoggedIn }) {
  const [habits, setHabits] = useState([]);
  const [streaks, setStreaks] = useState([]);
  const [suggestedHabits, setSuggestedHabits] = useState([
    { title: "Title", category: "Category" },
  ]);
  const [tutorialStep, setTutorialStep] = useState(1);
  const navigate = useNavigate();

  const addHabit = (index) => {
    const habitToAdd = suggestedHabits[index];
    setHabits([...habits, { ...habitToAdd, done: false }]);
    const newSuggestedHabits = suggestedHabits.filter((_, i) => i !== index);
    setSuggestedHabits(newSuggestedHabits);
    setTutorialStep(2); 
  };

  const markHabitDone = (index) => {
    const newHabits = [...habits];
    newHabits[index].done = true;
    setHabits(newHabits);

    const newStreaks = [
      ...streaks,
      { title: newHabits[index].title, duration: 3 },
    ];
    setStreaks(newStreaks);
    setTutorialStep(3); 
  };

  const handleDoneClick = () => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const handleRewatchClick = () => {
    setHabits([]);
    setStreaks([]);
    setSuggestedHabits([{ title: "Title", category: "Category" }]);
    setTutorialStep(1); // Restart the tutorial
  };

  return (
    <div className="tutorial">
      <div
        className={`streaks-tutorial ${
          tutorialStep === 3 ? "highlight" : "dim"
        }`}
      >
        <h1>Streaks</h1>
        <ul className="streak-list-tutorial">
          {streaks.map((streak, index) => (
            <li key={index} className="streak-tutorial-div">
              <h1 className="streak-title">{streak.title}</h1>
              <h2 className="streak-duration">{streak.duration} days</h2>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`todays-habits-tutorial ${
          tutorialStep === 2 ? "highlight" : "dim"
        }`}
      >
        <h1>Your Habits</h1>
        <ul className="suggested-habit-list-tutorial">
          {habits.map((habit, index) => (
            <li key={index} className="user-habit-card-tutorial">
              <h1 className="habit-title">{habit.title}</h1>
              <h2 className="habit-category">{habit.category}</h2>
              {!habit.done && (
                <button
                  className="habit-buttons"
                  onClick={() => markHabitDone(index)}
                >
                  Done
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`suggested-habits-tutorial ${
          tutorialStep === 1 ? "highlight" : "dim"
        }`}
      >
        <h1>Suggested Habits</h1>
        <ul className="habit-list-tutorial">
          {suggestedHabits.map((habit, index) => (
            <li key={index} className="suggested-habit-card">
              <h1 className="habit-title">{habit.title}</h1>
              <h2 className="habit-category">{habit.category}</h2>
              <button className="habit-buttons" onClick={() => addHabit(index)}>
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
      {tutorialStep < 4 && (
        <div className="tutorial-overlay">
          <div className="tutorial-prompt">
            {tutorialStep === 1 && <p>Click "Add" to add a suggested habit.</p>}
            {tutorialStep === 2 && <p>Click "Done" to complete the habit.</p>}
            {tutorialStep === 3 && (
              <>
                <p>Unlock streaks by completing a habit 3 days in a row.</p>
                <button onClick={handleDoneClick}>Done</button>
                <button onClick={handleRewatchClick}>Rewatch</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
