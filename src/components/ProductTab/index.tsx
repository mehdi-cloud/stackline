import sharkNinja from './shark_ninja.png'
import { userReviews } from '../../userReviews'
import { useEffect, useState } from 'react';
import './ProductTab.css'

export function ProductTab() {
    const [title, setTitle] = useState<string>();
    const [subtitle, setSubtitle] = useState<string>();
    const [tags, setTags] = useState<string[]>();

    useEffect(() => {
        /*I figured that stubbing an api call here would be 
        essentially the same as importing it, if there is an endpoint for this i'd love to add that functionality in!*/
        setTitle(userReviews.title)
        setSubtitle(userReviews.subtitle)
        setTags(userReviews.tags)
    }, [userReviews])

    return (
        <div className='ProductTab'>
            <img src={sharkNinja} />
            <h2>{title}</h2>
            <span>{subtitle}</span>
            <br />
            <div className={'tagContainer'}>
                {tags?.map((tag: string) => (
                    <div className='tag'>
                        <span>{tag}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}