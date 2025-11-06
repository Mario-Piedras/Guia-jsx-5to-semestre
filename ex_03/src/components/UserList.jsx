import {useEffect, useState} from 'react';

export const UserList = ({ endPoint }) => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
            const data = await resp.json();
            setData(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error(error);
            setData([]);
        }
    }
    useEffect(() => {
        fetchData();
    }, [endPoint]);
    return (
        <>
            <ul>
                {endPoint === 'users' ? data.map(item => (
                    <li key={item.id}>{item.name} - {item.email}</li>
                ))
                : data.map(item => <li key={item.id}>{item.body}</li>)
            }
            </ul>
        </>
    );
}