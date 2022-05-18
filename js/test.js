ej1();
function ej1(){
    let d1 = parseInt(prompt("Enter value to bucket x"));
    let d2 = parseInt(prompt("Enter value to bucket y"));
    let d3 = parseInt(prompt("Enter value to  z" ));
    let b1 = 0;
    let b2 = 0;
   

    let html = `<table>
    <thead>
        <tr>
            <th>Bucket x</th>
            <th>Bucket y</th>
            <th>explanation</th>
        </tr>
    </thead>
    <tbody>`;

    if(d1 < d2){
        b1 = d1;
        for (let index = 0; b2 < d3; index++) {
            b1 = d1;
            html += `<tr><td>`+b1+`</td>
                    <td>`+b2+`</td>
                    <td>Fill bucket x</td></tr>`;
            b2=transfer(b1,b2,d1,d2);
            b1=0;
            if(b2 == d3){
                html += `<tr><td>`+b1+`</td>
                <td>`+b2+`</td>
                <td>Transfer bucket x to bucket y Solved</td></tr>`;
            }else if(b2 > d3){
                b2 = d2;
                html += `<tr><td>`+b1+`</td>
                <td>`+b2+`</td>
                <td>Transfer bucket x to bucket y Solved</td></tr>`;
            }else{
                html += `<tr><td>`+b1+`</td>
                <td>`+b2+`</td>
                <td>Transfer bucket x to bucket y</td></tr>`;
            }   
        }
        if(b2 > d3){
            document.getElementById("container").innerHTML="there's no solution!";
            return;
        }
        html+=`</tbody></table> `;
        document.getElementById("container").innerHTML=html;
    }else{
        b2 = d2;
        for (let index = 0; b1 < d3; index++) {
            b2 = d2;
            html += `<tr><td>`+b1+`</td>
                    <td>`+b2+`</td>
                    <td>Fill bucket y</td></tr>`;
            b1=transfer(b2,b1,d2,d1);
            b2=0;
            if(b1 == d3){
                html += `<tr><td>`+b1+`</td>
                <td>`+b2+`</td>
                <td>Transfer bucket y to bucket x Solved</td></tr>`;
            }else if(b1 > d3){
                b1 = d1;
                html += `<tr><td>`+b1+`</td>
                <td>`+b2+`</td>
                <td>Transfer bucket y to bucket x Solved</td></tr>`;
            }else{
                html += `<tr><td>`+b1+`</td>
                <td>`+b2+`</td>
                <td>Transfer bucket y to bucket x</td></tr>`;
            }
        }
        if(b1 > d3){
            document.getElementById("container").innerHTML="there's no solution!";
            return;
        }
        html+=`</tbody></table> `;
        document.getElementById("container").innerHTML=html;
    }
}
function transfer(b1,b2,d1,d2){
    for (let index = 0; index < b1; index++) {
        if(b2 != d2){
            b2++;
        }
    }
    return b2;
}
