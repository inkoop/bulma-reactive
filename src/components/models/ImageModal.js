import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const ImageModal = ({ showModal, toggleModal, url, alt, ratioClass }) => {
  return (
    <div className={classNames("modal is-clipped", showModal && "is-active")}>
      <div className="modal-background" />
      <div className="modal-content">
        <p className={classNames("image", ratioClass || "is-4by3")}>
          <img src={url} alt={alt} />
        </p>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => toggleModal()}
      />
    </div>
  )
}

ImageModal.propTypes = {
  children: PropTypes.node.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  ratioClass: PropTypes.string,
}

export default ImageModal
