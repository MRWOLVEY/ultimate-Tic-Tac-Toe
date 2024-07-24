import { useState, useEffect } from "react"
import classNames from 'classnames';

const TTTgrid = ({className,children}) => {
    const [items, setItems] = useState([])
    const combinedclassesWrapper = classNames(className, 'TTTgrid grid grid-cols-3 grid-rows-3 gap-2')
    const editItems = (index,value) => {
        items[index] = value
        setItems([...items])
    }
    const editRadiuses = () =>{
        for (let item of items) {
            const combinedclassesItem=classNames(item.props.className, 'rounded')
            // console.log(item.props.className)
        }
    }
    const handleBoxClick=(e)=>{
        console.log(e.target.id)
        // editItems(0,<input/>);
    }

    useEffect(() => {
        setItems(children)
        editRadiuses()
        // editItems(0,<input/>);
        // console.log(items);

    },[items])

    return (
        <div className={combinedclassesWrapper} onClick={handleBoxClick}>
            {items}
        </div>
    )
}

export default TTTgrid