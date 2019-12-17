


import React, { Component } from 'react';

export default class KeysChild extends Component {
    constructor(props) {
        super(props);
        const date = Date.now();
        this.state = {
            key: 0,
            todo: { id: 1, name: 'name-todo', createdAt: date }
        };
    }

    onInputChange = (evt) => {
        const key = parseInt(evt.target.value || 0)
        this.setState({ key })
    }

    render() {
        const { key, todo } = this.state
        return (
            <div className='TodoSort'>
                <ToDo key={'key'} propKey={'key'} {...todo} />
                <ToDo key={key} propKey={key} {...todo} />
                <label htmlFor="setIndex"> setIndex: </label>
                <input name='key' value={this.state.key} onChange={this.onInputChange} />
            </div>
        );
    }
}

class ToDo extends Component {
    componentDidMount() {
        console.log(`ToDo DidMount with propKey: ${this.props.propKey} and id: ${this.props.id}`);
    }

    render() {
        const { id, name, createdAt, propKey } = this.props
        return (
            <div>
                <label> propKey: {propKey}</label>
                <label> id: {id}</label>
                {/* <label> name: {name}</label> */}
                {/* <label> createdAt: {createdAt}</label> */}
            </div>

        );
    }
}

/*
rcc	class component skeleton
rccp	class component skeleton with prop types after the class
rcjc	class component skeleton without import and default export lines
rwwd	class component without import statements
rpc	class pure component skeleton with prop types after the class
rsc	stateless component skeleton
rscp	stateless component with prop types skeleton
rpt	empty propTypes declaration
rdp	empty defaultProps declaration
con	class default constructor with props
conc	class default constructor with props and context
est	empty state object
cwm	componentWillMount method
cdm	componentDidMount method
cwr	componentWillReceiveProps method
scu	shouldComponentUpdate method
cwup	componentWillUpdate method
cdup	componentDidUpdate method
cwun	componentWillUnmount method
gsbu	getSnapshotBeforeUpdate method
gdsfp	static getDerivedStateFromProps method
cdc	componentDidCatch method
ren	render method
sst	this.setState with object as parameter
ssf	this.setState with function as parameter
props	this.props
state	this.state
bnd	binds the this of method inside the constructor
 */