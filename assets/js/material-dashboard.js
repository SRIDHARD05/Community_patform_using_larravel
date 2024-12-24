// "use strict";
// (function() {
//   var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

//   if (isWindows) {
//     // if we are on windows OS we activate the perfectScrollbar function
//     if (document.getElementsByClassName('main-content')[0]) {
//       var mainpanel = document.querySelector('.main-content');
//       var ps = new PerfectScrollbar(mainpanel);
//     };

//     if (document.getElementsByClassName('sidenav')[0]) {
//       var sidebar = document.querySelector('.sidenav');
//       var ps1 = new PerfectScrollbar(sidebar);
//     };

//     if (document.getElementsByClassName('navbar-collapse')[0]) {
//       var fixedplugin = document.querySelector('.navbar:not(.navbar-expand-lg) .navbar-collapse');
//       var ps2 = new PerfectScrollbar(fixedplugin);
//     };

//     if (document.getElementsByClassName('fixed-plugin')[0]) {
//       var fixedplugin = document.querySelector('.fixed-plugin');
//       var ps3 = new PerfectScrollbar(fixedplugin);
//     };
//   };
// })();

// // Verify navbar blur on scroll
// if (document.getElementById('navbarBlur')) {
//   navbarBlurOnScroll('navbarBlur');
// }

// // initialization of Tooltips
// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })

// // when input is focused add focused class for style
// function focused(el) {
//   if (el.parentElement.classList.contains('input-group')) {
//     el.parentElement.classList.add('focused');
//   }
// }

// // when input is focused remove focused class for style
// function defocused(el) {
//   if (el.parentElement.classList.contains('input-group')) {
//     el.parentElement.classList.remove('focused');
//   }
// }

// // helper for adding on all elements multiple attributes
// function setAttributes(el, options) {
//   Object.keys(options).forEach(function(attr) {
//     el.setAttribute(attr, options[attr]);
//   })
// }

// // adding on inputs attributes for calling the focused and defocused functions
// if (document.querySelectorAll('.input-group').length != 0) {
//   var allInputs = document.querySelectorAll('input.form-control');
//   allInputs.forEach(el => setAttributes(el, {
//     "onfocus": "focused(this)",
//     "onfocusout": "defocused(this)"
//   }));
// }


// // Fixed Plugin

// if (document.querySelector('.fixed-plugin')) {
//   var fixedPlugin = document.querySelector('.fixed-plugin');
//   var fixedPlugin = document.querySelector('.fixed-plugin');
//   var fixedPluginButton = document.querySelector('.fixed-plugin-button');
//   var fixedPluginButtonNav = document.querySelector('.fixed-plugin-button-nav');
//   var fixedPluginCard = document.querySelector('.fixed-plugin .card');
//   var fixedPluginCloseButton = document.querySelectorAll('.fixed-plugin-close-button');
//   var navbar = document.getElementById('navbarBlur');
//   var buttonNavbarFixed = document.getElementById('navbarFixed');

//   if (fixedPluginButton) {
//     fixedPluginButton.onclick = function() {
//       if (!fixedPlugin.classList.contains('show')) {
//         fixedPlugin.classList.add('show');
//       } else {
//         fixedPlugin.classList.remove('show');
//       }
//     }
//   }

//   if (fixedPluginButtonNav) {
//     fixedPluginButtonNav.onclick = function() {
//       if (!fixedPlugin.classList.contains('show')) {
//         fixedPlugin.classList.add('show');
//       } else {
//         fixedPlugin.classList.remove('show');
//       }
//     }
//   }

//   fixedPluginCloseButton.forEach(function(el) {
//     el.onclick = function() {
//       fixedPlugin.classList.remove('show');
//     }
//   })

//   document.querySelector('body').onclick = function(e) {
//     if (e.target != fixedPluginButton && e.target != fixedPluginButtonNav && e.target.closest('.fixed-plugin .card') != fixedPluginCard) {
//       fixedPlugin.classList.remove('show');
//     }
//   }

//   if (navbar) {
//     if (navbar.getAttribute('data-scroll') == 'true' && buttonNavbarFixed) {
//       buttonNavbarFixed.setAttribute("checked", "true");
//     }
//   }

// }

// //Set Sidebar Color
// function sidebarColor(a) {
//   var parent = document.querySelector(".nav-link.active");
//   var color = a.getAttribute("data-color");

//   if (parent.classList.contains('bg-gradient-primary')) {
//     parent.classList.remove('bg-gradient-primary');
//   }
//   if (parent.classList.contains('bg-gradient-dark')) {
//     parent.classList.remove('bg-gradient-dark');
//   }
//   if (parent.classList.contains('bg-gradient-info')) {
//     parent.classList.remove('bg-gradient-info');
//   }
//   if (parent.classList.contains('bg-gradient-success')) {
//     parent.classList.remove('bg-gradient-success');
//   }
//   if (parent.classList.contains('bg-gradient-warning')) {
//     parent.classList.remove('bg-gradient-warning');
//   }
//   if (parent.classList.contains('bg-gradient-danger')) {
//     parent.classList.remove('bg-gradient-danger');
//   }
//   parent.classList.add('bg-gradient-' + color);
// }

// // Set Sidebar Type
// function sidebarType(a) {
//   var parent = a.parentElement.children;
//   var color = a.getAttribute("data-class");
//   var body = document.querySelector("body");
//   var bodyWhite = document.querySelector("body:not(.dark-version)");
//   var bodyDark = body.classList.contains('dark-version');

//   var colors = [];

//   for (var i = 0; i < parent.length; i++) {
//     parent[i].classList.remove('active');
//     colors.push(parent[i].getAttribute('data-class'));
//   }

//   if (!a.classList.contains('active')) {
//     a.classList.add('active');
//   } else {
//     a.classList.remove('active');
//   }

//   var sidebar = document.querySelector('.sidenav');

//   for (var i = 0; i < colors.length; i++) {
//     sidebar.classList.remove(colors[i]);
//   }

//   sidebar.classList.add(color);


//   // Remove text-white/text-dark classes
//   if (color == 'bg-transparent' || color == 'bg-white') {
//     var textWhites = document.querySelectorAll('.sidenav .text-white:not(.nav-link-text):not(.active)');
//     for (let i = 0; i < textWhites.length; i++) {
//       textWhites[i].classList.remove('text-white');
//       textWhites[i].classList.add('text-dark');
//     }
//   } else {
//     var textDarks = document.querySelectorAll('.sidenav .text-dark');
//     for (let i = 0; i < textDarks.length; i++) {
//       textDarks[i].classList.add('text-white');
//       textDarks[i].classList.remove('text-dark');
//     }
//   }

//   if (color == 'bg-transparent' && bodyDark) {
//     var textDarks = document.querySelectorAll('.navbar-brand .text-dark');
//     for (let i = 0; i < textDarks.length; i++) {
//       textDarks[i].classList.add('text-white');
//       textDarks[i].classList.remove('text-dark');
//     }
//   }

//   // Remove logo-white/logo-dark

//   if ((color == 'bg-transparent' || color == 'bg-white') && bodyWhite) {
//     var navbarBrand = document.querySelector('.navbar-brand-img');
//     var navbarBrandImg = navbarBrand.src;

//     if (navbarBrandImg.includes('logo-ct.png')) {
//       var navbarBrandImgNew = navbarBrandImg.replace("logo-ct", "logo-ct-dark");
//       navbarBrand.src = navbarBrandImgNew;
//     }
//   } else {
//     var navbarBrand = document.querySelector('.navbar-brand-img');
//     var navbarBrandImg = navbarBrand.src;
//     if (navbarBrandImg.includes('logo-ct-dark.png')) {
//       var navbarBrandImgNew = navbarBrandImg.replace("logo-ct-dark", "logo-ct");
//       navbarBrand.src = navbarBrandImgNew;
//     }
//   }

//   if (color == 'bg-white' && bodyDark) {
//     var navbarBrand = document.querySelector('.navbar-brand-img');
//     var navbarBrandImg = navbarBrand.src;

//     if (navbarBrandImg.includes('logo-ct.png')) {
//       var navbarBrandImgNew = navbarBrandImg.replace("logo-ct", "logo-ct-dark");
//       navbarBrand.src = navbarBrandImgNew;
//     }
//   }
// }

// // Set Navbar Fixed
// function navbarFixed(el) {
//   let classes = ['position-sticky', 'blur', 'shadow-blur', 'mt-4', 'left-auto', 'top-1', 'z-index-sticky'];
//   const navbar = document.getElementById('navbarBlur');

//   if (!el.getAttribute("checked")) {
//     navbar.classList.add(...classes);
//     navbar.setAttribute('navbar-scroll', 'true');
//     navbarBlurOnScroll('navbarBlur');
//     el.setAttribute("checked", "true");
//   } else {
//     navbar.classList.remove(...classes);
//     navbar.setAttribute('navbar-scroll', 'false');
//     navbarBlurOnScroll('navbarBlur');
//     el.removeAttribute("checked");
//   }
// };


// // Set Navbar Minimized
// function navbarMinimize(el) {
//   var sidenavShow = document.getElementsByClassName('g-sidenav-show')[0];

//   if (!el.getAttribute("checked")) {
//     sidenavShow.classList.remove('g-sidenav-pinned');
//     sidenavShow.classList.add('g-sidenav-hidden');
//     el.setAttribute("checked", "true");
//   } else {
//     sidenavShow.classList.remove('g-sidenav-hidden');
//     sidenavShow.classList.add('g-sidenav-pinned');
//     el.removeAttribute("checked");
//   }
// }

// // Navbar blur on scroll
// function navbarBlurOnScroll(id) {
//   const navbar = document.getElementById(id);
//   let navbarScrollActive = navbar ? navbar.getAttribute("data-scroll") : false;
//   let scrollDistance = 5;
//   let classes = ['blur', 'shadow-blur', 'left-auto'];
//   let toggleClasses = ['shadow-none'];

//   if (navbarScrollActive == 'true') {
//     window.onscroll = debounce(function() {
//       if (window.scrollY > scrollDistance) {
//         blurNavbar();
//       } else {
//         transparentNavbar();
//       }
//     }, 10);
//   } else {
//     window.onscroll = debounce(function() {
//       transparentNavbar();
//     }, 10);
//   }

//   var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

//   if (isWindows) {
//     var content = document.querySelector('.main-content');
//     if (navbarScrollActive == 'true') {
//       content.addEventListener('ps-scroll-y', debounce(function() {
//         if (content.scrollTop > scrollDistance) {
//           blurNavbar();
//         } else {
//           transparentNavbar();
//         }
//       }, 10));
//     } else {
//       content.addEventListener('ps-scroll-y', debounce(function() {
//         transparentNavbar();
//       }, 10));
//     }
//   }

//   function blurNavbar() {
//     navbar.classList.add(...classes)
//     navbar.classList.remove(...toggleClasses)

//     toggleNavLinksColor('blur');
//   }

//   function transparentNavbar() {
//     navbar.classList.remove(...classes)
//     navbar.classList.add(...toggleClasses)

//     toggleNavLinksColor('transparent');
//   }

//   function toggleNavLinksColor(type) {
//     let navLinks = document.querySelectorAll('.navbar-main .nav-link')
//     let navLinksToggler = document.querySelectorAll('.navbar-main .sidenav-toggler-line')

//     if (type === "blur") {
//       navLinks.forEach(element => {
//         element.classList.remove('text-body')
//       });

//       navLinksToggler.forEach(element => {
//         element.classList.add('bg-dark')
//       });
//     } else if (type === "transparent") {
//       navLinks.forEach(element => {
//         element.classList.add('text-body')
//       });

//       navLinksToggler.forEach(element => {
//         element.classList.remove('bg-dark')
//       });
//     }
//   }
// }

// // Debounce Function
// // Returns a function, that, as long as it continues to be invoked, will not
// // be triggered. The function will be called after it stops being called for
// // N milliseconds. If `immediate` is passed, trigger the function on the
// // leading edge, instead of the trailing.
// function debounce(func, wait, immediate) {
//   var timeout;
//   return function() {
//     var context = this,
//       args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };

// // initialization of Toasts
// document.addEventListener("DOMContentLoaded", function() {
//   var toastElList = [].slice.call(document.querySelectorAll(".toast"));

//   var toastList = toastElList.map(function(toastEl) {
//     return new bootstrap.Toast(toastEl);
//   });

//   var toastButtonList = [].slice.call(document.querySelectorAll(".toast-btn"));

//   toastButtonList.map(function(toastButtonEl) {
//     toastButtonEl.addEventListener("click", function() {
//       var toastToTrigger = document.getElementById(toastButtonEl.dataset.target);

//       if (toastToTrigger) {
//         var toast = bootstrap.Toast.getInstance(toastToTrigger);
//         toast.show();
//       }
//     });
//   });
// });

// // Tabs navigation

// var total = document.querySelectorAll('.nav-pills');

// function initNavs() {
//   total.forEach(function(item, i) {
//     var moving_div = document.createElement('div');
//     var first_li = item.querySelector('li:first-child .nav-link');
//     var tab = first_li.cloneNode();
//     tab.innerHTML = "-";

//     moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
//     moving_div.appendChild(tab);
//     item.appendChild(moving_div);

//     var list_length = item.getElementsByTagName("li").length;

//     moving_div.style.padding = '0px';
//     moving_div.style.width = item.querySelector('li:nth-child(1)').offsetWidth + 'px';
//     moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
//     moving_div.style.transition = '.5s ease';

//     item.onmouseover = function(event) {
//       let target = getEventTarget(event);
//       let li = target.closest('li'); // get reference
//       if (li) {
//         let nodes = Array.from(li.closest('ul').children); // get array
//         let index = nodes.indexOf(li) + 1;
//         item.querySelector('li:nth-child(' + index + ') .nav-link').onclick = function() {
//           moving_div = item.querySelector('.moving-tab');
//           let sum = 0;
//           if (item.classList.contains('flex-column')) {
//             for (var j = 1; j <= nodes.indexOf(li); j++) {
//               sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
//             }
//             moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
//             moving_div.style.height = item.querySelector('li:nth-child(' + j + ')').offsetHeight;
//           } else {
//             for (var j = 1; j <= nodes.indexOf(li); j++) {
//               sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
//             }
//             moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
//             moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
//           }
//         }
//       }
//     }
//   });
// }

// setTimeout(function() {
//   initNavs();
// }, 100);

// // Tabs navigation resize

// window.addEventListener('resize', function(event) {
//   total.forEach(function(item, i) {
//     item.querySelector('.moving-tab').remove();
//     var moving_div = document.createElement('div');
//     var tab = item.querySelector(".nav-link.active").cloneNode();
//     tab.innerHTML = "-";

//     moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
//     moving_div.appendChild(tab);

//     item.appendChild(moving_div);

//     moving_div.style.padding = '0px';
//     moving_div.style.transition = '.5s ease';

//     let li = item.querySelector(".nav-link.active").parentElement;

//     if (li) {
//       let nodes = Array.from(li.closest('ul').children); // get array
//       let index = nodes.indexOf(li) + 1;

//       let sum = 0;
//       if (item.classList.contains('flex-column')) {
//         for (var j = 1; j <= nodes.indexOf(li); j++) {
//           sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
//         }
//         moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
//         moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
//         moving_div.style.height = item.querySelector('li:nth-child(' + j + ')').offsetHeight;
//       } else {
//         for (var j = 1; j <= nodes.indexOf(li); j++) {
//           sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
//         }
//         moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
//         moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';

//       }
//     }
//   });

//   if (window.innerWidth < 991) {
//     total.forEach(function(item, i) {
//       if (!item.classList.contains('flex-column')) {
//         item.classList.remove('flex-row');
//         item.classList.add('flex-column', 'on-resize');
//         let li = item.querySelector(".nav-link.active").parentElement;
//         let nodes = Array.from(li.closest('ul').children); // get array
//         let index = nodes.indexOf(li) + 1;
//         let sum = 0;
//         for (var j = 1; j <= nodes.indexOf(li); j++) {
//           sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
//         }
//         var moving_div = document.querySelector('.moving-tab');
//         moving_div.style.width = item.querySelector('li:nth-child(1)').offsetWidth + 'px';
//         moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';

//       }
//     });
//   } else {
//     total.forEach(function(item, i) {
//       if (item.classList.contains('on-resize')) {
//         item.classList.remove('flex-column', 'on-resize');
//         item.classList.add('flex-row');
//         let li = item.querySelector(".nav-link.active").parentElement;
//         let nodes = Array.from(li.closest('ul').children); // get array
//         let index = nodes.indexOf(li) + 1;
//         let sum = 0;
//         for (var j = 1; j <= nodes.indexOf(li); j++) {
//           sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
//         }
//         var moving_div = document.querySelector('.moving-tab');
//         moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
//         moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
//       }
//     })
//   }
// });

// // Function to remove flex row on mobile devices
// if (window.innerWidth < 991) {
//   total.forEach(function(item, i) {
//     if (item.classList.contains('flex-row')) {
//       item.classList.remove('flex-row');
//       item.classList.add('flex-column', 'on-resize');
//     }
//   });
// }

// function getEventTarget(e) {
//   e = e || window.event;
//   return e.target || e.srcElement;
// }

// // End tabs navigation

// window.onload = function() {
//   // Material Design Input function
//   var inputs = document.querySelectorAll('input');

//   for (var i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('focus', function(e) {
//       this.parentElement.classList.add('is-focused');
//     }, false);

//     inputs[i].onkeyup = function(e) {
//       if (this.value != "") {
//         this.parentElement.classList.add('is-filled');
//       } else {
//         this.parentElement.classList.remove('is-filled');
//       }
//     };

//     inputs[i].addEventListener('focusout', function(e) {
//       if (this.value != "") {
//         this.parentElement.classList.add('is-filled');
//       }
//       this.parentElement.classList.remove('is-focused');
//     }, false);
//   }

//   // Ripple Effect
//   var ripples = document.querySelectorAll('.btn');

//   for (var i = 0; i < ripples.length; i++) {
//     ripples[i].addEventListener('click', function(e) {
//       var targetEl = e.target;
//       var rippleDiv = targetEl.querySelector('.ripple');

//       rippleDiv = document.createElement('span');
//       rippleDiv.classList.add('ripple');
//       rippleDiv.style.width = rippleDiv.style.height = Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + 'px';
//       targetEl.appendChild(rippleDiv);

//       rippleDiv.style.left = (e.offsetX - rippleDiv.offsetWidth / 2) + 'px';
//       rippleDiv.style.top = (e.offsetY - rippleDiv.offsetHeight / 2) + 'px';
//       rippleDiv.classList.add('ripple');
//       setTimeout(function() {
//         rippleDiv.parentElement.removeChild(rippleDiv);
//       }, 600);
//     }, false);
//   }
// };

// // Toggle Sidenav
// const iconNavbarSidenav = document.getElementById('iconNavbarSidenav');
// const iconSidenav = document.getElementById('iconSidenav');
// const sidenav = document.getElementById('sidenav-main');
// let body = document.getElementsByTagName('body')[0];
// let className = 'g-sidenav-pinned';

// if (iconNavbarSidenav) {
//   iconNavbarSidenav.addEventListener("click", toggleSidenav);
// }

// if (iconSidenav) {
//   iconSidenav.addEventListener("click", toggleSidenav);
// }

// function toggleSidenav() {
//   if (body.classList.contains(className)) {
//     body.classList.remove(className);
//     setTimeout(function() {
//       sidenav.classList.remove('bg-white');
//     }, 100);
//     sidenav.classList.remove('bg-transparent');

//   } else {
//     body.classList.add(className);
//     sidenav.classList.add('bg-white');
//     sidenav.classList.remove('bg-transparent');
//     iconSidenav.classList.remove('d-none');
//   }
// }

// // Resize navbar color depends on configurator active type of sidenav

// let referenceButtons = document.querySelector('[data-class]');

// if (sidenav) {
//   window.addEventListener("resize", navbarColorOnResize);

//   function navbarColorOnResize() {
//     if (window.innerWidth > 1200) {
//       if (referenceButtons?.classList.contains('active') && referenceButtons?.getAttribute('data-class') === 'bg-transparent') {
//         sidenav.classList.remove('bg-white');
//       } else {
//         sidenav.classList.add('bg-white');
//       }
//     } else {
//       sidenav.classList.add('bg-white');
//       sidenav.classList.remove('bg-transparent');
//     }
//   }
// }

// // Deactivate sidenav type buttons on resize and small screens
// window.addEventListener("resize", sidenavTypeOnResize);
// window.addEventListener("load", sidenavTypeOnResize);

// function sidenavTypeOnResize() {
//   let elements = document.querySelectorAll('[onclick="sidebarType(this)"]');
//   if (window.innerWidth < 1200) {
//     elements.forEach(function(el) {
//       el.classList.add('disabled');
//     });
//   } else {
//     elements.forEach(function(el) {
//       el.classList.remove('disabled');
//     });
//   }
// }


// // Light Mode / Dark Mode
// function darkMode(el) {
//   const body = document.getElementsByTagName('body')[0];
//   const hr = document.querySelectorAll('div:not(.sidenav) > hr');
//   const hr_card = document.querySelectorAll('div:not(.bg-gradient-dark) hr');
//   const text_btn = document.querySelectorAll('button:not(.btn) > .text-dark');
//   const text_span = document.querySelectorAll('span.text-dark, .breadcrumb .text-dark');
//   const text_span_white = document.querySelectorAll('span.text-white, .breadcrumb .text-white');
//   const text_strong = document.querySelectorAll('strong.text-dark');
//   const text_strong_white = document.querySelectorAll('strong.text-white');
//   const text_nav_link = document.querySelectorAll('a.nav-link.text-dark');
//   const text_nav_link_white = document.querySelectorAll('a.nav-link.text-white');
//   const secondary = document.querySelectorAll('.text-secondary');
//   const bg_gray_100 = document.querySelectorAll('.bg-gray-100');
//   const bg_gray_600 = document.querySelectorAll('.bg-gray-600');
//   const btn_text_dark = document.querySelectorAll('.btn.btn-link.text-dark, .material-symbols-rounded.text-dark');
//   const btn_text_white = document.querySelectorAll('.btn.btn-link.text-white, .material-symbols-rounded.text-white');
//   const card_border = document.querySelectorAll('.card.border');
//   const card_border_dark = document.querySelectorAll('.card.border.border-dark');

//   const svg = document.querySelectorAll('g');

//   if (!el.getAttribute("checked")) {
//     body.classList.add('dark-version');
//     for (var i = 0; i < hr.length; i++) {
//       if (hr[i].classList.contains('dark')) {
//         hr[i].classList.remove('dark');
//         hr[i].classList.add('light');
//       }
//     }

//     for (var i = 0; i < hr_card.length; i++) {
//       if (hr_card[i].classList.contains('dark')) {
//         hr_card[i].classList.remove('dark');
//         hr_card[i].classList.add('light');
//       }
//     }
//     for (var i = 0; i < text_btn.length; i++) {
//       if (text_btn[i].classList.contains('text-dark')) {
//         text_btn[i].classList.remove('text-dark');
//         text_btn[i].classList.add('text-white');
//       }
//     }
//     for (var i = 0; i < text_span.length; i++) {
//       if (text_span[i].classList.contains('text-dark')) {
//         text_span[i].classList.remove('text-dark');
//         text_span[i].classList.add('text-white');
//       }
//     }
//     for (var i = 0; i < text_strong.length; i++) {
//       if (text_strong[i].classList.contains('text-dark')) {
//         text_strong[i].classList.remove('text-dark');
//         text_strong[i].classList.add('text-white');
//       }
//     }
//     for (var i = 0; i < text_nav_link.length; i++) {
//       if (text_nav_link[i].classList.contains('text-dark')) {
//         text_nav_link[i].classList.remove('text-dark');
//         text_nav_link[i].classList.add('text-white');
//       }
//     }
//     for (var i = 0; i < secondary.length; i++) {
//       if (secondary[i].classList.contains('text-secondary')) {
//         secondary[i].classList.remove('text-secondary');
//         secondary[i].classList.add('text-white');
//         secondary[i].classList.add('opacity-8');
//       }
//     }
//     for (var i = 0; i < bg_gray_100.length; i++) {
//       if (bg_gray_100[i].classList.contains('bg-gray-100')) {
//         bg_gray_100[i].classList.remove('bg-gray-100');
//         bg_gray_100[i].classList.add('bg-gray-600');
//       }
//     }
//     for (var i = 0; i < btn_text_dark.length; i++) {
//       btn_text_dark[i].classList.remove('text-dark');
//       btn_text_dark[i].classList.add('text-white');
//     }
//     for (var i = 0; i < svg.length; i++) {
//       if (svg[i].hasAttribute('fill')) {
//         svg[i].setAttribute('fill', '#fff');
//       }
//     }
//     for (var i = 0; i < card_border.length; i++) {
//       card_border[i].classList.add('border-dark');
//     }
//     el.setAttribute("checked", "true");
//   } else {
//     body.classList.remove('dark-version');
//     for (var i = 0; i < hr.length; i++) {
//       if (hr[i].classList.contains('light')) {
//         hr[i].classList.add('dark');
//         hr[i].classList.remove('light');
//       }
//     }
//     for (var i = 0; i < hr_card.length; i++) {
//       if (hr_card[i].classList.contains('light')) {
//         hr_card[i].classList.add('dark');
//         hr_card[i].classList.remove('light');
//       }
//     }
//     for (var i = 0; i < text_btn.length; i++) {
//       if (text_btn[i].classList.contains('text-white')) {
//         text_btn[i].classList.remove('text-white');
//         text_btn[i].classList.add('text-dark');
//       }
//     }
//     for (var i = 0; i < text_span_white.length; i++) {
//       if (text_span_white[i].classList.contains('text-white') && !text_span_white[i].closest('.sidenav') && !text_span_white[i].closest('.card.bg-gradient-dark')) {
//         text_span_white[i].classList.remove('text-white');
//         text_span_white[i].classList.add('text-dark');
//       }
//     }
//     for (var i = 0; i < text_strong_white.length; i++) {
//       if (text_strong_white[i].classList.contains('text-white')) {
//         text_strong_white[i].classList.remove('text-white');
//         text_strong_white[i].classList.add('text-dark');
//       }
//     }
//     for (var i = 0; i < text_nav_link_white.length; i++) {
//       if (text_nav_link_white[i].classList.contains('text-white') && !text_nav_link_white[i].closest('.sidenav')) {
//         text_nav_link_white[i].classList.remove('text-white');
//         text_nav_link_white[i].classList.add('text-dark');
//       }
//     }
//     for (var i = 0; i < secondary.length; i++) {
//       if (secondary[i].classList.contains('text-white')) {
//         secondary[i].classList.remove('text-white');
//         secondary[i].classList.remove('opacity-8');
//         secondary[i].classList.add('text-dark');
//       }
//     }
//     for (var i = 0; i < bg_gray_600.length; i++) {
//       if (bg_gray_600[i].classList.contains('bg-gray-600')) {
//         bg_gray_600[i].classList.remove('bg-gray-600');
//         bg_gray_600[i].classList.add('bg-gray-100');
//       }
//     }
//     for (var i = 0; i < svg.length; i++) {
//       if (svg[i].hasAttribute('fill')) {
//         svg[i].setAttribute('fill', '#252f40');
//       }
//     }
//     for (var i = 0; i < btn_text_white.length; i++) {
//       if (!btn_text_white[i].closest('.card.bg-gradient-dark')) {
//         btn_text_white[i].classList.remove('text-white');
//         btn_text_white[i].classList.add('text-dark');
//       }
//     }
//     for (var i = 0; i < card_border_dark.length; i++) {
//       card_border_dark[i].classList.remove('border-dark');
//     }
//     el.removeAttribute("checked");
//   }
// };


// // side bullets

// const indicators = document.querySelectorAll(".indicator");
// const sections = document.querySelectorAll("section");

// if (indicators) {
//   const resetCurrentActiveIndicator = () => {
//     const activeIndicator = document.querySelector(".indicator.active");
//     if (activeIndicator) {
//       activeIndicator.classList.remove("active");
//     }
//   };

//   const onSectionLeavesViewport = (section) => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             resetCurrentActiveIndicator();
//             const element = entry.target;
//             const indicator = document.querySelector(`a[href='#${element.id}']`);
//             if (indicator) {
//               indicator.classList.add("active");
//             }
//             return;
//           }
//         });
//       }, {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.75
//       }
//     );
//     observer.observe(section);
//   };

//   indicators.forEach((indicator) => {
//     indicator.addEventListener("click", function(event) {
//       event.preventDefault();
//       document
//         .querySelector(this.getAttribute("href"))
//         .scrollIntoView({
//           behavior: "smooth"
//         });
//       resetCurrentActiveIndicator();
//       this.classList.add("active");
//     });
//   });

//   sections.forEach(onSectionLeavesViewport);
// }

(() => {
  var e, t;
  -1 < navigator.platform.indexOf("Win") && (document.getElementsByClassName("main-content")[0] && (e = document.querySelector(".main-content"),
    new PerfectScrollbar(e)),
    document.getElementsByClassName("sidenav")[0] && (e = document.querySelector(".sidenav"),
      new PerfectScrollbar(e)),
    document.getElementsByClassName("navbar-collapse")[0] && (t = document.querySelector(".navbar:not(.navbar-expand-lg) .navbar-collapse"),
      new PerfectScrollbar(t)),
    document.getElementsByClassName("fixed-plugin")[0]) && (t = document.querySelector(".fixed-plugin"),
      new PerfectScrollbar(t))
}
)(),
  document.getElementById("navbarBlur") && navbarBlurOnScroll("navbarBlur");
var calendarEl, today, mYear, weekday, mDay, m, d, calendar, allInputs, fixedPlugin, fixedPluginButton, fixedPluginButtonNav, fixedPluginCard, fixedPluginCloseButton, navbar, buttonNavbarFixed, popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')), popoverList = popoverTriggerList.map(function (e) {
  return new bootstrap.Popover(e)
}), tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')), tooltipList = tooltipTriggerList.map(function (e) {
  return new bootstrap.Tooltip(e)
});
function focused(e) {
  e.parentElement.classList.contains("input-group") && e.parentElement.classList.add("focused")
}
function defocused(e) {
  e.parentElement.classList.contains("input-group") && e.parentElement.classList.remove("focused")
}
function setAttributes(t, a) {
  Object.keys(a).forEach(function (e) {
    t.setAttribute(e, a[e])
  })
}
function dropDown(e) {
  if (!document.querySelector(".dropdown-hover")) {
    event.stopPropagation(),
      event.preventDefault();
    for (var t = e.parentElement.parentElement.children, a = 0; a < t.length; a++)
      t[a].lastElementChild != e.parentElement.lastElementChild && t[a].lastElementChild.classList.remove("show");
    e.nextElementSibling.classList.contains("show") ? e.nextElementSibling.classList.remove("show") : e.nextElementSibling.classList.add("show")
  }
}
function sidebarColor(e) {
  for (var t, a = e.parentElement.children, n = e.getAttribute("data-color"), i = 0; i < a.length; i++)
    a[i].classList.remove("active");
  e.classList.contains("active") ? e.classList.remove("active") : e.classList.add("active"),
    document.querySelector(".sidenav").setAttribute("data-color", n),
    document.querySelector("#sidenavCard") && (e = ["card", "card-background", "shadow-none", "card-background-mask-" + n],
      (t = document.querySelector("#sidenavCard")).className = "",
      t.classList.add(...e),
      t = ["ni", "ni-diamond", "text-gradient", "text-lg", "top-0", "text-" + n],
      (e = document.querySelector("#sidenavCardIcon")).className = "",
      e.classList.add(...t))
}
function sidebarType(e) {
  for (var t = e.parentElement.children, a = e.getAttribute("data-class"), n = document.querySelector("body"), i = document.querySelector("body:not(.dark-version)"), n = n.classList.contains("dark-version"), l = [], s = 0; s < t.length; s++)
    t[s].classList.remove("active"),
      l.push(t[s].getAttribute("data-class"));
  e.classList.contains("active") ? e.classList.remove("active") : e.classList.add("active");
  for (var r, o, d, c = document.querySelector(".sidenav"), s = 0; s < l.length; s++)
    c.classList.remove(l[s]);
  if (c.classList.add(a),
    "bg-transparent" == a || "bg-white" == a) {
    var u = document.querySelectorAll(".sidenav .text-white");
    for (let e = 0; e < u.length; e++)
      u[e].classList.remove("text-white"),
        u[e].classList.add("text-dark")
  } else {
    var m = document.querySelectorAll(".sidenav .text-dark");
    for (let e = 0; e < m.length; e++)
      m[e].classList.add("text-white"),
        m[e].classList.remove("text-dark")
  }
  if ("bg-transparent" == a && n) {
    m = document.querySelectorAll(".navbar-brand .text-dark");
    for (let e = 0; e < m.length; e++)
      m[e].classList.add("text-white"),
        m[e].classList.remove("text-dark")
  }
  "bg-transparent" != a && "bg-white" != a || !i ? (o = (r = document.querySelector(".navbar-brand-img")).src).includes("logo-ct-dark.png") && (d = o.replace("logo-ct-dark", "logo-ct"),
    r.src = d) : (o = (r = document.querySelector(".navbar-brand-img")).src).includes("logo-ct.png") && (d = o.replace("logo-ct", "logo-ct-dark"),
      r.src = d),
    "bg-white" == a && n && (o = (r = document.querySelector(".navbar-brand-img")).src).includes("logo-ct.png") && (d = o.replace("logo-ct", "logo-ct-dark"),
      r.src = d)
}
function navbarFixed(e) {
  var t = ["position-sticky", "blur", "shadow-blur", "mt-4", "left-auto", "top-1", "z-index-sticky"]
    , a = document.getElementById("navbarBlur");
  e.getAttribute("checked") ? (a.classList.remove(...t),
    a.setAttribute("data-scroll", "false"),
    navbarBlurOnScroll("navbarBlur"),
    e.removeAttribute("checked")) : (a.classList.add(...t),
      a.setAttribute("data-scroll", "true"),
      navbarBlurOnScroll("navbarBlur"),
      e.setAttribute("checked", "true"))
}
function navbarMinimize(e) {
  var t = document.getElementsByClassName("g-sidenav-show")[0];
  e.getAttribute("checked") ? (t.classList.remove("g-sidenav-hidden"),
    t.classList.add("g-sidenav-pinned"),
    e.removeAttribute("checked")) : (t.classList.remove("g-sidenav-pinned"),
      t.classList.add("g-sidenav-hidden"),
      e.setAttribute("checked", "true"))
}
function navbarBlurOnScroll(e) {
  let t = document.getElementById(e);
  var a, e = !!t && t.getAttribute("data-scroll");
  let n = ["blur", "shadow-blur", "left-auto"]
    , i = ["shadow-none"];
  function l() {
    t.classList.add(...n),
      t.classList.remove(...i),
      r("blur")
  }
  function s() {
    t.classList.remove(...n),
      t.classList.add(...i),
      r("transparent")
  }
  function r(e) {
    var t = document.querySelectorAll(".navbar-main .nav-link")
      , a = document.querySelectorAll(".navbar-main .sidenav-toggler-line");
    "blur" === e ? (t.forEach(e => {
      e.classList.remove("text-body")
    }
    ),
      a.forEach(e => {
        e.classList.add("bg-dark")
      }
      )) : "transparent" === e && (t.forEach(e => {
        e.classList.add("text-body")
      }
      ),
        a.forEach(e => {
          e.classList.remove("bg-dark")
        }
        ))
  }
  window.onscroll = debounce("true" == e ? function () {
    (5 < window.scrollY ? l : s)()
  }
    : function () {
      s()
    }
    , 10),
    -1 < navigator.platform.indexOf("Win") && (a = document.querySelector(".main-content"),
      "true" == e ? a.addEventListener("ps-scroll-y", debounce(function () {
        (5 < a.scrollTop ? l : s)()
      }, 10)) : a.addEventListener("ps-scroll-y", debounce(function () {
        s()
      }, 10)))
}
function debounce(n, i, l) {
  var s;
  return function () {
    var e = this
      , t = arguments
      , a = l && !s;
    clearTimeout(s),
      s = setTimeout(function () {
        s = null,
          l || n.apply(e, t)
      }, i),
      a && n.apply(e, t)
  }
}
document.addEventListener("DOMContentLoaded", function () {
  [].slice.call(document.querySelectorAll(".toast")).map(function (e) {
    return new bootstrap.Toast(e)
  });
  [].slice.call(document.querySelectorAll(".toast-btn")).map(function (t) {
    t.addEventListener("click", function () {
      var e = document.getElementById(t.dataset.target);
      e && bootstrap.Toast.getInstance(e).show()
    })
  })
}),
  document.querySelector('[data-toggle="widget-calendar"]') && (calendarEl = document.querySelector('[data-toggle="widget-calendar"]'),
    mYear = (today = new Date).getFullYear(),
    mDay = (weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])[today.getDay()],
    m = today.getMonth(),
    d = today.getDate(),
    document.getElementsByClassName("widget-calendar-year")[0].innerHTML = mYear,
    document.getElementsByClassName("widget-calendar-day")[0].innerHTML = mDay,
    (calendar = new FullCalendar.Calendar(calendarEl, {
      contentHeight: "auto",
      initialView: "dayGridMonth",
      selectable: !0,
      initialDate: "2020-12-01",
      editable: !0,
      headerToolbar: !1,
      events: [{
        title: "Call with Dave",
        start: "2020-11-18",
        end: "2020-11-18",
        className: "bg-gradient-danger"
      }, {
        title: "Lunch meeting",
        start: "2020-11-21",
        end: "2020-11-22",
        className: "bg-gradient-warning"
      }, {
        title: "All day conference",
        start: "2020-11-29",
        end: "2020-11-29",
        className: "bg-gradient-success"
      }, {
        title: "Meeting with Mary",
        start: "2020-12-01",
        end: "2020-12-01",
        className: "bg-gradient-info"
      }, {
        title: "Winter Hackaton",
        start: "2020-12-03",
        end: "2020-12-03",
        className: "bg-gradient-danger"
      }, {
        title: "Digital event",
        start: "2020-12-07",
        end: "2020-12-09",
        className: "bg-gradient-warning"
      }, {
        title: "Marketing event",
        start: "2020-12-10",
        end: "2020-12-10",
        className: "bg-gradient-primary"
      }, {
        title: "Dinner with Family",
        start: "2020-12-19",
        end: "2020-12-19",
        className: "bg-gradient-danger"
      }, {
        title: "Black Friday",
        start: "2020-12-23",
        end: "2020-12-23",
        className: "bg-gradient-info"
      }, {
        title: "Cyber Week",
        start: "2020-12-02",
        end: "2020-12-02",
        className: "bg-gradient-warning"
      }]
    })).render()),
  0 != document.querySelectorAll(".input-group").length && (allInputs = document.querySelectorAll("input.form-control")).forEach(e => setAttributes(e, {
    onfocus: "focused(this)",
    onfocusout: "defocused(this)"
  })),
  document.querySelector(".fixed-plugin") && (fixedPlugin = document.querySelector(".fixed-plugin"),
    fixedPluginButton = document.querySelector(".fixed-plugin-button"),
    fixedPluginButtonNav = document.querySelector(".fixed-plugin-button-nav"),
    fixedPluginCard = document.querySelector(".fixed-plugin .card"),
    fixedPluginCloseButton = document.querySelectorAll(".fixed-plugin-close-button"),
    navbar = document.getElementById("navbarBlur"),
    buttonNavbarFixed = document.getElementById("navbarFixed"),
    fixedPluginButton && (fixedPluginButton.onclick = function () {
      fixedPlugin.classList.contains("show") ? fixedPlugin.classList.remove("show") : fixedPlugin.classList.add("show")
    }
    ),
    fixedPluginButtonNav && (fixedPluginButtonNav.onclick = function () {
      fixedPlugin.classList.contains("show") ? fixedPlugin.classList.remove("show") : fixedPlugin.classList.add("show")
    }
    ),
    fixedPluginCloseButton.forEach(function (e) {
      e.onclick = function () {
        fixedPlugin.classList.remove("show")
      }
    }),
    document.querySelector("body").onclick = function (e) {
      e.target != fixedPluginButton && e.target != fixedPluginButtonNav && e.target.closest(".fixed-plugin .card") != fixedPluginCard && fixedPlugin.classList.remove("show")
    }
    ,
    navbar) && "true" == navbar.getAttribute("data-scroll") && buttonNavbarFixed && buttonNavbarFixed.setAttribute("checked", "true");
var sidenavToggler, sidenavShow, toggleNavbarMinimize, total = document.querySelectorAll(".nav-pills");
function initNavs() {
  total.forEach(function (l, e) {
    var s = document.createElement("div")
      , t = l.querySelector(".nav-link.active").cloneNode()
      , a = (t.innerHTML = "-",
        s.classList.add("moving-tab", "position-absolute", "nav-link"),
        s.appendChild(t),
        l.appendChild(s),
        l.getElementsByTagName("li").length,
        s.style.padding = "0px",
        s.style.transition = ".5s ease",
        l.querySelector(".nav-link.active").parentElement);
    if (a) {
      var n = Array.from(a.closest("ul").children)
        , t = n.indexOf(a) + 1;
      let e = 0;
      if (l.classList.contains("flex-column")) {
        for (var i = 1; i <= n.indexOf(a); i++)
          e += l.querySelector("li:nth-child(" + i + ")").offsetHeight;
        s.style.transform = "translate3d(0px," + e + "px, 0px)",
          s.style.width = l.querySelector("li:nth-child(" + t + ")").offsetWidth + "px",
          s.style.height = l.querySelector("li:nth-child(" + i + ")").offsetHeight
      } else {
        for (i = 1; i <= n.indexOf(a); i++)
          e += l.querySelector("li:nth-child(" + i + ")").offsetWidth;
        s.style.transform = "translate3d(" + e + "px, 0px, 0px)",
          s.style.width = l.querySelector("li:nth-child(" + t + ")").offsetWidth + "px"
      }
    }
    l.onmouseover = function (e) {
      let i = getEventTarget(e).closest("li");
      if (i) {
        let a = Array.from(i.closest("ul").children)
          , n = a.indexOf(i) + 1;
        l.querySelector("li:nth-child(" + n + ") .nav-link").onclick = function () {
          s = l.querySelector(".moving-tab");
          let e = 0;
          if (l.classList.contains("flex-column")) {
            for (var t = 1; t <= a.indexOf(i); t++)
              e += l.querySelector("li:nth-child(" + t + ")").offsetHeight;
            s.style.transform = "translate3d(0px," + e + "px, 0px)",
              s.style.height = l.querySelector("li:nth-child(" + t + ")").offsetHeight
          } else {
            for (t = 1; t <= a.indexOf(i); t++)
              e += l.querySelector("li:nth-child(" + t + ")").offsetWidth;
            s.style.transform = "translate3d(" + e + "px, 0px, 0px)",
              s.style.width = l.querySelector("li:nth-child(" + n + ")").offsetWidth + "px"
          }
        }
      }
    }
  })
}
function getEventTarget(e) {
  return (e = e || window.event).target || e.srcElement
}
setTimeout(function () {
  initNavs()
}, 100),
  window.addEventListener("resize", function (e) {
    total.forEach(function (t, e) {
      t.querySelector(".moving-tab").remove();
      var a = document.createElement("div")
        , n = t.querySelector(".nav-link.active").cloneNode()
        , i = (n.innerHTML = "-",
          a.classList.add("moving-tab", "position-absolute", "nav-link"),
          a.appendChild(n),
          t.appendChild(a),
          a.style.padding = "0px",
          a.style.transition = ".5s ease",
          t.querySelector(".nav-link.active").parentElement);
      if (i) {
        var l = Array.from(i.closest("ul").children)
          , n = l.indexOf(i) + 1;
        let e = 0;
        if (t.classList.contains("flex-column")) {
          for (var s = 1; s <= l.indexOf(i); s++)
            e += t.querySelector("li:nth-child(" + s + ")").offsetHeight;
          a.style.transform = "translate3d(0px," + e + "px, 0px)",
            a.style.width = t.querySelector("li:nth-child(" + n + ")").offsetWidth + "px",
            a.style.height = t.querySelector("li:nth-child(" + s + ")").offsetHeight
        } else {
          for (s = 1; s <= l.indexOf(i); s++)
            e += t.querySelector("li:nth-child(" + s + ")").offsetWidth;
          a.style.transform = "translate3d(" + e + "px, 0px, 0px)",
            a.style.width = t.querySelector("li:nth-child(" + n + ")").offsetWidth + "px"
        }
      }
    }),
      window.innerWidth < 991 ? total.forEach(function (t, e) {
        if (!t.classList.contains("flex-column")) {
          t.classList.remove("flex-row"),
            t.classList.add("flex-column", "on-resize");
          var a = t.querySelector(".nav-link.active").parentElement
            , n = Array.from(a.closest("ul").children);
          n.indexOf(a);
          let e = 0;
          for (var i = 1; i <= n.indexOf(a); i++)
            e += t.querySelector("li:nth-child(" + i + ")").offsetHeight;
          var l = document.querySelector(".moving-tab");
          l.style.width = t.querySelector("li:nth-child(1)").offsetWidth + "px",
            l.style.transform = "translate3d(0px," + e + "px, 0px)"
        }
      }) : total.forEach(function (t, e) {
        if (t.classList.contains("on-resize")) {
          t.classList.remove("flex-column", "on-resize"),
            t.classList.add("flex-row");
          var a = t.querySelector(".nav-link.active").parentElement
            , n = Array.from(a.closest("ul").children)
            , i = n.indexOf(a) + 1;
          let e = 0;
          for (var l = 1; l <= n.indexOf(a); l++)
            e += t.querySelector("li:nth-child(" + l + ")").offsetWidth;
          var s = document.querySelector(".moving-tab");
          s.style.transform = "translate3d(" + e + "px, 0px, 0px)",
            s.style.width = t.querySelector("li:nth-child(" + i + ")").offsetWidth + "px"
        }
      })
  }),
  window.innerWidth < 991 && total.forEach(function (e, t) {
    e.classList.contains("flex-row") && (e.classList.remove("flex-row"),
      e.classList.add("flex-column", "on-resize"))
  }),
  document.querySelector(".sidenav-toggler") && (sidenavToggler = document.getElementsByClassName("sidenav-toggler")[0],
    sidenavShow = document.getElementsByClassName("g-sidenav-show")[0],
    toggleNavbarMinimize = document.getElementById("navbarMinimize"),
    sidenavShow) && (sidenavToggler.onclick = function () {
      sidenavShow.classList.contains("g-sidenav-hidden") ? (sidenavShow.classList.remove("g-sidenav-hidden"),
        sidenavShow.classList.add("g-sidenav-pinned"),
        toggleNavbarMinimize && (toggleNavbarMinimize.click(),
          toggleNavbarMinimize.removeAttribute("checked"))) : (sidenavShow.classList.remove("g-sidenav-pinned"),
            sidenavShow.classList.add("g-sidenav-hidden"),
            toggleNavbarMinimize && (toggleNavbarMinimize.click(),
              toggleNavbarMinimize.setAttribute("checked", "true")))
    }
  );
let iconNavbarSidenav = document.getElementById("iconNavbarSidenav")
  , iconSidenav = document.getElementById("iconSidenav")
  , sidenav = document.getElementById("sidenav-main")
  , body = document.getElementsByTagName("body")[0]
  , className = "g-sidenav-pinned";
function toggleSidenav() {
  body.classList.contains(className) ? (body.classList.remove(className),
    setTimeout(function () {
      sidenav.classList.remove("bg-white")
    }, 100),
    sidenav.classList.remove("bg-transparent")) : (body.classList.add(className),
      sidenav.classList.remove("bg-transparent"),
      iconSidenav.classList.remove("d-none"))
}
iconNavbarSidenav && iconNavbarSidenav.addEventListener("click", toggleSidenav),
  iconSidenav && iconSidenav.addEventListener("click", toggleSidenav);
let referenceButtons = document.querySelector("[data-class]");
function navbarColorOnResize() {
  sidenav && (1200 < window.innerWidth ? referenceButtons?.classList.contains("active") && "bg-transparent" === referenceButtons?.getAttribute("data-class") ? sidenav.classList.remove("bg-white") : document.querySelector("body").classList.contains("dark-version") || sidenav.classList.add("bg-white") : sidenav.classList.remove("bg-transparent"))
}
function sidenavTypeOnResize() {
  var e = document.querySelectorAll('[onclick="sidebarType(this)"]');
  window.innerWidth < 1200 ? e.forEach(function (e) {
    e.classList.add("disabled")
  }) : e.forEach(function (e) {
    e.classList.remove("disabled")
  })
}
function notify(e) {
  var t = document.querySelector("body")
    , a = document.createElement("div");
  a.classList.add("alert", "position-absolute", "top-0", "border-0", "text-white", "w-50", "end-0", "start-0", "mt-2", "mx-auto", "py-2"),
    a.classList.add("alert-" + e.getAttribute("data-type")),
    a.style.transform = "translate3d(0px, 0px, 0px)",
    a.style.opacity = "0",
    a.style.transition = ".35s ease",
    a.style.zIndex = "9999",
    setTimeout(function () {
      a.style.transform = "translate3d(0px, 20px, 0px)",
        a.style.setProperty("opacity", "1", "important")
    }, 100),
    a.innerHTML = '<div class="d-flex mb-1"><div class="alert-icon me-1"><i class="' + e.getAttribute("data-icon") + ' mt-1"></i></div><span class="alert-text"><strong>' + e.getAttribute("data-title") + '</strong></span></div><span class="text-sm">' + e.getAttribute("data-content") + "</span>",
    t.appendChild(a),
    setTimeout(function () {
      a.style.transform = "translate3d(0px, 0px, 0px)",
        a.style.setProperty("opacity", "0", "important")
    }, 4e3),
    setTimeout(function () {
      e.parentElement.querySelector(".alert").remove()
    }, 4500)
}
function darkMode(e) {
  var t = document.getElementsByTagName("body")[0]
    , a = document.querySelectorAll("div:not(.sidenav) > hr")
    , n = document.querySelectorAll("div:not(.bg-gradient-dark) hr")
    , i = document.querySelectorAll("button:not(.btn) > .text-dark")
    , l = document.querySelectorAll("span.text-dark, .breadcrumb .text-dark")
    , s = document.querySelectorAll("span.text-white, .breadcrumb .text-white")
    , r = document.querySelectorAll("strong.text-dark")
    , o = document.querySelectorAll("strong.text-white")
    , d = document.querySelectorAll("a.nav-link.text-dark")
    , c = document.querySelectorAll("a.nav-link.text-white")
    , u = document.querySelectorAll(".text-secondary")
    , m = document.querySelectorAll(".bg-gray-100")
    , g = document.querySelectorAll(".bg-gray-600")
    , f = document.querySelectorAll(".btn.btn-link.text-dark, .material-symbols-rounded.text-dark")
    , h = document.querySelectorAll(".btn.btn-link.text-white, .material-symbols-rounded.text-white")
    , v = document.querySelectorAll(".card.border")
    , y = document.querySelectorAll(".card.border.border-dark")
    , p = document.querySelectorAll(".main-content .container-fluid .card")
    , b = document.querySelectorAll("g")
    , w = document.querySelectorAll(".sidenav");
  if (e.getAttribute("checked")) {
    t.classList.remove("dark-version");
    for (x = 0; x < a.length; x++)
      a[x].classList.contains("light") && (a[x].classList.add("dark"),
        a[x].classList.remove("light"));
    for (let e = 0; e < w.length; e++)
      sidenav.classList.contains("bg-dark") && (sidenav.classList.remove("bg-dark"),
        sidenav.classList.add("bg-white"));
    for (x = 0; x < n.length; x++)
      n[x].classList.contains("light") && (n[x].classList.add("dark"),
        n[x].classList.remove("light"));
    for (x = 0; x < p.length; x++)
      p[x].classList.add("blur", "shadow-blur");
    for (x = 0; x < i.length; x++)
      i[x].classList.contains("text-white") && (i[x].classList.remove("text-white"),
        i[x].classList.add("text-dark"));
    for (x = 0; x < s.length; x++)
      !s[x].classList.contains("text-white") || s[x].closest(".sidenav") || s[x].closest(".card.bg-gradient-dark") || (s[x].classList.remove("text-white"),
        s[x].classList.add("text-dark"));
    for (x = 0; x < o.length; x++)
      o[x].classList.contains("text-white") && (o[x].classList.remove("text-white"),
        o[x].classList.add("text-dark"));
    for (x = 0; x < c.length; x++)
      c[x].classList.contains("text-white") && !c[x].closest(".sidenav") && (c[x].classList.remove("text-white"),
        c[x].classList.add("text-dark"));
    for (x = 0; x < u.length; x++)
      u[x].classList.contains("text-white") && (u[x].classList.remove("text-white"),
        u[x].classList.remove("opacity-8"),
        u[x].classList.add("text-dark"));
    for (x = 0; x < g.length; x++)
      g[x].classList.contains("bg-gray-600") && (g[x].classList.remove("bg-gray-600"),
        g[x].classList.add("bg-gray-100"));
    for (x = 0; x < b.length; x++)
      b[x].hasAttribute("fill") && b[x].setAttribute("fill", "#252f40");
    for (x = 0; x < h.length; x++)
      h[x].closest(".card.bg-gradient-dark") || (h[x].classList.remove("text-white"),
        h[x].classList.add("text-dark"));
    for (x = 0; x < y.length; x++)
      y[x].classList.remove("border-dark");
    e.removeAttribute("checked")
  } else {
    t.classList.add("dark-version");
    for (var x = 0; x < a.length; x++)
      a[x].classList.contains("dark") && (a[x].classList.remove("dark"),
        a[x].classList.add("light"));
    for (let t = 0; t < w.length; t++) {
      let e = w[t];
      console.log(e),
        e.classList.contains("bg-white") && (e.classList.remove("bg-white"),
          e.classList.add("bg-dark"))
    }
    for (var x = 0; x < p.length; x++)
      p[x].classList.contains("blur") && p[x].classList.remove("blur", "shadow-blur");
    for (var x = 0; x < n.length; x++)
      n[x].classList.contains("dark") && (n[x].classList.remove("dark"),
        n[x].classList.add("light"));
    for (var x = 0; x < i.length; x++)
      i[x].classList.contains("text-dark") && (i[x].classList.remove("text-dark"),
        i[x].classList.add("text-white"));
    for (var x = 0; x < l.length; x++)
      l[x].classList.contains("text-dark") && (l[x].classList.remove("text-dark"),
        l[x].classList.add("text-white"));
    for (var x = 0; x < r.length; x++)
      r[x].classList.contains("text-dark") && (r[x].classList.remove("text-dark"),
        r[x].classList.add("text-white"));
    for (var x = 0; x < d.length; x++)
      d[x].classList.contains("text-dark") && (d[x].classList.remove("text-dark"),
        d[x].classList.add("text-white"));
    for (var x = 0; x < u.length; x++)
      u[x].classList.contains("text-secondary") && (u[x].classList.remove("text-secondary"),
        u[x].classList.add("text-white"),
        u[x].classList.add("opacity-8"));
    for (var x = 0; x < m.length; x++)
      m[x].classList.contains("bg-gray-100") && (m[x].classList.remove("bg-gray-100"),
        m[x].classList.add("bg-gray-600"));
    for (var x = 0; x < f.length; x++)
      f[x].classList.remove("text-dark"),
        f[x].classList.add("text-white");
    for (var x = 0; x < b.length; x++)
      b[x].hasAttribute("fill") && b[x].setAttribute("fill", "#fff");
    for (var x = 0; x < v.length; x++)
      v[x].classList.add("border-dark");
    e.setAttribute("checked", "true")
  }
}
window.addEventListener("resize", navbarColorOnResize),
  window.addEventListener("resize", sidenavTypeOnResize),
  window.addEventListener("load", sidenavTypeOnResize),
  window.onload = function () {
    for (var e = document.querySelectorAll("input"), t = 0; t < e.length; t++)
      e[t].hasAttribute("value") && e[t].parentElement.classList.add("is-filled"),
        e[t].addEventListener("focus", function (e) {
          this.parentElement.classList.add("is-focused")
        }, !1),
        e[t].onkeyup = function (e) {
          "" != this.value ? this.parentElement.classList.add("is-filled") : this.parentElement.classList.remove("is-filled")
        }
        ,
        e[t].addEventListener("focusout", function (e) {
          "" != this.value && this.parentElement.classList.add("is-filled"),
            this.parentElement.classList.remove("is-focused")
        }, !1);
    for (var a = document.querySelectorAll(".btn"), t = 0; t < a.length; t++)
      a[t].addEventListener("click", function (e) {
        var t = e.target
          , a = t.querySelector(".ripple");
        (a = document.createElement("span")).classList.add("ripple"),
          a.style.width = a.style.height = Math.max(t.offsetWidth, t.offsetHeight) + "px",
          t.appendChild(a),
          a.style.left = e.offsetX - a.offsetWidth / 2 + "px",
          a.style.top = e.offsetY - a.offsetHeight / 2 + "px",
          a.classList.add("ripple"),
          setTimeout(function () {
            a.parentElement.removeChild(a)
          }, 600)
      }, !1)
  }
  ,
  document.querySelector(".datepicker") && flatpickr(".datepicker", {
    mode: "range"
  });
let form = document.getElementById("form")
  , username = document.getElementById("username")
  , email = document.getElementById("email")
  , password = document.getElementById("password")
  , password2 = document.getElementById("confirm_password");
function showError(e, t) {
  e = e.parentElement;
  e.className = "input-group input-group-outline my-5 is-invalid is-filled",
    e.querySelector("small").innerText = t
}
function showSucces(e) {
  e.parentElement.className = "input-group input-group-outline my-5 is-valid is-filled"
}
function checkEmail(e) {
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value.trim()) ? showSucces(e) : showError(e, "Email is not invalid")
}
function checkRequired(e) {
  e.forEach(function (e) {
    "" === e.value.trim() ? showError(e, getFieldName(e) + " is required") : showSucces(e)
  })
}
function checkLength(e, t, a) {
  e.value.length < t ? showError(e, getFieldName(e) + ` must be at least ${t} characters`) : e.value.length > a ? showError(e, getFieldName(e) + ` must be les than ${a} characters`) : showSucces(e)
}
function getFieldName(e) {
  return e.id.charAt(0).toUpperCase() + e.id.slice(1)
}
function checkPasswordMatch(e, t) {
  e.value !== t.value && showError(t, "Passwords do not match")
}
form && form.addEventListener("submit", function (e) {
  e.preventDefault(),
    checkRequired([username, email, password, password2]),
    checkLength(username, 3, 15),
    checkLength(password, 6, 25),
    checkEmail(email),
    checkPasswordMatch(password, password2)
});
var material = {
  initFullCalendar: function () {
    document.addEventListener("DOMContentLoaded", function () {
      var e = document.getElementById("fullCalendar")
        , t = new Date
        , a = t.getFullYear()
        , n = t.getMonth()
        , t = t.getDate()
        , i = new FullCalendar.Calendar(e, {
          initialView: "dayGridMonth",
          selectable: !0,
          headerToolbar: {
            left: "title",
            center: "dayGridMonth,timeGridWeek,timeGridDay",
            right: "prev,next today"
          },
          select: function (a) {
            Swal.fire({
              title: "Create an Event",
              html: '<div class="form-group"><input class="form-control text-default" placeholder="Event Title" id="input-field"></div>',
              showCancelButton: !0,
              customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-danger"
              },
              buttonsStyling: !1
            }).then(function (e) {
              var t = document.getElementById("input-field").value;
              t && (t = {
                title: t,
                start: a.startStr,
                end: a.endStr
              },
                i.addEvent(t))
            })
          },
          editable: !0,
          events: [{
            title: "All Day Event",
            start: new Date(a, n, 1),
            className: "event-default"
          }, {
            id: 999,
            title: "Repeating Event",
            start: new Date(a, n, t - 4, 6, 0),
            allDay: !1,
            className: "event-rose"
          }, {
            id: 999,
            title: "Repeating Event",
            start: new Date(a, n, t + 3, 6, 0),
            allDay: !1,
            className: "event-rose"
          }, {
            title: "Meeting",
            start: new Date(a, n, t - 1, 10, 30),
            allDay: !1,
            className: "event-green"
          }, {
            title: "Lunch",
            start: new Date(a, n, t + 7, 12, 0),
            end: new Date(a, n, t + 7, 14, 0),
            allDay: !1,
            className: "event-red"
          }, {
            title: "Md-pro Launch",
            start: new Date(a, n, t - 2, 12, 0),
            allDay: !0,
            className: "event-azure"
          }, {
            title: "Birthday Party",
            start: new Date(a, n, t + 1, 19, 0),
            end: new Date(a, n, t + 1, 22, 30),
            allDay: !1,
            className: "event-azure"
          }, {
            title: "Click for Creative Tim",
            start: new Date(a, n, 21),
            end: new Date(a, n, 22),
            url: "http://www.creative-tim.com/",
            className: "event-orange"
          }, {
            title: "Click for Google",
            start: new Date(a, n, 23),
            end: new Date(a, n, 23),
            url: "http://www.creative-tim.com/",
            className: "event-orange"
          }]
        });
      i.render()
    })
  },
  datatableSimple: function () {
    var t = {
      columnDefs: [{
        field: "athlete",
        minWidth: 150,
        sortable: !0,
        filter: !0
      }, {
        field: "age",
        maxWidth: 90,
        sortable: !0,
        filter: !0
      }, {
        field: "country",
        minWidth: 150,
        sortable: !0,
        filter: !0
      }, {
        field: "year",
        maxWidth: 90,
        sortable: !0,
        filter: !0
      }, {
        field: "date",
        minWidth: 150,
        sortable: !0,
        filter: !0
      }, {
        field: "sport",
        minWidth: 150,
        sortable: !0,
        filter: !0
      }, {
        field: "gold"
      }, {
        field: "silver"
      }, {
        field: "bronze"
      }, {
        field: "total"
      }],
      rowSelection: "multiple",
      rowMultiSelectWithClick: !0,
      rowData: [{
        athlete: "Ronald Valencia",
        age: 23,
        country: "United States",
        year: 2008,
        date: "24/08/2008",
        sport: "Swimming",
        gold: 8,
        silver: 0,
        bronze: 0,
        total: 8
      }, {
        athlete: "Lorand Frentz",
        age: 19,
        country: "United States",
        year: 2004,
        date: "29/08/2004",
        sport: "Swimming",
        gold: 6,
        silver: 0,
        bronze: 2,
        total: 8
      }, {
        athlete: "Michael Phelps",
        age: 27,
        country: "United States",
        year: 2012,
        date: "12/08/2012",
        sport: "Swimming",
        gold: 4,
        silver: 2,
        bronze: 0,
        total: 6
      }, {
        athlete: "Natalie Coughlin",
        age: 25,
        country: "United States",
        year: 2008,
        date: "24/08/2008",
        sport: "Swimming",
        gold: 1,
        silver: 2,
        bronze: 3,
        total: 6
      }, {
        athlete: "Aleksey Nemov",
        age: 24,
        country: "Russia",
        year: 2e3,
        date: "01/10/2000",
        sport: "Gymnastics",
        gold: 2,
        silver: 1,
        bronze: 3,
        total: 6
      }, {
        athlete: "Alicia Coutts",
        age: 24,
        country: "Australia",
        year: 2012,
        date: "12/08/2012",
        sport: "Swimming",
        gold: 1,
        silver: 3,
        bronze: 1,
        total: 5
      }, {
        athlete: "Missy Franklin",
        age: 17,
        country: "United States",
        year: 2012,
        date: "12/08/2012",
        sport: "Swimming",
        gold: 4,
        silver: 0,
        bronze: 1,
        total: 5
      }, {
        athlete: "Ryan Lochte",
        age: 27,
        country: "United States",
        year: 2012,
        date: "12/08/2012",
        sport: "Swimming",
        gold: 2,
        silver: 2,
        bronze: 1,
        total: 5
      }, {
        athlete: "Allison Schmitt",
        age: 22,
        country: "United States",
        year: 2012,
        date: "12/08/2012",
        sport: "Swimming",
        gold: 3,
        silver: 1,
        bronze: 1,
        total: 5
      }, {
        athlete: "Natalie Coughlin",
        age: 21,
        country: "United States",
        year: 2004,
        date: "29/08/2004",
        sport: "Swimming",
        gold: 2,
        silver: 2,
        bronze: 1,
        total: 5
      }, {
        athlete: "Ian Thorpe",
        age: 17,
        country: "Australia",
        year: 2e3,
        date: "01/10/2000",
        sport: "Swimming",
        gold: 3,
        silver: 2,
        bronze: 0,
        total: 5
      }, {
        athlete: "Dara Torres",
        age: 33,
        country: "United States",
        year: 2e3,
        date: "01/10/2000",
        sport: "Swimming",
        gold: 2,
        silver: 0,
        bronze: 3,
        total: 5
      }, {
        athlete: "Cindy Klassen",
        age: 26,
        country: "Canada",
        year: 2006,
        date: "26/02/2006",
        sport: "Speed Skating",
        gold: 1,
        silver: 2,
        bronze: 2,
        total: 5
      }, {
        athlete: "Nastia Liukin",
        age: 18,
        country: "United States",
        year: 2008,
        date: "24/08/2008",
        sport: "Gymnastics",
        gold: 1,
        silver: 3,
        bronze: 1,
        total: 5
      }, {
        athlete: "Marit Bjørgen",
        age: 29,
        country: "Norway",
        year: 2010,
        date: "28/02/2010",
        sport: "Cross Country Skiing",
        gold: 3,
        silver: 1,
        bronze: 1,
        total: 5
      }, {
        athlete: "Sun Yang",
        age: 20,
        country: "China",
        year: 2012,
        date: "12/08/2012",
        sport: "Swimming",
        gold: 2,
        silver: 1,
        bronze: 1,
        total: 4
      }]
    };
    document.addEventListener("DOMContentLoaded", function () {
      var e = document.querySelector("#datatableSimple");
      new agGrid.Grid(e, t)
    })
  },
  initVectorMap: function () {
    am4core.ready(function () {
      am4core.useTheme(am4themes_animated);
      var e = am4core.create("chartdiv", am4maps.MapChart)
        , t = (e.geodata = am4geodata_worldLow,
          e.projection = new am4maps.projections.Miller,
          e.series.push(new am4maps.MapPolygonSeries))
        , t = (t.exclude = ["AQ"],
          t.useGeodata = !0,
          t.mapPolygons.template);
      t.tooltipText = "{name}",
        t.polygon.fillOpacity = .6;
      t.states.create("hover").properties.fill = e.colors.getIndex(0);
      t = e.series.push(new am4maps.MapImageSeries),
        t.mapImages.template.propertyFields.longitude = "longitude",
        t.mapImages.template.propertyFields.latitude = "latitude",
        t.mapImages.template.tooltipText = "{title}",
        t.mapImages.template.propertyFields.url = "url",
        e = t.mapImages.template.createChild(am4core.Circle),
        e.radius = 3,
        e.propertyFields.fill = "color",
        e = t.mapImages.template.createChild(am4core.Circle);
      e.radius = 3,
        e.propertyFields.fill = "color",
        e.events.on("inited", function (e) {
          !function t(e) {
            e = e.animate([{
              property: "scale",
              from: 1,
              to: 5
            }, {
              property: "opacity",
              from: 1,
              to: 0
            }], 1e3, am4core.ease.circleOut);
            e.events.on("animationended", function (e) {
              t(e.target.object)
            })
          }(e.target)
        });
      e = new am4core.ColorSet;
      t.data = [{
        title: "Brussels",
        latitude: 50.8371,
        longitude: 4.3676,
        color: e.next()
      }, {
        title: "Copenhagen",
        latitude: 55.6763,
        longitude: 12.5681,
        color: e.next()
      }, {
        title: "Paris",
        latitude: 48.8567,
        longitude: 2.351,
        color: e.next()
      }, {
        title: "Reykjavik",
        latitude: 64.1353,
        longitude: -21.8952,
        color: e.next()
      }, {
        title: "Moscow",
        latitude: 55.7558,
        longitude: 37.6176,
        color: e.next()
      }, {
        title: "Madrid",
        latitude: 40.4167,
        longitude: -3.7033,
        color: e.next()
      }, {
        title: "London",
        latitude: 51.5002,
        longitude: -.1262,
        url: "http://www.google.co.uk",
        color: e.next()
      }, {
        title: "Peking",
        latitude: 39.9056,
        longitude: 116.3958,
        color: e.next()
      }, {
        title: "New Delhi",
        latitude: 28.6353,
        longitude: 77.225,
        color: e.next()
      }, {
        title: "Tokyo",
        latitude: 35.6785,
        longitude: 139.6823,
        url: "http://www.google.co.jp",
        color: e.next()
      }, {
        title: "Ankara",
        latitude: 39.9439,
        longitude: 32.856,
        color: e.next()
      }, {
        title: "Buenos Aires",
        latitude: -34.6118,
        longitude: -58.4173,
        color: e.next()
      }, {
        title: "Brasilia",
        latitude: -15.7801,
        longitude: -47.9292,
        color: e.next()
      }, {
        title: "Ottawa",
        latitude: 45.4235,
        longitude: -75.6979,
        color: e.next()
      }, {
        title: "Washington",
        latitude: 38.8921,
        longitude: -77.0241,
        color: e.next()
      }, {
        title: "Kinshasa",
        latitude: -4.3369,
        longitude: 15.3271,
        color: e.next()
      }, {
        title: "Cairo",
        latitude: 30.0571,
        longitude: 31.2272,
        color: e.next()
      }, {
        title: "Pretoria",
        latitude: -25.7463,
        longitude: 28.1876,
        color: e.next()
      }]
    })
  },
  showSwal: function (e) {
    if ("basic" == e)
      Swal.mixin({
        customClass: {
          confirmButton: "btn bg-gradient-info"
        }
      }).fire({
        title: "Sweet!"
      });
    else if ("title-and-text" == e)
      Swal.mixin({
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger"
        }
      }).fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageAlt: "Custom image"
      });
    else if ("success-message" == e)
      Swal.fire("Good job!", "You clicked the button!", "success");
    else if ("warning-message-and-confirmation" == e) {
      let t = Swal.mixin({
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger"
        },
        buttonsStyling: !1
      });
      t.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: !0
      }).then(e => {
        e.value ? t.fire("Deleted!", "Your file has been deleted.", "success") : e.dismiss === Swal.DismissReason.cancel && t.fire("Cancelled", "Your imaginary file is safe :)", "error")
      }
      )
    } else if ("warning-message-and-cancel" == e)
      Swal.mixin({
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger"
        },
        buttonsStyling: !1
      }).fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonText: "Yes, delete it!"
      }).then(e => {
        e.isConfirmed && Swal.fire("Deleted!", "Your file has been deleted.", "success")
      }
      );
    else if ("custom-html" == e)
      Swal.mixin({
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger"
        },
        buttonsStyling: !1
      }).fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html: 'You can use <b>bold text</b>, <a href="//sweetalert2.github.io">links</a> and other HTML tags',
        showCloseButton: !0,
        showCancelButton: !0,
        focusConfirm: !1,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down"
      });
    else if ("rtl-language" == e)
      Swal.mixin({
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger"
        },
        buttonsStyling: !1
      }).fire({
        title: "هل تريد الاستمرار؟",
        icon: "question",
        iconHtml: "؟",
        confirmButtonText: "نعم",
        cancelButtonText: "لا",
        showCancelButton: !0,
        showCloseButton: !0
      });
    else if ("auto-close" == e) {
      let e;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2e3,
        timerProgressBar: !0,
        didOpen: () => {
          Swal.showLoading(),
            e = setInterval(() => {
              var e = Swal.getHtmlContainer();
              e && (e = e.querySelector("b")) && (e.textContent = Swal.getTimerLeft())
            }
              , 100)
        }
        ,
        willClose: () => {
          clearInterval(e)
        }
      }).then(e => {
        e.dismiss,
          Swal.DismissReason.timer
      }
      )
    } else
      "input-field" == e && Swal.mixin({
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger"
        },
        buttonsStyling: !1
      }).fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: !0,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: !0,
        preConfirm: e => fetch("//api.github.com/users/" + e).then(e => {
          if (e.ok)
            return e.json();
          throw new Error(e.statusText)
        }
        ).catch(e => {
          Swal.showValidationMessage("Request failed: " + e)
        }
        ),
        allowOutsideClick: () => !Swal.isLoading()
      }).then(e => {
        e.isConfirmed && Swal.fire({
          title: e.value.login + "'s avatar",
          imageUrl: e.value.avatar_url
        })
      }
      )
  }
};
//# sourceMappingURL=_site_dashboard_pro/assets/js/dashboard-pro.js.map
