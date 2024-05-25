let todoList = [
    {
        item: 'Complete project',
        duedate: '14/05/2024',
    },
    {
        item: 'Go to College',
        duedate: '24/05/2024',
    }
];
displayButton();

function todoapp(){
let inputBar = document.querySelector('#textbar');
let dateBar = document.querySelector('#datebox');
//To get the value of input element
let getItem = inputBar.value;
let dateItem = dateBar.value;
todoList.push({item: getItem, duedate: dateItem});
inputBar.value='';
dateBar.value='';

displayButton();
}

function displayButton(){
    let display=document.querySelector('.todo-items');
    let newHtml='';
    for(let i=0;i<todoList.length;i++){
        let item=todoList[i].item;
        let duedate=todoList[i].duedate;
        newHtml+=`
      
        <span class="data">${item}</span>
        <span class="data">${duedate}</span>
        <button class="btn-dlt" onclick="todoList.splice(${i}, 1);
        displayButton();">Delete</button>        
        `;
       
    }
    display.innerHTML=newHtml;
}