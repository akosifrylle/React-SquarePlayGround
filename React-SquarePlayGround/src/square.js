import React from 'react';
import './Square.css'

export default class Square extends React.Component {
    constructor() {
        //super(props);
        super();
    }

    render() {
        const style = {
            width: '100px',
            height: '100px',
            backgroundColor: this.props.initialColor
        };

        return (
                <div style={style} className="Square">
                    <div>Hello World</div>
                    <div className="SquareControls">
                    <input ref={(elem) => { console.log(elem.value) }} type="text" placeholder="Color..." />
                    <button>Ok</button>
                    </div>
                </div>
        );
    }

}