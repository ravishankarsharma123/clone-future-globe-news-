import './Latest.css';

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
                           <a href="">
                            {item}
                           </a>
                        )
                    })
                }
            </div>
        </div>
    )
}