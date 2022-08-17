// Code your solution in this file!
var hq = 42;
function distanceFromHqInBlocks(someValue) 
{
    if (someValue < hq)
    {
        return hq - someValue;
    }
    else
    {
        return someValue - hq; //^*^&!(@&)()(Y*Y)
    }

}
distanceFromHqInBlocks(someValue);

var hq = 42;

function distanceFromHqInFeet(someValue) 
{
  if(someValue < hq)
  {
  return (hq - someValue) *264
  }
  else
  {
  return (someValue-hq)*264 //**()&&*^//
  }

}
distanceFromHqInBlocks(someValue);

//Third distance in feet.

function distanceTravelledInFeet(start, destination) {
    if(destination < hq)
    {
        return (start - destination)*264;
    }
    else
    {
        return (destination - start)*264;
    }

}
distanceTravelledInFeet(start, destination)

//last distanceTravelledInFeet

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if(destination < hq)
    {
        return (start - destination)*264;
    }
    else
    {
        return (destination - start)*264;
    }

  }
calculatesFarePrice(start,destination)


function calculatesFarePrice (destination, start){
    let distance = distanceTravelledInFeet(destination, start);
        if(distance < 400)  
        {
        return 0; 
        }
        else if(distance > 400 && distance <= 2000) 
        {
            return ((distance - 400) * 2)/100;
        }          
        else if(distance > 2500) 
        {
         return "cannot travel that far";
        }
        
        
        else
        {
         return 25;
        }
  
}

calculatesFarePrice(start, destination)

