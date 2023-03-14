import './style.css';

const moviesList=document.querySelector('.movies')

const populateData=(data)=>{
    data.forEach((item)=>{
        let movieCard=document.createElement('div')
        movieCard.className="movieCard"
        movieCard.innerHTML=`
        <img></img>
        <div>
        <p>Avatar 2022</p>
        </div>
        <button type='button'>comments</button>
        `
        moviesList.appendChild(movieCard)
    })
}

