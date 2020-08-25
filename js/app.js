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
        const slides = document.querySelectorAll(".slide a");
        // loop through photos
        for (let i = 0; i < gallery; i++) {
            const caption = slide[i].getAttribute('data-caption').toUpperCase();

            if (caption.includes(searchString)) {
                //show image
                $(slide[i]).show();
            }
                //hide image
            else $(slide[i]).hide();
        }
    });

