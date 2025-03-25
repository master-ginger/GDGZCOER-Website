import React from 'react';
import './teamcard.css';

// Social Media Icons Components
export function LinkedInIcon({ url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className="fa-brands fa-linkedin"></i>
    </a>
  );
}

export function GitHubIcon({ url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className="fa-brands fa-square-github"></i>
    </a>
  );
}

export function EmailIcon({ email }) {
  return (
    <a href={`mailto:${email}`}>
      <i className="fa-solid fa-square-envelope"></i>
    </a>
  );
}

// Team Member Card Component
function TeamMemberCard({ name, title, linkedinUrl, githubUrl, email, image }) {
  return (
    <div className="team-member-card">
      <img src={image} alt={name} />
      <div className="content">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
      <div className="social-icons">
        <LinkedInIcon url={linkedinUrl} />
        <GitHubIcon url={githubUrl} />
        <EmailIcon email={email} />
      </div>
    </div>
  );
}

// Teams Data
const teams = [
  // Organizer
  {
    name: "Organizers",
    leader: {
      name: "Lavanya Moolya",
      title: "GDG on Campus Lead",
      email: "lavanyamoolya227@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/lavanyamoolya/",

      githubUrl: "https://github.com/lavanyamoolya",
      image: "/Asset/lavanya_moolya.webp"
    },
    members: [
      {
        name: "Shivam Awasare",
        title: "Administration Lead",
        email: "shivammawasare@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/shivamawasare",
        githubUrl: "https://github.com/shivamawasare",
        image: "/Asset/shivam_awasare.webp"
      },
      {
        name: "Yash Gwalavanshi",
        title: "Community Manager",
        email: "yashgwalavanshi@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/yash_gwalvanshi.webp"
      }
    ]
  },
  // WEB DEVELOPMENT
  {
    name: "Web Development",

    leader: {
      name: "Bhavana Pillai",
      title: "Web Dev Lead",
      email: "bhavnapillai.100@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/lavanyamoolya",
      githubUrl: "https://github.com/lavanyamoolya",
      image: "/Asset/bhavana.webp"
    },
    members: [
      {
        name: "Amit kumar Singh",
        title: "Web Dev",
        email: "2004singhamitkumar@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/shivamawasare",
        githubUrl: "https://github.com/shivamawasare",
        image: "/Asset/demo.avif"
      },
      {
        name: "Aditya Sunil Patil",
        title: "Web Dev",
        email: "adityasp2308@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      },
      {
        name: "Prathamesh Kothalkar",
        title: "Web Dev",
        email: "pkothalkar9021@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      }
    ]
  },
  // APP DEVELOPMENT
  {
    name: "App Development",

    leader: {
      name: "Galande Nishant Chandrabhan",
      title: "App Dev Lead",
      email: "galandesonu42@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/lavanyamoolya",
      githubUrl: "https://github.com/lavanyamoolya",
      image: "/Asset/demo.avif"
    },
    members: [
      {
        name: "Bhushan Balasaheb Gandhakte",
        title: "App  Dev",
        email: "bhushangandhakte7478@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/shivamawasare",
        githubUrl: "https://github.com/shivamawasare",
        image: "/Asset/demo.avif"
      },
      {
        name: "Punam Mahadev Khedkar",
        title: "App Dev",
        email: "punamkhedkar2004@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      },
    ]
  },
  // CP-DSA
  {
    name: "CP-DSA",
    leader: {
      name: "Kunal Telengi",
      title: "CP-DSA Lead",
      email: "kunaltelangi786@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/lavanyamoolya",
      githubUrl: "https://github.com/lavanyamoolya",
      image: "/Asset/demo.avif"
    },
    members: [
      {
        name: "Rudra Pratap Singh",
        title: "CP-DSA",
        email: "singhrudra2637@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/shivamawasare",
        githubUrl: "https://github.com/shivamawasare",
        image: "/Asset/demo.avif"
      },
      {
        name: "Rajvardhan Kakasaheb shinde",
        title: "CP-DSA",
        email: "rajshinde1928@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      },
      {
        name: "Ghatage Purva Pramod",
        title: "CP-DSA",
        email: "purvapghatage0709@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      }
    ]
  },
  // DOCUMENTATION
  {
    name: "Documentation",
    leader: {
      name: "Viraj Chikhlae",
      title: " Documentation Lead",
      email: "virajchikhlae@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/lavanyamoolya",
      githubUrl: "https://github.com/lavanyamoolya",
      image: "/Asset/viraj_chikhale.webp"
    },
    members: [
      {
        name: "Naman Sharma",
        title: " Documentation",
        email: "namans2005@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/shivamawasare",
        githubUrl: "https://github.com/shivamawasare",
        image: "/Asset/demo.avif"
      },
      {
        name: "shruti Prashant Siddha",
        title: " Documentation",
        email: "shrutisiddha@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      },
      {
        name: "Sushma Sudhakar Wayal",
        title: " Documentation",
        email: "sushmawayal2004@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      },
      {
        name: "Sanika Jagadale",
        title: " Documentation",
        email: "sanikajagdale2104@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      }
    ]
  },
  // DESIGN
  {
    name: "Design",
    leader: {
      name: "Harshvardhan Singh",
      title: "Design Lead",
      email: "harshvardhansingh@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/lavanyamoolya",
      githubUrl: "https://github.com/lavanyamoolya",
      image: "/Asset/demo.avif"
    },
    members: [
      {
        name: "Rudrapratap Santosh Therokar",
        title: "Design",
        email: "rudraprataptherokar2006@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/shivamawasare",
        githubUrl: "https://github.com/shivamawasare",
        image: "/Asset/demo.avif"
      },
      {
        name: "Soham Mahajan",
        title: "Design",
        email: "mahajansoham954@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      },
      {
        name: "Bhore Smitesh Arvind",
        title: "Design",
        email: "Smiteshbhore23@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      }
    ]
  },
  // SOCIAL MEDIA AND CONTENT CREATION
  {
    name: "Social Media And Content Creation",
    leader: {
      name: "Siya Patil",
      title: "Social Media Lead",
      email: "psiya191@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/lavanyamoolya",
      githubUrl: "https://github.com/lavanyamoolya",
      image: "/Asset/demo.avif"
    },
    members: [
      {
        name: "Urvi Rahul Pawar",
        title: "Social Media",
        email: "urvipawar1412@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/shivamawasare",
        githubUrl: "https://github.com/shivamawasare",
        image: "/Asset/demo.avif"
      },
      {
        name: "Tejas Manish Telkar",
        title: "Social Media",
        email: "tejastelkar9@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      },
      {
        name: "Yogesh Sanjay Dumane",
        title: "Social Media",
        email: "yogeshdumane7@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      },
      {
        name: "Patil Tanishka Chandrakant",
        title: "Social Media",
        email: "tanishkapatil26oct@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      }
    ]
  },
  // PUBLIC RELEATION
  {
    name: "Public Releation",
    leader: {
      name: "Sumedh Kedari",
      title: "Public Releation Lead",
      email: "sumedhkedari.gdg@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/lavanyamoolya",
      githubUrl: "https://github.com/lavanyamoolya",
      image: "/Asset/sumedh_gdg.webp"
    },
    members: [
      {
        name: "Surbhi Mhamane",
        title: "Public Releation",
        email: "surabhistudyjam@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/shivamawasare",
        githubUrl: "https://github.com/shivamawasare",
        image: "/Asset/demo.avif"
      },
      {
        name: "Ujjwal Bhagat",
        title: "Public Releation",
        email: "bhagatujjwal.25@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      }
    ]
  },
  // EVENT MANAGEMENT
  {
    name: "Event Management",
    leader: {
      name: "Yash Khope",
      title: "Event management",
      email: "yashkhope123@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/lavanyamoolya",
      githubUrl: "https://github.com/lavanyamoolya",
      image: "/Asset/yash_khope.webp"
    },
    members: [
      {
        name: "Atharva Manish Shivari",
        title: "Event Management",
        email: "shivariatharva@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/shivamawasare",
        githubUrl: "https://github.com/shivamawasare",
        image: "/Asset/demo.avif"
      },
      {
        name: "Aniket Nitin kumawat",
        title: "Event Management",
        email: "aniketkumawat8@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      },
      {
        name: "Mohan Ganesh Dinkar",
        title: "Event Management",
        email: "mohandinkar75@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      },
      {
        name: "Rohan Patil",
        title: "Event Management",
        email: "rohanjjj1230@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/shivamawasare",
        githubUrl: "https://github.com/shivamawasare",
        image: "/Asset/demo.avif"
      },
      {
        name: "Rhiya Kirankumar Buranpur",
        title: "Event Management",
        email: "rhiyaburnpur@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      },
      {
        name: "Prajyot indrakant Ghadi",
        title: "Event Management",
        email: "prajyotcloud1@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      },
      {
        name: "Prachi Raju Tupe",
        title: "Event Management",
        email: "tupeprachi352@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/shivamawasare",
        githubUrl: "https://github.com/shivamawasare",
        image: "/Asset/demo.avif"
      },
      {
        name: "Tejas Anil Kawale",
        title: "Event Management",
        email: "tejaskawale18@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      },
      {
        name: "Anand Nair",
        title: "Event Management",
        email: "anandnair2218@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/yashgwalavanshi",
        githubUrl: "https://github.com/yashgwalavanshi",
        image: "/Asset/demo.avif"
      }
    ]
  },
  // CLOUD
  {
    name: "Cloud",
    leader: {
      name: "Krishna Nikam",
      title: "Cloud Lead",
      email: "krishnaanikam026@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/lavanyamoolya",
      githubUrl: "https://github.com/lavanyamoolya",
      image: "/Asset/demo.avif"
    },
    members: [
      {
        name: "Nikita Ishwardas Nipane",
        title: "Cloud",
        email: "nikitanipane8@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/shivamawasare",
        githubUrl: "https://github.com/shivamawasare",
        image: "/Asset/demo.avif"
      },
    ]
  },
  // BLOCKCHAIN
  {
    name: "Blockchain",
    leader: {
      name: "Om Kute",
      title: "Blockchain Lead",
      email: "omkute777@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/lavanyamoolya",
      githubUrl: "https://github.com/lavanyamoolya",
      image: "/Asset/om_kute.webp",
    },
    members: [],

  },
  // TECHNICAL
  {
    name: "Technical",
    leader: {
      name: "Avishkar Karche",
      title: "Technical Lead",
      email: "avinashkarche2003@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/lavanyamoolya",
      githubUrl: "https://github.com/lavanyamoolya",
      image: "/Asset/demo.avif"
    },
  }
  
];

// Main App Component
function App() {
  return (
    <div className="App">
      <div className="ShowcaseTeam_ShowcaseTeam__3cxr+">
        <div className="ShowcaseTeam_container__3AdhQ">
          <h1 className="ShowcaseTeam_teamHeader__7cnRi">Meet The Team</h1>
          <p className="team-info-paragraph">
            Every member of the society has always been passionate and hard working towards their goal, 
            creating a positive work environment. Their support and will to help each other out in every 
            way possible is what makes GDG On Campus-ZCOER a "team".
          </p>
        </div>
      </div>

      {teams.map((team, index) => {
        if (!team.members) return null;

        return (
          <div key={index} className="team-section">
            <h2>{team.name}</h2>
            <div className="Lead">
              <TeamMemberCard
                name={team.leader.name}
                title={team.leader.title}
                linkedinUrl={team.leader.linkedinUrl}
                githubUrl={team.leader.githubUrl}
                email={team.leader.email}
                image={team.leader.image}
              />
            </div>
            <div className="Members">
              {team.members.map((member, memberIndex) => (
                <TeamMemberCard
                  key={memberIndex}
                  name={member.name}
                  title={member.title}
                  linkedinUrl={member.linkedinUrl}
                  githubUrl={member.githubUrl}
                  email={member.email}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
