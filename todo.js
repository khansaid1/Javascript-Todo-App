const addform = document.querySelector('.add');
const list = document.querySelector('.todos')
const search = document.querySelector('.search input');
const generateTemplate = todo =>{


    const html = `
    <li class="list-group-items d-flex justify-content-between align-items-center  my-2 p-4">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i> 
        </li>
    `
    list.innerHTML += html;

};

addform.addEventListener('submit', e =>{

    e.preventDefault();
    const todo = addform.add.value.trim();
    // console.log(todo);
    if(todo.length){
        generateTemplate(todo);
        addform.reset();
    }
   
});

// delete todos

list.addEventListener('click' , e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
  
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLocaleLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));
        
    Array.from(list.children)
    .filter((todo) => todo.textContent.toLocaleLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
    };    
    
    // console.log(todo.textContent);
        // return true;
// keyup event

search.addEventListener('keyup', () =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
