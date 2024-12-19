import React, { useState, useEffect } from 'react';
import '../style/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar.js';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import imgChess from '../images/chess.jpg'
import img160v1 from '../images/160v1.jpg'
import imgTowne from '../images/towne.jpg'
import AnswerBox from './AnswerBox.js';

import imgFinal from '../images/winner.png'


export default function HomePage() {
    const [complete, setComplete] = useState(0)

    useEffect(() => {
        // Define the IDs for each page
        const pageIds = ['1600', '1601', '1602', '1603'];

        // Count how many pages have been completed
        const completedPages = pageIds.reduce((count, id) => {
            return count + (sessionStorage.getItem(id) === 'True' ? 1 : 0);
        }, 0);

        // Update the `complete` state
        setComplete(completedPages);
    }, []); // Empty dependency array ensures this runs once on mount

    const final = (
        <div>
            Being a discrete math TA has been amazing. As your final puzzle, combine:
            <ul>
                <li> the initials of the 5th person in Guess the TA </li>
                <li> the move of the unused puzzle in Disambi-guo-ation (excluding promotion)</li>
                <li> the answer to the recitation puzzle, base (# of distinct recitations) + 1 </li>
                <li> the very common suffix, 'ski' </li>
            </ul>
            into 1 cohesive word

            <AnswerBox answer="mycielski" id={1603} winner={true}/>
        </div>
    )

return (
  <div>
    <NavBar />
    <div style={{textAlign: 'center', marginTop: '5px'}}>
        Laptop view strongly recommended! <br />
        Puzzles completed: {complete}
    </div>
    
    <div className='contents'>     
        <Card className="custom-card" as={Link} to="/160v1">
            <Card.Img 
                variant="top" 
                src={img160v1}
                alt="Card 1 Image" 
                className='card-img'
            />
            <Card.Body>
                <Card.Title> Guess the TA </Card.Title>
                <Card.Text> defy expectations </Card.Text>
            </Card.Body>
        </Card>

        <Card className="custom-card" as={Link} to="/chess">
            <Card.Img 
                variant="top" 
                src={imgChess}
                alt="Card 1 Image" 
                className='card-img'
            />
            <Card.Body>
                <Card.Title> Disambi-guo-ation</Card.Title>
                <Card.Text> Ding playing Rf2 be like</Card.Text>
            </Card.Body>
        </Card>

        <Card className="custom-card" as={Link} to="/reci">
            <Card.Img 
                variant="top" 
                src={imgTowne}
                alt="Card 1 Image" 
                className='card-img'
            />
            <Card.Body>
                <Card.Title> Friday 10:15-11:15AM </Card.Title>
                <Card.Text> Towne 307 </Card.Text>
            </Card.Body>
        </Card>
    </div>
    
    <div className='finalCard'>
        {complete >= 3 ? final : null}
    </div>

    <div className='winnerCard'>
        {complete == 4 ? <div>
            GG!
            <img src={imgFinal} alt="gg" />
        </div> 
            : null}
    </div>
    
  </div>
);

}

