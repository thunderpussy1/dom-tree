const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

// TODO: your code goes here

// function createTree (data, rootNode) {
//   data.forEach(el => {
//     if (el.folder) {
//       const ul = document.createElement('ul');
//       const span = document.createElement('span');
//       rootNode.appendChild(ul);
//       ul.appendChild(span);
//       span.textContent = el.title;
//       ul.className = "folder_status";
//       if (Array.isArray(el.children)) {
//         return createTree (el.children, ul);
//       } else if (el.children === null) {
//         const p = document.createElement('p');
//         ul.appendChild(p);
//         p.textContent = "empty folder";
//       }
//     } else if (el.folder === undefined) {
//       const li = document.createElement('li');
//       const span = document.createElement('span');
//       rootNode.appendChild(li);
//       li.appendChild(span);
//       li.textContent = el.title;
//     }
//   });
// }

let elemetnStatus = "show";
function createTree (data, rootNode, elemetnStatus) {
  data.forEach(el => {
    if (el.folder) {
      const ul = document.createElement('ul');
      rootNode.appendChild(ul);
      ul.textContent = el.title;
      ul.setAttribute("onclick", leftClickOnFolder(ul));
      ul.className = elemetnStatus;
      if (Array.isArray(el.children)) {
        return createTree (el.children, ul, "hide");
      } else if (el.children === null) {
        const p = document.createElement('p');
        ul.appendChild(p);
        p.textContent = "empty folder";
        p.className = "hide";
      }
    } else if (el.folder === undefined) {
      const li = document.createElement('li');
      rootNode.appendChild(li);
      li.textContent = el.title;
      li.className = elemetnStatus;
    }
  });
}

function leftClickOnFolder (parentElement) {
  for (let elem of parentElement.children) {
    if (elem.getAttribute("class") === "hide") {
      elem.setAttribute("class", "show");
    } else {
      elem.setAttribute("class", "hide");
    }
  }
}

createTree (data, rootNode, elemetnStatus);
 