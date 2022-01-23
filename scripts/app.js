import { getName } from './modules/getName.js'
 
const loginBtn = document.getElementById('loginBtn');

if(loginBtn){
    loginBtn.addEventListener('click', getName);
}

function app() {
    console.log('connected to app');
}

app();

const funFacts = [
            {
                title: ' Grace Hopper: The Esteemed Computer Scientist',
                description: 'In 1947, she recorded the worlds first ever real computer bug, and it is also said that she coined the phrase: “it is often easier to ask for forgiveness than to ask for permission.”',
                img: 'https://www.globalapptesting.com/hs-fs/hubfs/grace%20hopper-1.jpg?width=750&name=grace%20hopper-1.jpg'
        
            },
            {
                title: 'Mary Wilkes: The First Home Computer User',
                description: 'Her use of the LINC at home in 1965 made her the first ever home computer user, and her work has been recognised at The National Museum of Computing, Bletchley Park. ',
                img: 'https://www.globalapptesting.com/hs-fs/hubfs/mary%20wilkes.jpg?width=750&name=mary%20wilkes.jpg'
        
            },
            {
                title:'Hedy Lamarr: The Inventor of WiFi',
                description: 'Hedy was a self-taught inventor and film actress, who was awarded a patent in 1942 for her "secret communication system".',
                img:'https://www.globalapptesting.com/hs-fs/hubfs/hedy%20lamarr.jpg?width=750&name=hedy%20lamarr.jpg'
            }
    
        ];

function showFacts() {
        
         
        let sectionFact = document.getElementById('section-fact');
        console.log(sectionFact);
        const btnShow = document.getElementById('show-button');
        let show;
        btnShow.addEventListener('click',() => {
            let num=Math.floor(Math.random()*funFacts.length);
            show=funFacts[num];
            console.log(show);
             sectionFact.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${show['img']}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${show.title}Card title</h5>
                          <p class="card-text">${show.description}</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
         `; 
        });       
    }
    
showFacts();
