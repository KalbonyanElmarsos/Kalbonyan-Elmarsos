const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
// console.log(gameEvents);

// 3.
console.log(
  // FootBall game: 90min
  // Array is 10
  // result is (90 / 10 || 90 / gameEvents.size )
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// Other solution

const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECUND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}
