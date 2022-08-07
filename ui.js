class UI{
    constructor(){
        this.profile=document.getElementById('profile');   //declare property
     }
     //Display profile in UI
     showProfile(user){
        this.profile.innerHTML=`
        <div> 
            <div class="content">
               <div class="profile-1">
               <img class="img-fluid" src="${user.avatar_url}">          
               <a href="${user.html_url}" target="-blank" class="badge badge-primary" style="width:100%;"> View Profile</a>
               </div> 
               
               <div class="profile-2">
                  <div  class="box-1">
                     <span class="badge badge-info">Following:${user.following}</span>
                     <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                     <span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
                     <span class="badge badge-success">Followers:${user.followers}</span>
                  </div>

               <div class="box-2">
                     <span class="list-item">Company: ${user.company}</span>
                     <span class="list-item">Website/blog: ${user.blog}</span>
                     <span class="list-item">Location: ${user.location}</span>
                     <span class="list-item">Member Since: ${user.created_at}</span>
                  
               </div>

            </div>
         </div>
      </div
        
        <h2 class="page-heading mb-3">Latest Repos</h2>
 
        `;
      
     }
     //Show Profile repos
     showRepos(repos){
   //   console.log("vhjjm")
      let output=' ';
      repos.forEach(function(repo){
         output +=  `
         <div class="contain">
            <div class="row">
               <div class="col">
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
               </div>
      
               <div class="col">
                  <span class=" badge badge-primary">Stars: ${repo.stargazers_count} </span>
                  <span class="badge badge-secondary">Watchers:${repo.watchers_count}</span>
                  <span class="badge badge-success">Forks:${repo.forks_count}</span>
        
               </div>
            </div>
         </div>
         
         `;
      });
      console.log(output);
      //output repos
      document.getElementById('repos').innerHTML=output;

     }

     //Show Alert message
   showAlert( message,className) {
      //clear any remaining alerts+
      this.clearAlert();
      //create div
      const div=document.createElement('div');
      //add classes
      div.className=className;
      //add Text
      div.appendChild(document.createTextNode(message));
      //Get parent
      const card1=document.querySelector('.card');
      //Get Search a box
      const search=document.querySelector('.container');
      //Insert alert()
      card1.insertBefore(div,search );

            //Timeout after 3 sec
      setTimeout(()=> {
         this.clearAlert();
      },3000);
   }

      //clear alert message
      clearAlert() {
         const currentAlert=document.querySelector('.alert');

         if(currentAlert){
            currentAlert.remove();
         }
      

   }

   

//Clear profile
     clearProfile(){
     this.profile.innerHTML='';
     }
   

   clearRepo(){
      document.getElementById('repos').innerHTML='';
      }
    }

   

   
