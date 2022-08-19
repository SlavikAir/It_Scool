



const Modal = (props) => {
    return (
        <div className={`modal-wrapper ${props.isOpened ? 'open' : 'close'}`} style={{ ...props.style }}>
            <div className="modal-dialog modal-width">
                <div className="modal-content">
                    <div className='modal-body '>
                    <button type="button" className="btn-close modal-close" onClick={props.onModalClose}></button>
                        {props.header}
                        {props.body}
                        {props.footer}
                    </div>
                </div>
             </div>
        </div>
    )
}


export default Modal;