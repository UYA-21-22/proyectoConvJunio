
  document.addEventListener('DOMContentLoaded', function() {
    var options = {
      data: {
        "Ropa": null,
        "Descuentos": null,
        "Noticias": null,
        "Google": 'https://placehold.it/250x250'
      }
    }
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, options);
  });
