const names_url = chrome.runtime.getURL('data/names.json')
console.log(names_url)

const guess = (name) => {
  const lowerFirstName = name.split(/\s+/)[0].toLowerCase();
  if (TYPICALLY_FEMININE_NAMES.has(lowerFirstName)) {
    return "feminine";
  }
  if (TYPICALLY_MASCULINE_NAMES.has(lowerFirstName)) {
    return "masculine";
  }
  return "unknown";
};

const guessMany = (names) => {
  const guesses = {feminine: 0, masculine: 0, unknown: 0};
  names.forEach((name) => {
    guesses[guess(name)] += 1;
  });
  return guesses;
};

const enable = (tab) => {
  if (tab) {
    chrome.pageAction.show(tab.id);
  }
};

const getGuesses = (sendResponse) => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getNames"}, (names) => {
      sendResponse(guessMany(names));
    });
  });
}

chrome.runtime.onMessage.addListener(({action}, {tab}, sendResponse) => {
  if (action == "enable") {
    enable(tab);
  } else if (action == "getGuesses") {
    getGuesses(sendResponse);
    return true;
  }
});
