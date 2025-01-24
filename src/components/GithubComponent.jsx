import React from "react";

// Example data for contributions (replace with real data from an API)
const contributionData = [
  [1, 2, 4, 3, 5, 0, 1],
  [0, 3, 1, 2, 4, 1, 0],
  [2, 0, 3, 5, 2, 4, 1],
  [4, 1, 0, 3, 5, 2, 0],
  [0, 1, 2, 4, 3, 1, 0],
  [3, 0, 5, 1, 2, 4, 0],
  [2, 3, 0, 1, 4, 5, 2],
];

// Colors based on contribution levels
const colors = [
  "#ebedf0", // Level 0
  "#c6e48b", // Level 1
  "#7bc96f", // Level 2
  "#239a3b", // Level 3
  "#196127", // Level 4
];

const GitHubGrid = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        GitHub Contribution Grid
      </h2>
      <div className="grid grid-rows-7 grid-flow-col gap-1">
        {contributionData.map((week, weekIndex) =>
          week.map((day, dayIndex) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className="w-6 h-6"
              style={{
                backgroundColor: colors[day],
                borderRadius: "4px",
              }}
            ></div>
          ))
        )}
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600">Based on random contribution data</p>
      </div>
    </div>
  );
};

export default GitHubGrid;
