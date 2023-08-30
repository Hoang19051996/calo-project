import { Button } from "reactstrap"

export const ListMeal = ( {name , calo , carb, protein, fat , onDelete , id}) => {

 
    return(
        <>
        {name === undefined ? "" :  <div style={{display : 'flex', rowGap : 8 , columnGap : 8 , alignItems: "center" , justifyContent : "space-between " , padding : 5}}>
            <div style={{display: "flex" , columnGap : 8}}>
    
        
    
              <span><strong>Food:</strong>  {name}<strong> Calo:</strong>  {calo}<strong> Carb:</strong> {carb}<strong> Protein:</strong> {protein}<strong> Fat:</strong> {fat}</span> 
            </div>
           
            <div style={{display: "flex" , columnGap : 8}}>
    
     
            <Button color="warning"  >Edit</Button> 
           
          
            <Button color="danger" onClick={() => onDelete(id)}>Delete</Button>
            </div>
            </div>}
       
            </>
    )
}