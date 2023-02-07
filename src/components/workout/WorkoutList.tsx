import * as React from 'react';
import {FC} from 'react';
import { WorkoutDetail } from './WorkoutDetail';
import { WorkoutThumbnail } from './WorkoutThumbnail';
import { Timestamp } from "firebase/firestore";
import '../../css/style.css'
import { Divider } from '@mui/material';

export interface Props {
    list: { 
      id: string,
      date: string,
      duration: string
    }[]
}

export const WorkoutList:FC<Props> = ({list}) => {
  if(list.length < 1){
    return(
      <div className='emptryWorkouts'>
        <Divider />
        <span>You currently have no workouts.</span>
        <span>Start by clicking on "+" to add a new workout.</span>
      </div>
    );
  }
  return (
    <div>
      {
        list.map((workout, i) =>{
            return <WorkoutThumbnail
                key={i}
                id={workout.id}
                date={workout.date}
            />
        })
      }
    </div>
  );
}
