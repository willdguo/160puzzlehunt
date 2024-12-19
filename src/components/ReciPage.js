import AnswerBox from './AnswerBox'
import NavBar from './NavBar.js'
import '../style/ReciPage.css'

const ReciPage = () => {
    const stories = [
        {id: 1, offset: '+4', answer: 'tw', story: `
            In the land of Arithmetica, Suzanna, Richard, and Ria embarked on a quest to unlock the ancient Crystal of Unity. 
            Each carried a number that represented their unique strengths: [REDACTED] for Suzanna's wisdom, [REDACTED] for Richard's inventiveness, and [REDACTED] for Ria's healing power. 
            The Oracle of Arithmetica had given them a monstrous challenge: they had to destroy the reinforced magic barrier blocking their path to the Crystal of Unity.
            At first, they weren't sure what to do, but Ria smiled and suggested, "Let's simply add our numbers together." Suzanna nodded, and Richard agreed. Together, they added their numbers.
            The moment they completed the sum, the ground trembled, and the Crystal of Unity rose from the earth, glowing brightly. They realized that their true power lay in their unity—together, their individual strengths formed something greater than they could have achieved alone.
            `},
        {id: 2, offset: '0', answer: 'fo', story: `
            One day, as Shaurya and Grace S. Liu (new Grace) strolled through the bustling streets, they heard a booming laugh echo from the marketplace. There stood Rajiv, a mischievous and brilliant trickster, whose fascination with squares was legendary. His pockets jingled with tiny tiles, each shaped like a perfect square.
            Rajiv waved them over with a grin. "Ah, my friends, I see you carry numbers so close to greatness! Yet, without me, they're nothing but whispers in the wind. Let us solve a mystery together!"
            Grace frowned, crossing his arms. "We don't need your tricks, Rajiv."
            But Shaurya, always curious, tilted her head. "What do you mean by greatness?"
            Rajiv pulled them aside and whispered, "The Door of Squares is guarded by numbers, yearning to become something more. Your numbers hold the key — but only if we work together."
            Intrigued, Shaurya and Grace followed Rajiv to the glowing Door of Squares. Its surface shimmered with runes and equations, pulsing faintly as if alive.
            Rajiv rubbed his hands together. "Here's the plan: we take your units digits. Multiply them, and what do we get?"
            "[REDACTED]" Shaurya said promptly.
            Rajiv nodded. "Exactly! Now, we must round that up to the nearest perfect square."
            "[REDACTED]!" Grace exclaimed.
            "Brilliant!" Rajiv said, clapping his hands. "Now, watch and learn."
            Before Shaurya or Grace could protest, Rajiv snatched the product up and transformed it into a glowing square tile with a flick of his wrist. Then, with a dramatic flourish, he added it back to [REDACTED], the shared foundation of their numbers.
            "Behold!" Rajiv cried, stepping back to reveal [REDACTED], a new shining and perfect square.
            The Door of Squares trembled and began to creak open. Behind it lay a treasure trove of golden numbers, glowing with infinite potential.
            Shaurya raised an eyebrow. "You stole the final step."
            Rajiv smirked. "I optimized the process."
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
            Suddenly, Patrick understood. He stood up, brushing the confusion from his mind. It wasn’t about the labyrinth of numbers and paths, the Door of Squares or the Crystal of Unity. The answer was simpler than that—returning to the base, to the numbers that had begun it all.
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
                <p> Each answer is a number that is two digit in its intended base, which can be use to construct the digits of the final answer. </p>
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