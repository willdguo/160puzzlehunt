import AnswerBox from './AnswerBox'
import NavBar from './NavBar.js'
import '../style/ChessPage.css'

import imgR1xa5 from '../images/R1xa5.png'
import imgb1 from '../images/b1.png'
import imgd6 from '../images/d6.png'
import imgstalemate from '../images/2xhalf.png'
import imgexN from '../images/exN.png'
import imgnh4 from '../images/nh4.png'
import imge1 from '../images/e1.png'

import imgCircle from '../images/circlechords.png'
import imgGrid from '../images/squaregrid.png'
import imgSubdivision from '../images/subdivision.png'
import imgMartingale from '../images/martingale.png'
import imgclaw4 from '../images/claw4.png'
import imgcoin from '../images/coins.png'


const ChessPage = () => {

    const clueimgs = [
        {id: 0, image: imgSubdivision},
        {id: 1, image: imgGrid},
        {id: 2, image: imgclaw4},
        {id: 3, image: imgcoin},
        {id: 4, image: imgCircle},
        {id: 5, image: imgMartingale},
    ]

    const chessimgs = [
        {id: 0, image: imgR1xa5},
        {id: 1, image: imgnh4},
        {id: 2, image: imgd6},
        {id: 3, image: imgb1},
        {id: 4, image: imgexN},
        {id: 5, image: imge1},
        {id: 6, image: imgstalemate},
    ]

    
    return (
        <div>
            <NavBar isHome={true}/>
            <div className='puzzleContents'>
                <h2> Chess Puzzles </h2> 
                lowkey tweaking as i'm mkaking this

                <div className='clues'>
                    {clueimgs.map((clue, index) => (
                        <div key={clue.id} className="clueCard">
                            <div className="clueIndex">{index + 1}</div>
                            <img src={clue.image} alt={`Clue ${index}`} className="clueImage" />
                        </div>
                    ))}
                </div>

                Match the chess boards below with their corresponding images. One of the chessboards is a red herring and won't map to anything!

                <div className='chessmoves'>
                    {chessimgs.map((chess, index) => (
                        <div key={chess.id} className="chessCard">
                            <img src={chess.image} alt={`Chess Move ${index}`} className="chessImage" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="finalbox">
                Your answer is a mapping of the (relevant) chessboards, from first to last, to clue images. Input your answer as a permutation of [123456]:
                <AnswerBox answer="531264" id={1601}/>
            </div>
        </div>
    )
}

export default ChessPage;