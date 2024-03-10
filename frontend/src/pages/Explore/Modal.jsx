import PropTypes from "prop-types";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";

const Modal = ({ selectedPlace }) => {
    const { name, image, desc } = selectedPlace;
    return (
        <div>
            <Modal1 name={name} image={image} desc={desc} /> 
            <Modal2 name={name} image={image} desc={desc} /> 
        </div>
    );
};
export default Modal;
Modal.propTypes = {
    selectedPlace: PropTypes.object,
};
