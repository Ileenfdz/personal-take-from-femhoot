export function showFacts() {
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
            description: 'Hedy was a self-taught inventor and film actress, who was awarded a patent in 1942 for her "secret communication system", designed with the help of the composer George Antheil. This frequency hopping system was intended as a way to set radio-guided torpedos off course during the war, but the idea eventually inspired Wi-Fi, GPS and Bluetooth technology commonly used today.',
            img:'https://www.globalapptesting.com/hs-fs/hubfs/hedy%20lamarr.jpg?width=750&name=hedy%20lamarr.jpg'
        }

       
        
    ];
     console.log (funFacts);
     const btnShow = document.getElementById('show-button');
    btnShow.addEventListener('click',() => {
            let num=Math.floor(Math.random()*usersArray.length);
            let show=usersArray[num];
            console.log(num);
    });
}
