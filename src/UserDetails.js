import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserDetails({myData}) {
    const navigator = useNavigate()
    const {name:{first, last, title}, gender, email, phone, dob:{date, age}, location:{city, country}, picture} = myData
    
    const rightAlign = {textAlign:"right"}
    const leftAlign = {
        textAlign:"left",
        paddingLeft:"2rem",
        }

        const isArabic = (text)=> {
            var pattern = /[\u0600-\u06FF\u0750-\u077F]/;
            let result = pattern.test(text);
            return result;
        }
    return (
  <div>
      <table>
          <tbody>
              <tr>
                <td><img style={{maxWidth:"100%"}} src={picture.large} alt="Pic1" /></td>
                <td>
                <table>
                    <tbody>
                    <tr>
                        <td style={rightAlign}>Name : </td>
                        <td style={leftAlign}> { !isArabic(first) ? `${title} ${first} ${last}` : `${first} ${last} ${title}` } </td>
                    </tr>
                    <tr>
                        <td style={rightAlign}>Gender : </td>
                        <td style={leftAlign}> {gender} </td>
                    </tr>
                    <tr>
                        <td style={rightAlign}>DOB / Age : </td>
                        <td style={leftAlign}> {`${date.split("T")[0]} / ${age}`} </td>
                    </tr>
                    <tr>
                        <td style={rightAlign}>Email : </td>
                        <td style={leftAlign}> {email} </td>
                    </tr>
                    <tr>
                        <td style={rightAlign}>Phone : </td>
                        <td style={leftAlign}> {phone} </td>
                    </tr>
                    <tr>
                        <td style={rightAlign}>City / Country : </td>
                        <td style={leftAlign}> {`${city} / ${country}`} </td>
                    </tr>
                    </tbody>
                </table>
                </td>
              </tr>
          </tbody>
          <tfoot>
              <tr>
                  <td style={{background:"orange", cursor:"pointer", textAlign:"center"}} onClick={()=>navigator('/')}>Go Back</td>
              </tr>
          </tfoot>
      </table>
  </div>
  );
}