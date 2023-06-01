/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

// (() => {
//     'use strict'
  
//     const storedTheme = localStorage.getItem('theme')
  
//     const getPreferredTheme = () => {
//       if (storedTheme) {
//         return storedTheme
//       }
  
//       return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
//     }
  
//     const setTheme = function (theme) {
//       if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         document.documentElement.setAttribute('data-bs-theme', 'dark');
//         const elements = document.querySelectorAll('.section-lighter-color.bg-light');
//         elements.forEach(element => {
//           element.classList.replace('bg-light', 'section-dark');
//         });
//       } else if (theme === 'dark'){
//         document.documentElement.setAttribute('data-bs-theme', theme);
//         const elements = document.querySelectorAll('.section-lighter-color.bg-light');
//         elements.forEach(element => {
//           element.classList.replace('bg-light', 'section-dark');
//         });
//       } else {
//         document.documentElement.setAttribute('data-bs-theme', theme);
//         const elements = document.querySelectorAll('.section-lighter-color.section-dark');
//         elements.forEach(element => {
//           element.classList.replace('section-dark', 'bg-light');
//         });
//       }
//     };
  
//     setTheme(getPreferredTheme())
  
//     window.addEventListener('DOMContentLoaded', () => {
  
//       document.querySelectorAll('[data-bs-theme-value]')
//         .forEach(toggle => {
//           toggle.addEventListener('click', () => {
//             const theme = toggle.getAttribute('data-bs-theme-value')
//             localStorage.setItem('theme', theme)
//             setTheme(theme)
//           })
//         })
//     })
//   })()

// (() => {
//   'use strict';

//   const storedTheme = localStorage.getItem('theme');

//   const getPreferredTheme = () => {
//     if (storedTheme) {
//       return storedTheme;
//     }

//     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//   };

//   const setTheme = function (theme) {
//     if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       document.documentElement.setAttribute('data-bs-theme', 'dark');
//       const elements = document.querySelectorAll('.section-lighter-color.bg-light');
//       elements.forEach(element => {
//         element.classList.replace('bg-light', 'section-dark');
//       });
//     } else if (theme === 'dark') {
//       document.documentElement.setAttribute('data-bs-theme', theme);
//       const elements = document.querySelectorAll('.section-lighter-color.bg-light');
//       elements.forEach(element => {
//         element.classList.replace('bg-light', 'section-dark');
//       });
//     } else {
//       document.documentElement.setAttribute('data-bs-theme', theme);
//       const elements = document.querySelectorAll('.section-lighter-color.section-dark');
//       elements.forEach(element => {
//         element.classList.replace('section-dark', 'bg-light');
//       });
//     }
//   };

//   const showActiveTheme = (theme, focus = false) => {
//     const themeSwitcher = document.querySelector('#dark-mode-checkbox');

//     if (!themeSwitcher) {
//       return;
//     }

//     const themeSwitcherText = document.querySelector('#bd-theme-text');

//     document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
//       element.classList.remove('active');
//       element.setAttribute('aria-pressed', 'false');
//     });

//     const activeCheckbox = document.querySelector(`[data-bs-theme-value="${theme}"]`);
//     activeCheckbox.classList.add('active');
//     activeCheckbox.setAttribute('aria-pressed', 'true');

//     const themeSwitcherLabel = `${themeSwitcherText.textContent} (${activeCheckbox.dataset.bsThemeValue})`;
//     themeSwitcher.setAttribute('aria-label', themeSwitcherLabel);

//     if (focus) {
//       themeSwitcher.focus();
//     }
//   };

//   const toggleDarkMode = () => {
//     const darkModeCheckbox = document.querySelector('#dark-mode-checkbox');
//     const theme = darkModeCheckbox.checked ? 'dark' : 'light';
//     localStorage.setItem('theme', theme);
//     setTheme(theme);
//     showActiveTheme(theme, true);
//   };

//   setTheme(getPreferredTheme());
//   showActiveTheme(getPreferredTheme());

//   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
//     if (storedTheme !== 'light' && storedTheme !== 'dark') {
//       setTheme(getPreferredTheme());
//     }
//   });

//   window.addEventListener('DOMContentLoaded', () => {
//     const darkModeCheckbox = document.querySelector('#dark-mode-checkbox');
//     darkModeCheckbox.addEventListener('change', toggleDarkMode);
//   });
// })();

(() => {
  'use strict'

  const storedTheme = localStorage.getItem('theme')

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = function (theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      const sectionElements = document.querySelectorAll('.bg-light');
      sectionElements.forEach(element => {
        element.classList.replace('bg-light', 'bg-black');
      });
      const progressElements = document.querySelectorAll('.bg-white.mb-3.p-3');
      progressElements.forEach(element => {
        element.classList.replace('bg-white', 'bg-dark');
      });
    } else if (theme === 'dark') {
      document.documentElement.setAttribute('data-bs-theme', theme);
      const sectionElements = document.querySelectorAll('.bg-light');
      sectionElements.forEach(element => {
        element.classList.replace('bg-light', 'bg-black');
      });
      const progressElements = document.querySelectorAll('.bg-white.mb-3.p-3');
      progressElements.forEach(element => {
        element.classList.replace('bg-white', 'bg-dark');
      });
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
      const sectionElements = document.querySelectorAll('.bg-black');
      sectionElements.forEach(element => {
        element.classList.replace('bg-black', 'bg-light');
      });
      const progressElements = document.querySelectorAll('.bg-dark.mb-3.p-3');
      progressElements.forEach(element => {
        element.classList.replace('bg-dark', 'bg-white');
      });
    }
  };

  setTheme(getPreferredTheme())

  const toggleDarkMode = () => {
    const darkModeCheckbox = document.querySelector('#dark-mode-checkbox');
    const theme = darkModeCheckbox.checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    setTheme(theme);
    showActiveTheme(theme, true);
  };

  window.addEventListener('DOMContentLoaded', () => {
    const darkModeCheckbox = document.querySelector('#dark-mode-checkbox');
    darkModeCheckbox.addEventListener('change', toggleDarkMode);
  });

  window.onload = () => {
    const darkModeCheckbox = document.querySelector('#dark-mode-checkbox');
    const theme = document.documentElement.getAttribute('data-bs-theme')

    if (theme === 'dark'){
      darkModeCheckbox.checked = true;
    }
  }
})();