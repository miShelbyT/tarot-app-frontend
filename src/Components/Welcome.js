import React from 'react'
import SignUpForm from './SignUpForm'

function Welcome() {
  return (
    <>
    <div className="card-container">
      <br></br><br></br><br></br><br></br>
      <h2>Welcome To Third Eye Tarot! We look forward to helping you divine your future. Here is a quick intro to the cards, as per our friends at <a href="https://www.mindbodygreen.com/0-18172/how-to-do-a-basic-tarot-reading-for-yourself-or-a-friend.html">mindbodygreen</a> and <a href="https://everybodymind.com/7-things-youd-want-to-know-about-tarot-reading/">everybodymind</a>:</h2>
        <p>
        The standard tarot deck has 78 cards, and each one has its own imagery and symbolism. The cards are split into two categories: 22 Major Arcana cards and 56 Minor Arcana cards. The Major Arcana tarot cards depict significant events in the life journey while the minor arcana are for the small details and happenings.
        </p>
      <ul>
        <li>
          Wands: These fiery cards represent passion, energy, creativity, and sexuality.
          </li>
        <li>
          Cups: This is the suit of love, and it represents emotions, feelings, and intuition.
          </li>
        <li>
          Swords: The Swords are intellectually driven, representing our thoughts, words, and action.
          </li>
        <li>
          Pentacles: This suit recognizes the material world, offering guidance on our finances, career paths, and material possessions.
        </li>
      </ul>

      <p>Understanding the general meaning of each card is just the beginning. The real power comes in using the cards to tap into your own intuition and wisdom so you can start taking positive steps into a brighter future. Generally, a tarot card reading follows a simple format. First, you need to ask the card deck a question, which should be clear and open-ended. For example, avoid asking questions that begin with "Will I...," as they run the risk of locking you into a passive role in your own future. The idea is to use the card reading to illuminate a path forward, so ask questions that are more broad. Here are a few frameworks to consider if you're new to tarot:
        </p>

        <ul>
            <li>
            "What do I need to know about...?"
            </li>
            <li>
            "How can I understand...?"
            </li>
            <li>
            "Why am I feeling anxious about...?"
            </li>
            <li>
            "Where is the hidden opportunity in...?"
            </li>
            <li>
            "What should I focus on in my relationship with...?"
            </li>
            <li>
            "How can I move past...?"
            </li>
        </ul>








    </div>

      <SignUpForm />
    </>
  )
}

export default Welcome