let tooltipTriggerList = [].slice.call(document.querySelectorAll(`[data-bs-toggle="tooltip"]`))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

let progressList = [].slice.call(document.querySelectorAll(`[aria-valuemax="100"]`))
progressList.forEach(progress => {
    if (progress.getAttribute('aria-valuenow') !== '100') {
        progress.classList.add("placeholder-wave");
    }
});
