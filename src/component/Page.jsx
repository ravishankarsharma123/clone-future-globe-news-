import "./Home.css";
import Card from "./news_card";
import Heading  from "./Heading";
import { useLoaderData } from "react-router-dom";

export default function ({articles=[], heading=''}) {
    let data = useLoaderData();
    if (data) {
      articles = data.articles;
          
  }
  return (
    <main>
      {heading && <Heading heading={heading} /> }
      {
        articles.map((article)=>{

          return <Card key={article.title} title={article.title} author={article.source.name} date={article.publishedAt} body={article.description} />
        })
      }
    </main>
  );
}
