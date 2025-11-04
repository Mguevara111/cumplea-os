let $audio=document.getElementById('music');
let $select=document.getElementById('audio-select');
let $carrousel=document.querySelector('.carrousel');
let $cslides=document.querySelectorAll('.slides')
let $puzzlec=document.querySelector('.puzzle-container');
let $autorretrato=document.querySelector('.flip-f');
let $aplausos=document.getElementById('aplausos');

let $puzzlepieces=document.querySelectorAll('.puzzle')
const activaobserver=(entries)=>{
    //console.log($cslides)
    entries.forEach(ent=>{
        if(ent.isIntersecting){
            $cslides.forEach(slide=>slide.classList.add('slides-animation'))
        }else{
            $cslides.forEach(slide=>{
                if(slide.classList.contains('slides-animation')){
                    slide.classList.remove('slides-animation')
                }
            })
        }
    })
    
}

const observerpuzzle=(entries)=>{
    //console.log($cslides)
    entries.forEach(ent=>{
        if(ent.isIntersecting){
            for(let f=0;f<$puzzlepieces.length-1;f++){
                $puzzlepieces[f].classList.add(`p${f+1}a`)
            }
        }
        else{
            for(let f=0;f<$puzzlepieces.length-1;f++){
                $puzzlepieces[f].classList.remove(`p${f+1}a`)
            }
        }
    })
    
}

let ob=new IntersectionObserver(activaobserver,{threshold:1});
let obpuzzle=new IntersectionObserver(observerpuzzle,{threshold:1});
ob.observe($carrousel)
obpuzzle.observe($puzzlec)


$select.addEventListener('change',(e)=>{
    console.log(e.target.value)
    switch(e.target.value){
        case 's1':
            $audio.setAttribute('src','./songs/Foo Fighters - Everlong.mp3')
        break;
        case 's2':
            $audio.src='./songs/John Mayer - Your Body Is a Wonderland (Lyrics).mp3'
        break;
        case 's3':
            $audio.src='./songs/Love Hurts.mp3'
        break;
        case 's4':
            $audio.src='./songs/Moby - porcelain.mp3'
        break;
        case 's5':
            $audio.src='./songs/Natalie Imbruglia - Wrong Impression.mp3'
        break;
        case 's6':
            $audio.src='./songs/NSYNC - Ill Be Good For You (Official Audio).mp3'
        break;
        case 's7':
            $audio.src='./songs/NSYNC - No Strings Attached (Official Audio).mp3'
        break;
        case 's8':
            $audio.src='./songs/Sting - Shape of My Heart (Official Music Video).mp3'
        break;
        default:
            alert('no hagas trampa, debes elegir una canción')
            
    }
    $audio.classList.add('isvisible');
    $audio.volume=0.1;
    $audio.play();
})


document.addEventListener('click',(e)=>{
     if(e.target.matches('.autor-f') || e.target.matches('.autor')){
        $aplausos.play();
     }
})