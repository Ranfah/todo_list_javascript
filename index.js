let inputText = document.querySelector('.inputText')
let btnAdd = document.querySelector('.btnAdd')
let btnEdit = document.querySelector('.btnEdit')

let divContent = document.getElementsByClassName('content')
let listToDo = document.getElementById('list')
let tab1 = []
inputText.addEventListener('click',()=>{
    
})

btnAdd.addEventListener('click',()=>{
    let tab = []
    let toDo = inputText.value
    tab.push(toDo)
    tab1.push(toDo)
    inputText.value = ""
    tab.forEach(element => {
        for(const t in tab){
            if(t < tab.length){
                let liHtml = `
                        <li>
                            ${element}
                            <div class="btns">
                                <button class="edit" value=""><i class="fa-solid fa-pen-to-square"  style="color: #3d3540;"></i></button>
                                <button class="delete" value=""><i class="fa-solid fa-trash" style="color: #3d3540;"></i></button>
                            </div>
                        </li>
    `
    let preElement = liHtml += listToDo.innerHTML
    listToDo.innerHTML = preElement
            }
        }   
    });
    modifierElement(tab1.reverse())
    deleteElement()
})

function deleteElement(){
    let btnDeletes = document.getElementsByClassName('delete')
    for(const key in btnDeletes){
        if(key < btnDeletes.length){
            btnDeletes[key].addEventListener('click', function(){
                this.closest('li').remove()
            })
        }
    }
}
function modifierElement(id){
    let btnEdits = document.getElementsByClassName('edit')
    for(const key in btnEdits){
        if(key < btnEdits.length){
            btnEdits[key].addEventListener('click', function(){
                btnAdd.style.display = "none"
                btnEdit.style.display = "inline"
                for(t in id){
                    if( key == t){
                        inputText.value = id[t]
                    }
                }
                btnEdit.addEventListener('click', function(){
                    btnEdits[key].closest('li').childNodes[0].nodeValue = inputText.value
                    id[key] = inputText.value
                    btnAdd.style.display = "inline"
                    btnEdit.style.display = "none"
                })
                
            })
        }
    }
}
