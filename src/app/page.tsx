import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.animatedGradient}>
     
<div className={styles.contactSection}>
  <div className={styles.contactBox}>
    <h3 className={styles.contactHeading}>Contact Me</h3>
  </div>
  <div className={styles.socialIcons}>
    <a href="https://x.com/lubna123x?s=21" target="_blank" rel="noopener noreferrer">
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" width={32} height={32} />
    </a>
    <a href="https://www.linkedin.com/in/lubna-n-b4a9a7255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width={32} height={32} />
    </a>
    <a href="mailto:lubnanoorulhaq@gmail.com" target="_blank" rel="noopener noreferrer">
      <Image src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="Email" width={32} height={32} />
    </a>
    <a href="https://github.com/lubnaNoor0210" target="_blank" rel="noopener noreferrer">
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width={32} height={32} />
    </a>
  </div>
</div>




 <div className={styles.sideSkills}>
  <div className={styles.skillsBox}>
  <h3 className={styles.skillsHeading}>Skills</h3>
  </div>
  <div
    className={styles.skillCircleVertical}
    style={{ ['--percent' as unknown as string]: '90%' } as React.CSSProperties}
    data-label="Python 90%"
  ></div>

  <div
    className={styles.skillCircleVertical}
    style={{ ['--percent' as unknown as string]: '65%' } as React.CSSProperties}
    data-label="Next.js 65%"
  ></div>

  <div
    className={styles.skillCircleVertical}
    style={{ ['--percent' as unknown as string]: '85%' } as React.CSSProperties}
    data-label="Streamlit 85%"
  ></div>

  <div
    className={styles.skillCircleVertical}
    style={{ ['--percent' as unknown as string]: '75%' } as React.CSSProperties}
    data-label="CSS 75%"
  ></div>
</div> 


      <div className={styles.headerBox}>
        <h1 className={styles.headerText}>Hey, welcome to my portfolio!</h1>
      </div>

    <div className={styles.aboutBox}>
        <p>
          I&apos;m a passionate web developer with strong expertise in Python and Object-Oriented Programming (OOP).
          I enjoy building modern, user-focused applications and am constantly expanding my skill set.
          Currently, I&apos;m diving deep into the world of Agentic AI to explore the future of intelligent, autonomous systems.
          I believe in learning by doing, and every project I take on is an opportunity to grow and create something impactful.
        </p>
      </div>
    <div className={styles.projectsSection}>
  <h2 className={styles.projectSectionTitle}>My Projects</h2>
  <div className={styles.projectGrid}>

    {/* Project 1 */}
<div className={styles.projectCard}>
  <h3 className={styles.projectTitle}>Horoscope Agent</h3>
  <p className={styles.projectDesc}>
    An AI-powered horoscope app with daily predictions, tarot readings, and compatibility using Gemini + Streamlit + <strong>Python.</strong>
  </p>
  <div className={styles.linkContainer}>
    <a
      href="https://horoscope-agent.streamlit.app/"
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      🔗 View Live App
    </a>
    <a
      href="https://github.com/lubnaNoor0210/Horoscope"
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      💻 View GitHub Code
    </a>
  </div>
</div>

     {/* 2 */}
    <div className={styles.projectCard}>
  <h3 className={styles.projectTitle}>Ai Powered Chatbot</h3>
  <p className={styles.projectDesc}>
    An AI-powered crypto analysis chatbot built with Python (OOP) and Chainlit, capable of interpreting market trends, candlestick patterns and much more.
  </p>
  <div className={styles.linkContainer}>
    <a
      href="https://agentic-ai-production-d4d0.up.railway.app/"
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      🔗 View Live App
    </a>
    <a
      href="https://github.com/lubnaNoor0210/Agentic-A"
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      💻 View GitHub Code
    </a>
  </div>
</div>
      
      {/* 3 */}
<div className={styles.projectCard}>
  <h3 className={styles.projectTitle}>Quran Guide App</h3>
  <p className={styles.projectDesc}>
    A comprehensive Quran Guide app built with Python (OOP) and Streamlit, featuring login/signup, payment integration, and personalized Islamic tools. 
  </p>
  <div className={styles.linkContainer}>
    <a
      href="https://demo-quran-guide.streamlit.app/"
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      🔗 View Live App
    </a>
    <a
      href="https://github.com/lubnaNoor0210/Marketplace-Builder-oops-"
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      💻 View GitHub Code
    </a>
  </div>
</div>
      {/* 4 */}
<div className={styles.projectCard}>
  <h3 className={styles.projectTitle}>Mood Tracker</h3>
  <p className={styles.projectDesc}>
  A basic mood tracker app built with Python and Streamlit to log and reflect on daily emotions.
</p>
  <div className={styles.linkContainer}>
    <a
      href="https://coding-nights-jjrausjbi9swe7v9hlpcvq.streamlit.app/ "
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      🔗 View Live App
    </a>
    <a
      href="https://github.com/lubnaNoor0210/Coding-Nights/tree/main/mood-tracker"
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      💻 View GitHub Code
    </a>
  </div>
</div>
        {/* 5 */}
<div className={styles.projectCard}>
  <h3 className={styles.projectTitle}>Time Zone</h3>
  <p className={styles.projectDesc}>
    A simple timezone converter app built with Python and Streamlit to easily compare time across multiple regions.
  </p>
  <div className={styles.linkContainer}>
    <a
      href="https://coding-nights-kqcntfbvryktcgfxjkfkpx.streamlit.app/"
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      🔗 View Live App
    </a>
    <a
      href="https://github.com/lubnaNoor0210/Coding-Nights/tree/main/time-zone"
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      💻 View GitHub Code
    </a>
  </div>
</div>

<div className={styles.projectCard}>
  <h3 className={styles.projectTitle}>Secure Data Encryption</h3>
  <p className={styles.projectDesc}>
  A secure data encryption system developed using Python, enabling safe storage and transmission of sensitive information with custom encryption algorithms.
</p>
  <div className={styles.linkContainer}>
    <a
      href="https://secure-data-encryption-system-dbpozxow2hauxgw5jrew9l.streamlit.app/ "
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      🔗 View Live App
    </a>
    <a
      href="https://github.com/lubnaNoor0210/Secure-Data-Encryption-System"
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      💻 View GitHub Code
    </a>
  </div>
</div>

<div className={styles.projectCard}>
  <h3 className={styles.projectTitle}>Unit Convertor</h3>
  <p className={styles.projectDesc}>
  A lightweight unit converter built using Python and Streamlit for quick and accurate measurement conversions.
</p>
  <div className={styles.linkContainer}>
    <a
      href="https://unit-converter-shcjadjeash3ni9bphajak.streamlit.app/ "
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      🔗 View Live App
    </a>
    <a
      href="https://github.com/lubnaNoor0210/Unit-Converter"
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      💻 View GitHub Code
    </a>
  </div>
</div>

<div className={styles.projectCard}>
  <h3 className={styles.projectTitle}>Password Strength Checker</h3>
  <p className={styles.projectDesc}>
  A password strength checker built with Python and Streamlit that analyzes and rates passwords based on length, complexity, and security best practices.
</p>
  <div className={styles.linkContainer}>
    <a
      href="https://password-strength-checker-wvfebnuvujzdh3qz4ajdjj.streamlit.app/ "
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      🔗 View Live App
    </a>
    <a
      href="https://github.com/lubnaNoor0210/Password-Strength-Checker"
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      💻 View GitHub Code
    </a>
  </div>
</div>


<div className={styles.projectCard}>
  <h3 className={styles.projectTitle}>Mini Workings</h3>
  <p className={styles.projectDesc}>
  A collection of my mini Streamlit apps built during my learning journey, showcasing hands-on experiments with Python and interactive UIs — available on GitHub.
</p>
  <div className={styles.linkContainer}>
    <a
      href="https://github.com/lubnaNoor0210/Streamlit_Projects"
      className={styles.projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      💻 View GitHub Code
    </a>
  </div>
</div>



  </div>
</div>
    </div>
  );
}
