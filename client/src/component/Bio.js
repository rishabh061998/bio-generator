import react,{useState} from "react"
import './bio.css';

const Bio=()=> {

const [name,setName]=useState("Rishabh")
const [gender,setGender]=useState("male")
const [location,setLocation]=useState("Logan, UT")
const [school, setSchool] = useState("BYU");
const [stream, setStream] = useState("Chemistry");
const [occupation,setOccupation]=useState("programmer for a web design company")
const[religion,setReligion]=useState("Christian, but lost faith in God as a teenager")
const[meeting,setMeeting]=useState("is wondering if there is a higher power and if it can benefit ");

const [isCheckedLocation, setIsCheckedLocation] = useState(true);

const[isCheckedSchool,setIsCheckedSchool]=useState(true)

const[isCheckedOccuption,setIsCheckedoccuption]=useState(true)

const[isCheckedReligion,setIsCheckedReligion]=useState(true)

const [isCheckedreason, setIsCheckedReason] = useState(true);

const handleInputName=(e)=>{
  setName(e.target.value)
}

const handleGender=(e)=>{
  setGender(e.target.value)
}


const RandomName=()=>{
  let randomname=["Rohan","Tilak","Ram","Shyam"]
  setName(randomname[Math.floor(Math.random()*4)])
  

}

const handleLocation=(e)=>{
  setLocation(e.target.value)
}

const RandomLocation=()=>{
  let randomlocation=["Chongqing, China","Provo, UT","Alberta, Canada","Rural West Tennessee"]
  setLocation(randomlocation[Math.floor(Math.random()*4)])
 

}

const handleSchool = (e) => {
  setSchool(e.target.value);
};

const RandomSchool=()=>{
  let randomschool=["Pitts Modern School","Carmel School","Dav swang","Delhi Public School"]
  setSchool(randomschool[Math.floor(Math.random()*4)])
  

}

const handleStream = (e) => {
  setStream(e.target.value);
};

const RandomMajor=()=>{
  let randommajor=["Science","commerce","Arts","Physics"]
  setStream(randommajor[Math.floor(Math.random()*4)])
  

}

const handleOccupation=(e)=>{
  setOccupation(e.target.value)
}

const RandomOccupation=()=>{
  let randomoccupation=["manager at a local restaurant","web-Developer","salesperson","elementary school teacher"]
  setOccupation(randomoccupation[Math.floor(Math.random()*4)])
 

}

const handleReligion=(e)=>{
  setReligion(e.target.value)
}


const RandomReligion=()=>{
  let randomreligion=["Christian, but rarely went to church","believing in Christ because  was taught to as  grew up","to be very religious, leads a local Bible study group","never discussing religion in  home"]
  setReligion(randomreligion[Math.floor(Math.random()*4)])
  }

  const handleMeeting=(e)=>{
    setMeeting(e.target.value)
  }

  const changeLocation = () => {
    setIsCheckedLocation(!isCheckedLocation);
  };

  const changeSchool=()=>{
    setIsCheckedSchool(!isCheckedSchool)
  }

  const ChangeOccuption = () => {
    setIsCheckedoccuption(!isCheckedOccuption);
  };

  const ChangeReligion=()=>{
    setIsCheckedReligion(!isCheckedReligion)
  }

  const ChangeReason = () => {
    setIsCheckedReason(!isCheckedreason);
  };

  return (
    <div className="App">
    <h1 className="heading">Bio Generator</h1>
    <div className="container">
      <div className='option'>
       <h2 className="box">Options</h2>
       <div className="box">
         <label>Name</label>
         <input type="text" placeholder="Enter Name" value={name} onChange={handleInputName}></input>
         <label>Gender</label>
         <select onChange={handleGender}>
         <option>Male</option>
         <option>Female</option>
         </select>
         <button onClick={RandomName}>Random name</button>
       </div>
       
       
       <div className='box'>
          <input type="checkbox"
          value="false"
          checked={isCheckedLocation}
          onChange={changeLocation}
          ></input>
          <label>Location</label>
          <input type="text" value={location} onChange={handleLocation}></input>
          <button onClick={RandomLocation}>Random Location</button>
       </div>


       <div className='box'>
        <input type="checkbox"
        value="false"
        checked={isCheckedSchool}
        onChange={changeSchool}
        
        ></input>
        <label>School</label>
        <input type="text" value={school} onchange={handleSchool}></input>
        <button onClick={RandomSchool}>Random School</button>
        <br/>
        <label>Major</label>
        <input type="text" value={stream} onChange={handleStream}></input>
        <button onClick={RandomMajor}>Random Major</button>
       </div>
       

       <div className='box'>
            <input type="checkbox"
            value="false"
            checked={isCheckedOccuption}
           onChange={ChangeOccuption}
            ></input>
            <label>Occupation</label>
            <input type="text" value={occupation} onChange={handleOccupation}></input>
            <button onClick={RandomOccupation}>Random Occupation</button>
       </div>

<div className='box'>
  <input type="checkbox"
   value="false"
   checked={isCheckedReligion}
   onChange={ChangeReligion}
  ></input>
  <label>Religious Background</label>
  <br/>
<textarea value={religion} onChange={handleReligion} style={{width:"400px" ,height:"90px"}}></textarea>
<br/>
<button onClick={RandomReligion}>Random religion</button>
</div>

<div className='box'>
  <input type="checkbox"
  value="false"
  checked={isCheckedreason}
  onChange={ChangeReason}
  ></input>
  <label >Reason for meeting with missionaries</label>
  <textarea className='textarea' value={meeting} onChange={handleMeeting}></textarea>

  <button className="selectbutton" style={{backgroundColor:"orange"}} onClick={()=>setMeeting("likes reading the Bible and talking about it")}>Restoration</button>


   <button className="selectbutton" style={{backgroundColor:"Pink"}} onClick={()=>setMeeting("struggles to understand why bad things happen to good people")}>Plan of Salavation</button>


  <button  className="selectbutton" style={{backgroundColor:"lightblue"}} onClick={()=>setMeeting("is looking to develop a more personal relationship with God")}>Gospel of Christ</button>

  <button  className="selectbutton" style={{backgroundColor:"green"}} onClick={()=>setMeeting("has recently lost a loved one, and is looking for ways to find peace during this difficult time")}>Any Lesson</button>

</div>

      </div>

      <div className="right" >
            <h2 className="box">Result</h2>

            <div className="box">
          {name} {isCheckedLocation  ? `is from the ${location}`:null} 
            </div>
      </div>

    </div>
    </div>
  );
}

export default Bio;
