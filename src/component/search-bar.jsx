import './search-bar.css';

export default function () {
    return (
        <div className='search-main'>
           <form >
            <label htmlFor="search">Search</label>
            <div className='input-div'>
            <input type="text" id="search"/>
            <input id="btn" type="submit" value="Search" />
            </div>
           </form>
        </div>
    )
}