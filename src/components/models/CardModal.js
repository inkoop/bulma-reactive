import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const CardModal = ({
  children,
  showModal,
  toggleModal,
  modalTitle,
  modalFoot,
}) => {
  return (
    <div className={classNames("modal is-clipped", showModal && "is-active")}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{modalTitle}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => toggleModal()}
          />
        </header>
        <section className="modal-card-body">{children}</section>
        <footer className="modal-card-foot">{modalFoot}</footer>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => toggleModal()}
      />
    </div>
  )
}

CardModal.propTypes = {
  children: PropTypes.node.isRequired,
  modalFoot: PropTypes.node.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
}

export default CardModal
