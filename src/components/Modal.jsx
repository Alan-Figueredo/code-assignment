import '../styles/modal.css'
import YoutubePlayer from "./YoutubePlayer"

const Modal = ({ videoKey, closeModal }) => {
    return (
        <div className='modal-backdrop'>
            <div className="popup-content">
                <i className='bi bi-x-lg close-modal' onClick={closeModal} />
                {!videoKey ?
                    <div className='no-trailer'><h6>no trailer available. Try another movie</h6></div> :
                    <YoutubePlayer
                        videoKey={videoKey}
                    />
                }
            </div>
        </div>
    )
}

export default Modal;