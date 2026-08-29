// Basic local JavaScript: changes the dashboard data when the button is clicked.
const periodData = [
  {
    button: 'This Month',
    usage: '284.6',
    change: '↑ 8.4% compared to last month',
    average: '10.5 kWh',
    bill: '₹2,412.80',
    date: 'For 01–31 Aug 2026',
    budget: 68,
    remaining: '₹1,087.20 remaining'
  },
  {
    button: 'This Week',
    usage: '71.8',
    change: '↓ 4.2% compared to last week',
    average: '10.3 kWh',
    bill: '₹609.10',
    date: 'For 21–27 Aug 2026',
    budget: 17,
    remaining: '₹2,890.90 remaining'
  },
  {
    button: 'Today',
    usage: '18.5',
    change: '↑ 2.1% compared to yesterday',
    average: '18.5 kWh',
    bill: '₹157.25',
    date: 'For 27 Aug 2026',
    budget: 4,
    remaining: '₹3,342.75 remaining'
  }
];

let currentPeriod = 0;
const button = document.getElementById('period-button');

button.addEventListener('click', function () {
  currentPeriod = (currentPeriod + 1) % periodData.length;
  const data = periodData[currentPeriod];

  button.textContent = data.button;
  document.getElementById('usage-total').innerHTML = data.usage + ' <small>kWh</small>';
  document.getElementById('usage-change').textContent = data.change;
  document.getElementById('average-use').innerHTML = 'Average daily use: <strong>' + data.average + '</strong>';
  document.getElementById('bill-total').textContent = data.bill;
  document.getElementById('bill-date').textContent = data.date;
  document.getElementById('budget-percent').textContent = data.budget + '%';
  document.getElementById('progress-bar').style.width = data.budget + '%';
  document.getElementById('remaining-budget').textContent = data.remaining;
});
