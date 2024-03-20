// src/00-objectball.js

// Part 1: Building the Object
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
          "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
          "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
          "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
        }
      }
    };
  }
  
  // Function to find the number of points scored for a player
  function numPointsScored(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let players = game[teamKey].players;
      if (playerName in players) {
        return players[playerName].points;
      }
    }
    return null; // Player not found
  }
  
  // Function to find the shoe size of a player
  function shoeSize(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let players = game[teamKey].players;
      if (playerName in players) {
        return players[playerName].shoe;
      }
    }
    return null; // Player not found
  }
  
  // Function to find the colors of a team
  function teamColors(teamName) {
    let game = gameObject();
    for (let teamKey in game) {
      if (game[teamKey].teamName === teamName) {
        return game[teamKey].colors;
      }
    }
    return null; // Team not found
  }
  
  // Function to return an array of team names
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // Function to return an array of jersey numbers for a team
  function playerNumbers(teamName) {
    let game = gameObject();
    for (let teamKey in game) {
      if (game[teamKey].teamName === teamName) {
        let players = game[teamKey].players;
        return Object.values(players).map(player => player.number);
      }
    }
    return null; // Team not found
  }
  
  // Function to return an object of player's stats
  function playerStats(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let players = game[teamKey].players;
      if (playerName in players) {
        return players[playerName];
      }
    }
    return null; // Player not found
  }
  
  // Function to return the number of rebounds associated with the player that has the largest shoe size
  function bigShoeRebounds() {
    let game = gameObject();
    let largestShoeSize = -Infinity;
    let playerWithLargestShoe;
    for (let teamKey in game) {
      let players = game[teamKey].players;
      for (let player in players) {
        if (players[player].shoe > largestShoeSize) {
          largestShoeSize = players[player].shoe;
          playerWithLargestShoe = player;
        }
      }
    }
    return game.home.players[playerWithLargestShoe].rebounds || game.away.players[playerWithLargestShoe].rebounds;
  }
  
  // Example usage:
  console.log(gameObject()); // Check the created object
  
  
  