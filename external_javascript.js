/* ---- welcome screen terminal typing ---- */
//https://vincentgarreau.com/particles.js/#bubble
$(function() {
    $("#name").typed({
        strings: ["^250 Anthony Martinez"],
        typeSpeed: 100,
        backSpeed: 40,
        showCursor: false,
        callback: function() {
            $("#swap").typed({
                strings: ["^500 programmer", "^500 forensicator", "^500 hiker"],
                typeSpeed: 100,
                backSpeed: 40,
                showCursor: true,
                cursorChar: "_",
                loop: true
            });
        },
        cursorChar: "_",
    });
});


$(document).ready(function() {
    setTimeout(function() {
        $('.img-valign').fadeIn(1000);
    }, 3500);
});

$(document).ready(function() {
    setTimeout(function() {
        $('.resume').fadeIn(1000);
    }, 3500);
});

/* ---- particles.js config ---- */

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
window.particlesJS("particles-js", {
	  "particles": {
		    "number": {
		      "value": 14,
		      "density": {
		        "enable": true,
		        "value_area": 800
		      }
		    },
		    "color": {
		      "value": "#1b1e34"
		    },
		    "shape": {
		      "type": "polygon",
		      "stroke": {
		        "width": 0,
		        "color": "#000"
		      },
		      "polygon": {
		        "nb_sides": 6
		      },
		      "image": {
		        "src": "img/github.svg",
		        "width": 100,
		        "height": 100
		      }
		    },
		    "opacity": {
		      "value": 0.3,
		      "random": true,
		      "anim": {
		        "enable": false,
		        "speed": 1,
		        "opacity_min": 0.1,
		        "sync": false
		      }
		    },
		    "size": {
		      "value": 160,
		      "random": true,
		      "anim": {
		        "enable": true,
		        "speed": 10,
		        "size_min": 40,
		        "sync": false
		      }
		    },
		    "line_linked": {
		      "enable": false,
		      "distance": 200,
		      "color": "#ffffff",
		      "opacity": 1,
		      "width": 2
		    },
		    "move": {
		      "enable": true,
		      "speed": 8,
		      "direction": "none",
		      "random": false,
		      "straight": false,
		      "out_mode": "out",
		      "bounce": false,
		      "attract": {
		        "enable": false,
		        "rotateX": 600,
		        "rotateY": 1200
		      }
		    }
		  },
		  "interactivity": {
		    "detect_on": "canvas",
		    "events": {
		      "onhover": {
		        "enable": false,
		        "mode": "grab"
		      },
		      "onclick": {
		        "enable": false,
		        "mode": "push"
		      },
		      "resize": true
		    },
		    "modes": {
		      "grab": {
		        "distance": 400,
		        "line_linked": {
		          "opacity": 1
		        }
		      },
		      "bubble": {
		        "distance": 323.67632367632365,
		        "size": 207.79220779220782,
		        "duration": 1.998001998001998,
		        "opacity": 0.8151848151848152,
		        "speed": 3
		      },
		      "repulse": {
		        "distance": 151.84815184815184,
		        "duration": 0.4
		      },
		      "push": {
		        "particles_nb": 4
		      },
		      "remove": {
		        "particles_nb": 2
		      }
		    }
		  },
		  "retina_detect": true
});
