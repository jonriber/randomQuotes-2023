
import "../style/quoteItem.css"
/* eslint-disable react/prop-types */

const QuoteItem = ({author,content}) =>{
    console.log("author:",author)
    return(
        <div className="quoteItem">
            <h3>Author:{author}</h3>
            <p>{content}</p>
        </div>
    )
}

export default QuoteItem