


const parentEl = document.querySelector('#categories')

const childsEl = [...parentEl.children]


console.log(`Number of categories: ${childsEl.length}`);

childsEl.forEach((el) => {
    const firstChild = el.firstElementChild.textContent;
    
    console.log(`Category: ${firstChild}`);

    const lastChild = [...el.lastElementChild.children].length

    console.log(`Elements: ${lastChild}`);
});
















