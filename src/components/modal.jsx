import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
    const {
        className,
        toggle,
        modal,
        title,
        actionfunc
    } = props;



    return (
        <div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
            {props.children}
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={actionfunc}>Do Something</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
}

export default ModalExample;