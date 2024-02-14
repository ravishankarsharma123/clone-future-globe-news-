import './Heading.css';
export default function({heading=''}){
    return(
        <div className='heading_main'>
            <h2>
                {heading}
            </h2>
        </div>
    )
}