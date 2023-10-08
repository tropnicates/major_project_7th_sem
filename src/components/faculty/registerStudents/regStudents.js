import { useEffect, useState } from "react";
import * as XLSX from 'xlsx'

const RegStudents = ()=>{

    const [bufferData,setBufferData] = useState(null);
    const [objData,setObjData] = useState(null);

    const handleFile = (e)=>{

       let file = e.target.files[0];
       
       let reader = new FileReader();
       reader.readAsArrayBuffer(file)

       reader.onload= (e)=>{
            setBufferData(e.target.result);
       }

    }

    let objectKeysToLowerCase = function (origObj) {
        return Object.keys(origObj).reduce(function (newObj, key) {
            let val = origObj[key];
            let newVal = (typeof val === 'object') ? objectKeysToLowerCase(val) : val;
            newObj[key.split(/[.\-_ ']/).join('').toLowerCase()] = newVal;
            return newObj;
        }, {});
    }

    const handleSubmit = ()=>{

        const wb = XLSX.read(bufferData,{type:'buffer'})
        const wsName = wb.SheetNames[0]
        const ws = wb.Sheets[wsName]
        var data = XLSX.utils.sheet_to_json(ws)
        setObjData(data)
        
        data = objectKeysToLowerCase(data)
        postData(data)
    }

    const postData = async (data)=>{
        console.log(data)
        const res = await fetch('http://localhost:5000/regStudents',{

            method:'post',
            headers: {
                "Content-Type":'application/json'
            },
            body: JSON.stringify(data)

        })

        const out = await res.json()
        console.log(out)

    }


 return(

    <div style={{margin:'20%'}}>
        <input type={'file'} onChange={handleFile}></input><br></br>
        <button onClick={handleSubmit}>submit</button>
    </div>

 );

}

export default RegStudents;
