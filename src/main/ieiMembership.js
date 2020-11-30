import React, {component, useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';
function IEIMembership(){
    return <div id="main-section">
    <a href="#header" class="btn-get-started scrollto backtotop"><i class="fa fa-chevron-up icon-color" aria-hidden="true"></i></a>
    <div className="members">
        <h1 className="members-heading" id="header">IEI Members</h1>
    </div>
    <div className="members-table">
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
                <tr>
                <th scope="row"  className="boo">1</th>
                        <td>Divyakumar Solanki</td>
                        <td>divyasolanki98@gmail.com</td>
                        <td>93794382</td>
                        <td>
                        Adaptive Signal Processing, Embedded Systems
                        </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Divyakumar Solanki</td>
                <td>divyasolanki98@gmail.com</td>
                <td>93794382</td>
                <td>
                        Adaptive Signal Processing, Embedded Systems
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Divyakumar Solanki</td>
                <td>divyasolanki98@gmail.com</td>
                <td>93794382</td>
                <td>
                        Adaptive Signal Processing, Embedded Systems
                </td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>Divyakumar Solanki</td>
                <td>divyasolanki98@gmail.com</td>
                <td>93794382</td>
                <td>
                        Adaptive Signal Processing, Embedded Systems
                </td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <td>Divyakumar Solanki</td>
                <td>divyasolanki98@gmail.com</td>
                <td>93794382</td>
                <td>
                        Adaptive Signal Processing, Embedded Systems
                </td>
                </tr>
                <tr>
                <th scope="row">6</th>
                <td>Divyakumar Solanki</td>
                <td>divyasolanki98@gmail.com</td>
                <td>93794382</td>
                <td>
                        Adaptive Signal Processing, Embedded Systems
                </td>
                </tr>
                <tr>
                <th scope="row">7</th>
                <td>Divyakumar Solanki</td>
                <td>divyasolanki98@gmail.com</td>
                <td>93794382</td>
                <td>
                        Adaptive Signal Processing, Embedded Systems
                </td>
                </tr>
                <tr>
                <th scope="row">8</th>
                        <td>Divyakumar Solanki</td>
                        <td>divyasolanki98@gmail.com</td>
                        <td>93794382</td>
                        <td>
                        Adaptive Signal Processing, Embedded Systems
                        </td>
                </tr>
                <tr>
                <th scope="row">9</th>
                <td>Divyakumar Solanki</td>
                <td>divyasolanki98@gmail.com</td>
                <td>93794382</td>
                <td>
                        Adaptive Signal Processing, Embedded Systems
                </td>
                </tr>
                <tr>
                <th scope="row">10</th>
                <td>Divyakumar Solanki</td>
                <td>divyasolanki98@gmail.com</td>
                <td>93794382</td>
                <td>
                        Adaptive Signal Processing, Embedded Systems
                </td>
                </tr>
                <tr>
                <th scope="row">11</th>
                <td>Divyakumar Solanki</td>
                <td>divyasolanki98@gmail.com</td>
                <td>93794382</td>
                <td>
                        Adaptive Signal Processing, Embedded Systems
                </td>
                </tr>
                <tr>
                <th scope="row">12</th>
                <td>Divyakumar Solanki</td>
                <td>divyasolanki98@gmail.com</td>
                <td>93794382</td>
                <td>
                        Adaptive Signal Processing, Embedded Systems
                </td>
                </tr>
                <tr>
                <th scope="row">13</th>
                <td>Divyakumar Solanki</td>
                <td>divyasolanki98@gmail.com</td>
                <td>93794382</td>
                <td>
                        Adaptive Signal Processing, Embedded Systems
                </td>
                </tr>
                <tr>
                <th scope="row">14</th>
                <td>Divyakumar Solanki</td>
                <td>divyasolanki98@gmail.com</td>
                <td>93794382</td>
                <td>
                        Adaptive Signal Processing, Embedded Systems
                </td>
                </tr>
            </tbody>
        </table>
 
    </div>
<div className="p">
<table class="p-table-box ">
    <tr className="p-table-box-detail ">
        <th className="p-table-box-detail-head" >Sr.</th>
        <td className="p-table-box-detail-text">1</td>
    </tr>
    <tr className="p-table-box-detail ">
        <th className="p-table-box-detail-head">Name</th>
        <td className="p-table-box-detail-text">Jinal Bhanushali</td>
    </tr>
    <tr className="p-table-box-detail ">
        <th className="p-table-box-detail-head" >Email</th>
        <td className="p-table-box-detail-text">jinalbhanushali0628@gmail.com</td>
    </tr>
    <tr className="p-table-box-detail ">
        <th className="p-table-box-detail-head" >membership-no</th>
        <td className="p-table-box-detail-text">123456</td>
    </tr>
    <tr className="p-table-box-detail ">
        <th className="p-table-box-detail-head">Area Of Interest</th>
        <td className="p-table-box-detail-text"> Web Development, Programing, Web Appalication Development</td>
    </tr>
            
</table>
<table class="p-table-box ">
    <tr className="p-table-box-detail ">
        <th className="p-table-box-detail-head" >Sr.</th>
        <td className="p-table-box-detail-text">1</td>
    </tr>
    <tr className="p-table-box-detail ">
        <th className="p-table-box-detail-head">Name</th>
        <td className="p-table-box-detail-text">Jinal Bhanushali</td>
    </tr>
    <tr className="p-table-box-detail ">
        <th className="p-table-box-detail-head" >Email</th>
        <td className="p-table-box-detail-text">jinalbhanushali0628@gmail.com</td>
    </tr>
    <tr className="p-table-box-detail ">
        <th className="p-table-box-detail-head" >membership-no</th>
        <td className="p-table-box-detail-text">123456</td>
    </tr>
    <tr className="p-table-box-detail ">
        <th className="p-table-box-detail-head">Area Of Interest</th>
        <td className="p-table-box-detail-text">Web Development, Programing</td>
    </tr>
            
</table>
    </div>
     {/* <!-- Footer Section  --> */}

    <Footer></Footer>
    
    </div>
}
export default IEIMembership;