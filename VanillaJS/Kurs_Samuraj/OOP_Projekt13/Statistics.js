class Statistics{
  constructor(){
    this.gameResults = [];
  }
  addGameToStatistics(win, bid){
    let gameRestult = {
      win,
      bid
    }
    this.gameResults.push(gameRestult);
  }
  showGameStatistics(){
    let games = this.gameResults.length;
    //moja metoda
    // let wins = 0;
    // let loses = 0;
    // this.gameResults.forEach(result => {
    //   if(result.win === true){
    //     wins++;
    //   }else{
    //     loses++;
    //   }
    // });
    //lepsza metoda z filter
    let wins = this.gameResults.filter(result => result.win).length;
    let loses = this.gameResults.filter(result => !result.win).length;
    return [games, wins, loses];
  }
}