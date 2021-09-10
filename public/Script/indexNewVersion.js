//Bugs to resolve: 
//The user double-click on the input and alert other event

const btnInput = document.querySelector('.UserInputBtn')
const txtContetInput = document.querySelector('.UserInputText')
const WriteOnScreen = document.querySelector('.WriteOnScreen')

var bitnIsPressed = false;

function splitTheWords(){
    bitnIsPressed = true
    const txtWords = txtContetInput.value
    const splitTextContent = txtWords.split(' ')
    const arrayMaxCount = splitTextContent.length
    console.log(arrayMaxCount)

        const showNextWord = splitTextContent.forEach((value, index) => {
        
        const showNextWord = setInterval(function(){
            WriteOnScreen.innerHTML = splitTextContent[index]
                return clearInterval(showNextWord, function(){
                console.log('Done')
            })


        }, 500 * (index + 1))
       //clearInterval(showNextWord) 

    });
    console.log('The ends of the function')
}


function checkUserInputs(){
    if(!bitnIsPressed){
        splitTheWords()
    } else{
        return console.log('You currently reading a text..')
    }
}

btnInput.addEventListener('click',function(){
checkUserInputs()

})
