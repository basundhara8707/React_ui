import React from 'react'
import Secion1 from './component/secion1'
import Section2 from './component/section2'

const App = () => {

let players = [
  {
    name: "Virat Kohli",
    experience: "18+ years",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
    bio: "Indian right-handed batter known for his consistency, aggressive batting, and exceptional chasing ability."
  },
  {
    name: "Rohit Sharma",
    experience: "18+ years",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
    bio: "Indian cricketer and powerful opening batter, famous for his timing, six-hitting ability, and leadership."
  },
  {
    name: "MS Dhoni",
    experience: "20+ years",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
    bio: "Former Indian captain and wicketkeeper-batter known for calm leadership, finishing skills, and sharp decision-making."
  },
  {
    name: "Jasprit Bumrah",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
    bio: "Indian fast bowler known for his unique action, accurate yorkers, and ability to perform under pressure."
  },
  {
    name: "Sachin Tendulkar",
    experience: "24+ years",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390",
    bio: "Legendary Indian batter widely celebrated for his technique, consistency, and extraordinary international career."
  },
  {
    name: "Hardik Pandya",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
    bio: "Indian all-rounder known for powerful batting, fast bowling, athletic fielding, and finishing matches."
  }
];


  return (
    <div>
      <Secion1 />
     
         <Section2  />
    

     
    </div>
  )
}

export default App