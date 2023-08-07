import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalComponent({ title }) {
    const [show, setShow] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
    });

    const [nameError, setNameError] = useState('');

    const validateName = (name) => {
        if (!isAlphaNumeric(name)) {
            setNameError('Name should only contain alphanumeric characters.');
        } else {
            setNameError('');
        }
    };

    const isAlphaNumeric = (input) => {
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        return alphanumericRegex.test(input);
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
        if (name === 'name') {
            validateName(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isAlphaNumeric(userDetails.name)) {
        const existingDataJSON = localStorage.getItem(title);
        const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : {};

        // Add the new userDetails to the object
        const newData = {
            ...existingData,
            [Date.now()]: userDetails, // Use a unique key (timestamp) for each entry
        };
        localStorage.setItem(title, JSON.stringify(newData));
        alert('Ticket booked successfully!');
        handleClose();
    } else {
        setNameError('Name should only contain alphanumeric characters.');
      }
    };
    const handleClose = () => {
        setShow(false);
        setUserDetails({
            name: '',
            email: '',
        });
        setNameError('');
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Book {title}'s Ticket
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name='email'
                                value={userDetails.email}
                                onChange={handleInputChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                name='name'
                                value={userDetails.name}
                                onChange={handleInputChange}
                                autoFocus
                            />
                            {nameError && <p className="text-danger">{nameError}</p>}
                        </Form.Group>
                        <Button variant="primary" type='submit' disabled={nameError}>
                            Book Ticket
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent;