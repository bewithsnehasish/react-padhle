import { CDN_IMAGE_URL } from "../constants"

const RestrauntCard = ({name,cuisines,cloudinaryImageId,avgRating,locality}) => {
    return(
        <div className="card">
            <img src={CDN_IMAGE_URL+ cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines && cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available"}</h3>
            <h4>{avgRating} Stars</h4>
            <p>{locality}</p>
        </div>
    )
}



export default RestrauntCard ;