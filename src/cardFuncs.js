import { getTopArtists } from "./data"
import { updateScores } from "./scores"

let top20Arr = getTopArtists(20)
let top40Arr = getTopArtists(40)
let clickedArr = []

export function clearCards() {
    let cardDiv = document.getElementById('card-box')
    /* Clearing Data */
    if (cardDiv.hasChildNodes) {
        while (cardDiv.firstChild) {
            cardDiv.removeChild(cardDiv.lastChild)
        }
    }
}

export function buildCards(num, arr) {
    let cardDiv = document.getElementById('card-box')
    
    if (num == 20) {
        cardDiv.style.gridTemplateRows = 'repeat(4, auto)'
        cardDiv.style.gridTemplateColumns = 'repeat(5, auto)'
    } else if (num == 40) {
        cardDiv.style.gridTemplateRows = 'repeat(5, auto)'
        cardDiv.style.gridTemplateColumns = 'repeat(8, auto)'
    }

    for (let i = 0; i < num; i++) {
        let makeCard = document.createElement('div')
        makeCard.className = 'card'
        let makeName = document.createElement('p')
        makeName.innerHTML = arr[i]
        makeCard.appendChild(makeName)

        makeCard.onclick = () => {
            let clickedName = makeCard.innerText
            let testName = clickedArr.indexOf(clickedName)
            if (testName > -1) {
                clickedArr = []
            } else {
                clickedArr.push(makeCard.innerText)
            }
            let shuffled = shuffleArray(arr)
            clearCards()
            buildCards(shuffled.length, shuffled)
            updateScores(clickedArr.length, shuffled.length)
        }

        cardDiv.appendChild(makeCard)
        }
}   

export function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

export async function shuffleAndBuild(num) {
    let currentArr;
    if (num == 20) {
        currentArr = top20Arr
    } else if (num == 40) {
        currentArr = top40Arr
    }
    
    clearCards()
    let shuffled = await shuffleArray(currentArr)
    buildCards(num, shuffled)
}