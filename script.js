document.getElementById('calculateButton').addEventListener('click', function () {
    calculateEndTime();
});

function calculateEndTime() {
    const startTime = document.getElementById('startTime').value.trim();
    const amPm = document.getElementById('amPm').value.trim().toUpperCase();
    const amountPaid = document.getElementById('amountPaid').value.trim();

    const resultArea = document.getElementById('resultArea');

    try {
        const dateFormat = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

        const startTimeString = startTime + ' ' + amPm;
        const startTimeObj = new Date('2000-01-01 ' + startTimeString);

        const durationInMilliseconds = amountPaid * 60 * 60 * 1000 / 12;
        const endTimeObj = new Date(startTimeObj.getTime() + durationInMilliseconds);

        resultArea.innerHTML = `
            <p>Starting Time: ${dateFormat.format(startTimeObj)}</p>
            <p>Ending Time: ${dateFormat.format(endTimeObj)}</p>
            <p>Please pay 12 PHP per hour before leaving.</p>
        `;

    } catch (error) {
        resultArea.innerHTML = '<p>Error: Invalid input. Please check your entries.</p>';
    }
}
