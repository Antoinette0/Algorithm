function convertFahrToCelcius(F) {
    if(typeof F == 'number') {

        let celcius = ((F - 32) * (5/9));
        console.log(celcius);
        return (celcius);
    }

    else if (typeof F =='object') {
        if(Array.isArray(F)) {
            console.log('this is an array');

            return `${F} is not a valid number but a/an Array.` 

        } else {
            console.log('This is an object');
            output = `${JSON.stringify(F)} is not a valid number but an object.`
            return output
        }

        }
 
        else if(typeof F == 'string'){
            console.log('')
            let FNumber =Number(F);
        

            if(isNaN(FNumber)) {
                console.log("This is a string")
                return `${F} is not a valid number but a string}.`
            }
            else{
                let celcius =((FNumber-32) *(5/9));
                console.log(celcius );
                return(celcius)
            }

        } else{
            console.log('failed');
        }
    }

    const checkYuGiOh = (n) => {

        if (typeof n !== 'number') {
          return `invalid parameter: ${n}`;
        }
      
        const result = [];
        for(let i= 0; i< n; i++) {
         let next = (i + 1);
         if (((next % 2) === 0 ) && ((next % 3) === 0 ) && ((next % 5) === 0 ) ) {
           result.push('yu-gi-oh')
         } else if (((next % 2) === 0 ) && ((next % 3) === 0 )) {
           result.push('yu-gi')
         } else if (((next % 3) === 0 ) && ((next % 5) === 0 )) {
           result.push('gi-oh')
         } else if (((next % 2) === 0 ) && ((next % 5) === 0 )) {
           result.push('yu-oh')
         }
        
         else if (((next % 2) === 0 )) {
           result.push('yu')
         } else if (((next % 3) === 0 )) {
           result.push('gi')
         }  else if (((next % 5) === 0 )) {
           result.push('oh')
         } else {
            result.push(next)
         }
        }
        return result;
      }
      
      
      console.log(checkYuGiOh(10));
      