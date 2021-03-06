const onLightClick = (id) => {
  let light = document.getElementById(id);
  if (id === 'red') {
    if (!light.style.background || light.style.background === 'black') {
      light.style.background = 'red';
    } else {
      light.style.background = 'black';
    }
  } else if (id === 'yellow') {
    if (!light.style.background || light.style.background === 'black') {
      light.style.background = 'yellow';
    } else {
      light.style.background = 'black';
    }
  } else if (id === 'green') {
    if (!light.style.background || light.style.background === 'black') {
      light.style.background = 'green';
    } else {
      light.style.background = 'black';
    }
  }
};

const toggleLight = (id) => {
  onLightClick(id);
  setTimeout(() => onLightClick(id), 500);
};

const onButtonClick = () => {
  setInterval(() => toggleLight('red'), 1500);
  setTimeout(() => setInterval(() => toggleLight('yellow'), 1500), 500);
  setTimeout(() => setInterval(() => toggleLight('green'), 1500), 1000);
};
