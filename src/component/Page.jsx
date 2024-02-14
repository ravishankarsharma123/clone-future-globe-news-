import "./Home.css";
import Card from "./news_card";
import Heading  from "./Heading";
import { useLoaderData } from "react-router-dom";

export default function ({articles=[], heading=''}) {
  // console.log(articles);
  if(articles.length === 0){
    // let data= useLoaderData();
    // articles = data.articles;
  }
  return (
    <main>
      {heading && <Heading heading={heading} /> }
      {
        articles.map((article)=>{

          return <Card title={article.title} author={article.source.name} date={article.publishedAt} body={article.description} />
        })
      }
    </main>
  );
}
