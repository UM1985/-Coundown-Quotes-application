const countdown = () => {
    const endDate = new Date("Jun 19, 2025 12:05:00").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft <= 0) {
      document.getElementById("countdown").innerHTML = "<h2>Time Over</h2>";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
  };

  setInterval(countdown, 1000);
  countdown();
