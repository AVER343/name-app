const array=['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike',
'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee',
'Zulu']
export const Palindrome=(string)=>{
    let a= []
    let i=0
    let len =string.length
   for(i=0;i<len;i++)
   {
       a.unshift(string[i])
    }
    for(i=0;i<len;i++)
    {
        if(a[i]==string[i])
        {

        }
        else{
            return false
        }
    }
    return true
}
export const getValues=(string)=>
               {
                let j,elem
                let newArray=[]
                for(j=0;j<string.length;j++){ 
                    elem=string[j].toLowerCase()
                    let i=0;
                    let len =array.length
                            for(i=0;i<len;i++)
                            {
                                if(elem==array[i][0].toLowerCase())
                                {
                                    newArray=newArray.concat(array[i])
                                }
                            }
                       
                      }
                      return newArray
                }
