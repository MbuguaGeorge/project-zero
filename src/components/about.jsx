import Nav from './nav';

export default function About(){
    return(
        <div>
            <header>
                <Nav />
            </header>

            <section>
                <div className="about-me">
                    <h1>Hi! I'm <span>John</span></h1>
                    <p>I am a dedicated and experienced developer with a passion for coding and problem-solving. My interest in technology began at a young age, and I have since honed my skills through various projects and programming languages.
                    In addition to my technical skills, I also have excellent communication skills, making it easy for me to collaborate with team members and clients. I am committed to delivering high-quality work and meeting project deadlines.

                    I am excited to continue expanding my knowledge and skills in the field of software development and look forward to taking on new projects.
                    </p>

                    <h2 style={{marginTop: '50px', marginBottom: '20px'}}>About this site</h2>
                    <p>This site aims to help users access data about areas of interest that they would be willing to explore. From Tourists to Adrenaline junkies, there is everything you need to fulfil your expectations. Giving our users up-to-date information about places they want to explore and experience is the core of this platform</p>

                </div>
            </section>
        </div>
    )
}