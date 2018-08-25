function EightQueens(strArr) { 
    let attackCords = '';
    let playedPiece = [];
    let newX = 0;
    let newY = 0;

    strArr.forEach(SearchForAttack);

    if(attackCords)
    {
      return attackCords;
    } else {
      return true;
    }

    function SearchForAttack(item)
    {
      let cleanedElement = item.replace(/"/g, "").replace(/'/g, "").replace(/\(|\)/g, "");
      let coordinates = cleanedElement.split(',')

      
      SearchForAttackingPiece(coordinates,function(){
        newX = newX + 1;
        newY = newY + 1;
      });
      
      if(!attackCords){
        SearchForAttackingPiece(coordinates,function(){
        newX = newX - 1;
        newY = newY - 1;
        });
      }
      if(!attackCords){
        SearchForAttackingPiece(coordinates,function(){
        newX = newX + 1;
        newY = newY;
        });
      }
      if(!attackCords){
        SearchForAttackingPiece(coordinates,function(){
          newX = newX - 1;
          newY = newY;          
        });
      }
      if(!attackCords){
        SearchForAttackingPiece(coordinates,function(){
          newX = newX;
          newY = newY +1;          
        });
      }
      if(!attackCords){
        SearchForAttackingPiece(coordinates,function(){
          newX = newX;
          newY = newY -1;          
        });
      }
      if(!attackCords){
        SearchForAttackingPiece(coordinates,function(){
          newX = newX - 1;
          newY = newY + 1;          
        });
      }

      if(!attackCords){
        SearchForAttackingPiece(coordinates,function(){
          newX = newX + 1;
          newY = newY - 1;          
        });
      }
    }

    function SearchForAttackingPiece(cordArr,callback){
      newX=parseInt(cordArr[0]);
      newY=parseInt(cordArr[1]);
      foundPiece = false;
      for(let i = cordArr[0]; i<=8;i++)
      {
        callback()
        foundPiece = CheckForPiece(newX,newY);
        if(foundPiece)
        {
          attackCords = newX + ','+newY;
          break;
        } 
      }
      if(foundPiece){
        attackCords = newX+','+newY;
        } 
        else 
        {      
         playedPiece.push(cordArr[0]+','+cordArr[1])
        }
    }

    function CheckForPiece(x,y)
    {
      let searchText = x+','+y;
      let foundPiece = false;
      for(let i = 0; i<=playedPiece.length-1;i++)
      {
        if(playedPiece[i] === searchText)
        {
          foundPiece = true;
          break;
        } 
      }
      return foundPiece;
    }
}
  
  
  //EightQueens(["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"])
  //should return "(2,1)"

  EightQueens(["(2,1)", "(5,3)", "(6,3)", "(8,4)", "(3,4)", "(1,8)", "(7,7)", "(5,8)"])
  //should return "(5,3)"
  
  
  //EightQueens(["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"])
  //should return true