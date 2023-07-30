import React from 'react';
import './Popup.css';
import { useState } from 'react';

function Popup({ setTrigger, trigger, id, newItem, onSave, remove }) {
    const [another, setanother] = useState('');
    const [selectedOption, setSelectedOption] = useState('option1');

    function save(e) {
        setTrigger(false);
        e.preventDefault();
        if (another === '') return;
        remove(id);
        onSave(another, newItem, selectedOption);
        console.log(another);
        setanother('');
        setSelectedOption("<No Priority Choosen>")
    }

    // function editItem({ id, newItem }) {
    //     console.log(id + '_' + newItem);
    // }

    return trigger ? (
        <div className='popup'>
            <div className="popup-inner">
                <form onSubmit={save}>
                    <div>
                        <h1>Edit the task</h1>
                        <input
                            value={another}
                            onChange={e => setanother(e.target.value)}
                            type="text"
                            id="item"
                        />
                        <br /><br />
                        {/* <label htmlFor="options"></label> */}
                        <select
                            id="options"
                            value={selectedOption}
                            onChange={e => setSelectedOption(e.target.value)}
                            required
                        >
                            <option value="Not Selected">No Priority Choosen</option>
                            <option value="Less Priority">Less Priority</option>
                            <option value="Optional task">Optional task</option>
                            <option value="High Priority">High Priority</option>
                        </select>
                    </div>

                    {/* Move the save button inside the form */}
                    <button className='close-btn' >Save</button>
                </form>
            </div>
        </div>
    ) : '';
}

export default Popup;
