const btnInput = document.getElementsByClassName('UserInputBtn')[0]
const txtContetInput = document.getElementsByClassName('UserInputText')[0]
const WriteOnScreen = document.querySelector('.WriteOnScreen')

function splitTheWords(){
    const txtWords = txtContetInput.value
    const spitTextContent = txtWords.split(' ')

    console.log(spitTextContent)
    let currentArrayItem = 0
    spitTextContent.forEach((value, index) => {
        setTimeout(function(){
            WriteOnScreen.innerHTML = spitTextContent[index, value]
            currentArrayItem += 1
        },900)

    });

}



btnInput.addEventListener('click',function(){
    splitTheWords()
})
