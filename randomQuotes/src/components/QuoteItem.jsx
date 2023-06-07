
import "../style/quoteItem.css"
/* eslint-disable react/prop-types */

const QuoteItem = ({author,content}) =>{
    return(
        <>
        <div className="quoteItem">
            <address>{author}</address>
            <q>{content}</q>
        </div>
        <hr className="rounded"></hr>
        </>
    )
}

export default QuoteItem