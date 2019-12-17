import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/ModalV2.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { timingSafeEqual } from 'crypto'

class ModalV2 extends Component {

    static propTypes = {
        open: PropTypes.bool,
        children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
        fullSize: PropTypes.bool,
        className: PropTypes.string
    }

    static defaultProps = {
        open: false,
        children: null,
        fullSize: false,
        className: ''
    }

    state = {
        open: true,
    }

    setOpen = (isOpen) => {
        this.setState({ open: isOpen })
    }

    toggleModal = () => {
        this.setState(prevState => ({ open: !prevState.open }))
    }

    closeModal = () => { this.props.setOpen(false) }

    bubble = id => event => {
        event.stopPropagation()
        console.log(`bubbles ${id}: ${event.bubbles}`)
        console.log(event.currentTarget.id)
    }

    render() {
        const { children, fullSize, className } = this.props
        const fullSizeClass = fullSize ? 'full-size' : ''
        const data = typeof children === 'function' ?
            {
                open: this.state.open,
                children: () => (children(this.state.open, this.toggleModal)),
                toggleModal: this.toggleModal
            } :
            {
                open: this.props.open,
                children: () => { return children },
                toggleModal: this.closeModal
            }
        return (
            <ReactCSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                {
                    data.open &&
                    <div className={`modalV2 ${className} ${fullSizeClass}`}>
                        <div className={`modal_body trasition_all`}>
                            {/* {
                                typeof children === 'function' ?
                                    children(this.state.open, this.toggleModal) :
                                    children
                            } */}
                            {data.children()}
                        </div>
                        {/* data.toggleModal */}
                        <div id='backdrop' className="backdrop" onClick={this.bubble(1)}>
                            <div
                                id='nested'
                                onClick={this.bubble(0)}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: 'blue',
                                    color: 'white'
                                }}
                            >hello</div>
                        </div>
                    </div>
                }
            </ReactCSSTransitionGroup>
        )
    }
}

export default ModalV2

// modalType: PropTypes.oneOf([
//     'normal',
//     'reaction',
//     'feedback',
//     'powerUpDetail',
//     'forumBasic',
//     'forumQuestionCommentTab',
//     'forumTextTab'
// ]),