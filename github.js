
class Github {
  
  constructor() {
    this.client_id = 'your client github/google id';
    this.client_secret = 'your client github/google secret key';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

async getUser(user) {
  const profileResponse = await fetch(
    `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // const profileData = await profileResponse.json();
    // return {
    //   profile: profileData
    // };
    
    //if name is same then we can use below return syntax
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    //curly braces because we are not returning simply data(array)
    //we are returning object(with repos, gists) instead
    return {
      profile,
      repos
    };

  }

}
