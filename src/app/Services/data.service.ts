import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  user = [
    {
      "name": "Emily Davis",
      "job": "Graphic Designer",
      "gender": "Female",
      "country": "Australia",
      "age": 27,
      "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "name": "Michael Lee",
      "job": "Sales Manager",
      "gender": "Male",
      "country": "Canada",
      "age": 32,
      "image": "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
    },
    {
      "name": "Sarah Patel",
      "job": "Doctor",
      "gender": "Female",
      "country": "India",
      "age": 34,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQVh-LgdTP4VTZN5QSCHtajlJyOVEQNDUUaY_svvx&s"
    },
    {
      "name": "Robert Garcia",
      "job": "Architect",
      "gender": "Male",
      "country": "United States",
      "age": 40,
      "image": "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"
    },
    {
      "name": "Maria Rodriguez",
      "job": "Teacher",
      "gender": "Female",
      "country": "Spain",
      "age": 29,
      "image": "https://st3.depositphotos.com/1037987/15097/i/450/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg"
    }
  ]

  OnShowDetails = new EventEmitter<{
    name: string, job: string, gender: string, country: string, age: number, image: string
  }>();

  showUserDetails(user: {
    name: string, job: string, gender: string, country: string, age: number, image: string
  }) {
    this.OnShowDetails.emit(user);
  }
}
