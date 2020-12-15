$(document).ready(function () {
  POTD();
  //Jacobs API key = YXG9udc8M5QLeqooH25qwm8pkJ7FE4wRikvXk2hL

  function POTD() {
    // const POTD_DIV = document.getElementById("pic-of-day");
    const $POTD_DIV = $('#pic-of-day');

    queryURL =
      'https://api.nasa.gov/planetary/apod?&api_key=YXG9udc8M5QLeqooH25qwm8pkJ7FE4wRikvXk2hL';

    fetch(queryURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        var potd = data.url;
;
        var imgClass = $('<img>');

        imgClass.attr({
          src: potd,
          alt: 'NASA Photo of the Day',
        });

        $POTD_DIV.append(imgClass);
      });
  }
});
