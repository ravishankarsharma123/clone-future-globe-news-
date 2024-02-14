import './news_card.css';
export default function( {title= "This is a title",date="January 9, 2024",author="Shivam",body="This is body",categories=["Stocks", "Editorial", "Education", "Finance", "Latest News"],tags=["Best Stocks", "Latest News"],enableComments=true}){
    return (
        <div className="card_main">
            <div className="title">
                <h2>{title}</h2>
                <p> {date} {author}</p>
            </div>
            <div className="body">
                <p>
                    {body}
                </p>
            </div>
            <div className="tags">
                <div className="category">
                    <img src="/folder.png" alt="" />
                    {
                        categories.map((cat)=>{
                            return <a href={`/${cat}`}>{cat} </a>
                            
                        })
                    }
                </div>
                <div className="tags">
                
                    <img src="/tags.png" alt="" />
                    { tags.map(tag => <a href={`/${tag}`}>{tag},</a>)}
                </div>
                <div className="comments">
                    <img src="/comments.png" alt="" />
                    {
                        enableComments ?  <a href="#"> Leave a comment</a>:"comment are disabled " 
                        
                    }
                    
                </div>
            </div>
        </div>
    )
}




