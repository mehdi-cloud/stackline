import sharkNinja from './shark_ninja.png'
import { useContext } from 'react';
import './ProductTab.css'
import { UserContext } from '../../App';

export function ProductTab() {
    const userReviews = useContext(UserContext);

    return (
        <div className='ProductTab'>
            <img src={sharkNinja} />
            <h2>{userReviews.title}</h2>
            <span>{userReviews.subtitle}</span>
            <br />
            <div className={'tagContainer'}>
                {userReviews.tags?.map((tag: string) => (
                    <div className='tag'>
                        <span>{tag}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}