import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import './index.css'
import axios from 'axios'
import { DatePicker } from '@mui/lab';
import { useState } from 'react';

function App() {

  const [dob, setDob] = useState<any>('')
  const [gender, setGender] = useState<any>('Male')
  const [data, setData] = useState<any>([])

  console.log(data)

  const submit = () => {
    axios.get(`http://127.0.0.1:8000/run?dob=${dob}&gender=${gender}}`)
      .then(function (response) {
        setData(response.data.return_value);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className="App font-['Poppins'] w-screen h-screen overflow-y-auto scrollbar">
      <div className="flex justify-center items-center p-3 shadow">
        <div className="text-3xl">Personalized Government Benefit Recommendation Platform</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="text-2xl w-[50%] text-center mt-5">
          We’re making access to government welfare schemes easy and hassle-free.
          Redefines public service in the age of data-driven solutions.
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center">
          <div className="mr-64">
            <InputLabel id="demo-simple-select-label">DOB</InputLabel>
            <input value={dob} onChange={(e) => setDob(e.target.value)} type="date" className='h-[55px] rounded' name="date of birth" ></input>
          </div>
          <div className="">
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              value={gender}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Gender"
              onChange={(e: any) => setGender(e.target.value)}
              sx={{ width: '200px' }}
            >
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
            </Select>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button disabled={dob === ''} className='w-[500px] hover:scale-[1.05] transition-all flex justify-center p-2 border shadow bg-[#5863f8] text-white rounded' onClick={submit}> Check Eligibility </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {data.length > 0 && <div className="">
          <div className="mt-[100px] font-bold text-xl">You are eligible for the following schemes: </div>
          <div className="">
            {data?.map((item: any) => (
              <div className="m-2 p-2 bg-[#5863f8] text-white">{item}</div>
            ))}
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
