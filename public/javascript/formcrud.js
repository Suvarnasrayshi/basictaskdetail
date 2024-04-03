
        function validate() {
            let fname = document.querySelector("#fname").value;
            console.log(fname);
            var name = document.getElementById("fnamein");
            if (fname == "") {
                fnamein.innerHTML = "<p>please enter the details here</p>";
                return false;
            }
            else if (!/^[A-Za-z]+$/.test(fname)) {
                fnamein.innerHTML = "<p>please enter correct name</p>";
                return false;
            }


            let lname = document.querySelector("#lname").value;
            console.log(lname);
            var name = document.getElementById("lnamein");
            if (lname == "") {
                lnamein.innerHTML = "<p>please enter the last name here</p>";
                return false;
            }
            else if (!/^[A-Za-z]+$/.test(lname)) {
                lnamein.innerHTML = "<p>please enter correct last name</p>";
                return false;
            }
            let designation = document.querySelector("#designation").value;
            console.log(designation);
            var name = document.getElementById("designationin");
            if (designation == "") {
                designationin.innerHTML = "<p>please enter the details here</p>";
                return false;
            }
            else if (!/^[A-Za-z]+$/.test(designation)) {
                designation.innerHTML = "<p>please enter correct designation</p>";
                return false;
            }


            let phone = document.querySelector("#phone").value;
            console.log(phone);
            var name = document.getElementById("phonein");
            if (phone == "") {
                phonein.innerHTML = "<p>please enter the phone number here</p>";
                return false;
            }
            else if (!/^\(?([0-9]{3})\)?([0-9]{3})?([0-9]{4})$/.test(phone)) {
                phonein.innerHTML = "<p>please enter correct phone number</p>";
                return false;
            }


            let email = document.querySelector("#email").value;
            console.log(email);
            var name = document.getElementById("emailin");
            if (email == "") {
                emailin.innerHTML = "<p>please enter the email address here</p>";
                return false;
            }
            else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                .test(email)) {
                emailin.innerHTML = "<p>please enter correct email address</p>";
                return false;
            }

            var genderM = form.male;
            var genderF = form.female;
            var name = document.getElementById("genderin");
            if (genderM.checked == false && genderF.checked == false) {
                genderin.innerHTML = "<p>You must select male or female</p>";
                return false;
            }
            let address = document.querySelector("#address").value;
            console.log(address);
            var name = document.getElementById("addressin");
            if (address == "") {
                addressin.innerHTML = "<p>please enter address here</p>";
                return false;
            }
            let address2 = document.querySelector("#address2").value;
            console.log(address2);
            var name = document.getElementById("addressin2");
            if (address2 == "") {
                addressin2.innerHTML = "<p>please enter address here</p>";
                return false;
            }
            let city = document.querySelector("#city").value;
            console.log(city);
            var name = document.getElementById("cityin");
            if (city == "") {
                cityin.innerHTML = "<p>please enter city here</p>";
                return false;
            }
            let zipcode = document.querySelector("#zipcode").value;
            console.log(zipcode);
            var name = document.getElementById("zipcodein");
            if (zipcode == "") {
                zipcodein.innerHTML = "<p>please enter the phone number here</p>";
                return false;
            }
            else if (!/^\d{6}$/.test(zipcode)) {
                zipcodein.innerHTML = "<p>please enter correct phone number</p>";
                return false;
            }
            let board1in = document.querySelector("#board1").value;
            console.log(board1);
            var name = document.getElementById("board1in");
            if (board1 == "") {
                board1in.innerHTML = "<p>please enter board here</p>";
                return false;
            }

            let board2 = document.querySelector("#board2").value;
            console.log(board2);
            var name = document.getElementById("board2in");
            if (board2 == "") {
                board2in.innerHTML = "<p>please enter board here</p>";
                return false;
            }
            let coursename1 = document.querySelector("#coursename1").value;
            console.log(coursename1);
            var name = document.getElementById("coursename1in");
            if (coursename1 == "") {
                coursename1in.innerHTML = "<p>please enter board here</p>";
                return false;
            }
            let coursename2 = document.querySelector("#coursename2").value;
            console.log(coursename2);
            var name = document.getElementById("coursename2in");
            if (coursename2 == "") {
                coursename2in.innerHTML = "<p>please enter coursename here</p>";
                return false;
            }
        }


        function plus() {

            var row = document.getElementsByClassName("row")[0];
            div = document.createElement("div");
            div.setAttribute("class", "referance")

            div.innerHTML += `
                           <div>
                           
                           <label for="Name">Name</label>
                           <input type="text" id="nameref" name="nameref[]">
                           <label for="Contact number">Contact number:</label>
                           <input type="text" id="Contactnumber" name="Contactnumber[]">
                           <label for="Relation">Relation</label>
                           <input type="text" id="Relation" name="Relation[]"><br>
                       </div>
                                        `;

            row.appendChild(div);
        }
        function sub() {
            console.log("hello");

            {

                row = document.getElementsByClassName("row");
                row[0].removeChild(row[0].lastElementChild);

                console.log(row);
            }
        }

        educationdetail = 2
        function eduplus() {

            var row2 = document.getElementsByClassName("row2")[0];
            div = document.createElement("div");
            div.setAttribute("class", "educationdetail")

            div.innerHTML += `
                           <div>
                           
                            <select id="education" name="education[]">
                        <option value="SSC" name="SSC">SSC</option>
                        <option value="HSC" name="HSC">HSC</option>
                        <option value="Bachelors" name="Bachelors">Bachelors</option>
                        <option value="Masters" name="Masters">Masters</option>
                    </select>
                </td>
               <label for="board">Name of the Board</label>
                <input type="text" id="board" name="board[]" placeholder="enter board here">
                <label for="passingyear">Passing Year</label>
                <input type="date" id="passingyear" name="passingyear[]" placeholder="enter passingyear here">
                <label for="percentage">Percentage:</label>
                 <input type="text" id="percentage" name="percentage[]" placeholder="enter percentage here">
                <br><hr>
                       </div>
                                        `;
            educationdetail++;
            row2.appendChild(div);
        }
        function edusub() {
            console.log("hello");
            if (educationdetail > 2) {

                row2 = document.getElementsByClassName("row2");
                row2[0].removeChild(row2[0].lastElementChild);
                educationdetail--;
                console.log(row2);
            }
        }

        function explus() {

            var row1 = document.getElementsByClassName("row1")[0];
            div = document.createElement("div");
            div.setAttribute("class", "experience")

            div.innerHTML += `
                           <div>
                <label for="Company Name">Company Name</label>
                <input type="text" id="CompanyName" name="CompanyName">
                <label for="designation">Designation:</label>
                <input type="text" id="designation1" name="designation1">
                <label for="From">From</label>
                <input type="text" id="From1" name="From1">
                <label for="To">To</label>
                <input type="text" id="To1" name="To1">
                <br> <br>
            </div>
                                        `;

            row1.appendChild(div);
        }
        function exsub() {
            console.log("hello");

            {

                row1 = document.getElementsByClassName("row1");
                row1[0].removeChild(row1[0].lastElementChild);

                console.log(row1);
            }
        }