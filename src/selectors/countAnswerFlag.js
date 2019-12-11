const countAnswerFlag = (currentAnswer, currectCorrectAnswer) => {
    if(currentAnswer.pos === currectCorrectAnswer.pos){
        if(currentAnswer.answer === currectCorrectAnswer.correctAnswer){
            return {flag: "correct", pos: currentAnswer.pos, userAnswer: currentAnswer.answer, correctAnswer: currectCorrectAnswer.correctAnswer};
        } else {
            return {flag: "incorrect", pos: currentAnswer.pos, userAnswer: currentAnswer.answer, correctAnswer: currectCorrectAnswer.correctAnswer};
        }
    } else {
        return {flag: "missed", pos: currectCorrectAnswer.pos};
    }
}

export default countAnswerFlag