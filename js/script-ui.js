$(function() {
    var availableTags = [
        "Adobe Brackets",
        "Android",
        "Angular.js",
        "Animaciones web",
        "Aplicaciones móviles",
        "Bootstrap",
        "Calendarios",
        "Canvas",
        "CSS3",
        "CSS Básico",
        "Datepicker",
        "Favicon",
        "First Mobile",
        "Foundation",
        "Frameworks",
        "Front-end",
        "Galerías de imágenes",
        "Google API's",
        "Google Apps",
        "Gráficos 3D",
        "HTML5",
        "Interactividad",
        "Java",
        "JavaScript",
        "jQuery",
        "Less CSS",
        "Lightboxes",
        "Maquetación web",
        "Media queries",
        "Menús desplegables",
        "Modal boxes",
        "Parallax Scrolling",
        "Preprocesadores CSS",
        "Responsive Web Design",
        "Sass CSS",
        "SEO",
        "Slides de imágenes",
        "SVG",
        "Sublime Text 3",
        "UI/UX",
        "Usabilidad",
        "WebGL",
        "Web móvil"
    ];
    
    var accentMap = {
        "á": "a",
        "é": "e",        
        "í": "i",        
        "ó": "o",        
        "ú": "u",        
    };
    var normalize = function( term ) {
        var ret = "";
        for ( var i = 0; i < term.length; i++ ) {
            ret += accentMap[ term.charAt(i) ] || term.charAt(i);
        }
        return ret;
    };
 
    $('#search').autocomplete({
        source: function( request, response ) {
            var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
            response( $.grep( availableTags, function( value ) {
                value = value.label || value.value || value;
                return matcher.test( value ) || matcher.test( normalize( value ) );
            }) );
        }
    });
});













