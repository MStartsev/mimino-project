function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,l=new Array(r);t<r;t++)l[t]=e[t];return l}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}var num=0,slides=_toConsumableArray(document.querySelectorAll(".slide"));function moveSlideNext(e){0===e?(slides[0].style.left="100%",Frame.run(slides[slides.length-1],{left:"-100%",duration:.5}),Frame.run(slides[e],{left:"0px",duration:.5})):(slides[e].style.left="100%",slides[e-1].style.left="0%",Frame.run(slides[e-1],{left:"-100%",duration:.5}),Frame.run(slides[e],{left:"0px",duration:.5}))}function moveSlidePrev(e){0===e?(slides[e].style.left="-100%",slides[e+1].style.left="0px",Frame.run(slides[e+1],{left:"100%",duration:.5}),Frame.run(slides[e],{left:"0px",duration:.5})):e===slides.length-1?(slides[e].style.left="-100%",slides[0].style.left="0px",Frame.run(slides[0],{left:"100%",duration:.5}),Frame.run(slides[e],{left:"0px",duration:.5})):(slides[e].style.left="-100%",slides[e+1].style.left="0px",Frame.run(slides[e+1],{left:"100%",duration:.5}),Frame.run(slides[e],{left:"0px",duration:.5}))}slides.forEach((function(e,r){r>0&&(e.style.left="100%")})),document.querySelector(".next").addEventListener("click",(function(){num<slides.length-1?moveSlideNext(num+=1):moveSlideNext(num=0)})),document.querySelector(".prev").addEventListener("click",(function(){moveSlidePrev(num>0?num-=1:num=slides.length-1)}));
//# sourceMappingURL=index.57b8abe2.js.map
