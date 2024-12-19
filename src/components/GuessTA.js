import AnswerBox from './AnswerBox'
import NavBar from './NavBar.js'
import '../style/GuessTA.css'

import imgMohit from '../images/50bill.png'
import imgDaniel from '../images/sushichef.png'
import imgLandon from '../images/160v1.jpg'
import imgOlivia from '../images/brawlstars.png'
import imgMegan from '../images/inverted.png'

const GuessTA = () => {

    const TAs = [
        {id: 0, answer: "daniel li", img: imgDaniel, caption: 'humble beginnings'},
        {id: 1, answer: 'mohit shah', img: imgMohit, caption: 'POV: richest 160 member'},
        {id: 2, answer: 'landon', img: imgLandon, caption: 'Who made this image? First name only. (Hint: NOT A TA)'},
        {id: 3, answer: 'olivia hu', img: imgOlivia, caption: 'AI cooked with this one'},
        {id: 4, answer: 'megan yang', img: imgMegan, caption: 'srry had no images of this person so this one is kinda contrived'},
        {id: 5, answer: 'kevin han', img: null, caption: "I'd ask them for a funny image, but they have no imagination"}
        // most submissions graded or smth? oooo that'd be funny
    ]
    
    return (
        <div>
            <NavBar isHome={true}/>
            <div className='puzzleContents'>
                <h2> Guess the TA! </h2> 
                <p> Self explanatory. Format answers as '[first] [last]' </p>
                <div className="taColumn">
                    {TAs.map((ta) => (
                        <div key={ta.id} className="taCard">
                            <div className="imageWrapper">
                                {ta.img ? (
                                    <img src={ta.img} alt={ta.caption} className="taImage" />
                                ) : (
                                    <div className="noImage">No image available</div>
                                )}
                            </div>
                            <div className="caption">{ta.caption}</div>
                            <AnswerBox answer={ta.answer} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="finalbox">
                To confirm you solved all puzzles here, put the first letter of all 6 names on this page in order:
                <AnswerBox answer='dmlomk' id={1600}/>
            </div>
        </div>
    )
}

export default GuessTA;