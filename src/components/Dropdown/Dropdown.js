import React, {Component} from 'react';

import s from './Dropdown.module.scss';

class Dropdown extends Component {
    state = {
        visible : false
    }

    show = () => {
        this.setState({ visible : true})
    }

    hide = () => {
        this.setState({ visible : false})
    }

    toggle = () =>{
        this.setState(prevState=>({
           visible: !prevState.visible
        }));
    }

    render(){
        const {toggle} = this;
        return(
            <div className={s.Dropdown}>
                <button type='button' onClick={toggle} className={s.Dropdown__toggle}>{this.state.visible ? 'Hide': 'Show'}</button>
            

                {this.state.visible && <div className={s.Dropdown__menu}>Dropdown menu</div>}
            </div>
        )
    }
}

export default Dropdown;