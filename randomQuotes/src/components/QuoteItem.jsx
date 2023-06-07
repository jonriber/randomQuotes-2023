
import "../style/quoteItem.css"
/* eslint-disable react/prop-types */

const QuoteItem = ({author,content}) =>{
    console.log("author:",author)
    return(
        <>
        <div className="quoteItem">
            <h3>{author}</h3>
            <q>{content}</q>
        </div>
        <hr className="rounded"></hr>
        </>
    )
}

export default QuoteItem