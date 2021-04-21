import React from 'react';

class NumberRow extends React.Component {

    render() {
        const { number, onSelectClick, onUnselectClick, isNumberSelected, isNumberLocked} = this.props
        return (
            <tr key={this.key}>
                <td>{number}</td>
                <td>
                    <button className={`btn btn-${isNumberSelected ? 'danger' : 'primary'}`} disabled={!!isNumberLocked}
                        onClick={isNumberSelected ? onUnselectClick : onSelectClick}> {isNumberSelected ? 'Remove from Selected' : 'Add to Selected' }</button></td>               
                </tr>
        );
    }

}

export default NumberRow