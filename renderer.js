const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked!'

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 


function notifLogic() {
    new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
        .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE
}


function callFunc() {
    console.log("hi")
    let minIntervals = 1; //should be 15?
    setInterval(function ()
    {
        notifLogic();
    }, minIntervals * 60 * 1000); 

}


docReady(callFunc);