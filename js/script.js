let log = console.log;
let dir = console.dir;

document.addEventListener("DOMContentLoaded", main);

function main() {
    document.addEventListener('click', event => {
        if (!event.target.closest('.modalWindow__button')) return;
        buttonUp_effect.play();
        if (!event.target.closest('.buttton-yes')){
            event.target.closest('#modalWindow').classList.add('hidden');
            return
        }
        const bgcPlayer = document.getElementById('bg_sound');
        bgcPlayer.volume = 0.05;
        bgcPlayer.muted = true;
        bgcPlayer.muted = false;
        bgcPlayer.play();
        bgcPlayer.loop = true;
        log(event.target.closest('#modalWindow'))
        event.target.closest('#modalWindow').classList.add('hidden')
    });

    



    let windowIn = document.getElementById('windowIn');
    windowIn.addEventListener('mouseenter', target => {
        let style = window.getComputedStyle(windowIn, ':hover');
        let delay = parseFloat(style.transitionDelay) * 1000;
        log(delay);
        logWin.run_HoverSound(delay);
    })

    let logWin = {
        run_HoverSound(delay) {
            windowIn.addEventListener("mouseleave", stopTimer)
            let timer = setTimeout(() => win_effect.play(), delay);
            function stopTimer() {
                clearTimeout(timer)
            }
        }
    }


    windowTitles.addEventListener('mouseover', event => {
        if (!event.target.closest('.title')) return;
        title_effect.play();
        if (title_effect.currentTime < 0.03) return
        title_effect.currentTime = 0;
    })

    windowIn.addEventListener('click', event => {
        if (!event.target.closest('input') && !event.target.closest('a')) return;
        click_effect.play();
        click_effect.currentTime = 0;
    });
}


