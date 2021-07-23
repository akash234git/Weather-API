//jshint esversion:6
const express= require("express");
const https=require("https");

const app =express();

 app.get("/",function(req,res){
 const url= "https://api.openweathermap.org/data/2.5/weather?q=varanasi&appid=d2c96ddd9b826ae766d8ad03ddf7936f";
 https.get(url,function(response){
   console.log(response);
   response.on("data",function(data){
     const weatherData =JSON.parse(data);
     const temp =weatherData.main.temp;
     const weatherDescription=weatherData.weather[0].description;
     res.write("<p>Weather is currently</p> " +weatherDescription);
     res.write("<h1>Temperature is varanasi"  + temp + "degree celcius </h1>");
     res.send();
   });
 });
 });



 app.listen(3000,function(){
   console.log("Server started");
 });
