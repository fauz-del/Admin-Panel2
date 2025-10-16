const hamburger = document.querySelector(".toggle-btn");
const toggler = document.querySelector("#icon");
hamburger.addEventListener("click", function() {
  document.querySelector("#sidebar").classList.toggle("expand");
  toggler.classList.toggle("fa-angles-right");
  toggler.classList.toggle("fa-angles-left");
});

// Chart.js colorful chart
const ctx = document.getElementById('myChart').getContext('2d');
const salesChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['John', 'Jane', 'Micheal', 'John', 'Jane', 'Micheal', ''],
    datasets: [{
      label: 'Revenue ($)',
      data: [120, 150, 170, 140, 190, 210, 250],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
        'rgba(50, 205, 50, 0.8)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(50, 205, 50)'
      ],
      borderWidth: 1,
      borderRadius: 6, // rounded bars
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#333',
          font: {
            size: 14,
            family: 'Outfit'
          }
        }
      },
      title: {
        display: true,
        text: 'Monthly Sales Overview',
        color: '#222',
        font: {
          size: 18,
          weight: 'bold',
          family: 'Outfit'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: { color: '#333' }
      },
      x: {
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: { color: '#333' }
      }
    },
    animation: {
      duration: 1500,
      easing: 'easeOutBounce'
    }
  }
});