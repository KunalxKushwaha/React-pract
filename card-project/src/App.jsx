import React from 'react'
import { Bookmark } from 'lucide-react'
import Card from './components/Card'

const App = () => {

  const jobsData = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://imgs.search.brave.com/s5dvio5a15OwoM9qZnNKyMxJrhDPqifDBlIzWM4R2pM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA0L2FtYXpvbi1s/b2dvLTAucG5n",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s",
    posted: "2 days ago",
    role: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$150/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
    posted: "1 week ago",
    role: "React Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$130/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    company: "Meta",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6Brjvhl0SqBI8NES_WKcD8L9AcUl7Jaazg&s",
    posted: "3 days ago",
    role: "Product Designer",
    type: "Remote",
    level: "Senior Level",
    salary: "$160/hr",
    location: "Remote"
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    posted: "6 days ago",
    role: "UI Engineer",
    type: "Contract",
    level: "Mid Level",
    salary: "$140/hr",
    location: "Delhi, India"
  },
  {
    id: 6,
    company: "Adobe",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Adobe-Logo-1993.jpg",
    posted: "4 days ago",
    role: "UX Researcher",
    type: "Full Time",
    level: "Senior Level",
    salary: "$125/hr",
    location: "Pune, India"
  },
  {
    id: 7,
    company: "Spotify",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdvYiApQJofXpIjkMrJgetTXWz5wKapxKeg&s",
    posted: "1 day ago",
    role: "Frontend Engineer",
    type: "Remote",
    level: "Mid Level",
    salary: "$135/hr",
    location: "Remote"
  },
  {
    id: 8,
    company: "Uber",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzn5IIxfCncimfUHSSV-cuEVCk5u4gyYzVpg&s",
    posted: "2 weeks ago",
    role: "Web Designer",
    type: "Part Time",
    level: "Junior Level",
    salary: "$90/hr",
    location: "Gurgaon, India"
  },
  {
    id: 9,
    company: "Airbnb",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicMDzk5BVKCMaspR4wow1fC8Kt9fDI-ACBg&s",
    posted: "5 days ago",
    role: "Product UI Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$155/hr",
    location: "Remote"
  },
  {
    id: 10,
    company: "Tesla",
    logo: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-Black-Logo.wine.svg",
    posted: "3 days ago",
    role: "UI Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$145/hr",
    location: "Bangalore, India"
  }
];

console.log(jobsData)
 
  return (
    <div className='parent'>
     {jobsData.map((elem,idx) => {
      return <Card key={idx} Company={elem.company} Role = {elem.role} Logo={elem.logo} Post={elem.posted} Salary={elem.salary} Loc={elem.location} Type={elem.type} Level={elem.level}/>
     })}
    </div>
  )
}

export default App
