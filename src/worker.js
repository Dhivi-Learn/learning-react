self.onmessage = function(evt) {
    let count =0;
    for (let i = 1; i < evt.data; i++) {
        count+=i;
    }
    self.postMessage(count);
}