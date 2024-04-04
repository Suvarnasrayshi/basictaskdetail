
        async function logindata(){
            let formdata = document.getElementById("myform");
            let data = new FormData(formdata);
            const param = new URLSearchParams(data);
            const dataform = await new Response(param).text();
            console.log(typeof (dataform));
            let data2 = await fetch("http://localhost:3036/loginat",{
                method: "POST",
                headers:{
                    'Content-type':'application/x-www-form-urlencoded'
                },
                body:dataform
            })
            // console.log( await data2.json());
            // document.querySelector("#repassin").innerHTML = `<p style  ="font-size:14px">click here to go to <a href=http://localhost:3036/welcome> <b>DASHBOARD</b></p></a>`;
            result = await data2.json();
            document.querySelector("#repassin").innerHTML = result.msg;
          


        }