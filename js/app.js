baguetteBox.run('.gallery', {
    captions: true,
    buttons: 'auto',
    fullScreen: false
});



    const searchInput = document.getElementById('search');
    //console.log(searchInput);

    searchInput.addEventListener('keyup', (e) => {
        //console.log(e.target.value);
        const searchString = e.target.value.toUpperCase();
        console.log(searchString);
        const slides = document.querySelectorAll('.tile');
        // loop through photos
        for (let i = 0; i < slides.length; i++) {
            const caption = slides[i].getAttribute('data-caption').toUpperCase();

            if (caption.includes(searchString)) {
                //show image
                $(slides[i]).show();
            }
                //hide image
            else $(slides[i]).hide();
        }
    });

