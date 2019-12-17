import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/Modal.css'

export default class Modal extends Component {

	componentDidMount() {
		const handleModalDidMount = this.props.handleModalDidMount || (() => { });
		handleModalDidMount()
	}

	componentWillUnmount() {
		const handleModalWillUnmount = this.props.handleModalWillUnmount || (() => { });
		handleModalWillUnmount()
	}

	onblur = () => {
		console.log('blur modal');
	}

	render() {
		const { onCloseModal, backgroundColor, header, children } = this.props
		return (
			<div className='modal content_modal'>
				<div className={`modal_body ${backgroundColor}`}>
					<div className="modal_header">
						{header}
					</div>
					<div className='modal_children'>
						{children}
					</div>
				</div>
				<div className="backdrop" onClick={onCloseModal}></div>
			</div>
		);
	}
}

Modal.propTypes = {
	onCloseModal: PropTypes.func.isRequired,
	children: PropTypes.node
}