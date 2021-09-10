const btnInput = document.getElementsByClassName('UserInputBtn')[0]
const txtContetInput = document.getElementsByClassName('UserInputText')[0]
const WriteOnScreen = document.querySelector('.WriteOnScreen')

function splitTheWords(){
    const txtWords = txtContetInput.value
    const splitTextContent = txtWords.split(' ')

    console.log(splitTextContent)
    let currentArrayItem = 0
    splitTextContent.forEach((value, index) => {
            WriteOnScreen.innerHTML = splitTextContent[index, value]
        },900)

    };


function linkedList(){
    class listNode {
        constructor(data){
            this.data = data
            this.next = null
        }
    }

    class LinkedList{

        constructor(head = null){
            this.head = head
        }
    }

    const nodeText = 'There are a few different types of linked lists. But the most popular'

    //Array
    const splitNodeText = nodeText.split(' ')
    //Will add a number +1 in each function to they be different
    let idNumber = 0

    splitNodeText.forEach((value, index) =>{

        let varNodeName = `nodeString${idNumber}`
        
        varNodeName = new listNode(1)
        if(idNumber >= 1){
            varNodeName.next = varNodeName
        }
        let newList = new linkedList(varNodeName)
        console.log(list.head.next.data)
        idNumber += 1
    })

    let node1 = new listNode(2)
    let node2 = new listNode('as')

    let node3 = new listNode(10)
    node1.next = node2
    //node1 will next to node2    

    let list = new LinkedList(node1)
    console.log(list.head.next.data)

}


btnInput.addEventListener('click',function(){
    splitTheWords()
    linkedList()
})
