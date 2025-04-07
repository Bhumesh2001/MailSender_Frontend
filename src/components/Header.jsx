import { Navbar, Container } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid className="mx-2">
                <Navbar.Brand>📧 MailSender</Navbar.Brand>
            </Container>
        </Navbar>
    );
};
