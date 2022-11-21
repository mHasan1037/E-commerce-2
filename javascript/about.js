const section_counter = document.querySelector('.counter-container');
const counters = document.querySelectorAll('.count');

let CounterObserver = new IntersectionObserver((entries, observer)=>{
    let [entry] = entries

    if(!entry.isIntersecting) return;

    counters.forEach((counter, index)=>{
        counter.innerText = ''
        function UpdateCounter(){
            const targetNumber = +counter.getAttribute('data-target');
            const c = +counter.innerText

            const increPerNumber = targetNumber / 200;

            if(c < targetNumber){
                counter.innerText = `${Math.ceil(c + increPerNumber)}` 
                setTimeout(UpdateCounter, 10)
            }else{
                counters.innerText = targetNumber
            }
        }
        UpdateCounter()
    })
    observer.unobserve(entries.target)
}, {
    threshold: 1
})


CounterObserver.observe(section_counter)
