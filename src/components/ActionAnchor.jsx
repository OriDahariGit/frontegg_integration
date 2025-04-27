const ActionAnchor = ({clickHandler, mouseEnterHandler, mouseLeaveHandler, children}) => {
    return (
        <span 
            className="textlink inline-block" 
            onClick={() => clickHandler()}
            onMouseEnter={() => mouseEnterHandler()}
            onMouseLeave={() => mouseLeaveHandler()}
        >
            {children}
        </span>
    )
}

export default ActionAnchor