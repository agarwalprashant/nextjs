import ReactModal from 'react-modal';
import { Component } from 'react';
import styles from './react-modal-box.module.css';
import copy from 'copy-to-clipboard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCopy,
  faHome,
  faPlay,
  faPause,
  faComment,
  faHeart,
  faRing,
  faShare,
  faRetweet,
  faCompactDisc,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

export default class ReactModalBox extends Component {
  state = {
    showModal: false,
    copied: false,
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  Copytext = () => {
    this.setState({ copied: true });
    console.log(`${this.props.msg} ${this.props.url}`);
    copy(
      // `Checkout this video on MitronTV - ${process.env.baseURL}/${this.props.videoId}`
      `${this.props.msg} ${this.props.url}`
    );
  };

  render() {
    const { showModal } = this.state;
    return (
      <ReactModal
        isOpen={
          showModal
          /* Boolean describing if the modal should be shown or not. */
        }
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          },
          content: {
            position: 'absolute',
            top: '70%',
            left: '0',
            right: '0',
            bottom: '0',
            border: '1px solid #ccc',
            background: 'white',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
          },
          /* Object indicating styles to be used for the modal.
     It has two keys, `overlay` and `content`.
     See the `Styles` section for more details. */
        }}
        contentLabel={
          'Example Modal'
          /* String indicating how the content container should be announced
     to screenreaders */
        }
        portalClassName={
          'ReactModalPortal'
          /* String className to be applied to the portal.
     See the `Styles` section for more details. */
        }
        overlayClassName={
          'ReactModal__Overlay'
          /* String className to be applied to the overlay.
     See the `Styles` section for more details. */
        }
        id={
          'some-id'
          /* String id to be applied to the content div. */
        }
        className={
          'ReactModal__Content'
          /* String className to be applied to the modal content.
     See the `Styles` section for more details. */
        }
        bodyOpenClassName={
          'ReactModal__Body--open'
          /* String className to be applied to the document.body 
     (must be a constant string).
     This attribute when set as `null` doesn't add any class 
     to document.body.
     See the `Styles` section for more details. */
        }
        htmlOpenClassName={
          'ReactModal__Html--open'
          /* String className to be applied to the document.html
     (must be a constant string).
     This attribute is `null` by default.
     See the `Styles` section for more details. */
        }
        ariaHideApp={
          true
          /* Boolean indicating if the appElement should be hidden */
        }
        shouldFocusAfterRender={
          true
          /* Boolean indicating if the modal should be focused after render. */
        }
        shouldCloseOnOverlayClick={
          true
          /* Boolean indicating if the overlay should close the modal */
        }
        onRequestClose={this.handleCloseModal}
        shouldCloseOnEsc={
          true
          /* Boolean indicating if pressing the esc key should close the modal
     Note: By disabling the esc key from closing the modal
     you may introduce an accessibility issue. */
        }
        shouldReturnFocusAfterClose={
          true
          /* Boolean indicating if the modal should restore focus to the element
     that had focus prior to its display. */
        }
        role={
          'dialog'
          /* String indicating the role of the modal, allowing the 'dialog' role
     to be applied if desired.
     This attribute is `dialog` by default. */
        }
        parentSelector={
          () => document.body
          /* Function that will be called to get the parent element
     that the modal will be attached to. */
        }
        aria={
          {
            labelledby: 'heading',
            describedby: 'full_description',
          }
          /* Additional aria attributes (optional). */
        }
        data={
          { background: 'green' }
          /* Additional data attributes (optional). */
        }
      >
        <p style={{ textAlign: 'center', margin: '10px auto' }}>
          Copy/Share Link On WhatsApp
        </p>
        <div className={styles[`share--icons__container`]}>
          <div className={styles.copy} onClick={this.Copytext}>
            <FontAwesomeIcon
              icon={faCopy}
              size="2x"
              color="grey"
              flip="vertical"
            />
            {this.state.copied ? (
              <div style={{ color: 'green' }}>Copied.</div>
            ) : (
              <div>Copy Link</div>
            )}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a
              // href={`whatsapp://send?text=Checkout this video on MitronTV - ${process.env.baseURL}/${this.props.videoId}`}
              href={`whatsapp://send?text=${this.props.msg} ${this.props.url}`}
              data-action="share/whatsapp/share"
            >
              <img
                src="/images/img/whatsapp-logo.png"
                alt="React Logo"
                className={styles[`whatsApp--logo`]}
              />
            </a>
            <div>Share</div>
          </div>
        </div>

        {/* <button onClick={this.handleCloseModal}>Close Modal</button> */}
      </ReactModal>
    );
  }
}
