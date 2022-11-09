const fact = document.querySelector(".randomFact")
const facts = [
    '07/23/2012 flew in a hot air balloon.', 
    'Height 6.03 feet (184 centimeters).', 
    'From 2nd to 7th grade I didn&acute;t go to school.',
    'Was in the Kadetrinn Strait.',
    'In 2019, was the chairman of the student Council of the faculty.',
    'In 2020, was a participant in the „Mister University“ competition.',
    'Didn&acute;t pass for a driver&acute;s license the first time.',
    'At the age of 13, saw <span class="redacted">something</span> at a Polish gas station that is not worth seeing at this age.'
]

function getRandomFact() {
    var rand = Math.floor(Math.random() * facts.length);
    fact.innerHTML = `Random fact: ${facts[rand]}`;
}

getRandomFact()