let bestScore = 0

export function updateScores(num, targetNum) {
    let currentScoreBox = document.getElementById('currentNum')
    let bestScoreBox = document.getElementById('bestNum')

    let currentScore = num;

    if (num > bestScore) {
        bestScore = num
    }
    currentScoreBox.innerHTML = currentScore
    bestScoreBox.innerHTML = bestScore

    if (currentScore == targetNum) {
        alert('You Win! Congrats!')
    }
}