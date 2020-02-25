let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let day = 0;
while (confirm(`${days[day]}. Want some more?`)) {
  day = (day + 1) % days.length;
}

