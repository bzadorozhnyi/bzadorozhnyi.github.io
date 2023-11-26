let n = 20;

let container = document.getElementById('gallery');

for (let i = 0; i < n; i++) {
    // Create a new <a> element with the specified attributes
    let link = document.createElement('a');
    link.href = 'http://unitegallery.net';
    link.innerHTML = '<img alt="Some photo" ' +
        'src="https://source.unsplash.com/random/500x500?sig=' + i + '" ' +
        'data-image="https://source.unsplash.com/random/500x500?sig=' + i + '" ' +
        'data-description="Some photo" ' +
        'style="display:none">';

    container.appendChild(link);
}