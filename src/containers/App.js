import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';


class App extends Component {

  state={
    persons:[{
      id:'af1',
      name:'Pon',
      age:28
    },{
      id:'br4',
      name:'Manu',
      age:29
    },{
      id:'cggf5',
      name:'Stephanie',
      age:26
    }],
  }

  switchNameHandler =(newName)=>{
    // console.log('Was clicked!');
    //Don't Do this: this.state.persons[0].name = 'Witchapon'
    this.setState({
      persons:[{
        name: newName,
        age:22
      },{

        name:'Manu',
        age:29
      },{

        name:'Stephanie',
        age:50
      }]
    }
  )}

  nameChangedHandler =(event,id)=>{

    const personIndex = this.state.persons.findIndex((p)=>{
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    // const person =Object.assign({},this.state.persons[personIndex]);

  
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons})
  }


  
  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    console.log(doesShow);
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  render() {

    let persons = null;
    let btnClass='';

    if(this.state.showPersons === true){
      persons = (
             <div>
               <Persons persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
               />
           </div>
      );

      btnClass = classes.Red;
    }

    let assignClasses = [];

    if(this.state.persons.length<=2){
      assignClasses.push(classes.red)
    }

    if(this.state.persons.length <=1){
      assignClasses.push(classes.bold);
    }

    return (
    
      <div className={classes.App}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignClasses.join( ' ' )}>This is really working!</p>
      <button
        className={btnClass}
        onClick={this.togglePersonsHandler }>Switch Name</button>
        {persons}
     </div>
     
    );
  }
}

export default App;
