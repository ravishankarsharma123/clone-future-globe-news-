import './Latest.css';
import { Link } from 'react-router-dom';

export default function({list=[]}){
    
    return (
        <div className="latest_main">
            <h5>
                Latest News
            </h5>
            <div>
                {
                    list.map((item)=>{
                        return(
                            <Link key={item.title} to ={''}>
                                {item.title}
                            </Link>

                        )
                           
                    })
                }
            </div>
        </div>
    )
}