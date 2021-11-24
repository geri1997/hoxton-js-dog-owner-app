console.log(data);
function play(audio) {
    var audio = document.querySelector(audio);
    audio.play();
  }
// WRITE YOUR CODE BELOW!

const mainDogSectionEl = document.querySelector('.main__dog-section')
function createDogListItem(obj){
    const dogNameli = document.createElement('li')
    dogNameli.setAttribute('class','dogs-list__button')
    dogNameli.textContent= obj.name
    document.querySelector('ul.dogs-list').append(dogNameli)

    dogNameli.addEventListener('click', (e)=>{
        mainDogSectionEl.innerHTML = ''
        //Change card title
        const h2El = document.createElement('h2')
        h2El.textContent = obj.name 
        //Add card image
        const dogImageEl = document.createElement('img')
        dogImageEl.src = obj.image
        //Add card Description div
        const divDescriptionEl = document.createElement('div')
        divDescriptionEl.setAttribute('class','main__dog-section__desc')
        //Elements inside description div
        const bioH3El = document.createElement('h3')
        bioH3El.textContent='Bio'

        const descPEl = document.createElement('p')
        descPEl.textContent = obj.bio
        
        //Naughty section
        const naughtyPEl = document.createElement('p')
        naughtyPEl.innerHTML=`<em>Is naughty?</em> ${obj.isGoodDog?'Yes':'No'}!`
        const naughtyButtonEl = document.createElement('button')
        naughtyButtonEl.textContent=`${obj.isGoodDog?'Good dog!':'Bad dog!'}`

        naughtyButtonEl.addEventListener('click',(e)=>{
            
            if(naughtyButtonEl.textContent === 'Good dog!'){
                naughtyButtonEl.textContent = 'Bad dog!'
                naughtyPEl.innerHTML = `<em>Is naughty?</em> No!`
                play('#audio1')

            }else {
                naughtyButtonEl.textContent = 'Good dog!'
                naughtyPEl.innerHTML =`<em>Is naughty?</em> Yes!`
                play('#audio')

            }
        })

        //Append
        mainDogSectionEl.append(h2El,dogImageEl,divDescriptionEl,naughtyPEl,naughtyButtonEl)
        divDescriptionEl.append(bioH3El,descPEl)
    })
 }

for(let dog of data){
    createDogListItem(dog)
}