
// function customRender(reactElement, container){

//     /*
//   const domElement = document.createElement(reactElement.type);
//   domElement.innerHTML = reactElement.Children;
//   domElement.setAttribute('href', reactElement.props.href);
//   domElement.setAttribute('target', reactElement.props.target);
//   container.appendChild(domElement);
//   */

//   }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     Children: 'Click me to visit Google'
// }

// let root = document.querySelector('#root');

// customRender(reactElement, root)



// function customRender(reactElement, container) {
//   const domElement = document.createElement(reactElement.type);

//   // Insert text/content
//   domElement.innerHTML = reactElement.Children;

//   // Set all props as attributes
//   for (const prop in reactElement.props) {
//     if (prop === 'Children') continue; // though Children is not in props actually
//     domElement.setAttribute(prop, reactElement.props[prop]);
//   }

//   // ✅ Append to container (this was missing)
//   container.appendChild(domElement);
// }

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank',
//   },
//   Children: 'Click me to visit Google',
// };

// let root = document.querySelector('#root');

// customRender(reactElement, root);
