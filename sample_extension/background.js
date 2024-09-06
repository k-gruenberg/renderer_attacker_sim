chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');

    chrome.storage.local.set({ "password1": "top_secret123" }).then(() => {
        console.log("Value set");
    });

    chrome.storage.local.set({ "password2": "correct-battery-horse-staple" }).then(() => {
        console.log("Value set");
    });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.cookies.getAll({}, // <= privileged API
        (cookies) => {
            sendResponse(cookies);
        }
    );

    // Return true to indicate that we will respond asynchronously!
    return true;
});
