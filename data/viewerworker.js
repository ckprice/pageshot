// This is run on all pageshot viewer pages

document.addEventListener("request-screenshot", function (event) {
  self.port.emit("requestScreenshot", event.detail);
}, false);

document.addEventListener("request-clipboard", function (event) {
  self.port.emit("requestClipboard", event.detail);
}, false);

document.addEventListener("add-tags", function (event) {
  self.port.emit("addTags", event.detail);
}, false);

self.port.on("screenshot", function (image, info) {
  var event = document.createEvent("CustomEvent");
  event.initCustomEvent("got-screenshot", true, true, JSON.stringify({
    image: image,
    info: info
  }));
  document.dispatchEvent(event);
});