const btnInput = document.querySelector('.UserInputBtn')
const txtContetInput = document.querySelector('.UserInputText')
const displayMessages = document.querySelector('.WriteOnScreen')
const Seconds = document.querySelector('.UserInputSecs')

var btnIsPressed = false;

 function splitTheWords(){
    btnIsPressed = true

    const txtWords = txtContetInput.value
    const splitTextContent = txtWords.split(' ')
    const arrayMaxCount = splitTextContent.length

        const showNextWord = splitTextContent.forEach((value, index, array) => {
            const showNextWord = setInterval(function(){
                displayMessages.innerHTML = splitTextContent[index]
                clearInterval(showNextWord)

                //Will block your interaction with the input at the array end
                if(index === array.length -1){
                    displayMessages.innerHTML = '<p>Your read end </P>'
                    btnIsPressed = false
                }
            }, Seconds.value * (index + 1))


    });
}


function checkUserInputs(){
    if(!btnIsPressed){
        splitTheWords()
    } else{
        return console.log('You currently reading a text..')
    }
}

btnInput.addEventListener('click',function(){
checkUserInputs()
console.log(Seconds.value)
})
