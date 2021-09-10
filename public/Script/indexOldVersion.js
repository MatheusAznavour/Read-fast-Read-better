

const btnInput = document.querySelector('.UserInputBtn')
const txtContetInput = document.querySelector('.UserInputText')
const WriteOnScreen = document.querySelector('.WriteOnScreen')

function splitTheWords(){
    const txtWords = txtContetInput.value
    const splitTextContent = txtWords.split(' ')
    const arrayMaxCount = splitTextContent.length 

    //console.log(splitTextContent)
    let countLoops = 0

       splitTextContent.forEach((value, index) => {
        setInterval(function(){

            WriteOnScreen.innerHTML = splitTextContent[index]
            
            console.log('INDEX: ',value)

            //array chega ao maximo
            console.log('ARRAY: ',arrayMaxCount)
            /*

            if(index == arrayMaxCount){
                    return console.log('End of array..')
            }
            */
        
        }, 500 * (index + 1))

    });

}



btnInput.addEventListener('click',function(){
    splitTheWords()
})
