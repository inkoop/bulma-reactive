import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const Modal = ({ children, showModal, toggleModal }) => {
  return (
    <div className={classNames("modal is-clipped", showModal && "is-active")}>
      <div className="modal-background" />
      <div className="modal-content">{children}</div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => toggleModal()}
      />
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export default Modal
