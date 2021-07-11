import { useEffect, useState } from 'react';
import './App.css';
import { Api } from './Api';
import Card from './Card';

function Articles() {
    const [idList, setIds] = useState(null),
        [selectedPage, setSelected] = useState(0),
        pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        Api.getArticleIds(selectedPage).then((response) => {
            setIds(response);
        });
    }, [selectedPage]);

    return (
        <section>
            <div className="w-100 d-flex">
                {pages.map(page => (
                    <div key={page} className={page === selectedPage ? 'page selected' : 'page'} onClick={() => {
                        setSelected(page);
                    }}>{page}</div>
                ))}
            </div>

            <section className="d-flex">
                {idList?.map(id => (
                    <Card key={id} id={id}></Card>
                ))}
            </section>
        </section>
    );
}

export default Articles;
