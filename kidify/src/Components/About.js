import { CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import Card from "react-bootstrap/Card";
import Team1 from "../Images/team_1.jpg";

function About() {
    return (
        <div className='aboutpage'>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        marginBottom: "13px",
                        marginTop: "25px",
                        width: "70%",
                        color: "black",
                        fontSize: "25px",
                    }}
                >
                    <div className='about_mission'>
                        <h1 style={{ fontFamily: "cursive" }}>Our mission</h1>
                    </div>

                    <p>is to Create a website with fun educational videos for kids. you to watch fun educational videos for children from all around the web and create playlists with as few clicks as possible. Create and play playlists and relax.</p>
                    <p>Our vision is for the website to be the source of childhood learning on the internet.</p>
                    <p>You can watch all provided videos and create playlists with signing up. But behold: as soon as you log out, your portal will close. If you want kidify to maintain your portal, sign up!</p>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {
                    <div
                        style={{
                            marginBottom: "20px",
                            marginTop: "18px",
                            width: "70%",
                            color: "black",
                            fontSize: "20px",
                        }}
                    >
                        <h1 style={{ fontFamily: "cursive" }}>Meet Our Team</h1>
                        <div className='aboutcards'>
                            <div className='aboutcard_1'>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Img variant='top' src={Team1} alt='team1' />
                                    <Card.Body>
                                        <Card.Title>Priyanka Bed</Card.Title>
                                        <Card.Text>Full Stack Developer</Card.Text>
                                        <CDBBox display='flex' className='justify-content-center gap-4'>
                                            <CDBBtn flat color='dark' className='p-2 text-decoration-none' href='https://www.linkedin.com/in/priyankaben-bed/'>
                                                <CDBIcon fab icon='linkedin-in' />
                                            </CDBBtn>
                                            <CDBBtn flat color='dark' className='p-2 text-decoration-none' href='https://github.com/PriyankaBed'>
                                                <CDBIcon fab icon='github' />
                                            </CDBBtn>
                                        </CDBBox>
                                    </Card.Body>
                                </Card>{" "}
                            </div>
                            <div className='aboutcard_2'>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Img variant='top' src={Team1} alt='team1' />
                                    <Card.Body>
                                        <Card.Title>Maria Vlasopoulou</Card.Title>
                                        <Card.Text>Full Stack Developer</Card.Text>
                                        <CDBBox display='flex' className='justify-content-center gap-4'>
                                            <CDBBtn flat color='dark' className='p-2 text-decoration-none' href='https://www.linkedin.com/in/maria-vlasopoulou-20527b162/'>
                                                <CDBIcon fab icon='linkedin-in' />
                                            </CDBBtn>
                                            <CDBBtn flat color='dark' className='p-2 text-decoration-none' href='https://github.com/vlasmar'>
                                                <CDBIcon fab icon='github' />
                                            </CDBBtn>
                                        </CDBBox>
                                    </Card.Body>
                                </Card>{" "}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default About;
