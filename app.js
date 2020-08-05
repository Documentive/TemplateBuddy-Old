Vue.component('Resume',{ 
    template :`
    <form id = "form">
    <div id ="titleform"> <h1>{{name}}</h1></div>
    <div id="app">
        <v-app id="inspire">
          <v-container>
            <v-layout row>
              <v-flex>
             
                   
            
                  <h2>COMPLETE YOUR RESUME HEADING</h2>
                   <h3> Employers will use this information to contact you.</h3>
                   <div id = "img1">
                 <h1 id = "content">  We’re here to help you get the job
We designed our resume builder using data from the world’s 
#1 job site about how employers really read resumes.
 When your resume is complete, 
you can easily share your resume with millions of interested employers on Jobsite. </h1>
                    </div>
                    <br>
                    <label for = "input-1">{{a1}} </label>
<v-text-field type = "text" id="input-1"  placeholder = "e.g. John" required></v-text-field>

</br><!--v-text-field type = "text" name="input-2" v-bind:label="a2" placeholder="e.g. Williams" required></v-text-field>-->
</v-layout>
<label for = "input-2">{{a2}}</label>
<v-text-field type = "text" id="input-2"  placeholder="e.g. Williams" required></v-text-field>                      
<label for="input-3">Address</label>
<v-text-field type = "text" id = "input-3"  placeholder="e.g. 60, Collins st." required></v-text-field>
<label for="input-4"> {{a4}} </label>
<v-text-field type = "text" id = "input-4"  placeholder = "e.g. San Franciso" required> </v-text-field>
               
<label for= "input-5"> {{a5}}</label>

<v-text-field type = "text" id = "input-5" placeholder = "e.g. 60185"  required></v-text-field>
<v-text>
<label for = "selects" > Country </label>
<select id = "selects"  class = "selection" >
<option> Australia</option>
<option selected>  India </option>
<option> Hong Kong</option>
</select>
</v-text>
<br><br>
<label for = "input-6"> {{a7}} </label>

<v-text-field type = "text" id = "input-6" placeholder = "e.g. john_williams@example.com required"> </v-text-field>

<label for = "input-7"> {{a8}}<label>
<v-text-field type = "text" id = "input-7" placeholder  = "e.g. 202-555-0145" > </v-text-field>



<label for = "input-8"> {{a9}}<label>
<v-text-field type = "text" id = "input-8" placeholder  = "e.g. Harvard University" > </v-text-field>




<v-text>
<label for = "selects" > {{a10}} </label>
<select id = "selects"  class = "selection" >
<option> High school diploma</option>
<option >  GED </option>
<option selected> Associate of arts</option>
</select>
</v-text>

<br> <br>

<label for = "input-9"> Field of study<label>
<v-text-field type = "text" id = "input-9" placeholder  = "e.g. Engineering" > </v-text-field>


<label for = "input-10"> Skills<label>
<v-text-field type = "text" id = "input-10" placeholder  = "e.g. Project Management" > </v-text-field>


<label for = "input-11"> PROFESSIONAL SUMMARY<label>
<v-text-field type = "text" id = "input-11" placeholder  = "e.g. Write a short summary telling more about yourself, your strengths and experience. Feel free to use our pre-written examples.
" > </v-text-field>


<v-text>
<label for = "selects" > Working Experience </label>
<select id = "selects"  class = "selection" >
<option> 0 </option>
<option >  >2 </option>
<option selected> More than 5 </option>
</select>
</v-text>
<br> <br>
<label for = "input-12"> Certificates <label>
<v-text-field type = "text" id = "input-12" placeholder  = "e.g. Java Certified" > </v-text-field>



<v-text-field type ="submit" id = "submit"></v-text-field> 

              </v-flex>
            </v-layout>
          </v-container>
        </v-app>
      </div>
</div>  </form> `,
data () {
    return{
    name : "Resume Building Form",
    a1 : "First Name",
    a2 : "Last Name",
    a3: "Address",
    a4: "City",
    a5 : "ZIP code",
    a6: "Country",
    a7: "Email address",
    a8 : "Phone",
    a9 : "School name",
    a10 : "Select a degree"
    }
}

})





new Vue({

el: '#form',



});