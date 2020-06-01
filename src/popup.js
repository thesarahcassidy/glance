const results = document.getElementById("results");

document.querySelectorAll(".result").forEach((element) => element.innerHTML= "");

chrome.runtime.sendMessage({action: "getGuesses"}, (guesses) => {
  const totalGuesses = Object.values(guesses).
    reduce((total, value) => total + value);

  Object.keys(guesses).forEach((key) => {
    const count = guesses[key];
    const percentage = (totalGuesses > 0
      ? Math.round(count / totalGuesses * 100)
      : 0);

    document.getElementById(`${key}-count`).innerText = count;
    document.getElementById(`${key}-percentage`).innerText = `${percentage}%`;
  });
});
