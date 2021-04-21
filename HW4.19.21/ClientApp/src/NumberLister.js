import React from 'react';
import NumberRow from './NumberRow';
import { produce } from 'immer';
import SelectedNumberRow from './SelectedNumberRow';

class NumberLister extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [], 
        lockedNumbers: []
    }

    onSelectClick = (number) => {
        this.setState({ selectedNumbers: [...this.state.selectedNumbers, number] });
    }

    onUnselectClick = (number) => {
        const nextState = produce(this.state, draftState => {
            draftState.selectedNumbers = this.state.selectedNumbers.filter(n => n !== number);
        });
        this.setState(nextState);
    }

    onLockClick = (number) => {
        this.setState({ lockedNumbers: [...this.state.lockedNumbers, number] });
    }

    onUnlockClick = (number) => {
        const nextState = produce(this.state, draftState => {
            draftState.lockedNumbers = this.state.lockedNumbers.filter(n => n !== number)
        }); 

        this.setState(nextState);
    }

    isNumberSelected = (number) => {
        const found = this.state.selectedNumbers.find(n => n === number);
        return !!found;
    }

    isNumberLocked = (number) => {
        const found = this.state.lockedNumbers.find(n => n === number);
        return !!found;
    }

    addNumber = () => {
        this.setState({ numbers: [...this.state.numbers, Math.floor(Math.random() * 1000)] })
    }

    render() {
        const { numbers, selectedNumbers } = this.state;
        return (
            <div className="container mt-5">
                <button className="btn btn-lg btn-success btn-block" onClick={this.addNumber}>Add</button>
                {
                    !!numbers.length &&
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.numbers.map((num, i) => {
                                return <NumberRow
                                    number={num}
                                    key={i}
                                    onSelectClick={() => this.onSelectClick(num)}
                                    onUnselectClick={() => this.onUnselectClick(num)}
                                    isNumberSelected={this.isNumberSelected(num)}
                                    isNumberLocked={this.isNumberLocked(num)}
                                />
                            })}
                        </tbody>
                    </table>
                }

                {
                    !!selectedNumbers.length &&
                    <div className="jumbotron">
                        <h1>Selected Numbers</h1>
                        <ul className="list-group">
                            {
                                this.state.selectedNumbers.map((num, i) => {
                                    return <SelectedNumberRow
                                        number={num}
                                        key={i}
                                        isNumberLocked={this.isNumberLocked(num)}
                                        onLockClick={() => this.onLockClick(num)}
                                        onUnlockClick={() => this.onUnlockClick(num)}
                                    />
                                })}

                        </ul>
                    </div>
                }
            </div>
        );
    }
}

export default NumberLister;
