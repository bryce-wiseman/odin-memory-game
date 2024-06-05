import { shuffleAndBuild } from "../cardFuncs"


export function Header() {
    return(
        <div id="header">

            <div id="text">
                <div id="title">Top Artists Memory Game</div>
                <div id="subtitle">(according to the last.fm API)
                    <button type="button" id="rulesBtn" onClick={() => {
                        alert("Click each tile only once. If you click the same artist more than once the game resets itself. (so keep an eye on the scores in the top right corner) Have fun!")
                    }}>Rules</button>
                </div>
            </div>

            <div id="modes">
                <button className="modeBtn" id="top20Btn" onClick={() => {
                    shuffleAndBuild(20)
                }}>Top 20</button>
                <button className="modeBtn" id="top40Btn" onClick={() => {
                shuffleAndBuild(40)
                }}>Top 40</button>
            </div>

            <div id="scores">
                <div className="scorebox">
                    <h6 id="currentScore">Current Score: </h6>
                    <h6 id="currentNum">0</h6>
                </div>
                <div className="scorebox">
                    <h6 id="bestScore">Best Score: </h6>
                    <h6 id="bestNum">0</h6>
                </div>
            </div>
        </div>
    )
}