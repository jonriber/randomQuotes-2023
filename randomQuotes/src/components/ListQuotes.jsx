import "../style/listQuotes.css"

/* eslint-disable react/prop-types */
const ListQuotes = ({children}) =>{
    return(
        <>
            <div className="list-container">
                {children}
            </div>
        </>
    )
}

export default ListQuotes