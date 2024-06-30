import sharkNinja from './shark_ninja.png'
import { userReviews } from '../../userReviews'
import { useEffect, useState } from 'react';
import './ProductTab.css'

export function ProductTab() {
    const [title, setTitle] = useState<string>();
    const [subtitle, setSubtitle] = useState<string>();
    const [tags, setTags] = useState<string[]>();

    useEffect(() => {
        setTitle(userReviews.title)
        setSubtitle(userReviews.subtitle)
        setTags(userReviews.tags)
    }, [userReviews])

    return (
        <div className='ProductTab'>
            <div>

            <img src={sharkNinja} />
            <h4>{title}</h4>
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

        </div>
    )
}