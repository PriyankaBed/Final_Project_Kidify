import Header from "./Header";
import Footer from "./Footer";
import { Form, Button, Row, Col } from "react-bootstrap";
import Team1 from "../Images/team_1.jpg";

function UserProfile() {
    return (
        <div className='user_profile_page'>
            <div className='header'>
                <Header />
            </div>
            {/* <Container>
                <Row>
                    <Col>
                        <img src={Team1} alt='profils pic' width={300} />
                    </Col>
                    <Col>
                        <h1>User Profile</h1>
                        <Form className='form'>
                            <Form.Group controlId='formCategory1'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='text' />
                            </Form.Group>

                            <Form.Group controlId='formCategory2'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' />
                            </Form.Group>

                            <Form.Group controlId='formCategory4'>
                                <Form.Label>Profile Image</Form.Label>
                                <Form.Control type='file' name='profileImage' />
                            </Form.Group>

                            <Button variant='primary'>Update Profile</Button>
                        </Form>
                    </Col>
                </Row>
            </Container> */}
            <div title='EDIT PROFILE'>
                <div>
                    <Row className='profileContainer'>
                        <Col md={6}>
                            <Form>
                                <Form.Group controlId='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' placeholder='Enter Password'></Form.Control>
                                </Form.Group>
                                <Form.Group controlId='confirmPassword'>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type='password' placeholder='Confirm Password'></Form.Control>
                                </Form.Group>
                                <Form.Group controlId='pic'>
                                    <Form.Label>Change Profile Picture</Form.Label>
                                    {/* <Form.File id='custom-file' type='image/png' label='Upload Profile Picture' /> */}
                                </Form.Group>

                                <Button type='submit' varient='primary'>
                                    Update
                                </Button>
                            </Form>
                        </Col>
                        <Col
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img src={Team1} alt='profils pic' width={200} />
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default UserProfile;
