const Actions = {
  getNames: () => {
    const elements = document.
      querySelectorAll(".org-people-profile-card__profile-title");
    return Array.from(elements).map((element) => element.innerText);
  }
};

chrome.runtime.onMessage.addListener(({action}, sender, sendResponse) => {
  if (!Actions[action]) { return; }
  sendResponse(Actions[action]());
});

chrome.runtime.sendMessage({action: "enable"});
