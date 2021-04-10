function solution(binary)
{   
    if(binary)
    {   
        while(binary > 0)
        {
            let divisor = 2;
            
            for(let i = 1; i <= binary; i++)
            {   
                let remainder = binary % divisor;
                console.log(`El residuo de ${binary} / ${divisor} es "${remainder}", el cociente es:`);
                let quotient = parseInt(binary / divisor);
                binary = quotient;
                console.log(binary);
            }
        }
    }
    return;

}
solution(1043);
