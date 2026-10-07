//PRACTICE ICONS
const gICON_TIMER_START = './assets/img/issues/time_start.png';
const gICON_TIMER_INPROG = './assets/img/issues/time_inprog.png';
const gICON_TIMER_OK = './assets/img/issues/time_ok.png';
const gICON_TIMER_KO = './assets/img/issues/time_ko.png';

resetPracticeOptions = function () {
    $v('#practice_options>#timer>img').attr('src', gICON_TIMER_START);
    $v('#practice_options>#timer>timer_current').attr('00:00');
    $v('#practice_options>#score>score_current').attr('0');
    $v('#practice_options>#score>score_total').attr('0');
}