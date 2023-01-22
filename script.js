const form = document.querySelector('form');
const constructor = new NLWSetup(form);

const data = { 
    run: ['01-01', '01-02', '01-04', '01-05', '01-06', '01-07', '01-08', '01-09'], 
    water: ['01-04', '01-05'],
    food: ['01-01', '01-03'],
  }
  
constructor.setData(data)
constructor.load();