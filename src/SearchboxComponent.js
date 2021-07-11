import { useState } from 'react';
import './App.css';
import { Api } from './Api';

function SearchboxComponent() {
    const [options, setOptions] = useState(null);

    const createSelectItems = (data) => {
        const items = [];

        for (let item of data) {
            items.push(<option key={item} value={item}>{item}</option>);
        }

        return items;
    }

    return (
        <section className="section">
            <section>
                <input className="w-100" type="text" autoFocus onChange={(event) => {
                    if (event.target.value) {
                        Api.getSuggestions(event.target.value).then((response) => {
                            if (response && response.length) {
                                setOptions(createSelectItems(response));
                            } else {
                                setOptions(null);
                            }
                        });
                    } else {
                        setOptions(null);
                    }
                }} />
                <datalist className="w-100">
                    {options}
                </datalist>
            </section>
            <select>
                {options}
            </select>
        </section>
    );
}

export default SearchboxComponent;
