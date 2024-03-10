import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
const CustomModal = ({ show, handleClose, bodyContent="An Unexpected Error Occured", Color }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>WanderAI</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div style={{ color:Color  }} >{bodyContent}</div>
            </Modal.Body>
        </Modal>
    );
};
export default CustomModal;
CustomModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    bodyContent: PropTypes.string,
    Color: PropTypes.string.isRequired
};