const btnInput = document.getElementsByClassName('UserInputBtn')[0]
const txtContetInput = document.getElementsByClassName('UserInputText')[0]
const WriteOnScreen = document.querySelector('.WriteOnScreen')

function splitTheWords(){
    const txtWords = txtContetInput.value
    const spitTextContent = txtWords.split(' ')

    console.log(spitTextContent)
    let currentArrayItem = 0
    spitTextContent.forEach((value, index) => {
            WriteOnScreen.innerHTML = spitTextContent[index, value]
        },900)

    };

function FilaTest(){
    var fila = []
    for(i = 0; i < 10; i++){
        fila.push(i)
        console.log(fila)
    }
    for(i = 0; i < 10; i++){
        fila.shift()
        console.log(fila)
    }

}

function linkeList(){
    class ListNode {
        constructor(data){
            this.data = data
            this.next = null
        }
    }

    class LinkedList {
        constructor(head = null){
            this.head = head;
        }
    }

    let node1 = new ListNode(2)
    let node2 = new ListNode(5)
    node1.next = node2

    let list = new LinkedList(node1)
    console.log(list.head.next.data)
}


btnInput.addEventListener('click',function(){
    splitTheWords()
    //FilaTest()
    linkeList()
})
