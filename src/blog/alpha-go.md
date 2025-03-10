---
url: /blog/alpha-go.html
title: Winning Go - a Computer Scientist’s Strategy
preview: |
  A review of a massively popular YouTube documentary on the most significant (and my favorite) project that has come out of DeepMind: AlphaGo
author: Emilio Cardillo-Schrader
date: 2025-03-09
tags:
  - Technology
---

As the title of this post suggests, I am going to be reviewing a massively popular YouTube documentary on the most significant (and my favorite) project that has come out of DeepMind: **AlphaGo**. (You do not need to watch before reading, but I highly recommend watching whenever you can, it is awesome\!)

Google’s Artificial Intelligence Lab, DeepMind, has emerged as a frontrunner in AI and ML research over the last decade or so. The group is behind some of the most influential, thought-provoking, and honestly, just plain-out fun projects that I have ever seen in my short time studying Computer Science. I won’t get too much into their history here, but I would 100% recommend checking out [their Wikipedia page](https://en.wikipedia.org/wiki/AlphaGo). On that note, feel free to click on any of the hyperlinks throughout if there are any references that you are unfamiliar with. Watching the documentary is great, but learning more about AlphaGo will be deeply rewarding to anyone interested in Computer Science, even if you’re a beginner like me.

AlphaGo is an AI model that plays the game [Go](<https://en.wikipedia.org/wiki/Go_(game)>). It is as simple as that. But to understand why this is so amazing—why it should give you a genuine sense of inspiration in your own Computer Science journey—let's go back, say, 3000 years—back to ancient China where the game was born.

Unlike other classic games that computers have conquered, like [chess](https://en.wikipedia.org/wiki/Chess) or checkers, Go was considered near-impossible for a machine to master because of three key reasons: Go is intuitive, Go is creative, but most importantly, Go requires an immense amount of compute. When I say immense here, I mean really immense. We can break it down and dig deeper with simple math. a Go board is 19x19, resulting in 361 squares for placement. On those 361 squares, 3 states are possible: white, black, or empty(null). Therefore, the number of possible board positions in 3^361, or 1.7 x 10^172 (that is massive\!). To understand the sheer size of this, consider how many atoms are in our universe, which is only 10^80, compared to Go’s 10^172.. it's not even close\! This is why the idea of a machine beating a human was out of the question for so long. Go can not simply be won on compute, surprisingly, it is won on what many Go players attribute their success to in critical moments of a match: pure intuition.

Go makes it **very difficult** to construct a robust evaluation function; a function that can consistently and accurately evaluate in-game positions. Additionally, the board being 19x19 has a much larger [branching factor](https://en.wikipedia.org/wiki/Branching_factor) than a game like chess that is only 8x8. This makes it difficult to use traditional search methods such as [alpha–beta pruning](https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning), [tree traversal](https://en.wikipedia.org/wiki/Tree_traversal) and [heuristic](https://en.wikipedia.org/wiki/Heuristic) search on a game of Go.

In chess, it's relatively straightforward to create an evaluation function that assigns a numerical score to a given board position. Factors like material (number and type of pieces, ex, Pawn \= 1, Rook \= 5, Queen \= 10), king safety, and control of the center can be easily quantified. While still complex, a consistent approximation can be achieved since we can easily quantify a position.

Go, however, is much more nuanced. Several qualitative concepts like aji (potential), shape (net, ladder, turn, etc.) and influence are crucial for evaluating a position, but they are far more abstract and almost impossible to represent numerically. This is because a simple count of territory (the space/points you capture) is not a good indication of whether you are winning or not, like in other games.

## So, what do we do?

Now that you understand the basic rules of Go and the challenges that they present, we can dive into AlphaGo’s solution. Let’s explore the surface to get a solid understanding of not just the technical implementation, but the logic and reasoning behind the model.

I mentioned before that what sets AlphaGo apart from other attempts at solving Go was that it was able to carve out its own nuances, almost its own personality as the match progressed. This part about intuition is essential to understand why it took so long for machines to master Go, because only recently have we unlocked this side of computing. A side that can not only learn information and employ algorithms, but one that can be **truly creative** in doing so.

Here is where the emergence of [Convolutional Neural Networks](https://en.wikipedia.org/wiki/Convolutional_neural_network) (CNNs) is key.

Neural Networks are a network of neurons that behave like in a human brain, firing on and off, capable of sending small electric shocks from neuron to neuron to convey a message. But the main difference here is that this is all being done inside of a computer. Yes, really. Millions of signals are relayed from neuron to neuron, or, node to node, as referred to in ML, and given a certain network, a certain connection or combination of nodes, a CNN can deduce a single output for whatever classification you are trying to make. In essence, **a CNN tries to emulate a human brain by taking in a series of inputs, and based on those inputs, can come to a conclusion** about something. This may be difficult to understand at first, so here are a few concrete examples: Facial Recognition, like on iPhone. Autonomous Driving, like Waymo. And Object Detection, like OpenCV and YOLO.

## Move 37: Wait, are we doomed\!?…

At this point, we should be able to combine our elementary knowledge of Go and Machine Learning to take a look at why you even clicked on this post: to see AlphaGo in action.

While reading this section of the post, you’re going to see my fascination and love for AlphaGo take over a little bit (sorry), and that is because what AlphaGo accomplishes during its famous 5-match set with Lee Sedol can really teach us so much about what is to come in computing, while also making us appreciate what rapid progress has been made so far.

AlphaGo's Move 37 in the second game against Lee Sedol was more than just unconventional; it was a clear example of AI's capacity for creative strategic thinking. From the perspective of established Go theory, Move 37 made absolutely no sense. It was a shoulder hit, typically used in later stages of the game to influence territory, but played extremely early. This violated deeply ingrained heuristics, those rules of thumb that human players develop over years of experience to rapidly assess board positions and narrow down possibilities.

Unfortunately, Lee Sedol would realize that this move was no mistake, that instead, it was a 1 in 10,000 move that would change the outcome of the match. Technically speaking, the move's brilliance stems from the interplay between AlphaGo's two core neural networks: the **policy network** and the **value network**. The policy network, trained on a vast dataset of human games and further refined through self-play, was responsible for suggesting potentially strong moves, akin to a human's intuitive sense. While trained on human patterns, the self-play component allowed it to explore variations and strategies never seen in recorded human history (ie, the 1 in 10,000 chance of the Move 37). The value network on the other hand, acted as a long-term evaluator, judging the overall win probability of a given board state. Move 37 likely emerged as a synthesis of these two networks. The policy network, having encountered analogous patterns during its extensive training, proposed this unusual move, and the value network, despite its unconventional nature, assessed its long-term strategic value to be surprisingly high. This is a crucial distinction: AlphaGo wasn't merely replicating human play; it was discovering novel strategies.

Another layer of complexity to this comes from AlphaGo’s use of Monte Carlo Tree Search (MCTS), a probabilistic search algorithm that explores the game tree. The neural networks guided this MCTS, allowing it to efficiently focus on the most promising branches. Move 37 arose as a high-value branch within this search, a testament to the AI's ability to not just interpolate between known strategies but to extrapolate into unexplored strategic territory. Amazing, as this is something previously thought to be exclusive to human intuition.

## Move 78: ..Well, not yet.

It is not often that we attach divinity and the status of being a higher power to mortal actions, much less actions taken in a game. (unless you are a soccer fan, in which case you will remember Maradona’s “hand of God” right away) It may seem odd to some—to call a soccer goal or a Go move something “of God”—but in my honest opinion, there is simply no other way to put something of this magnitude. Lee Sedol’s victory in match 4 in his series with AlphaGo is a highlight reel of human creativity; it is a reason to believe we humans are still at the apex of thought… at least for now.

Lee Sedol's Move 78 in game four, often hailed as the "hand of god" or "divine move," was a masterful. It was placed strategically between AlphaGo's stones, seemingly insignificant at first glance. However, it revealed a crucial limitation in how even the most advanced AI can perceive and evaluate unexpected board situations.

AlphaGo's strength lay in its value network's ability to optimize for the overall win probability, excelling at long-term strategic assessments. Move 78, however, created a highly localized, intensely tactical situation. While Monte Carlo Tree Search (MCTS) is a powerful search algorithm, it can falter in extremely rare and specific board configurations. Sedol's move generated precisely such a configuration, one that AlphaGo's MCTS, even with the guidance of its neural networks, likely hadn't encountered enough during its training. This created a "blind spot," where the search algorithm failed to adequately explore the future consequences of the move. The value network, while incredibly powerful, had limitations in accurately judging the immediate tactical repercussions of Move 78\. It underestimated the severity of the ensuing sequence of moves that Lee Sedol unleashed, a sequence where short-term tactical sacrifices led to a catastrophic long-term disadvantage that AlphaGo didn't fully recognize until it was too late. It is also crucial to note that through its process of self-play training, AlphaGo became increasingly confident in its evaluations. Having likely never encountered a move of Move 78's caliber, it severely underestimated the threat. It demonstrated that even the most sophisticated machine learning models can have blind spots, and that our human insight remains as valuable as ever in identifying them.

## In conclusion

The battle between Lee Sedol and AlphaGo evoked a lot of strong emotions in me during my first watch. As a human being, watching the final moments before Lee Sedol resigned after each of his 4 losses made me upset. Initially, it hurt a part of me knowing that as humans, we are approaching an inflection point in the way we perceive and apply technology. Whether that is through AGI (Artificial General Intelligence) or another means, I am not really sure.

However, the more and more I pondered this situation, the closer I got to the inflection point, I realized that this is not upsetting; it is inspiring. As someone eager to learn more about computer science, programming, and AI/ML, it really intrigued me. AlphaGo solved a three thousand-year-old problem, which I feel raises the question: what other long-held challenges will be solved in this generation? What about in the next 20 years? 10? What about in 2025? We are at the precipice of not just AI models improving, but how we apply them to solve our most critical problems.

Ultimately, my takeaway is this: computing is anything but simple, so why should we treat it as such? Let’s think deeply about what presses and troubles us the most as a society, and let’s leverage computing to come up with solutions that build a better tomorrow.

To close, a quote from Computer Scientist and Mathematician, Edsger W. Dijkstra.

_"Computer science is no more about computers than astronomy is about telescopes."_
