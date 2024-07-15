export const createElement = (tag, content, attributes = {}) => {
    const element = document.createElement(tag);
    element.innerHTML = content;
  
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
  
    return element;
  };
  
  export const getElement = (id) => {
    return document.getElementById(id);
  };