class Github{
    constructor(){
        this.client_id='411a6c81d6343968fed8';                                //to add property
        this.client_secret= 'aabb9429c948d7064700ea1787290378bfc02b9e' ;
         this.repos_count=5;
         this.repos_sort='created:asc' ;     //to add property
    }
    async getUser(user) {
        const ProfileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);  //fetch URL

        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);  //fetch URL
                                        

        const profile= await ProfileResponse.json();
        const repos= await repoResponse.json();
        const response = {
            profile,
            repos
        }
        return response;
    }                           
}