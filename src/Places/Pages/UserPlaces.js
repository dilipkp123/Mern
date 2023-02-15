import React from 'react'
import logo2 from './logo2.jpg' 
import { PlaceList } from '../Component/PlaceList'

const DUMMY_PLACE =[{
  id: 'u1',
  image: logo2 ,
  title: 'Empire State Building',
  address: '20 W 34th St., New York, NY 10001, United States',
  description:'Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.',
  location:{
    lat: 40.7484405,
    lng: -73.9856644,
  }
},
{
  id: 'u2',
  image: 'https://lh5.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=w408-h272-k-no' ,
  title: 'Empire State Building',
  address: '20 W 34th St., New York, NY 10001, United States',
  description:'Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.'
}]
export const UserPlaces = () => {
  return (
    <PlaceList item ={DUMMY_PLACE}></PlaceList>
  )
}
