import React,{useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import mockdata from './mockdata.json';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import "./App.css";
import Controls from './control';
import AddIcon from '@material-ui/icons/Add';
import Popup from './popup';
import  Stuform  from './studentform';



export default function Tabledata() {

const[openPopup,setOpenPopup]=useState(false)
    const[data,setData]=useState(mockdata);

    const[value,setValue]=useState('');
    const[tableFilter,setTableFilter]=useState([]);
    const filterData=(e)=>{
        if(e.target.value!=""){
            setValue(e.target.value);
        const filterTable=data.filter(o=>Object.keys(o).some(k=>
            String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            setData([...data])
        }
    }
    const addorEdit=(data,resetForm)=>{
      resetForm()
      setOpenPopup(false)
setData(data())
  }
    return (
        <div className='content' align='center'>
         
         
                  <TextField label="search student" value={value} onChange={filterData}    InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}/>
<br></br>
<br></br>
<Controls.Button  text="Add Student" variant="contained" onClick={()=>setOpenPopup(true)} startIcon={<AddIcon/>}>
</Controls.Button>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell align-text="right" >E-Mail Id</TableCell>
                <TableCell align-text="right">College</TableCell> 
              </TableRow>
            </TableHead>
            {value.length >0?tableFilter.map((post) => (
            <TableBody>
           
    
                 <TableCell> {post.Name}</TableCell>
                  <TableCell> {post.email}</TableCell>
                  <TableCell> {post.college}</TableCell>
             
            </TableBody>
            ))
            :
            data.map((post) => (
                <TableBody>
               
        
                     <TableCell> {post.Name}</TableCell>
                      <TableCell> {post.email}</TableCell>
                      <TableCell> {post.college}</TableCell>
                 
                </TableBody>
                ))

        }
          </Table>     
        </TableContainer>
        <Popup
        title="Student Details"
openPopup={openPopup}
setOpenPopup={setOpenPopup}
 >
   <Stuform
   addorEdit={addorEdit}/>
</Popup>
     
     
    </div>
           
    );
            }
