import React from "react";
const DessertsList = ({ data }) => {
    
    const lowCal = data.filter(dessert => dessert.calories < 500);
    
    const sortedDes = lowCal.sort((a, b) => a.calories - b.calories);
    return (
    <div>
            <h2>Healthy Desserts</h2>
            <ul>
                {sortedDes.map((dessert, index) =>
                (<li key={index}>
                    {dessert.name} - {dessert.calories} cal
                </li>
                    )
            )}   
            </ul>
    </div>
)
}


export default DessertsList;