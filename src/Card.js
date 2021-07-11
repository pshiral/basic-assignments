import { useEffect, useState } from 'react';
import './App.css';
import { Api } from './Api';

function Card(props) {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        if (props.id) {
            Api.getArticle(props.id).then(item => {
                setArticle(item);
            }, item => {
                setArticle(item);
            });
        }
    }, []);

    return (
        <>
            {article &&
                <div className="article" key={article}>{article}</div>
            }
        </>
    );
}

export default Card;
