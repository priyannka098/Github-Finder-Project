//init github
const github=new Github();
//init UI
const ui=new UI(); 
//Search input
const searchUser=document.getElementById('SearchUser');
//Search input event listener
searchUser.addEventListener('keyup',(e)=>{
    //Get input text
    const userText=document.getElementById('SearchUser').value;

    if(userText!=''){
        //make an http call
        github.getUser(userText)
        .then(data => {
            console.log(JSON.stringify(data));
            if(data.profile.message==='Not Found'){
                
                //Show alert
                ui.showAlert('User not found','alert alert-danger');
            } else{
                //Show profile
            
                ui.showProfile(data.profile);
               ui.showRepos(data.repos);
               
            

            }
        })   
    }
    else{
        //clear profile
        ui.clearProfile();
        ui.clearRepo();     
    }
 });




