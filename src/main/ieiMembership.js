import React, {component, useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';
function IEIMembership(){
    const [search,setsearch]=useState('');
    const [MemberDetail,setMemberDetail] = useState([
        {
            no:"1",
            name:"jinal bhanushali",
            fullname:"Jinal Bhanushali",
            email:"jinal@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },{
            no:"2",
           name:"divyakumar Sharma ",
           fullname:" Divya Kumar Sharma",
           email:"divyashrma98@gmail.com",
           memberno:"93794382",
           interest:" Adaptive Signal Processing, Embedded Systems" 
        },{
            no:"3",
            name:"jinal Jadeja",
            fullname:" Jinal Jadeja",
            email:"jinal549@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         }, {
            no:"4",
           name:"raj udeja",
           fullname:"Raj Udeja",
           email:"raj94328@gmail.com",
           memberno:"93794382",
           interest:" Web Development, Programing, Web Appalication Development" 
        },{
            no:"5",
            name:"drasti trivahi",
            fullname:"Drasti Trivahi",
            email:"drasti985@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         }, {
            no:"6",
           name:"yash mishra",
           fullname:"Yash Mishra",
           email:"yash@gmail.com",
           memberno:"93794382",
           interest:" Adaptive Signal Processing, Embedded Systems" 
        },{
            no:"7",
            name:"riya sharma",
            fullname:"Riya Sharma",
            email:"riya@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },{
            no:"8",
            name:"zalak khan",
            fullname:"Zalak Khan",
            email:"zalak@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },{
            no:"9",
            name:"sanvetri bhanushali.",
            fullname:"Sanventri Bhanushali.",
            email:"sanvetri@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },{
            no:"10",
           name:"shreya shigh",
           fullname:"Shreya Shigh",
           email:"shreya@gmail.com",
           memberno:"93794382",
           interest:" Web Development, Programing, Web Appalication Development" 
        },{
            no:"11",
            name:"shivam king",
            fullname:"Shivam King",
            email:"shivam@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },
         {
            no:"12",
           name:"priyam rajde",
           fullname:"Priyam Rajde",
           email:"priyam@gmail.com",
           memberno:"93794382",
           interest:" Adaptive Signal Processing, Embedded Systems" 
        },{
            no:"13",
            name:"lalita chaudhary",
            fullname:"Lalita Chaudhary",
            email:"lalita@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },
         {
            no:"14",
           name:"rajesh lunawala ",
           fullname:"Rajesh Lunawala",
           email:"rajesh@gmail.com",
           memberno:"93794382",
           interest:" Web Development, Programing, Web Appalication Development" 
        },{
            no:"15",
            name:"payal mullah",
            fullname:"Payal Mullah",
            email:"payal@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },
         {
            no:"16",
           name:"neha sathwara",
           fullname:"Neha  Sathwara",
           email:"neha@gmail.com",
           memberno:"93794382",
           interest:" Adaptive Signal Processing, Embedded Systems" 
        },{
            no:"17",
            name:"om thakker",
            fullname:" Om Thakkar",
            email:"om@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },{
            no:"18",
            name:"karan hudbada",
            fullname:"Karan Hudbada",
            email:"karan@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },
         {
            no:"19",
           name:"jay valvani",
           fullname:"Jay Valvani",
           email:"jay@gmail.com",
           memberno:"93794382",
           interest:" Web Development, Programing, Web Appalication Development" 
        },{
            no:"20",
            name:"riyansh shudi",
            fullname:"Riyansh Shudi",
            email:"riyansh@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },
         {
            no:"21",
           name:"vansh rai",
           fullname:" Vansh Rai",
           email:"vansh@gmail.com",
           memberno:"93794382",
           interest:" Adaptive Signal Processing, Embedded Systems" 
        },{
            no:"22",
            name:"varun rajput",
            fullname:"varun Rajput",
            email:"varun@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },
    ])
    const DetailsArr = [
        {
            no:"1",
            name:"jinal bhanushali",
            fullname:"Jinal Bhanushali",
            email:"jinal@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },{
            no:"2",
           name:"divyakumar Sharma ",
           fullname:" Divya Kumar Sharma",
           email:"divyashrma98@gmail.com",
           memberno:"93794382",
           interest:" Adaptive Signal Processing, Embedded Systems" 
        },{
            no:"3",
            name:"jinal Jadeja",
            fullname:" Jinal Jadeja",
            email:"jinal549@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         }, {
            no:"4",
           name:"raj udeja",
           fullname:"Raj Udeja",
           email:"raj94328@gmail.com",
           memberno:"93794382",
           interest:" Web Development, Programing, Web Appalication Development" 
        },{
            no:"5",
            name:"drasti trivahi",
            fullname:"Drasti Trivahi",
            email:"drasti985@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         }, {
            no:"6",
           name:"yash mishra",
           fullname:"Yash Mishra",
           email:"yash@gmail.com",
           memberno:"93794382",
           interest:" Adaptive Signal Processing, Embedded Systems" 
        },{
            no:"7",
            name:"riya sharma",
            fullname:"Riya Sharma",
            email:"riya@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },{
            no:"8",
            name:"zalak khan",
            fullname:"Zalak Khan",
            email:"zalak@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },{
            no:"9",
            name:"sanvetri bhanushali.",
            fullname:"Sanventri Bhanushali.",
            email:"sanvetri@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },{
            no:"10",
           name:"shreya shigh",
           fullname:"Shreya Shigh",
           email:"shreya@gmail.com",
           memberno:"93794382",
           interest:" Web Development, Programing, Web Appalication Development" 
        },{
            no:"11",
            name:"shivam king",
            fullname:"Shivam King",
            email:"shivam@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },
         {
            no:"12",
           name:"priyam rajde",
           fullname:"Priyam Rajde",
           email:"priyam@gmail.com",
           memberno:"93794382",
           interest:" Adaptive Signal Processing, Embedded Systems" 
        },{
            no:"13",
            name:"lalita chaudhary",
            fullname:"Lalita Chaudhary",
            email:"lalita@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },
         {
            no:"14",
           name:"rajesh lunawala ",
           fullname:"Rajesh Lunawala",
           email:"rajesh@gmail.com",
           memberno:"93794382",
           interest:" Web Development, Programing, Web Appalication Development" 
        },{
            no:"15",
            name:"payal mullah",
            fullname:"Payal Mullah",
            email:"payal@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },
         {
            no:"16",
           name:"neha sathwara",
           fullname:"Neha  Sathwara",
           email:"neha@gmail.com",
           memberno:"93794382",
           interest:" Adaptive Signal Processing, Embedded Systems" 
        },{
            no:"17",
            name:"om thakker",
            fullname:" Om Thakkar",
            email:"om@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },{
            no:"18",
            name:"karan hudbada",
            fullname:"Karan Hudbada",
            email:"karan@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },
         {
            no:"19",
           name:"jay valvani",
           fullname:"Jay Valvani",
           email:"jay@gmail.com",
           memberno:"93794382",
           interest:" Web Development, Programing, Web Appalication Development" 
        },{
            no:"20",
            name:"riyansh shudi",
            fullname:"Riyansh Shudi",
            email:"riyansh@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },
         {
            no:"21",
           name:"vansh rai",
           fullname:" Vansh Rai",
           email:"vansh@gmail.com",
           memberno:"93794382",
           interest:" Adaptive Signal Processing, Embedded Systems" 
        },{
            no:"22",
            name:"varun rajput",
            fullname:"varun Rajput",
            email:"varun@gmail.com",
            memberno:"97357889",
            interest:"Web Development, Web Application Development" 
         },
    ]
    var arr=[]
    function SearchValueSubmit(e){
        setMemberDetail(DetailsArr)
        setsearch(e.target.value.toLocaleLowerCase())
        console.log(search)
    }
    function searchButton(){
        MemberDetail.map((item,index)=>{
            if(item.name.includes(search)){
                console.log(item.name + "   " +index)
                arr.push(item)
            } 
        })
        setMemberDetail(arr)
        arr=[]
        // console.log("this is member array")
        console.log(MemberDetail)
    }
    return <div id="main-section">
    <a href="#header" class="btn-get-started scrollto backtotop"><i class="fa fa-chevron-up icon-color" aria-hidden="true"></i></a>
    <div className="members">
        <h1 className="members-heading" id="header">IEI Members</h1>
    </div>
    <div className="members-table">
        <form className="row py-3 pl-4">
            <div className="col-xl-4 col-sm-6 form-group">
                <input list="browsers" name="browser" id="browser" className="form-control" placeholder="Search Your Name" value={search} onChange={SearchValueSubmit}/>
            </div>
            <div className="col-xl-1 col-sm-3 form-group">
                <input type="button"  className="form-control " onClick={searchButton} value="Search"/>
            </div>
        </form>

    <datalist id="browsers">
        {  
            DetailsArr.map((item,index)=>(
                        <option value={item.fullname}></option>   
            ))
        }  
   </datalist>
        
        <table class="table table-hover table-light">
            <thead  class="thead-light">
                <tr>
                    <th scope="col" className="tsr">Sr.</th>
                    <th scope="col" className="">Name</th>
                    <th scope="col" >Email</th>
                    <th scope="col">IEI No.</th>
                    <th scope="col">Area of Interest</th>
                </tr>
            </thead>
            <tbody>
                {
                    MemberDetail.map((item,index)=>(
                        
                            <tr>
                                <th scope="row" key={index}>{item.no}</th>
                                <td>{item.fullname}</td>
                                <td>{item.email}</td>
                                <td>{item.memberno}</td>
                                <td>
                                    {item.interest}
                                </td>
                            </tr>  
                    ))
                }  
            </tbody>
        </table>
 
    </div>
<div className="p">
<form className="row pl-4 pt-2">
            <div className="col-8  form-group">
                <input list="browsers" name="browser" id="browser" className="form-control" placeholder="Search Your Name" value={search} onChange={SearchValueSubmit}/>
            </div>
            <div className="col-3 form-group">
                <button  className="form-control" onClick={searchButton}>Search</button>
            </div>
        </form>

    <datalist id="browsers">
        {  
            DetailsArr.map((item,index)=>(
                        <option value={item.fullname}></option>   
            ))
        }  
   </datalist>
{
    MemberDetail.map((item,index)=>(
        <table class="p-table-box ">
            <tr className="p-table-box-detail ">
                <th className="p-table-box-detail-head" >Sr.</th>
                <td className="p-table-box-detail-text" key={index}>{item.no}</td>
            </tr>
            <tr className="p-table-box-detail ">
                <th className="p-table-box-detail-head">Name</th>
                <td className="p-table-box-detail-text">{item.fullname}</td>
            </tr>
            <tr className="p-table-box-detail ">
                <th className="p-table-box-detail-head" >Email</th>
                <td className="p-table-box-detail-text">{item.email}</td>
            </tr>
            <tr className="p-table-box-detail ">
                <th className="p-table-box-detail-head" >membership-no</th>
                <td className="p-table-box-detail-text">{item.memberno}</td>
            </tr>
            <tr className="p-table-box-detail ">
                <th className="p-table-box-detail-head">Area Of Interest</th>
                <td className="p-table-box-detail-text">{item.interest}</td>
            </tr>
                    
        </table>
    ))
}


    </div>
     {/* <!-- Footer Section  --> */}

    <Footer></Footer>
    
    </div>
}
export default IEIMembership;


