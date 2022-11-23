import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from '../components/List'

const Home = () => {
    const categories = ["Animals", "Anime", "Anti-Malware", "Art & Design", "Authentication & Authorization", "Blockchain", "Books", "Business", "Calendar", "Cloud Storage & File Sharing", "Continuous Integration", "Cryptocurrency", "Currency Exchange", "Data Validation", "Development", "Dictionaries", "Documents & Productivity", "Email", "Entertainment", "Environment", "Events", "Finance", "Food & Drink", "Games & Comics", "Geocoding", "Government", "Health", "Jobs", "Machine Learning", "Music", "News", "Open Data", "Open Source Projects", "Patent", "Personality", "Phone", "Photography", "Programming", "Science & Math", "Security", "Shopping", "Social", "Sports & Fitness", "Test Data", "Text Analysis", "Tracking", "Transportation", "URL Shorteners", "Vehicle", "Video", "Weather"]
    const [apiCount, setApiCount] = useState(null)
    const [apiList, setApiList] = useState(null)
    const [categoryFilter, setCategoryFilter] = useState("Animals");
    const [content, setContent] = useState(null)

    const filterCategory = (e) => {
        e.preventDefault();
        let filterCategory = apiList.filter(item => item.Category === categoryFilter)
        setContent(filterCategory);
    }

    let cleanedCount = apiCount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    useEffect(() => {
        axios.get("https://api.publicapis.org/entries")
            .then((res) => {
                setApiCount(res.data.count)
                setApiList(res.data.entries)
            })
            .catch(err => console.log(err));
    }, [setApiCount, setApiList,setContent, apiList])


    return (
        <div className='main-container'>
            <h1>Public<span className='title-secondary'>APIs</span></h1>
            <p className='total-count'>Total APIs: {cleanedCount}</p>
            <div className='filter-container'>
                <form onSubmit={(e) => { filterCategory(e) }}>
                    <div className='form-group'>
                        <select
                            id="categoryFilter"
                            value={categoryFilter}
                            onChange={(e) => { setCategoryFilter(e.target.value) }}>

                            {categories.map((category, i) => (
                                <option key={i}>{category}</option>
                            ))
                            }
                        </select>
                    </div>
                    <button className="filter-button" type='submit'><i className="fa-solid fa-filter"></i></button>
                </form>
            </div>
            {
                (apiList)
                    ? <List content={content} />
                    :""
            }
        </div>
    )
}

export default Home