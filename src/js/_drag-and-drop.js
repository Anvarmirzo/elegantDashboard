const displace = window.displacejs;
const elements = document.querySelectorAll('.draggable');
const options = {
  // constrain: true,
};
for (const element of elements) {
  const d = displace(element, options);
}
