import React, {Component} from 'react';


class FamousPerson extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Christopher Guest',
            role: 'The Six Fingered Man'
        };

    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeRole = (event) => {
        this.setState({
            role: event.target.value
        })
    }


    render(){
        return(
            <div>
                <input onChange={this.handleChangeName}
                        type="text" placeholder="Famous Person" />
                <input onChange={this.handleChangeRole}
                        type="text" placeholder="Famous Role" />
                <p>{this.state.name} is famous for the role of {this.state.role}</p>
            </div>
        )
    }
}

export default FamousPerson;