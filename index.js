function addImage() {
    document.getElementById("imgContainer").innerHTML = '<img></img>';
    fetch('/assets/img1.jpg')
    .then((response) => {
        if (!response.ok) {
            throw new Error('HTTP error, status = ' + response.status);
        }
        return response.blob()
    }).then((blob) => {
        const myImage = document.querySelector('img');
        const objectURL = URL.createObjectURL(blob);
        myImage.src = objectURL;
    });
}







// caches.open('assets-v1').then(function(cache) {
//     return cache.addAll(['/assets/img1'])
// });