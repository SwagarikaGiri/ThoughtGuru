import React from 'react';

class ResultTable extends React.Component {

    dispalyResults=(data)=>{
        if (typeof(data)==="string")
        {
            return (
                <h5 className="section-subheading">{data}</h5>
            )
        }
        else if(data){
            let functionArray = data.ot
            if(functionArray)
            {
                return(functionArray.map(go=>(<li key={go}>
                    {go}
                </li>)))
            }
            
        }
        else{
            return (
                <h5 className="section-subheading">Some error in data</h5>
            )

        }

    }
  
    render(){
        let data = this. props.results

        // console.log(data)
        // console.log(results)
        return(
            <div>
               {this.dispalyResults(data)}
            </div>
        )
    }


}

export default ResultTable;