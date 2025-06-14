let questions = [
                {question:"What is the capital of Japan?",
                choices:["A) Beijing","B) Seoul","C) Tokyo"],
                answer:"C) Tokyo"},

                {question:"Which planet is known as the Red Planet?",
                choices:["A) Mars","B) Venus","C) Jupiter"],
                answer:"A) Mars"},

                {question:"How many continents are there on Earth?",
                choices:["A) 5","B) 6","C) 7"],
                answer:"C) 7"},

                {question:"What is the largest animal in the world?",
                choices:["A) African Elephant","B) Blue Whale","C) Giraffe"],
                answer:"B) Blue Whale"},

                {question:"Which language is spoken in Brazil?",
                choices:["A) Spanish","B) French","C) Portuguese"],
                answer:"C) Portuguese"},
]
let score = 0;
let currentIndex = -1;
let selectedChoice = null;
const submit = document.getElementById("submit")

function showQuestion(){
    if (currentIndex < questions.length) {
        const currentQuestion = questions[currentIndex]

        const question = document.createElement("p")
        question.textContent = currentQuestion.question

        let questionContainer = document.getElementById("questionContainer")

        questionContainer.innerHTML =""
        questionContainer.appendChild(question)
    }
}

function showChoices(){
    if(currentIndex < questions.length){
        const currentQuestion = questions[currentIndex]

        const choice1 = document.createElement("button")
        const choice2 = document.createElement("button")
        const choice3 = document.createElement("button")

        choice1.textContent = currentQuestion.choices[0]
        choice2.textContent = currentQuestion.choices[1]
        choice3.textContent = currentQuestion.choices[2]

        choice1.onclick = () => {
            selectedChoice = choice1.textContent
            choice1.classList.add("selected")
            choice2.classList.remove("selected")
            choice3.classList.remove("selected")
        }
        choice2.onclick = () => {
            selectedChoice = choice2.textContent
            choice2.classList.add("selected")
            choice1.classList.remove("selected")
            choice3.classList.remove("selected")
        }
        choice3.onclick = () => {
            selectedChoice = choice3.textContent
            choice3.classList.add("selected")
            choice1.classList.remove("selected")
            choice2.classList.remove("selected")
        }
        
        let choicesContainer = document.getElementById("choicesContainer")

        choicesContainer.innerHTML = ""
        choicesContainer.appendChild(choice1)
        choicesContainer.appendChild(choice2)
        choicesContainer.appendChild(choice3)
    }
}

function checkAnswer(selected){
    const correctAnswer = questions[currentIndex].answer;
    
    if (!selected) {
        alert("You Must Select an Answer")
        return
    } 

    if(selected === correctAnswer){ 
    score++
    }
     
    
    currentIndex++
    
}

function showScore(){
    let choicesContainer = document.getElementById("choicesContainer")
    let questionContainer = document.getElementById("questionContainer")

    questionContainer.innerHTML=""
    choicesContainer.innerHTML=''

    let myH3 = document.createElement("h3");
    let my2ndH3 = document.createElement("h3");
    myH3.textContent = `Your Score is: ${score}/${questions.length}`
    my2ndH3.innerHTML = `1.)${questions[0].question}<br>
    ${questions[0].answer}<br>
    2.)${questions[1].question}<br>
    ${questions[1].answer}<br>
    3.)${questions[2].question}<br>
    ${questions[2].answer}<br>
    4.)${questions[3].question}<br>
    ${questions[3].answer}<br>
    5.)${questions[4].question}<br>
    ${questions[4].answer}`
    questionContainer.appendChild(myH3)
    questionContainer.appendChild(my2ndH3)
    submit.textContent = 'Finish'
    currentIndex = -1
    score = 0

}

submit.onclick = ()=>{
    submit.textContent = "Submit"
    if(currentIndex == -1){
        currentIndex++
        showQuestion()
        showChoices()
        return
    }

    checkAnswer(selectedChoice)

    if (currentIndex< questions.length) {
        showQuestion()
        showChoices()
        selectedChoice = null;
    }else{
        showScore()
    }
    
}