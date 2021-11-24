console.log(data);
function play(audio) {
    var audio = document.querySelector(audio);
    audio.play();
  }


 function createItemFromUserInput(name,imgUrl,bio){ 
     const dogNameli = document.createElement('li')
  dogNameli.setAttribute('class','dogs-list__button')
  dogNameli.textContent= name
  document.querySelector('ul.dogs-list').append(dogNameli)
    //add item after the +
    document.querySelector('li.dogs-list__button:nth-child(2)').parentNode.insertBefore(dogNameli,document.querySelector('li.dogs-list__button:nth-child(2)'))




  dogNameli.addEventListener('click', (e)=>{
      mainDogSectionEl.innerHTML = ''
      //Change card title
      const h2El = document.createElement('h2')
      h2El.textContent = name 
      //Add card image
      const dogImageEl = document.createElement('img')
      dogImageEl.src = imgUrl
      //Add card Description div
      const divDescriptionEl = document.createElement('div')
      divDescriptionEl.setAttribute('class','main__dog-section__desc')
      //Elements inside description div
      const bioH3El = document.createElement('h3')
      bioH3El.textContent='Bio'

      const descPEl = document.createElement('p')
      descPEl.textContent = bio
      
     

      //Append
      mainDogSectionEl.append(h2El,dogImageEl,divDescriptionEl)
      divDescriptionEl.append(bioH3El,descPEl)
  })}
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


const plusEl = document.querySelector('.dogs-list__button--add')
plusEl.addEventListener('click', (e)=>{
    mainDogSectionEl.innerHTML = ''
    

    const formEl = document.createElement('form')
    formEl.setAttribute('class','form')
    formEl.innerHTML = `
    <label for="name">Dog's name</label>
    <input type="text" id="name" name="name">

    <label for="image">Dog's picture</label>
    <input type="url" id="image" name="image">

    <label for="bio">Dog's bio</label>
    <textarea rows="5" id="bio" name="bio"></textarea>

    <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">`

// const buttonEl = formEl.querySelector('input[type="submit"]')
formEl.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(document.querySelector('#name').value.includes('<')||document.querySelector('#image').value.includes('<')||document.querySelector('#bio').value.includes('<')||document.querySelector('#name').value.includes('`')||document.querySelector('#image').value.includes('`')||document.querySelector('#bio').value.includes('`')){
        alert("Can't have '<' or '`' in inputs")
    }else{
    createItemFromUserInput(document.querySelector('#name').value,document.querySelector('#image').value,document.querySelector('#bio').value)

    formEl.reset()
}
    
})
    
    mainDogSectionEl.append(formEl)
    


})