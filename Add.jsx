import React from 'react';

export default class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    handleAdd() {
        this.props.onAdd(this.state.name);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange} />
                <button onClick={this.handleAdd}>Add</button>
            </form>
        );
    }
}