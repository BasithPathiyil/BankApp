import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  db:any={
    1000:{"acno":1000,"username":"Neer","password":1000,"balance":5000},
    1001:{"acno":1001,"username":"Laisha","password":1001,"balance":5000},
    1002:{"acno":1002,"username":"Vypn","password":1002,"balance":3000}
  }

  constructor() { }
  login(acno:any,pswd:any){
    let db=this.db
    if(acno in db){
      if(pswd==db[acno]["password"]){
        return true
      }else{
        alert("incorrect password")
        return false
      }
    }else{
      alert("User does not exist!!!")
      return false
    }

  }

  register(acno:any,username:any,password:any){
    let db=this.db
    if(acno in db){
      return false
    }else{
      db[acno]={
        acno,
        username,
        password,
        "balance":0,
      }
      return true
    }
  }
  deposit(acno:any,pswd:any,amount:any){
    let db=this.db
    if(acno in db){
      if(pswd=db[acno]["password"]){
        
        db[acno]["balance"]+=eval(amount)
        return db[acno]["balance"]
      }else{
        alert("incorrect password")
      }
    }else{
      alert("not a user")
    }
  }
  withdraw(acno1:any,pswd1:any,amount1:any){
    let db=this.db
    if(acno1 in db){
      if(pswd1=db[acno1]["password"]){
        if(db[acno1]["balance"]>eval(amount1)){
          db[acno1]["balance"]=db[acno1]["balance"]-eval(amount1)
          return db[acno1]["balance"]
        }else{
          alert("Not sufficient balance")
          return false
        }
      }else{
        alert("incorrec password")
        return false
      }
    }else{
      alert("not a user")
      return false
    }
  }
}
