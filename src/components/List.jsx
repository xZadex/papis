import React from 'react'

const List = (props) => {
    const {content} = props;


    return (
        <div className='list-container'>
            {
                (content)

                ?content.map((api, i)=>{
                    return (
                        <a key={i} href={api.Link} target="_blank" rel="noreferrer">
                        <div className="card">
                            <div className='card-title-container'>
                                <p className='card-title'>{api.API?api.API:"Name not found"}</p>
                            </div>
                            <div className='card-content-container'>
                                <div className='description-container'><strong>Description: </strong>{api.Description?api.Description:"No Description"}</div>
                                <div className='category-info-container'>
                                    <div className='category-container'>
                                        <p><strong>Category:</strong></p>
                                        <p>{api.Category?api.Category:"No Category"}</p>
                                    </div>
                                    <div className='info-container'>
                                        <div className='info-size-control'>
                                            <p className='info-content'><strong>Auth: </strong>{api.Auth?api.Auth:"None"}</p>
                                            <p className='info-content'><strong>Cors: </strong>{api.Cors?api.Cors:"Not Found"}</p>
                                            <p className='info-content'><strong>HTTPS: </strong>{api.HTTPS?"True":"False"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </a>
                )})
                :<p className='placeholder'>Select a category to begin</p>
            }
        </div>
    )
}

export default List