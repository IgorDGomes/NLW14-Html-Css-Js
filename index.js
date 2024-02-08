const questions = [
    {
        question: 'What does HTTP stand for?',
        answers: [
            'Hyper Text Transfer Protocol',
            'Hyperlink Text Transfer Protocol',
            'Hyper Transfer Text Protocol',
        ],
        correct: 0
    },
    {
        question: 'Which protocol is used for secure communication over a computer network?',
        answers: [
            'FTP',
            'SMTP',
            'HTTPS',
        ],
        correct: 2
    },
    {
        question: 'What is the primary purpose of DNS?',
        answers: [
            'To secure websites',
            'To convert domain names to IP addresses',
            'To manage email communication',
        ],
        correct: 1
    },
    {
        question: 'Which of the following is NOT a web browser?',
        answers: [
            'Chrome',
            'Firefox',
            'Java',
        ],
        correct: 2
    },
    {
        question: 'What does HTML stand for?',
        answers: [
            'Hyperlink Text Markup Language',
            'Hyper Text Markup Language',
            'Hyper Transfer Markup Language',
        ],
        correct: 1
    },
    {
        question: 'Which organization is responsible for assigning IP addresses?',
        answers: [
            'W3C',
            'ICANN',
            'IETF',
        ],
        correct: 1
    },
    {
        question: 'Which technology allows multiple computers to share resources and data?',
        answers: [
            'LAN',
            'WAN',
            'MAN',
        ],
        correct: 0
    },
    {
        question: 'What is the function of a firewall?',
        answers: [
            'To filter network traffic',
            'To enhance website performance',
            'To encrypt data transmission',
        ],
        correct: 0
    },
    {
        question: 'Which of the following is an example of a top-level domain?',
        answers: [
            '.com',
            '.net',
            '.html',
        ],
        correct: 0
    },
    {
        question: 'What is the purpose of a cookie in web development?',
        answers: [
            'To store website content',
            'To enhance website security',
            'To track user interactions',
        ],
        correct: 2
    }
]

const quiz = document.getElementById('quiz-template');
const template = document.querySelector('template');

const correctAnswers = new Set()

const totalOfQuestions = questions.length
const showTotal = document.getElementById('right-answers')
const showCorrect = document.getElementById('total-questions')


showTotal.textContent = correctAnswers.size
showCorrect.textContent = totalOfQuestions


for (const item of questions) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.question

    for (let answer of item.answers) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = answer
        dt.querySelector('input').setAttribute('name', 'question-' + questions.indexOf(item))
        dt.querySelector('input').value = item.answers.indexOf(answer)

        dt.querySelector('input').onchange = (event) => {
            const isItCorrect = (event.target.value == item.correct)

            correctAnswers.delete(item)
            if (isItCorrect) {
                correctAnswers.add(item)
            }

            showTotal.textContent = correctAnswers.size
            showCorrect.textContent = totalOfQuestions
        }


        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()



    quiz.appendChild(quizItem);
}