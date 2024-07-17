
function startAgeCalculation() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (!day || !month || !year) {
        document.getElementById('result').innerText = "Please enter a valid date.";
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const birthDayName = dayNames[birthDate.getDay()];

    function updateAge() {
        const now = new Date();
        let ageInMilliseconds = now - birthDate;
        let ageInSeconds = ageInMilliseconds / 1000;
        let ageInMinutes = ageInSeconds / 60;
        let ageInHours = ageInMinutes / 60;
        let ageInDays = ageInHours / 24;
        let ageInYears = ageInDays / 365.25;

        document.getElementById('result').innerText = `You were born on ${birthDayName}. You are  ${Math.floor(ageInYears)} years,your completed ${Math.floor(ageInDays % 365.25)} days, ${Math.floor(ageInHours % 24)} hours, ${Math.floor(ageInMinutes % 60)} minutes, and ${Math.floor(ageInSeconds % 60)} seconds old.`;
    }

    updateAge();
    setInterval(updateAge, 1000);
}
