import img1 from '../images/alphabetindex.png'
import AnswerBox from './AnswerBox'
import NavBar from './NavBar'

const AlphabetPage = () => {

    return (
        <div className = "puzzle">
            <NavBar isHome={true}/>
            <h2> Enough Yappin </h2>
            <p> A little tool to help you: </p>
            <div className = "images">
                <img src = {img1} alt="alphabet"/>
            </div>

            <div>
                b + 1 = ? <AnswerBox answer = "c" id = "31"/>
                b - 1 = ? <AnswerBox answer = "a" id = "32" />
                u / c = ? <AnswerBox answer = "g" id = "33" />
                b x g = ? <AnswerBox answer = "n" id = "34" />
                x x 3 / h = ? <AnswerBox answer = "i" id = "35" />
                x x 3 / f = ? <AnswerBox answer = "t" id = "36" />
                + w 3 n + y  = ? <AnswerBox answer = "t" id = "37"/>
                a + e = ? <AnswerBox answer = "h" id = "38" />

                Rearranging your answers from above should give you a synonym of the answer to this puzzle.
                (Notice the tense!)
                <AnswerBox answer = "talking" id = "39"/>
            </div>

        </div>
    )
}

export default AlphabetPage