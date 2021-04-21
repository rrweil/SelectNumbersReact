import React from 'react';

class SelectedNumberRow extends React.Component {

    render() {
        const { number, onLockClick, isNumberLocked, onUnlockClick} = this.props
        return (
            <li key={this.key} className="list-group-item"> {number}
                <button className='btn btn-primary ml-4' onClick={isNumberLocked ? onUnlockClick : onLockClick}>
                    {isNumberLocked ? 'Unlock' : 'Lock' }</button>
            </li>
        );
    }

}

export default SelectedNumberRow;