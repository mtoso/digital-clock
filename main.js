function updateClock(clock, clockDigitsElements) {
    // segments that have to be OFF to rappresent the number
    const numbersToSegments = {
        '0': [4],
        '1': [1, 2, 4, 5, 7],
        '2': [2, 6],
        '3': [2, 5],
        '4': [1, 5, 7],
        '5': [3, 5],
        '6': [3],
        '7': [2, 4, 5, 7],
        '8': [],
        '9': [5]
    };

    for(let i = 0; i < clock.length; i++) {
        const segments = clockDigitsElements[i].children;
        for (let j = 0; j < segments.length; j++) {
            const segmentHasToBeOff = numbersToSegments[clock[i]].indexOf(j+1) > -1;
            if (segmentHasToBeOff) {
                segments[j].children[0].style.fill = '#fff';
            } else {
                segments[j].children[0].style.fill = '#f04';
            }
        }
    }
}

setInterval((clockDigitsElements) => {
    // clock is an array with the 4 digits [h, h, m, m, s, s]
    const clock = [0, 0, 0, 0, 0, 0]; 
    const date = new Date();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0'+ date.getMinutes()).slice(-2);
    const seconds = ('0'+ date.getSeconds()).slice(-2);
    clock[0] = hours.toString()[0];
    clock[1] = hours.toString()[1];
    clock[2] = minutes.toString()[0];
    clock[3] = minutes.toString()[1];
    clock[4] = seconds.toString()[0];
    clock[5] = seconds.toString()[1];
    updateClock(clock, clockDigitsElements);
},1000, document.getElementsByClassName('seven-segment'));