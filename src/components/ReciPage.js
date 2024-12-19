import AnswerBox from './AnswerBox'
import NavBar from './NavBar.js'
import '../style/ReciPage.css'

const ReciPage = () => {
    const stories = [
        {id: 1, offset: '-1', answer: 'tw', story: `
            In the land of Arithmetica, where strength was measured in numbers, Suzanna, Richard, Dilini, Thomas, and Jonathan were entrusted with a daunting quest. Each carried a unique power. To unlock the Gate of Unity and claim its treasure, they needed to combine their strengths in a way that maximized their collective potential.
            The five companions stood before the gate, its inscription glowing faintly: "True power lies not in isolation, but in summation." Suzanna was the first to speak. "Let's simply add our numbers together," she proposed. 
            Richard frowned. "But isn't there a clever trick? What if we try multiplying or finding patterns between us?" Dilini shook her head. "The gate demands simplicity. Overthinking will only weaken us." Thomas nodded, sensing the wisdom in her words.
            Jonathan, the calmest of the group, stepped forward. "Let's trust each other and just add." Together, they spoke their numbers aloud, and the sum resonated through the air. 
            The gate shuddered, its locks unbinding as a warm light poured forth. Their unity had unlocked the treasure: not gold, but the realization that their shared strength, when simply embraced, was more powerful than any intricate strategy.
            `},
        {id: 2, offset: 'x2', answer: 'fo', story: `
            Mallika and Yinqi wandered through the sparkling, sun-dappled fields of Numerica, carrying with them a mysterious burden: their combined values. Together, their numbers added up to a sum with a particular peculiar, repeating digit that neither could quite place. They stared at it, both puzzled and intrigued, but the mystery of it only deepened with each passing moment.
            As they mused over their numbers, a gust of wind swirled, and from the distance appeared a figure bathed in light. It was Rajiv, the benevolent genie of the Numerical Realms, known for his ability to solve puzzles with a flick of his magical finger. "Greetings, Mallika and Yinqi!" Rajiv boomed, his voice warm and comforting. "I see you're trying to solve the mystery of your sum. I have the perfect solution!" With a flourish, he added a number to their sum—an addition that changed the nature of their mystery entirely. Now, the sum of their values was a triple repeated digit, like 111, 222, or even 999. Rajiv's addition had transformed their problem into something extraordinary, and the digits seemed to dance before their eyes.
            As they marveled at the new sum, Rajiv smiled and pointed out a curious detail. "Did you notice, dear friends," he said, "that your base is exactly twice what you previously believed it to be?" Mallika and Yinqi exchanged a glance, suddenly realizing that the numbers they had now were not just a random collection of digits but part of a greater harmony. The puzzle was no longer about what the numbers meant, but about how they fit together—each part playing its role in the grand equation of Numerica. Together, they had unlocked a deeper truth about the world, all thanks to a well-timed addition and the playful wisdom of Rajiv the genie.
            `},
        {id: 3, offset: 'N/A', answer: 'si', story: `
            Patrick had been staring at the clues for what felt like hours. "What could it mean by 'recitation' and 'room' numbers? Which one's the value, and which one's the base?" he muttered to himself, his brow furrowed. "All these numbers, all these steps, they must mean something, surely! Maybe it's a hidden equation, or a pattern I haven't noticed..." He pored over the riddle again, tracing the steps of the previous puzzles, trying to connect every possible detail.
            Suddenly, Patrick froze, his head spinning with possibilities. "It has to be here! The numbers, the tiles, the paths—there's some deep, mathematical trick to this! I can't see it, I just can't!"
            It was then that Patrick heard a voice behind him. "You know, sometimes the hardest puzzles are the ones that require you to take a step back."
            Turning, Patrick saw Mohit, a calm and patient solver who had watched Patrick's frantic quest from afar. "Mohit, you don’t understand," Patrick said, running his hands through his hair. "I’ve gone through every possible calculation, every angle—it's all just one tangled mess of numbers and logic!"
            Mohit smiled and stepped forward. "I think you're missing the point. You've been so focused on the complexity, on finding hidden patterns in every detail, that you've forgotten something essential."
            Patrick stared at him, confused. "What do you mean? I’ve been solving these puzzles for days! There’s no simple answer to this last one!"
            Mohit shrugged. "Maybe not in the way you think. What if the answer isn’t about computing the answer from all the numbers at once, but rather just focusing on the simplest ones? Our room numbers — the ones that started everything for us."
            Patrick blinked. "The room numbers? You mean… [REDACTED] and [REDACTED]?"
            "Exactly," Mohit said, nodding. "Those are the numbers you need. No need to get caught up in all the intermediate steps or hidden tricks. Just remember these numbers—the simplest path. Sometimes, the answer is right in front of you, without needing any complex detours."
            Patrick’s eyes widened. "You mean I’ve been overcomplicating everything? It’s not about finding some intricate connection between all the numbers, but just looking at the starting point?"
            "Yes," Mohit said, smiling. "Sometimes the simplest answer is the best one. You’ve been so focused on solving the whole puzzle that you missed the elegance of simplicity."
            Suddenly, Patrick understood. He stood up, brushing the confusion from his mind. It wasn’t about the labyrinth of numbers and paths, the Door of Squares or the Gate of Unity. The answer was simpler than that—returning to the base, to the numbers that had begun it all.
            Patrick’s heart lightened, and with a grin, he walked up to the Door of Squares. He entered their room numbers: Mohit's first, then his own. The door clicked open, and a golden light poured out, revealing the treasure of Numerica: a vast library of knowledge, waiting to be explored.
            As he stepped inside, Patrick turned to Mohit and grinned. "You were right. Sometimes, the simplest path is the right one."
            And from that day on, Patrick never forgot the lesson that had helped him solve his greatest puzzle: that sometimes, to find the answer, you simply need to stop looking for complications and embrace the simplicity of the base.
            `}
    ]

    return (
        <div>
            <NavBar isHome={true}/>
            <div className='puzzleContents'>
                <h2> The Spanning Tree of Wisdom </h2> 
                <h3> </h3>  
                <p> In this puzzle, you will unearth hidden numbers, along with the base with which you should express them. </p>
                <p> Each answer is a value that is two digits in its intended base, which can be use to construct the digits of the final answer. </p>
                <p> Bases for each answer are 2 digits (mod 100). </p>

                <div className="story-container">
                    {stories.map((story) => (
                        <div key={story.id} className="story-card">
                            <div className="story-content">
                                <p>{story.story}</p>
                            </div>
                            <div className="offset-line">
                                <p>Base Offset: {story.offset}</p>
                            </div>
                            <AnswerBox answer={story.answer} />
                        </div>
                    ))}
                </div>
                
                <div className="finalbox">
                    <div>
                        You now have the answer to this page! <br />
                        Well... almost. It seems you're missing the last few letters of each digit. <br />
                        But no matter, I'm sure you'll be able to fill in the gaps to get the 3 digits in the final answer!
                    </div>
                    <AnswerBox answer={'246'} id={1602}/>
                </div>
            </div>
        </div>
    )
}

export default ReciPage;